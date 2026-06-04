import { c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderTemplate, f as createAstro, n as renderSlot, j as renderScript } from './astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import 'clsx';
/* empty css                             */

const $$Astro$3 = createAstro();
const $$CardAvance = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardAvance;
  const { titre, texte, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card-avance" data-astro-cid-dq3uw2m6> <div class="card-avance-body" data-astro-cid-dq3uw2m6> <h3 class="card-avance-titre" data-astro-cid-dq3uw2m6>${titre}</h3> <p class="card-avance-texte" data-astro-cid-dq3uw2m6>${texte}</p> </div> <a${addAttribute(href, "href")} class="card-avance-btn"${addAttribute(`En savoir plus sur ${titre}`, "aria-label")} data-astro-cid-dq3uw2m6>
En savoir +
</a> </article> `;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/components/CardAvance.astro", void 0);

const $$Astro$2 = createAstro();
const $$CardSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardSection;
  const {
    tag,
    titre,
    texte,
    href,
    btnLabel = "En savoir +",
    ariaLabel,
    bullets,
    side = "left"
  } = Astro2.props;
  const btnAriaLabel = ariaLabel ?? (btnLabel === "En savoir +" ? `En savoir plus sur ${titre}` : btnLabel);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`card-section card-section--${side}`, "class")}> ${tag && renderTemplate`<span class="card-section__tag">${tag}</span>`} <h2 class="card-section__title">${titre}</h2> <p class="card-section__text">${texte}</p> ${bullets && bullets.length > 0 && renderTemplate`<ul class="card-section__bullets"> ${bullets.map((b) => renderTemplate`<li>${b}</li>`)} </ul>`} ${renderSlot($$result, $$slots["default"])} <div class="card-section__btn-wrap"> <a${addAttribute(href, "href")} class="card-section__btn"${addAttribute(btnAriaLabel, "aria-label")}> ${btnLabel} </a> </div> </div> `;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/components/CardSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$DocumentsSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DocumentsSection;
  const { categories = ["Logements", "Imp\xF4ts", "Etudes", "Assurances"] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="docs-section" aria-label="Mes documents" data-astro-cid-vcqnvo5o> <div class="docs-card" data-astro-cid-vcqnvo5o> <h2 class="docs-titre" data-astro-cid-vcqnvo5o>Mes documents</h2> <p class="docs-texte" data-astro-cid-vcqnvo5o>
Gérer tous tes documents administratifs peut vite devenir compliqué.
            Cette section te permet de centraliser et organiser facilement tes
            fichiers essentiels pour tes démarches, afin de les retrouver et les
            utiliser rapidement quand tu en as besoin.
</p> <!-- Liste des catégories avec compteur --> <div class="docs-liste" id="docs-liste" data-astro-cid-vcqnvo5o> ${categories.map((cat) => renderTemplate`<div class="docs-item"${addAttribute(cat, "data-categorie")} role="button" tabindex="0" aria-expanded="false" data-astro-cid-vcqnvo5o> <span data-astro-cid-vcqnvo5o>${cat}</span> <div class="docs-item-right" data-astro-cid-vcqnvo5o> <span class="docs-count"${addAttribute(cat, "data-count")} data-astro-cid-vcqnvo5o>0</span> <svg class="docs-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-vcqnvo5o> <polyline points="6 9 12 15 18 9" data-astro-cid-vcqnvo5o></polyline> </svg> </div> </div>
                    <ul class="docs-sous-liste"${addAttribute(cat, "data-sous-liste")} hidden data-astro-cid-vcqnvo5o></ul>`)} </div> <button class="docs-btn" type="button" id="docs-ouvrir-modal" aria-label="Ajouter un document administratif" data-astro-cid-vcqnvo5o>
+ Ajouter un document
</button> </div> </section> <!-- MODALE UPLOAD --> <div class="docs-modal-overlay" id="docs-modal" role="dialog" aria-modal="true" aria-labelledby="modal-titre" hidden data-astro-cid-vcqnvo5o> <div class="docs-modal" data-astro-cid-vcqnvo5o> <div class="modal-header" data-astro-cid-vcqnvo5o> <h3 class="modal-titre" id="modal-titre" data-astro-cid-vcqnvo5o>Ajouter un document</h3> <button class="modal-fermer" id="docs-fermer-modal" type="button" aria-label="Fermer" data-astro-cid-vcqnvo5o> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" data-astro-cid-vcqnvo5o> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-vcqnvo5o></line> <line x1="6" y1="6" x2="18" y2="18" data-astro-cid-vcqnvo5o></line> </svg> </button> </div> <form class="modal-form" id="docs-form" novalidate data-astro-cid-vcqnvo5o> <div class="form-group" data-astro-cid-vcqnvo5o> <label class="form-label" for="doc-nom" data-astro-cid-vcqnvo5o>Nom du document</label> <input type="text" id="doc-nom" class="form-input" placeholder="Ex : Attestation CAF 2025" required data-astro-cid-vcqnvo5o> </div> <div class="form-group" data-astro-cid-vcqnvo5o> <label class="form-label" for="doc-categorie" data-astro-cid-vcqnvo5o>Catégorie</label> <select id="doc-categorie" class="form-input" required data-astro-cid-vcqnvo5o> ${categories.map((cat) => renderTemplate`<option${addAttribute(cat, "value")} data-astro-cid-vcqnvo5o>${cat}</option>`)} </select> </div> <div class="form-group" data-astro-cid-vcqnvo5o> <label class="form-label" for="doc-fichier" data-astro-cid-vcqnvo5o>Fichier</label> <label class="form-dropzone" for="doc-fichier" id="dropzone" data-astro-cid-vcqnvo5o> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="dropzone-icon" data-astro-cid-vcqnvo5o> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-vcqnvo5o></path> <polyline points="17 8 12 3 7 8" data-astro-cid-vcqnvo5o></polyline> <line x1="12" y1="3" x2="12" y2="15" data-astro-cid-vcqnvo5o></line> </svg> <span class="dropzone-texte" id="dropzone-texte" data-astro-cid-vcqnvo5o>
Clique ou glisse un fichier ici
</span> <span class="dropzone-sous" id="dropzone-sous" data-astro-cid-vcqnvo5o>PDF, image, Word — max 10 Mo</span> <input type="file" id="doc-fichier" class="form-input-file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" required data-astro-cid-vcqnvo5o> </label> </div> <p class="modal-statut" id="modal-statut" aria-live="polite" data-astro-cid-vcqnvo5o></p> <button type="submit" class="modal-submit" id="modal-submit-btn" data-astro-cid-vcqnvo5o>
Enregistrer
</button> </form> </div> </div>  ${renderScript($$result, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/components/DocumentsSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/components/DocumentsSection.astro", void 0);

const $$Astro = createAstro();
const $$QuestionsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$QuestionsSection;
  const { href = "/aide" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="questions-section" aria-label="Des questions ?" data-astro-cid-pdpmgzef> <div class="questions-card" data-astro-cid-pdpmgzef> <h2 class="questions-titre" data-astro-cid-pdpmgzef>Des questions ?</h2> <p class="questions-texte" data-astro-cid-pdpmgzef>Nous sommes à votre écoute !</p> <a${addAttribute(href, "href")} class="questions-btn" aria-label="Accéder à l'aide" data-astro-cid-pdpmgzef> <span class="questions-btn-label" data-astro-cid-pdpmgzef>AIDE</span> <div class="questions-btn-icon" aria-hidden="true" data-astro-cid-pdpmgzef> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-pdpmgzef> <polyline points="9 18 15 12 9 6" data-astro-cid-pdpmgzef></polyline> </svg> </div> </a> </div> </section> `;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/components/QuestionsSection.astro", void 0);

export { $$CardAvance as $, $$CardSection as a, $$DocumentsSection as b, $$QuestionsSection as c };
