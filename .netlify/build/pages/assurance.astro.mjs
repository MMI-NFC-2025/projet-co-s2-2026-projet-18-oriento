import { c as createComponent, r as renderTemplate, j as renderScript, i as renderComponent, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B-6veMXF.mjs';
import { $ as $$CardAvance, a as $$CardSection, b as $$DocumentsSection, c as $$QuestionsSection } from '../chunks/QuestionsSection_h_imldHU.mjs';
import { l as logoCompletBlanc } from '../chunks/Footer_SRN4hEaZ.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const Img1 = new Proxy({"src":"/_astro/assu_img.DZGryQLu.avif","width":620,"height":490,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/assu_img.avif";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Assurance = createComponent(async ($$result, $$props, $$slots) => {
  const parcours = [
    "Comprendre les assurances essentielles",
    "Choisir une assurance adapt\xE9e",
    "Souscrire un contrat"
  ];
  return renderTemplate(_a || (_a = __template(["", ' <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"> <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>  ', ""])), renderComponent($$result, "Layout", $$Layout, { "title": "Assurances \u2014 Oriento", "heroSection": true, "data-astro-cid-x4wgcwbp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-wrapper" data-astro-cid-x4wgcwbp> <section class="hero-section" aria-label="Présentation" data-astro-cid-x4wgcwbp> <div class="hero-inner" data-astro-cid-x4wgcwbp> <div class="hero-logo-wrap" data-astro-cid-x4wgcwbp> <img${addAttribute(logoCompletBlanc.src, "src")} alt="Oriento" width="800" height="250" class="hero-logo-img" loading="eager" fetchpriority="high" data-astro-cid-x4wgcwbp> </div> <div class="hero-texte" data-astro-cid-x4wgcwbp><p data-astro-cid-x4wgcwbp>Assurances</p></div> <div class="hero-img-wrap" data-astro-cid-x4wgcwbp> <img${addAttribute(Img1.src, "src")} alt="Étudiant cherchant une assurance" width="900" height="600" class="hero-img" loading="eager" fetchpriority="high" data-astro-cid-x4wgcwbp> </div> </div> </section> <section class="intro-section" aria-label="Introduction" data-astro-cid-x4wgcwbp> <div class="intro-inner" data-astro-cid-x4wgcwbp> <h1 class="intro-h1" data-astro-cid-x4wgcwbp>Assurances</h1> <h2 class="intro-h2" data-astro-cid-x4wgcwbp>
Comprends les assurances importantes et protège-toi
                    facilement !
</h2> <p class="intro-texte" data-astro-cid-x4wgcwbp>
Entre études, stages et vie quotidienne, penser à ses
                    assurances peut passer au second plan. Cette page t'aide à
                    comprendre l'essentiel, à souscrire les bonnes protections
                    et à garder l'esprit tranquille.
</p> </div> </section> <section class="parcours-section" aria-label="Parcours assurance" data-astro-cid-x4wgcwbp> <div class="parcours-card" role="region" aria-label="Suivi de progression" data-astro-cid-x4wgcwbp> <div class="parcours-barres" aria-hidden="true" data-astro-cid-x4wgcwbp> ${parcours.map((_, i) => renderTemplate`<div class="parcours-barre"${addAttribute(i, "data-barre")} data-astro-cid-x4wgcwbp></div>`)} </div> <p class="parcours-titre" id="parcours-label" data-astro-cid-x4wgcwbp>
Ton parcours assurance
</p> <p class="parcours-sync" id="parcours-sync" aria-live="polite" data-astro-cid-x4wgcwbp></p> <ul class="parcours-liste" role="list" aria-labelledby="parcours-label" data-astro-cid-x4wgcwbp> ${parcours.map((etape, i) => renderTemplate`<li class="parcours-etape"${addAttribute(i, "data-index")} data-astro-cid-x4wgcwbp> <button class="parcours-check" type="button" aria-pressed="false"${addAttribute(`Marquer "${etape}" comme compl\xE9t\xE9`, "aria-label")}${addAttribute(i, "data-step")}${addAttribute(`etape_${i + 1}`, "data-etape")} data-astro-cid-x4wgcwbp> <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" data-astro-cid-x4wgcwbp> <polyline points="2,6 5,9 10,3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-x4wgcwbp></polyline> </svg> </button> <span class="parcours-label" data-astro-cid-x4wgcwbp>${etape}</span> </li>`)} </ul> </div> </section> <section class="avance-section" aria-label="Thématiques assurance" data-astro-cid-x4wgcwbp> <div class="avance-grid" data-astro-cid-x4wgcwbp> ${renderComponent($$result2, "CardAvance", $$CardAvance, { "titre": "Infos pratiques", "texte": "Votre assurance couvre souvent : sant\xE9, responsabilit\xE9 civile et accident. V\xE9rifiez ce qui est inclus pour \xE9viter les mauvaises surprises.", "href": "/logement/recherche", "data-astro-cid-x4wgcwbp": true })} ${renderComponent($$result2, "CardAvance", $$CardAvance, { "titre": "FAQ rapide", "texte": "Que faire en cas de sinistre ? Peut-on changer d'assurance en cours d'ann\xE9e ?", "href": "/logement/entretien", "data-astro-cid-x4wgcwbp": true })} ${renderComponent($$result2, "CardAvance", $$CardAvance, { "titre": "Alertes & rappels", "texte": "N'oubliez pas de renouveler votre contrat et de fournir les pi\xE8ces justificatives avant la date limite pour rester couvert.", "href": "/logement/arnaques", "data-astro-cid-x4wgcwbp": true })} </div> </section> <section class="dynamique-section" aria-label="Ressources assurance" data-astro-cid-x4wgcwbp> <h2 class="dynamique-titre" data-astro-cid-x4wgcwbp>Ressources</h2> <div class="dynamique-grid" data-astro-cid-x4wgcwbp> ${renderComponent($$result2, "CardSection", $$CardSection, { "titre": "Comprendre les assurances essentielles", "texte": "D\xE9couvrez les assurances essentielles pour les \xE9tudiants et ce qu'elles couvrent pour vous prot\xE9ger au quotidien.", "href": "/assurance/comprendre", "btnLabel": "D\xE9couvrir les assurances", "side": "right", "data-astro-cid-x4wgcwbp": true })} ${renderComponent($$result2, "CardSection", $$CardSection, { "titre": "Choisir une assurance", "texte": "Comparez les offres et choisissez une assurance adapt\xE9e \xE0 vos besoins, votre budget et votre situation.", "href": "/assurance/choisir", "btnLabel": "Comparer les assurances", "side": "left", "data-astro-cid-x4wgcwbp": true })} ${renderComponent($$result2, "CardSection", $$CardSection, { "titre": "Souscrire une assurance", "texte": "Une fois votre assurance choisie, vous pouvez souscrire en ligne ou aupr\xE8s d'un assureur en fournissant les documents n\xE9cessaires.", "href": "/assurance/souscrire", "btnLabel": "Comment souscrire?", "side": "right", "data-astro-cid-x4wgcwbp": true })} </div> </section> ${renderComponent($$result2, "DocumentsSection", $$DocumentsSection, { "data-astro-cid-x4wgcwbp": true })} <!-- ── CARTE ASSURANCES ── --> <section class="carte-section" aria-label="Services d'assurance proches" data-astro-cid-x4wgcwbp> <div class="carte-header" data-astro-cid-x4wgcwbp> <h2 class="carte-titre" data-astro-cid-x4wgcwbp>Trouver un assureur</h2> <p class="carte-sous-titre" data-astro-cid-x4wgcwbp>
Recherche des assureurs et mutuelles près de chez toi
</p> <div class="carte-recherche" data-astro-cid-x4wgcwbp> <input type="text" id="carte-ville" class="carte-input" placeholder="Ex : Paris, Lyon, Bordeaux..." value="Paris" aria-label="Ville ou commune à rechercher" data-astro-cid-x4wgcwbp> <button id="carte-rechercher" class="carte-btn" data-astro-cid-x4wgcwbp>
Rechercher
</button> </div> <div class="carte-filtres" role="group" aria-label="Filtrer par type" data-astro-cid-x4wgcwbp> <button class="filtre-btn actif" data-type="tous" data-astro-cid-x4wgcwbp>Tous</button> <button class="filtre-btn" data-type="Mutuelle étudiante" data-astro-cid-x4wgcwbp>Mutuelle étudiante</button> <button class="filtre-btn" data-type="Assureur" data-astro-cid-x4wgcwbp>Assureur</button> <button class="filtre-btn" data-type="CAF" data-astro-cid-x4wgcwbp>CAF</button> </div> </div> <div id="carte-map" class="carte-map" aria-label="Carte des assureurs et mutuelles" data-astro-cid-x4wgcwbp></div> <p id="carte-status" class="carte-status" aria-live="polite" data-astro-cid-x4wgcwbp></p> </section> ${renderComponent($$result2, "QuestionsSection", $$QuestionsSection, { "href": "/aide", "data-astro-cid-x4wgcwbp": true })} </div> ` }), renderScript($$result, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/assurance.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/assurance.astro", void 0);

const $$file = "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/assurance.astro";
const $$url = "/assurance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Assurance,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
