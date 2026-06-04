import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B-6veMXF.mjs';
import { l as logoCompletBlanc } from '../chunks/Footer_SRN4hEaZ.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const Img1 = new Proxy({"src":"/_astro/propos_img.DcTS-F_t.avif","width":624,"height":516,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/propos_img.avif";
							}
							
							return target[name];
						}
					});

const $$APropos = createComponent(($$result, $$props, $$slots) => {
  const sections = [
    {
      titre: "Notre mission",
      texte: "Oriento a pour mission d'accompagner chaque \xE9tudiant dans ses d\xE9marches administratives et quotidiennes. Nous rendons accessibles les informations essentielles pour que tu puisses te concentrer sur l'essentiel : tes \xE9tudes."
    },
    {
      titre: "Pourquoi nous ?",
      texte: "Nous savons que jongler entre cours, examens et vie quotidienne peut \xEAtre stressant. Notre application vous guide pas \xE0 pas pour gagner du temps et \xE9viter les erreurs."
    },
    {
      titre: "Ce que vous trouverez ici",
      texte: "Des guides clairs sur les \xE9tudes, le logement, les assurances, les imp\xF4ts et bien plus encore. Chaque contenu est pens\xE9 pour \xEAtre simple, pratique et directement actionnable."
    },
    {
      titre: "Notre engagement",
      texte: "Nous mettons tout en \u0153uvre pour vous fournir des informations fiables, claires et accessibles. Votre tranquillit\xE9 d'esprit est notre priorit\xE9."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xC0 propos \u2014 Oriento", "heroSection": true, "data-astro-cid-xp7oeim3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-wrapper" data-astro-cid-xp7oeim3> <section class="hero-section" aria-label="Présentation" data-astro-cid-xp7oeim3> <div class="hero-inner" data-astro-cid-xp7oeim3> <div class="hero-logo-wrap" data-astro-cid-xp7oeim3> <img${addAttribute(logoCompletBlanc.src, "src")} alt="Oriento" width="800" height="250" class="hero-logo-img" loading="eager" fetchpriority="high" data-astro-cid-xp7oeim3> </div> <div class="hero-texte" data-astro-cid-xp7oeim3> <p data-astro-cid-xp7oeim3>À propos</p> <div class="hero-img-wrap" data-astro-cid-xp7oeim3> <img${addAttribute(Img1.src, "src")} alt="Illustration à propos" width="900" height="600" class="hero-img" loading="eager" fetchpriority="high" data-astro-cid-xp7oeim3> </div> </div> </div> </section> <section class="intro-section" aria-label="Introduction" data-astro-cid-xp7oeim3> <div class="intro-inner" data-astro-cid-xp7oeim3> <h1 class="intro-h1" data-astro-cid-xp7oeim3>À propos d'Oriento</h1> </div> </section> <section class="cards-section" aria-label="Contenu" data-astro-cid-xp7oeim3> <div class="cards-grid" data-astro-cid-xp7oeim3> ${sections.map((s) => renderTemplate`<div class="card" data-astro-cid-xp7oeim3> <h3 class="card-titre" data-astro-cid-xp7oeim3>${s.titre}</h3> ${s.texte && renderTemplate`<p class="card-texte" data-astro-cid-xp7oeim3>${s.texte}</p>`} </div>`)} </div> </section> </div>  ` })}`;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/a-propos.astro", void 0);

const $$file = "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/a-propos.astro";
const $$url = "/a-propos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$APropos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
