import { c as createComponent, i as renderComponent, j as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B-6veMXF.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Connexion = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Connexion \u2014 Oriento", "heroSection": false, "data-astro-cid-ojiypckz": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="auth-page" data-astro-cid-ojiypckz> <div class="auth-hero" data-astro-cid-ojiypckz> <h1 class="auth-titre" data-astro-cid-ojiypckz>Connexion</h1> <div class="auth-vague" data-astro-cid-ojiypckz> <svg viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true" data-astro-cid-ojiypckz> <path d="M0,30 Q100,0 200,30 Q300,60 400,30 L400,60 L0,60 Z" fill="var(--color-blue-light)" data-astro-cid-ojiypckz></path> </svg> </div> </div> <div class="auth-body" data-astro-cid-ojiypckz> <div class="auth-card" data-astro-cid-ojiypckz> <p class="form-succes" id="form-succes" hidden data-astro-cid-ojiypckz>
✓ Inscription réussie ! Connecte-toi maintenant.
</p> <p class="form-erreur" id="form-erreur" role="alert" hidden data-astro-cid-ojiypckz></p> <form class="auth-form" id="connexion-form" novalidate data-astro-cid-ojiypckz> <div class="form-group" data-astro-cid-ojiypckz> <label class="form-label" for="email" data-astro-cid-ojiypckz>Email</label> <input class="form-input" type="email" id="email" name="email" placeholder="Votre mail" autocomplete="email" required data-astro-cid-ojiypckz> </div> <div class="form-group" data-astro-cid-ojiypckz> <label class="form-label" for="password" data-astro-cid-ojiypckz>
Mot de passe
</label> <input class="form-input" type="password" id="password" name="password" placeholder="Votre mot de passe" autocomplete="current-password" required data-astro-cid-ojiypckz> </div> <button class="auth-btn" type="submit" id="auth-btn" data-astro-cid-ojiypckz>
Se connecter
</button> </form> </div> <p class="auth-switch" data-astro-cid-ojiypckz>
Pas encore de compte ? <a href="/inscription" data-astro-cid-ojiypckz>S'inscrire</a> </p> </div> </div>  ` })} ${renderScript($$result, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/connexion.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/connexion.astro", void 0);

const $$file = "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/connexion.astro";
const $$url = "/connexion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Connexion,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
