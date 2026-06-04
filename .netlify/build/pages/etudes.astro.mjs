import { c as createComponent, r as renderTemplate, j as renderScript, i as renderComponent, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B-6veMXF.mjs';
import { $ as $$CardAvance, a as $$CardSection, b as $$DocumentsSection, c as $$QuestionsSection } from '../chunks/QuestionsSection_h_imldHU.mjs';
import { l as logoCompletBlanc } from '../chunks/Footer_SRN4hEaZ.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const Img1 = new Proxy({"src":"/_astro/etude_img.vXOFcBF4.avif","width":700,"height":392,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/etude_img.avif";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Etudes = createComponent(async ($$result, $$props, $$slots) => {
  const parcours = [
    "Choisir sa formation",
    "S'inscrire dans un \xE9tablissement",
    "Obtenir ses aides \xE9tudiantes"
  ];
  return renderTemplate(_a || (_a = __template(["", ' <!-- Leaflet CSS --> <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"> <!-- Leaflet JS via CDN \u2014 is:inline pour \xE9viter le traitement Vite --> <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>  ', ""])), renderComponent($$result, "Layout", $$Layout, { "title": "\xC9tudes \u2014 Oriento", "heroSection": true, "data-astro-cid-c46euhyw": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-wrapper" data-astro-cid-c46euhyw> <section class="hero-section" aria-label="Présentation" data-astro-cid-c46euhyw> <div class="hero-inner" data-astro-cid-c46euhyw> <div class="hero-logo-wrap" data-astro-cid-c46euhyw> <img${addAttribute(logoCompletBlanc.src, "src")} alt="Oriento" width="800" height="250" class="hero-logo-img" loading="eager" fetchpriority="high" data-astro-cid-c46euhyw> </div> <div class="hero-texte" data-astro-cid-c46euhyw><p data-astro-cid-c46euhyw>Études</p></div> <div class="hero-img-wrap" data-astro-cid-c46euhyw> <img${addAttribute(Img1.src, "src")} alt="Étudiant cherchant un logement" width="900" height="600" class="hero-img" loading="eager" fetchpriority="high" data-astro-cid-c46euhyw> </div> </div> </section> <section class="intro-section" aria-label="Introduction" data-astro-cid-c46euhyw> <div class="intro-inner" data-astro-cid-c46euhyw> <h1 class="intro-h1" data-astro-cid-c46euhyw>Étude</h1> <h2 class="intro-h2" data-astro-cid-c46euhyw>
Toutes les démarches importantes pour réussir et gérer ta
                    vie étudiante.
</h2> <p class="intro-texte" data-astro-cid-c46euhyw>
Les démarches administratives pour les études peuvent
                    paraître complexes, surtout lorsqu'on découvre la vie
                    étudiante. Cette page t'accompagne pour comprendre comment
                    t'inscrire dans ton établissement, gérer ton financement, et
                    accomplir les formalités essentielles pour ton parcours
                    académique.
</p> </div> </section> <section class="parcours-section" aria-label="Parcours étude" data-astro-cid-c46euhyw> <div class="parcours-card" role="region" aria-label="Suivi de progression" data-astro-cid-c46euhyw> <div class="parcours-barres" aria-hidden="true" data-astro-cid-c46euhyw> ${parcours.map((_, i) => renderTemplate`<div class="parcours-barre"${addAttribute(i, "data-barre")} data-astro-cid-c46euhyw></div>`)} </div> <p class="parcours-titre" id="parcours-label" data-astro-cid-c46euhyw>
Ton parcours étudiant
</p> <p class="parcours-sync" id="parcours-sync" aria-live="polite" data-astro-cid-c46euhyw></p> <ul class="parcours-liste" role="list" aria-labelledby="parcours-label" data-astro-cid-c46euhyw> ${parcours.map((etape, i) => renderTemplate`<li class="parcours-etape"${addAttribute(i, "data-index")} data-astro-cid-c46euhyw> <button class="parcours-check" type="button" aria-pressed="false"${addAttribute(`Marquer "${etape}" comme compl\xE9t\xE9`, "aria-label")}${addAttribute(i, "data-step")}${addAttribute(`etape_${i + 1}`, "data-etape")} data-astro-cid-c46euhyw> <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" data-astro-cid-c46euhyw> <polyline points="2,6 5,9 10,3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-c46euhyw></polyline> </svg> </button> <span class="parcours-label" data-astro-cid-c46euhyw>${etape}</span> </li>`)} </ul> </div> </section> <section class="avance-section" aria-label="Thématiques étude" data-astro-cid-c46euhyw> <div class="avance-grid" data-astro-cid-c46euhyw> ${renderComponent($$result2, "CardAvance", $$CardAvance, { "titre": "Ressources utiles", "texte": "Acc\xE9dez \xE0 des tutoriels vid\xE9o, plateformes d'e-learning et biblioth\xE8ques en ligne pour compl\xE9ter vos cours.", "href": "/logement/recherche", "data-astro-cid-c46euhyw": true })} ${renderComponent($$result2, "CardAvance", $$CardAvance, { "titre": "Calendrier acad\xE9mique", "texte": "Ne manquez plus vos dates cl\xE9s : inscription, d\xE9p\xF4t des dossiers, examens et d\xE9but des vacances.", "href": "/logement/entretien", "data-astro-cid-c46euhyw": true })} ${renderComponent($$result2, "CardAvance", $$CardAvance, { "titre": "Conseil r\xE9ussite", "texte": "Planifiez vos journ\xE9es, fixez-vous des objectifs hebdomadaires et prenez des pauses r\xE9guli\xE8res pour rester productif.", "href": "/logement/arnaques", "data-astro-cid-c46euhyw": true })} </div> </section> <section class="dynamique-section" aria-label="Ressources étude" data-astro-cid-c46euhyw> <h2 class="dynamique-titre" data-astro-cid-c46euhyw>Ressources</h2> <div class="dynamique-grid" data-astro-cid-c46euhyw> ${renderComponent($$result2, "CardSection", $$CardSection, { "titre": "Choisir sa formation", "texte": "Choisissez une formation adapt\xE9e \xE0 votre projet : universit\xE9, BTS/BUT, \xE9cole sp\xE9cialis\xE9e ou alternance.", "href": "/etudes/orientation", "btnLabel": "Explorer les formations", "side": "right", "data-astro-cid-c46euhyw": true })} ${renderComponent($$result2, "CardSection", $$CardSection, { "titre": "S'inscrire dans un \xE9tablissement", "texte": "Une fois ta formation choisie, finalise ton inscription :", "bullets": [
    "d\xE9marches administratives",
    "paiement des frais",
    "cr\xE9ation du compte \xE9tudiant",
    "carte \xE9tudiante"
  ], "href": "/etudes/inscription", "btnLabel": "Comprendre l'inscription", "side": "left", "data-astro-cid-c46euhyw": true })} ${renderComponent($$result2, "CardSection", $$CardSection, { "titre": "Demander les aides \xE9tudiantes", "texte": "En tant qu'\xE9tudiant, tu peux b\xE9n\xE9ficier de plusieurs aides :", "bullets": [
    "bourses \xE9tudiantes",
    "aides au logement",
    "aides r\xE9gionales",
    "aides sp\xE9cifiques selon ta situation"
  ], "href": "/etudes/aidesetudiantes", "btnLabel": "Voir les aides disponibles", "side": "right", "data-astro-cid-c46euhyw": true })} </div> </section> ${renderComponent($$result2, "DocumentsSection", $$DocumentsSection, { "data-astro-cid-c46euhyw": true })} <!-- ── CARTE LIEUX DE FORMATION ── --> <section class="carte-section" aria-label="Lieux de formation" data-astro-cid-c46euhyw> <div class="carte-header" data-astro-cid-c46euhyw> <h2 class="carte-titre" data-astro-cid-c46euhyw>Trouver un lieu de formation</h2> <p class="carte-sous-titre" data-astro-cid-c46euhyw>
Recherche des établissements près de chez toi
</p> <div class="carte-recherche" data-astro-cid-c46euhyw> <input type="text" id="carte-ville" class="carte-input" placeholder="Ex : Paris, Lyon, Bordeaux..." value="Paris" aria-label="Ville ou commune à rechercher" data-astro-cid-c46euhyw> <button id="carte-rechercher" class="carte-btn" data-astro-cid-c46euhyw>Rechercher</button> </div> <div class="carte-filtres" role="group" aria-label="Filtrer par type" data-astro-cid-c46euhyw> <button class="filtre-btn actif" data-type="tous" data-astro-cid-c46euhyw>Tous</button> <button class="filtre-btn" data-type="Université" data-astro-cid-c46euhyw>Université</button> <button class="filtre-btn" data-type="BTS / BUT" data-astro-cid-c46euhyw>BTS / BUT</button> <button class="filtre-btn" data-type="Grande école" data-astro-cid-c46euhyw>Grande école</button> </div> </div> <div id="carte-map" class="carte-map" aria-label="Carte des lieux de formation" data-astro-cid-c46euhyw></div> <p id="carte-status" class="carte-status" aria-live="polite" data-astro-cid-c46euhyw></p> </section> ${renderComponent($$result2, "QuestionsSection", $$QuestionsSection, { "href": "/a-propos", "data-astro-cid-c46euhyw": true })} </div> ` }), renderScript($$result, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/etudes.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/etudes.astro", void 0);

const $$file = "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/etudes.astro";
const $$url = "/etudes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Etudes,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
