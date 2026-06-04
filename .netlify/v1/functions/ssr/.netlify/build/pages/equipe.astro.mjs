import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import { $ as $$LayoutLandingpage } from '../chunks/Layout-landingpage_CTgsYA1g.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const titouanPhoto = new Proxy({"src":"/_astro/titouanPhoto.FGIb3E6D.avif","width":160,"height":160,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/titouanPhoto.avif";
							}
							
							return target[name];
						}
					});

const virgilePhoto = new Proxy({"src":"/_astro/virgilePhoto.BUXEufvL.avif","width":160,"height":160,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/virgilePhoto.avif";
							}
							
							return target[name];
						}
					});

const evanPhoto = new Proxy({"src":"/_astro/evanPhoto.B-IvOFGW.avif","width":160,"height":160,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/evanPhoto.avif";
							}
							
							return target[name];
						}
					});

const $$Equipe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutLandingpage, { "title": "Notre \xE9quipe \u2014 Oriento", "data-astro-cid-7l7rbd73": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-wrapper" data-astro-cid-7l7rbd73> <section class="equipe-hero" data-astro-cid-7l7rbd73> <h1 class="titre" data-astro-cid-7l7rbd73>Notre équipe</h1> <div class="texte-bloc" data-astro-cid-7l7rbd73> <p data-astro-cid-7l7rbd73>
Oriento est développé par une équipe de étudiants en BUT MMI
                    qui souhaite simplifier les démarches administratives des
                    étudiants.
</p> <p data-astro-cid-7l7rbd73>
Nous avons créé cette application pour aider les étudiants à
                    trouver rapidement les bonnes informations et à gérer plus
                    facilement leur logement, leurs études, leurs impôts et
                    leurs assurances.
</p> <p data-astro-cid-7l7rbd73>
Notre objectif est simple : rendre les démarches étudiantes
                    plus claires, accessibles et rapides.
</p> </div> </section> <section class="membres" data-astro-cid-7l7rbd73> <div class="membres-grid" data-astro-cid-7l7rbd73> <div class="membre-card" data-astro-cid-7l7rbd73> <img${addAttribute(titouanPhoto.src, "src")} alt="Titouan Perros" class="membre-avatar" data-astro-cid-7l7rbd73> <span class="membre-nom" data-astro-cid-7l7rbd73>Titouan Perros</span> <span class="membre-role" data-astro-cid-7l7rbd73>Étudiant en première année MMI</span> </div> <div class="membre-card" data-astro-cid-7l7rbd73> <img${addAttribute(virgilePhoto.src, "src")} alt="Virgile Esnaux" class="membre-avatar" data-astro-cid-7l7rbd73> <span class="membre-nom" data-astro-cid-7l7rbd73>Virgile Esnaux</span> <span class="membre-role" data-astro-cid-7l7rbd73>Étudiant en première année MMI</span> </div> <div class="membre-card" data-astro-cid-7l7rbd73> <img${addAttribute(evanPhoto.src, "src")} alt="Evan Gichtenaere" class="membre-avatar" data-astro-cid-7l7rbd73> <span class="membre-nom" data-astro-cid-7l7rbd73>Evan Gichtenaere</span> <span class="membre-role" data-astro-cid-7l7rbd73>Étudiant en première année MMI</span> </div> </div> </section> </div>  ` })}`;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/equipe.astro", void 0);

const $$file = "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/equipe.astro";
const $$url = "/equipe";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Equipe,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
