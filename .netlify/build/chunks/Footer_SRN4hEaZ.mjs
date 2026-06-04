import { c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderTemplate } from './astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const logoBlanc = new Proxy({"src":"/_astro/logo_blanc.COvno5hw.avif","width":348,"height":313,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/logo_blanc.avif";
							}
							
							return target[name];
						}
					});

const logoNoir = new Proxy({"src":"/_astro/logo_noir.Dmygh7hl.avif","width":183,"height":164,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/logo_noir.avif";
							}
							
							return target[name];
						}
					});

const logoCompletBlanc = new Proxy({"src":"/_astro/logo_complet_blanc.DR9eHx02.avif","width":758,"height":313,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/logo_complet_blanc.avif";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const liens = [
    ["Accueil", "/"],
    ["\xC0 propos", "/a-propos"],
    ["Contact", "/contact"]
  ];
  const reseaux = [
    ["Instagram", "https://instagram.com"],
    ["Behance", "https://behance.net"],
    ["LinkedIn", "https://linkedin.com"]
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="footer" role="contentinfo" data-astro-cid-sz7xmlte> <div class="footer-inner" data-astro-cid-sz7xmlte> <!-- ——— LIGNE HAUTE ——— --> <div class="footer-top" data-astro-cid-sz7xmlte> <!-- Logo + baseline --> <div class="footer-brand" data-astro-cid-sz7xmlte> <img${addAttribute(logoCompletBlanc.src, "src")} alt="Oriento" width="160" height="42" class="footer-logo" loading="lazy" data-astro-cid-sz7xmlte> <p class="footer-baseline" data-astro-cid-sz7xmlte>
Vos démarches en seulement<br data-astro-cid-sz7xmlte>quelques clics !
</p> </div> <!-- Nav principale --> <nav class="footer-nav-main" aria-label="Navigation principale" data-astro-cid-sz7xmlte> ${liens.map(([label, href]) => renderTemplate`<a${addAttribute(href, "href")} class="footer-nav-link footer-nav-link--big"${addAttribute(label, "aria-label")} data-astro-cid-sz7xmlte> ${label} </a>`)} </nav> <!-- Réseaux --> <nav class="footer-nav-social" aria-label="Réseaux sociaux" data-astro-cid-sz7xmlte> ${reseaux.map(([label, href]) => renderTemplate`<a${addAttribute(href, "href")} class="footer-nav-link" target="_blank" rel="noopener noreferrer"${addAttribute(`Suivre Oriento sur ${label}`, "aria-label")} data-astro-cid-sz7xmlte> ${label} </a>`)} </nav> </div> <!-- ——— DIVIDER ——— --> <div class="footer-divider" data-astro-cid-sz7xmlte></div> <!-- ——— INFOS CONTACT ——— --> <div class="footer-contact" data-astro-cid-sz7xmlte> <p class="footer-phone" data-astro-cid-sz7xmlte>(099) 791-00-75</p> <a href="mailto:Oriento@gmail.com" class="footer-email" <a href="mailto:Oriento@gmail.com" class="footer-email" aria-label="Envoyer un e-mail à Oriento" data-astro-cid-sz7xmlte>
Oriento@gmail.com
</a> <p class="footer-address" data-astro-cid-sz7xmlte>
France, Paris,<br data-astro-cid-sz7xmlte>
Str. Believein Yourself 29<br data-astro-cid-sz7xmlte>
App. 390
</p> </div> <!-- ——— BARRE BASSE ——— --> <div class="footer-bottom" data-astro-cid-sz7xmlte> <p class="footer-copy" data-astro-cid-sz7xmlte>
© ${(/* @__PURE__ */ new Date()).getFullYear()} Oriento. Tous droits réservés.
</p> </div> </div> </footer> `;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/components/Footer.astro", void 0);

export { $$Footer as $, logoNoir as a, logoBlanc as b, logoCompletBlanc as l };
