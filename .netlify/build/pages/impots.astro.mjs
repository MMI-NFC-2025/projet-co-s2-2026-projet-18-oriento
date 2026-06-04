import { c as createComponent, r as renderTemplate, j as renderScript, i as renderComponent, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B-6veMXF.mjs';
import { $ as $$CardAvance, a as $$CardSection, b as $$DocumentsSection, c as $$QuestionsSection } from '../chunks/QuestionsSection_h_imldHU.mjs';
import { l as logoCompletBlanc } from '../chunks/Footer_SRN4hEaZ.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const Img1 = new Proxy({"src":"/_astro/impot_img.BdD9g6LP.avif","width":726,"height":497,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/impot_img.avif";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Impots = createComponent(async ($$result, $$props, $$slots) => {
  const parcours = [
    "Comprendre si je dois d\xE9clarer",
    "Cr\xE9er mon espace fiscal",
    "Faire ma d\xE9claration"
  ];
  return renderTemplate(_a || (_a = __template(["", ' <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"> <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>  ', ""])), renderComponent($$result, "Layout", $$Layout, { "title": "Imp\xF4ts \u2014 Oriento", "heroSection": true, "data-astro-cid-gazaantu": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-wrapper" data-astro-cid-gazaantu> <section class="hero-section" aria-label="Présentation" data-astro-cid-gazaantu> <div class="hero-inner" data-astro-cid-gazaantu> <div class="hero-logo-wrap" data-astro-cid-gazaantu> <img${addAttribute(logoCompletBlanc.src, "src")} alt="Oriento" width="800" height="250" class="hero-logo-img" loading="eager" fetchpriority="high" data-astro-cid-gazaantu> </div> <div class="hero-texte" data-astro-cid-gazaantu><p data-astro-cid-gazaantu>Impôts</p></div> <div class="hero-img-wrap" data-astro-cid-gazaantu> <img${addAttribute(Img1.src, "src")} alt="Étudiant cherchant un logement" width="900" height="600" class="hero-img" loading="eager" fetchpriority="high" data-astro-cid-gazaantu> </div> </div> </section> <section class="intro-section" aria-label="Introduction" data-astro-cid-gazaantu> <div class="intro-inner" data-astro-cid-gazaantu> <h1 class="intro-h1" data-astro-cid-gazaantu>Impôts</h1> <h2 class="intro-h2" data-astro-cid-gazaantu>
Comprends tes obligations fiscales et fais tes démarches
                    facilement !
</h2> <p class="intro-texte" data-astro-cid-gazaantu>
Les démarches fiscales peuvent sembler compliquées, surtout
                    lorsqu'on est étudiant ou jeune actif. Cette page te guide
                    pour comprendre si tu dois déclarer tes revenus, créer ton
                    espace fiscal et faire ta déclaration.
</p> </div> </section> <section class="parcours-section" aria-label="Parcours impôts" data-astro-cid-gazaantu> <div class="parcours-card" role="region" aria-label="Suivi de progression" data-astro-cid-gazaantu> <div class="parcours-barres" aria-hidden="true" data-astro-cid-gazaantu> ${parcours.map((_, i) => renderTemplate`<div class="parcours-barre"${addAttribute(i, "data-barre")} data-astro-cid-gazaantu></div>`)} </div> <p class="parcours-titre" id="parcours-label" data-astro-cid-gazaantu>
Ton parcours fiscal
</p> <p class="parcours-sync" id="parcours-sync" aria-live="polite" data-astro-cid-gazaantu></p> <ul class="parcours-liste" role="list" aria-labelledby="parcours-label" data-astro-cid-gazaantu> ${parcours.map((etape, i) => renderTemplate`<li class="parcours-etape"${addAttribute(i, "data-index")} data-astro-cid-gazaantu> <button class="parcours-check" type="button" aria-pressed="false"${addAttribute(`Marquer "${etape}" comme compl\xE9t\xE9`, "aria-label")}${addAttribute(i, "data-step")}${addAttribute(`etape_${i + 1}`, "data-etape")} data-astro-cid-gazaantu> <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" data-astro-cid-gazaantu> <polyline points="2,6 5,9 10,3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-gazaantu></polyline> </svg> </button> <span class="parcours-label" data-astro-cid-gazaantu>${etape}</span> </li>`)} </ul> </div> </section> <section class="avance-section" aria-label="Thématiques impôts" data-astro-cid-gazaantu> <div class="avance-grid" data-astro-cid-gazaantu> ${renderComponent($$result2, "CardAvance", $$CardAvance, { "titre": "Astuce fiscale", "texte": "Petites infos pratiques pour comprendre ses droits et optimiser sa d\xE9claration.", "href": "/logement/recherche", "data-astro-cid-gazaantu": true })} ${renderComponent($$result2, "CardAvance", $$CardAvance, { "titre": "Simulateur", "texte": "Estimez vos imp\xF4ts en quelques clics ! Entrez votre revenu et vos d\xE9ductions pour savoir ce que vous devrez payer.", "href": "/logement/entretien", "data-astro-cid-gazaantu": true })} ${renderComponent($$result2, "CardAvance", $$CardAvance, { "titre": "Glossaire", "texte": "Revenu imposable, d\xE9duction, cr\xE9dit d'imp\xF4t... Retrouvez les d\xE9finitions essentielles pour comprendre votre d\xE9claration.", "href": "/logement/arnaques", "data-astro-cid-gazaantu": true })} </div> </section> <section class="dynamique-section" aria-label="Ressources impôts" data-astro-cid-gazaantu> <h2 class="dynamique-titre" data-astro-cid-gazaantu>Ressources</h2> <div class="dynamique-grid" data-astro-cid-gazaantu> ${renderComponent($$result2, "CardSection", $$CardSection, { "titre": "Dois je d\xE9clarer mes revenus ?", "texte": "Tu es \xE9tudiant et tu te demandes si tu dois d\xE9clarer tes revenus ? D\xE9couvre rapidement si cela te concerne !", "href": "/impots/comprendre", "btnLabel": "Comprendre ma situation", "side": "right", "data-astro-cid-gazaantu": true })} ${renderComponent($$result2, "CardSection", $$CardSection, { "titre": "Cr\xE9er son espace fiscal", "texte": "Pas encore d'espace fiscal ? Apprends \xE0 le cr\xE9er en quelques \xE9tapes !", "href": "/impots/espace", "btnLabel": "Cr\xE9er mon espace", "side": "left", "data-astro-cid-gazaantu": true })} ${renderComponent($$result2, "CardSection", $$CardSection, { "titre": "Faire sa d\xE9claration de revenus", "texte": "Tu dois d\xE9clarer tes revenus ? D\xE9couvre comment faire ta d\xE9claration facilement !", "href": "/impots/declarer", "btnLabel": "Faire ma d\xE9claration", "side": "right", "data-astro-cid-gazaantu": true })} </div> </section> ${renderComponent($$result2, "DocumentsSection", $$DocumentsSection, { "data-astro-cid-gazaantu": true })} <!-- ── CARTE SERVICES FISCAUX ── --> <section class="carte-section" aria-label="Services fiscaux proches" data-astro-cid-gazaantu> <div class="carte-header" data-astro-cid-gazaantu> <h2 class="carte-titre" data-astro-cid-gazaantu>Trouver un service fiscal</h2> <p class="carte-sous-titre" data-astro-cid-gazaantu>
Recherche les centres des impôts près de chez toi
</p> <div class="carte-recherche" data-astro-cid-gazaantu> <input type="text" id="carte-ville" class="carte-input" placeholder="Ex : Paris, Lyon, Bordeaux..." value="Paris" aria-label="Ville ou commune à rechercher" data-astro-cid-gazaantu> <button id="carte-rechercher" class="carte-btn" data-astro-cid-gazaantu>
Rechercher
</button> </div> <div class="carte-filtres" role="group" aria-label="Filtrer par type" data-astro-cid-gazaantu> <button class="filtre-btn actif" data-type="tous" data-astro-cid-gazaantu>Tous</button> <button class="filtre-btn" data-type="Centre des impôts" data-astro-cid-gazaantu>Centre des impôts</button> <button class="filtre-btn" data-type="Trésorerie" data-astro-cid-gazaantu>Trésorerie</button> <button class="filtre-btn" data-type="France Services" data-astro-cid-gazaantu>France Services</button> </div> </div> <div id="carte-map" class="carte-map" aria-label="Carte des services fiscaux" data-astro-cid-gazaantu></div> <p id="carte-status" class="carte-status" aria-live="polite" data-astro-cid-gazaantu></p> </section> ${renderComponent($$result2, "QuestionsSection", $$QuestionsSection, { "href": "/a-propos", "data-astro-cid-gazaantu": true })} </div> ` }), renderScript($$result, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/impots.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/impots.astro", void 0);

const $$file = "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/impots.astro";
const $$url = "/impots";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Impots,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
