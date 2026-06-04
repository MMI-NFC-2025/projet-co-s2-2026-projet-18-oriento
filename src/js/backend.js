import PocketBase from "pocketbase";

const PB_URL = "http://127.0.0.1:8090";

export const pb = new PocketBase(PB_URL);

// ── INSCRIPTION ────────────────────────────────────────────
export async function inscrireUtilisateur({ nom, email, naissance, telephone, password }) {
    const user = await pb.collection("users").create({
        name: nom,
        email,
        emailVisibility: true,
        password,
        passwordConfirm: password,
        date_naissance: naissance || null,
        numero_tel: telephone || null,
    });
    return user;
}

// ── CONNEXION ──────────────────────────────────────────────
export async function connecterUtilisateur({ email, password }) {
    if (!email || !password) throw new Error("Email et mot de passe requis.");

    const auth = await pb.collection("users").authWithPassword(email, password);

    return {
        token: auth.token,
        user: {
            id: auth.record.id,
            nom: auth.record.name, // ← "name" pas "nom"
            email: auth.record.email,
        },
    };
}

// ── DÉCONNEXION ────────────────────────────────────────────
export function deconnecterUtilisateur() {
    pb.authStore.clear();
}

// ── UTILISATEUR CONNECTÉ ───────────────────────────────────
export function getUtilisateurActuel() {
    if (!pb.authStore.isValid) return null;
    return pb.authStore.model;
}

// ── CONTACT ───────────────────────────────────────────────
export async function envoyerContact({ nom, email, sujet, message }) {
    if (!nom || !email || !message) throw new Error("Champs obligatoires manquants.");

    const record = await pb.collection("contact").create({
        nom,
        email,
        sujet: sujet || "",
        message,
        lu: false,
    });
    return record;
}

// ── PROGRESSION ───────────────────────────────────────────
export async function getProgression(userId, categorie) {
    const records = await pb.collection("progression").getFullList({
        filter: `user = "${userId}" && categorie = "${categorie}"`,
    });
    return records;
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

// ── OPENSTREETMAP / NOMINATIM ──────────────────────────────
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