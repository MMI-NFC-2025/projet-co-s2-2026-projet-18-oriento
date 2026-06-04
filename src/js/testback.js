import {
    inscrireUtilisateur,
    connecterUtilisateur,
    deconnecterUtilisateur,
    getUtilisateurActuel,
    envoyerContact,
    getProgression,
    toggleEtape,
} from "./backend.js";

// Données de test
const TEST_EMAIL = `test_${Date.now()}@oriento.fr`;
const TEST_PASSWORD = "Oriento1234!";
let TEST_USER_ID = "";

function log(label, data) {
    console.log(`\n✅ ${label}`);
    console.log(JSON.stringify(data, null, 2));
}

function err(label, e) {
    console.error(`\n❌ ${label}`);
    console.error(e?.message ?? e);
}

// ── 1. INSCRIPTION ─────────────────────────────────────────
async function testInscription() {
    try {
        const user = await inscrireUtilisateur({
            nom: "Test Oriento",
            email: TEST_EMAIL,
            naissance: "2000-01-01",
            telephone: "0600000000",
            password: TEST_PASSWORD,
        });
        TEST_USER_ID = user.id;
        log("Inscription", { id: user.id, email: user.email, name: user.name });
    } catch (e) {
        err("Inscription", e);
    }
}

// ── 2. CONNEXION ───────────────────────────────────────────
async function testConnexion() {
    try {
        const auth = await connecterUtilisateur({ email: TEST_EMAIL, password: TEST_PASSWORD });
        TEST_USER_ID = auth.user.id;
        log("Connexion", auth);
    } catch (e) {
        err("Connexion", e);
    }
}

// ── 3. UTILISATEUR ACTUEL ──────────────────────────────────
async function testUtilisateurActuel() {
    try {
        const user = getUtilisateurActuel();
        log("Utilisateur actuel", user);
    } catch (e) {
        err("Utilisateur actuel", e);
    }
}

// ── 4. CONTACT ─────────────────────────────────────────────
async function testContact() {
    try {
        const record = await envoyerContact({
            nom: "Test Oriento",
            email: TEST_EMAIL,
            sujet: "Test automatique",
            message: "Ceci est un message de test depuis testback.js",
        });
        log("Contact envoyé", { id: record.id });
    } catch (e) {
        err("Contact", e);
    }
}

// ── 5. PROGRESSION ─────────────────────────────────────────
async function testProgression() {
    try {
        await toggleEtape(TEST_USER_ID, "impots", "etape_1", true);
        await toggleEtape(TEST_USER_ID, "impots", "etape_2", false);
        const records = await getProgression(TEST_USER_ID, "impots");
        log("Progression", records.map(r => ({ etape: r.etape, completee: r.completee })));
    } catch (e) {
        err("Progression", e);
    }
}

// ── 6. DÉCONNEXION ─────────────────────────────────────────
async function testDeconnexion() {
    try {
        deconnecterUtilisateur();
        const user = getUtilisateurActuel();
        log("Déconnexion", { connecte: user !== null });
    } catch (e) {
        err("Déconnexion", e);
    }
}

// ── LANCEMENT ──────────────────────────────────────────────
async function runTests() {
    console.log("🧪 Démarrage des tests backend Oriento...");
    console.log(`📧 Email test : ${TEST_EMAIL}`);

    await testInscription();
    await testConnexion();
    await testUtilisateurActuel();
    await testContact();
    await testProgression();
    await testDeconnexion();

    console.log("\n🏁 Tests terminés.");
}

runTests();