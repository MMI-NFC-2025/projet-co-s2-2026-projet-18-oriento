import { c as createComponent, i as renderComponent, r as renderTemplate, f as createAstro, m as maybeRenderHead } from '../chunks/astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B-6veMXF.mjs';
import PocketBase from 'pocketbase';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const PB_URL = "http://127.0.0.1:8090";

const pb = new PocketBase(PB_URL);

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
async function inscrireUtilisateur({ nom, email, naissance, telephone, password }) {
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

const $$Astro = createAstro();
const $$Inscription = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Inscription;
  let erreur = "";
  if (Astro2.request.method === "POST") {
    const contentType = Astro2.request.headers.get("content-type") ?? "";
    if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const data = await Astro2.request.formData();
      const nom = data.get("nom")?.toString() ?? "";
      const email = data.get("email")?.toString() ?? "";
      const naissance = data.get("naissance")?.toString() ?? "";
      const telephone = data.get("telephone")?.toString() ?? "";
      const password = data.get("password")?.toString() ?? "";
      try {
        await inscrireUtilisateur({
          nom,
          email,
          naissance,
          telephone,
          password
        });
        return Astro2.redirect("/connexion?inscrit=1");
      } catch (e) {
        if (e?.data && typeof e.data === "object") {
          erreur = Object.values(e.data).map((v) => v?.message ?? String(v)).join(" \xB7 ");
        } else if (e?.message) {
          erreur = e.message;
        } else {
          erreur = "Une erreur est survenue, veuillez r\xE9essayer.";
        }
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inscription \u2014 Oriento", "heroSection": false, "data-astro-cid-h6znpxjw": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="auth-page" data-astro-cid-h6znpxjw> <div class="auth-hero" data-astro-cid-h6znpxjw> <h1 class="auth-titre" data-astro-cid-h6znpxjw>Inscription</h1> <div class="auth-vague" data-astro-cid-h6znpxjw> <svg viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true" data-astro-cid-h6znpxjw> <path d="M0,30 Q100,0 200,30 Q300,60 400,30 L400,60 L0,60 Z" fill="var(--color-blue-light)" data-astro-cid-h6znpxjw></path> </svg> </div> </div> <div class="auth-body" data-astro-cid-h6znpxjw> <div class="auth-card" data-astro-cid-h6znpxjw> ${erreur && renderTemplate`<p class="form-erreur" role="alert" data-astro-cid-h6znpxjw> ${erreur} </p>`} <form class="auth-form" method="POST" novalidate data-astro-cid-h6znpxjw> <div class="form-group" data-astro-cid-h6znpxjw> <label class="form-label" for="nom" data-astro-cid-h6znpxjw>Nom complet</label> <input class="form-input" type="text" id="nom" name="nom" placeholder="Votre nom" autocomplete="name" required data-astro-cid-h6znpxjw> </div> <div class="form-group" data-astro-cid-h6znpxjw> <label class="form-label" for="email" data-astro-cid-h6znpxjw>Email</label> <input class="form-input" type="email" id="email" name="email" placeholder="Votre mail" autocomplete="email" required data-astro-cid-h6znpxjw> </div> <div class="form-group" data-astro-cid-h6znpxjw> <label class="form-label" for="naissance" data-astro-cid-h6znpxjw>Date de naissance</label> <input class="form-input" type="date" id="naissance" name="naissance" autocomplete="bday" required data-astro-cid-h6znpxjw> </div> <div class="form-group" data-astro-cid-h6znpxjw> <label class="form-label" for="telephone" data-astro-cid-h6znpxjw>Téléphone</label> <input class="form-input" type="tel" id="telephone" name="telephone" placeholder="Votre numéro de téléphone" autocomplete="tel" required data-astro-cid-h6znpxjw> </div> <div class="form-group" data-astro-cid-h6znpxjw> <label class="form-label" for="password" data-astro-cid-h6znpxjw>Mot de passe</label> <input class="form-input" type="password" id="password" name="password" placeholder="Votre mot de passe" autocomplete="new-password" required data-astro-cid-h6znpxjw> </div> <button class="auth-btn" type="submit" data-astro-cid-h6znpxjw>S'inscrire</button> </form> </div> <p class="auth-switch" data-astro-cid-h6znpxjw>
Déjà un compte ? <a href="/connexion" data-astro-cid-h6znpxjw>Se connecter</a> </p> </div> </div>  ` })}`;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/inscription.astro", void 0);

const $$file = "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/inscription.astro";
const $$url = "/inscription";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Inscription,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
