import PocketBase from "pocketbase";

const PB_URL = "http://127.0.0.1:8090";

export const pb = new PocketBase(PB_URL);

// ── Persistance session ────────────────────────────────────
function sauvegarderSession(token, model) {
    sessionStorage.setItem("pb_token", token);
    sessionStorage.setItem("pb_model", JSON.stringify(model));
    pb.authStore.save(token, model);
}

function restaurerSession() {
    const token = sessionStorage.getItem("pb_token");
    const raw = sessionStorage.getItem("pb_model");
    if (token && raw) {
        try {
            pb.authStore.save(token, JSON.parse(raw));
        } catch (_) { }
    }
}

restaurerSession();

// ── Auth ───────────────────────────────────────────────────
export async function inscrireUtilisateur({ nom, email, naissance, telephone, password }) {
    return await pb.collection("users").create({
        name: nom,
        email,
        emailVisibility: true,
        password,
        passwordConfirm: password,
        date_naissance: naissance || null,
        numero_tel: telephone || null,
    });
}

export async function connecterUtilisateur({ email, password }) {
    if (!email || !password) throw new Error("Email et mot de passe requis.");

    const auth = await pb.collection("users").authWithPassword(email, password);
    sauvegarderSession(auth.token, auth.record);

    return {
        token: auth.token,
        user: {
            id: auth.record.id,
            nom: auth.record.name,
            email: auth.record.email,
        },
    };
}

export function deconnecterUtilisateur() {
    pb.authStore.clear();
    sessionStorage.removeItem("pb_token");
    sessionStorage.removeItem("pb_model");
}

export function getUtilisateurActuel() {
    if (!pb.authStore.isValid) return null;
    const store = pb.authStore;
    return ("record" in store ? store.record : store.model) ?? null;
}

export function getUserId() {
    const user = getUtilisateurActuel();
    return user?.id ?? null;
}

export function getToken() {
    return sessionStorage.getItem("pb_token") ?? pb.authStore.token ?? null;
}

// ── Contact ────────────────────────────────────────────────
export async function envoyerContact({ nom, email, sujet, message }) {
    if (!nom || !email || !message) throw new Error("Champs obligatoires manquants.");

    return await pb.collection("contact").create({
        nom,
        email,
        sujet: sujet || "",
        message,
        lu: false,
    });
}

// ── Progression ────────────────────────────────────────────
export async function getProgression(userId, categorie) {
    return await pb.collection("progression").getFullList({
        filter: `user = "${userId}" && categorie = "${categorie}"`,
    });
}

export async function toggleEtape(userId, categorie, etape, completee) {
    const existing = await pb
        .collection("progression")
        .getFirstListItem(
            `user = "${userId}" && categorie = "${categorie}" && etape = "${etape}"`,
        )
        .catch(() => null);

    if (existing) {
        return await pb.collection("progression").update(existing.id, { completee });
    }

    return await pb.collection("progression").create({
        user: userId,
        categorie,
        etape,
        completee,
    });
}

// ── Documents ──────────────────────────────────────────────
export async function ajouterDocument({ nom, categorie, fichier }) {
    const userId = getUserId();
    const token = getToken();

    if (!userId || !token) throw new Error("Utilisateur non connecté.");
    if (!fichier) throw new Error("Aucun fichier sélectionné.");

    const fd = new FormData();
    fd.append("user", userId);
    fd.append("nom", nom);
    fd.append("categorie", categorie);
    fd.append("fichier", fichier, fichier.name);

    // Appel fetch direct avec token dans le header — plus fiable que le SDK pour les fichiers
    const res = await fetch(`${PB_URL}/api/collections/documents/records`, {
        method: "POST",
        headers: {
            Authorization: token,
        },
        body: fd,
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.message ?? `Erreur ${res.status}`);
    }

    return await res.json();
}

export async function supprimerDocument(id) {
    const token = getToken();
    if (!token) throw new Error("Utilisateur non connecté.");

    const res = await fetch(`${PB_URL}/api/collections/documents/records/${id}`, {
        method: "DELETE",
        headers: { Authorization: token },
    });

    if (!res.ok) throw new Error(`Erreur suppression : ${res.status}`);
}

export async function getDocuments() {
    const userId = getUserId();
    const token = getToken();

    if (!userId || !token) return [];

    const res = await fetch(
        `${PB_URL}/api/collections/documents/records?filter=${encodeURIComponent(`user="${userId}"`)}&sort=-created&perPage=200`,
        { headers: { Authorization: token } }
    );

    if (!res.ok) return [];

    const data = await res.json();
    return data.items ?? [];
}

export function getFileUrl(doc) {
    return `${PB_URL}/api/files/documents/${doc.id}/${doc.fichier}?token=${getToken()}`;
}

// ── OpenStreetMap ──────────────────────────────────────────
export async function rechercherLieuxFormation(ville = "France") {
    const types = [
        { label: "Université", query: "université" },
        { label: "BTS / BUT", query: "IUT" },
        { label: "Grande école", query: "école supérieure" },
    ];

    const resultats = [];

    for (const type of types) {
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(type.query + " " + ville)}&format=json&limit=5&countrycodes=fr`;
        const res = await fetch(url, {
            headers: { "Accept-Language": "fr", "User-Agent": "Oriento/1.0" },
        });
        const data = await res.json();
        data.forEach((lieu) => {
            resultats.push({
                nom: lieu.display_name.split(",")[0],
                adresse: lieu.display_name,
                lat: parseFloat(lieu.lat),
                lng: parseFloat(lieu.lon),
                type: type.label,
            });
        });
    }

    return resultats;
}