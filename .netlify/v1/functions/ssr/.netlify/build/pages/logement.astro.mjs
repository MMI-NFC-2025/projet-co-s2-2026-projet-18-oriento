import { c as createComponent, r as renderTemplate, j as renderScript, i as renderComponent, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B-6veMXF.mjs';
import { $ as $$CardAvance, a as $$CardSection, b as $$DocumentsSection, c as $$QuestionsSection } from '../chunks/QuestionsSection_h_imldHU.mjs';
import { l as logoCompletBlanc } from '../chunks/Footer_SRN4hEaZ.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const Img1 = new Proxy({"src":"/_astro/loger_img.DQ36KMQ5.avif","width":786,"height":509,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/loger_img.avif";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Logement = createComponent(async ($$result, $$props, $$slots) => {
  const parcours = [
    "Trouver un logement",
    "Pr\xE9parer son dossier",
    "Signer le bail"
  ];
  return renderTemplate(_a || (_a = __template(["", ' <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"> <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>  ', ""])), renderComponent($$result, "Layout", $$Layout, { "title": "Se loger \u2014 Oriento", "heroSection": true, "data-astro-cid-icyqgn63": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-wrapper" data-astro-cid-icyqgn63> <section class="hero-section" aria-label="Présentation" data-astro-cid-icyqgn63> <div class="hero-inner" data-astro-cid-icyqgn63> <div class="hero-logo-wrap" data-astro-cid-icyqgn63> <img${addAttribute(logoCompletBlanc.src, "src")} alt="Oriento" width="800" height="250" class="hero-logo-img" loading="eager" fetchpriority="high" data-astro-cid-icyqgn63> </div> <div class="hero-texte" data-astro-cid-icyqgn63><p data-astro-cid-icyqgn63>Logement</p></div> <div class="hero-img-wrap" data-astro-cid-icyqgn63> <img${addAttribute(Img1.src, "src")} alt="Étudiant cherchant un logement" width="900" height="600" class="hero-img" loading="eager" fetchpriority="high" data-astro-cid-icyqgn63> </div> </div> </section> <section class="intro-section" aria-label="Introduction" data-astro-cid-icyqgn63> <div class="intro-inner" data-astro-cid-icyqgn63> <h1 class="intro-h1" data-astro-cid-icyqgn63>Se loger</h1> <h2 class="intro-h2" data-astro-cid-icyqgn63>
Toutes les démarches pour trouver et gérer ton logement !
</h2> <p class="intro-texte" data-astro-cid-icyqgn63>
Trouver un logement peut être compliqué, surtout quand on ne
                    connaît pas les démarches à suivre. Cette page t'accompagne
                    étape par étape.
</p> </div> </section> <section class="parcours-section" aria-label="Parcours logement" data-astro-cid-icyqgn63> <div class="parcours-card" role="region" aria-label="Suivi de progression" data-astro-cid-icyqgn63> <div class="parcours-barres" aria-hidden="true" data-astro-cid-icyqgn63> ${parcours.map((_, i) => renderTemplate`<div class="parcours-barre"${addAttribute(i, "data-barre")} data-astro-cid-icyqgn63></div>`)} </div> <p class="parcours-titre" id="parcours-label" data-astro-cid-icyqgn63>
Ton parcours logement
</p> <p class="parcours-sync" id="parcours-sync" aria-live="polite" data-astro-cid-icyqgn63></p> <ul class="parcours-liste" role="list" aria-labelledby="parcours-label" data-astro-cid-icyqgn63> ${parcours.map((etape, i) => renderTemplate`<li class="parcours-etape"${addAttribute(i, "data-index")} data-astro-cid-icyqgn63> <button class="parcours-check" type="button" aria-pressed="false"${addAttribute(`Marquer "${etape}" comme compl\xE9t\xE9`, "aria-label")}${addAttribute(i, "data-step")}${addAttribute(`etape_${i + 1}`, "data-etape")} data-astro-cid-icyqgn63> <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" data-astro-cid-icyqgn63> <polyline points="2,6 5,9 10,3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-icyqgn63></polyline> </svg> </button> <span class="parcours-label" data-astro-cid-icyqgn63>${etape}</span> </li>`)} </ul> </div> </section> <section class="avance-section" aria-label="Thématiques logement" data-astro-cid-icyqgn63> <div class="avance-grid" data-astro-cid-icyqgn63> ${renderComponent($$result2, "CardAvance", $$CardAvance, { "titre": "Recherche de logement", "texte": "Astuces pour trouver un appartement ou une colocation proche de votre campus.", "href": "/logement/recherche", "data-astro-cid-icyqgn63": true })} ${renderComponent($$result2, "CardAvance", $$CardAvance, { "titre": "Entretien et services", "texte": "Conseils pour entretenir votre logement et acc\xE9der \xE0 Internet, eau, \xE9lectricit\xE9.", "href": "/logement/entretien", "data-astro-cid-icyqgn63": true })} ${renderComponent($$result2, "CardAvance", $$CardAvance, { "titre": "\xC9viter les arnaques", "texte": "D\xE9couvrez comment rep\xE9rer et \xE9viter les arnaques \xE9tudiantes en toute s\xE9curit\xE9.", "href": "/logement/arnaques", "data-astro-cid-icyqgn63": true })} </div> </section> <section class="dynamique-section" aria-label="Ressources logement" data-astro-cid-icyqgn63> <h2 class="dynamique-titre" data-astro-cid-icyqgn63>Ressources</h2> <div class="dynamique-grid" data-astro-cid-icyqgn63> ${renderComponent($$result2, "CardSection", $$CardSection, { "titre": "Pr\xE9parer son dossier", "texte": "D\xE9couvre la liste des documents n\xE9cessaires pour tes d\xE9marches !", "href": "/logement/preparer", "btnLabel": "Voir la checklist", "side": "right", "data-astro-cid-icyqgn63": true })} ${renderComponent($$result2, "CardSection", $$CardSection, { "titre": "Signer son bail", "texte": "Comprendre :", "bullets": [
    "le bail",
    "le d\xE9p\xF4t de garantie",
    "l'\xE9tat des lieux",
    "les obligations du locataire"
  ], "href": "/logement/bail", "btnLabel": "Comprendre le bail", "side": "left", "data-astro-cid-icyqgn63": true })} ${renderComponent($$result2, "CardSection", $$CardSection, { "titre": "Demander les aides", "texte": "Aides disponibles :", "bullets": ["APL", "ALS"], "href": "/logement/aides", "btnLabel": "Faire la demande", "side": "right", "data-astro-cid-icyqgn63": true })} </div> </section> ${renderComponent($$result2, "DocumentsSection", $$DocumentsSection, { "data-astro-cid-icyqgn63": true })} <!-- ── CARTE LOGEMENT ── --> <section class="carte-section" aria-label="Logements et services proches" data-astro-cid-icyqgn63> <div class="carte-header" data-astro-cid-icyqgn63> <h2 class="carte-titre" data-astro-cid-icyqgn63>Trouver un logement</h2> <p class="carte-sous-titre" data-astro-cid-icyqgn63>
Recherche des résidences et agences près de chez toi
</p> <div class="carte-recherche" data-astro-cid-icyqgn63> <input type="text" id="carte-ville" class="carte-input" placeholder="Ex : Paris, Lyon, Bordeaux..." value="Paris" aria-label="Ville ou commune à rechercher" data-astro-cid-icyqgn63> <button id="carte-rechercher" class="carte-btn" data-astro-cid-icyqgn63>
Rechercher
</button> </div> <div class="carte-filtres" role="group" aria-label="Filtrer par type" data-astro-cid-icyqgn63> <button class="filtre-btn actif" data-type="tous" data-astro-cid-icyqgn63>Tous</button> <button class="filtre-btn" data-type="Résidence CROUS" data-astro-cid-icyqgn63>Résidence CROUS</button> <button class="filtre-btn" data-type="Agence immobilière" data-astro-cid-icyqgn63>Agence immobilière</button> <button class="filtre-btn" data-type="Mairie" data-astro-cid-icyqgn63>Mairie</button> </div> </div> <div id="carte-map" class="carte-map" aria-label="Carte des logements et services" data-astro-cid-icyqgn63></div> <p id="carte-status" class="carte-status" aria-live="polite" data-astro-cid-icyqgn63></p> </section> ${renderComponent($$result2, "QuestionsSection", $$QuestionsSection, { "href": "/a-propos", "data-astro-cid-icyqgn63": true })} </div> ` }), renderScript($$result, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/logement.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/logement.astro", void 0);

const $$file = "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/logement.astro";
const $$url = "/logement";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Logement,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
