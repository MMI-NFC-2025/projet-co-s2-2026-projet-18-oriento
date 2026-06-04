import { c as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, u as unescapeHTML, e as addAttribute, i as renderComponent } from '../chunks/astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B-6veMXF.mjs';
import 'clsx';
/* empty css                                 */
import { h as homeImg1 } from '../chunks/Home_img1_DP8dOYb4.mjs';
import { l as logoCompletBlanc } from '../chunks/Footer_SRN4hEaZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$CardHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardHero;
  const { quote = "Avec Oriento les d\xE9marches deviennent plus simples", text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card-hero" role="complementary" aria-label="Message Oriento" data-astro-cid-xrqsa6ua> <span class="card-hero__quote" aria-hidden="true" data-astro-cid-xrqsa6ua>❝</span> <p class="card-hero__text" data-astro-cid-xrqsa6ua>${quote}</p> ${text && renderTemplate`<p class="card-hero__sub" data-astro-cid-xrqsa6ua>${text}</p>`} </div> `;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/components/CardHero.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardAccueil = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardAccueil;
  const { titre, texte, symbole, lettre } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card-accueil"> <!-- Lettre décorative fond droit --> <span class="card-accueil__lettre" aria-hidden="true">${lettre}</span> <!-- Icône SVG --> <div class="card-accueil__icone" aria-hidden="true">${unescapeHTML(symbole)}</div> <!-- Contenu --> <h3 class="card-accueil__titre">${titre}</h3> <p class="card-accueil__texte">${texte}</p> </div> `;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/components/CardAccueil.astro", void 0);

const $$Astro = createAstro();
const $$BtnAide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BtnAide;
  const { label = "Aide", href = "/aide" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="btn-aide"${addAttribute(label, "aria-label")} data-astro-cid-ynzjsax5> <span class="btn-aide-label" data-astro-cid-ynzjsax5>${label}</span> <span class="btn-aide-icon" aria-hidden="true" data-astro-cid-ynzjsax5> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ynzjsax5> <path d="M9 18l6-6-6-6" data-astro-cid-ynzjsax5></path> </svg> </span> </a> `;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/components/BtnAide.astro", void 0);

const homeImg2 = new Proxy({"src":"/_astro/Home_img2.oM9M3aAB.png","width":393,"height":508,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/Home_img2.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      href: "/etudes",
      lettre: "\xC9",
      titre: "\xC9tudes",
      texte: "Comprends les diff\xE9rentes fili\xE8res, les admissions et les aides disponibles pour financer ta formation.",
      symbole: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`
    },
    {
      href: "/logement",
      lettre: "L",
      titre: "Logement",
      texte: "CROUS, colocation, r\xE9sidence priv\xE9e\u2026 Trouve la solution adapt\xE9e \xE0 ton budget et ta ville.",
      symbole: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
    },
    {
      href: "/assurance",
      lettre: "A",
      titre: "Assurance",
      texte: "Mutuelle, assurance habitation, responsabilit\xE9 civile\u2026 On t'explique ce qui est obligatoire et comment choisir.",
      symbole: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
    },
    {
      href: "/impots",
      lettre: "I",
      titre: "Imp\xF4ts",
      texte: "Premi\xE8re d\xE9claration, cr\xE9dits d'imp\xF4t, exon\xE9rations \xE9tudiantes\u2026 On d\xE9mystifie tout pour toi.",
      symbole: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Oriento \u2014 Ton guide \xE9tudiant", "heroSection": true, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-wrapper" data-astro-cid-j7pv25f6> <!-- HERO --> <section class="hero-section" aria-label="Présentation" data-astro-cid-j7pv25f6> <div class="hero-inner" data-astro-cid-j7pv25f6> <div class="hero-logo-wrap" data-astro-cid-j7pv25f6> <img${addAttribute(logoCompletBlanc.src, "src")} alt="Oriento" width="800" height="250" class="hero-logo-img" loading="eager" fetchpriority="high" data-astro-cid-j7pv25f6> </div> <div class="hero-img-wrap" data-astro-cid-j7pv25f6> <img${addAttribute(homeImg1.src, "src")} alt="Étudiant gérant ses démarches" width="900" height="600" class="hero-img" loading="eager" fetchpriority="high" data-astro-cid-j7pv25f6> <h1 class="hero-card-overlay" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CardHero", $$CardHero, { "quote": "Avec Oriento les d\xE9marches deviennent plus simples", "data-astro-cid-j7pv25f6": true })} </h1> </div> </div> </section> <!-- CARDS SECTION --> <section class="cards-section" aria-label="Thématiques" data-astro-cid-j7pv25f6> <div class="card-section card-section--left" data-astro-cid-j7pv25f6> <h2 class="card-section__title" data-astro-cid-j7pv25f6>
Démarches administra...? Quesako ?
</h2> <p class="card-section__text" data-astro-cid-j7pv25f6>
Pas de panique ! Oriento est là pour vous aider à y voir
					plus clair
</p> </div> <div class="card-section card-section--right" data-astro-cid-j7pv25f6> <h2 class="card-section__title" data-astro-cid-j7pv25f6>
Des centaines de ressources pédagogiques !
</h2> <p class="card-section__text" data-astro-cid-j7pv25f6>
Pour enfin se réconcilier avec l'administratif
</p> </div> </section> <!-- NOS SERVICES --> <section class="services-section" aria-label="Nos services" data-astro-cid-j7pv25f6> <div class="services-titre-wrap" data-astro-cid-j7pv25f6> <p class="services-titre" data-astro-cid-j7pv25f6>Nos Services</p> </div> <div class="services-grid" data-astro-cid-j7pv25f6> ${services.map((s) => renderTemplate`<a${addAttribute(s.href, "href")} class="card-link"${addAttribute(`Consulter la rubrique ${s.titre}`, "aria-label")} data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CardAccueil", $$CardAccueil, { "lettre": s.lettre, "titre": s.titre, "texte": s.texte, "symbole": s.symbole, "data-astro-cid-j7pv25f6": true })} </a>`)} </div> </section> <!-- BESOIN D'AIDE --> <section class="aide-section" aria-label="Besoin d'aide" data-astro-cid-j7pv25f6> <h2 class="aide-titre" data-astro-cid-j7pv25f6>Besoin<br data-astro-cid-j7pv25f6>d'aide ?</h2> <img${addAttribute(homeImg2.src, "src")} alt="Étudiants collaborant sur leurs démarches" width="900" height="600" class="aide-img" loading="lazy" data-astro-cid-j7pv25f6> </section> <!-- CONTENU EXCLUSIF --> <section class="exclu-section" aria-label="Contenu exclusif" data-astro-cid-j7pv25f6> <div class="exclu-wrap" data-astro-cid-j7pv25f6> <div class="exclu-media-card" data-astro-cid-j7pv25f6> <p class="exclu-media-titre" data-astro-cid-j7pv25f6>
Accès à du contenu explicatif
</p> <div class="exclu-media-screen" data-astro-cid-j7pv25f6> <iframe src="https://www.youtube.com/embed/9F5CjaIVOqY" title="Short Oriento" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen aria-label="Vidéo courte YouTube" data-astro-cid-j7pv25f6></iframe> </div> </div> <div class="exclu-body" data-astro-cid-j7pv25f6> <span class="exclu-guillemet" aria-hidden="true" data-astro-cid-j7pv25f6>"</span> <p class="exclu-texte" data-astro-cid-j7pv25f6>
Une communauté soudée toujours prête à rendre service !
</p> ${renderComponent($$result2, "BtnAide", $$BtnAide, { "label": "Aide", "href": "/a-propos", "data-astro-cid-j7pv25f6": true })} </div> </div> </section> </div> ` })} `;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/index.astro", void 0);

const $$file = "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
