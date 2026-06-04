import { c as createComponent, m as maybeRenderHead, j as renderScript, r as renderTemplate, f as createAstro } from './astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro();
const $$BoutonConseil = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BoutonConseil;
  const { conseils } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bouton-conseil" data-astro-cid-kzoabwpn> <button class="conseil-btn" type="button" aria-expanded="false" data-astro-cid-kzoabwpn> <span data-astro-cid-kzoabwpn>Conseils</span> <svg class="conseil-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-kzoabwpn> <polyline points="6 9 12 15 18 9" data-astro-cid-kzoabwpn></polyline> </svg> </button> <div class="conseil-drawer" aria-hidden="true" data-astro-cid-kzoabwpn> <div class="conseil-drawer-inner" data-astro-cid-kzoabwpn> ${conseils} </div> </div> </div>  ${renderScript($$result, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/components/BoutonConseil.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/components/BoutonConseil.astro", void 0);

export { $$BoutonConseil as $ };
