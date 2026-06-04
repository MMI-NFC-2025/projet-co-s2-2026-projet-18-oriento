import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_B38eQPSD.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/a-propos.astro.mjs');
const _page2 = () => import('./pages/assurance/_slug_.astro.mjs');
const _page3 = () => import('./pages/assurance.astro.mjs');
const _page4 = () => import('./pages/connexion.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/equipe.astro.mjs');
const _page7 = () => import('./pages/etudes/_slug_.astro.mjs');
const _page8 = () => import('./pages/etudes.astro.mjs');
const _page9 = () => import('./pages/impots/_slug_.astro.mjs');
const _page10 = () => import('./pages/impots.astro.mjs');
const _page11 = () => import('./pages/inscription.astro.mjs');
const _page12 = () => import('./pages/landing-page.astro.mjs');
const _page13 = () => import('./pages/logement/_slug_.astro.mjs');
const _page14 = () => import('./pages/logement.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/a-propos.astro", _page1],
    ["src/pages/assurance/[slug].astro", _page2],
    ["src/pages/assurance.astro", _page3],
    ["src/pages/connexion.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/equipe.astro", _page6],
    ["src/pages/etudes/[slug].astro", _page7],
    ["src/pages/etudes.astro", _page8],
    ["src/pages/impots/[slug].astro", _page9],
    ["src/pages/impots.astro", _page10],
    ["src/pages/inscription.astro", _page11],
    ["src/pages/landing-page.astro", _page12],
    ["src/pages/logement/[slug].astro", _page13],
    ["src/pages/logement.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "21dc0c95-8407-4287-bd38-4e601af20c1d"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
