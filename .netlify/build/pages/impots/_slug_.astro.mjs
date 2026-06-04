import { c as createComponent, i as renderComponent, r as renderTemplate, f as createAstro, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_B-6veMXF.mjs';
import { $ as $$BoutonConseil } from '../../chunks/BoutonConseil_DPsAEg-Z.mjs';
import { l as logoCompletBlanc } from '../../chunks/Footer_SRN4hEaZ.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const Img1 = new Proxy({"src":"/_astro/impot_impot_img.CwQSU8x4.avif","width":760,"height":374,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/impot_impot_img.avif";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const pages = {
    comprendre: {
      titre: "Comprendre les imp\xF4ts en tant qu'\xE9tudiant",
      intro: "Les imp\xF4ts peuvent sembler compliqu\xE9s quand on commence \xE0 \xEAtre autonome. Pourtant, en comprendre les bases te permettra d'\xE9viter les mauvaises surprises et de g\xE9rer ta situation fiscale sereinement.",
      sections: [
        {
          titre: "C'est quoi l'imp\xF4t sur le revenu ?",
          texte: "L'imp\xF4t sur le revenu est pr\xE9lev\xE9 par l'\xC9tat sur les sommes que tu gagnes :",
          bullets: [
            "Il est calcul\xE9 selon un bar\xE8me progressif : plus tu gagnes, plus tu paies",
            "En dessous d'un certain seuil de revenus, tu n'es pas imposable",
            "Il concerne tous les r\xE9sidents fiscaux en France, y compris les \xE9tudiants qui travaillent"
          ],
          conseils: "En tant qu'\xE9tudiant avec de petits revenus, tu seras souvent non imposable. Mais d\xE9clarer reste obligatoire d\xE8s que tu as des revenus, m\xEAme faibles.",
          liens: [
            {
              label: "impots.gouv.fr \u2014 Comment fonctionne l'imp\xF4t sur le revenu",
              url: "https://www.impots.gouv.fr/particulier/questions/comment-est-calcule-limpot-sur-le-revenu"
            },
            {
              label: "Service-public.fr \u2014 Imp\xF4t sur le revenu : principes",
              url: "https://www.service-public.fr/particuliers/vosdroits/F1419"
            }
          ]
        },
        {
          titre: "Le foyer fiscal",
          texte: "Le foyer fiscal d\xE9signe l'ensemble des personnes prises en compte pour le calcul de l'imp\xF4t :",
          bullets: [
            "Tant que tu es rattach\xE9 au foyer fiscal de tes parents, ce sont eux qui d\xE9clarent tes revenus",
            "Si tu deviens fiscalement ind\xE9pendant, tu dois faire ta propre d\xE9claration",
            "Le rattachement au foyer des parents peut \xEAtre avantageux jusqu'\xE0 25 ans"
          ],
          conseils: "Compare les deux situations avec un simulateur sur impots.gouv.fr. Parfois, se d\xE9tacher du foyer parental est plus avantageux pour b\xE9n\xE9ficier de certaines aides.",
          liens: [
            {
              label: "Service-public.fr \u2014 Rattachement d'un enfant majeur au foyer fiscal",
              url: "https://www.service-public.fr/particuliers/vosdroits/F2(3)"
            },
            {
              label: "impots.gouv.fr \u2014 Simulateur de calcul d'imp\xF4t",
              url: "https://www.impots.gouv.fr/simulateur/calcul-impot"
            }
          ]
        },
        {
          titre: "Le pr\xE9l\xE8vement \xE0 la source",
          texte: "Depuis 2019, l'imp\xF4t est pr\xE9lev\xE9 directement sur ton salaire chaque mois :",
          bullets: [
            "Si tu as un job \xE9tudiant, l'imp\xF4t est d\xE9duit automatiquement de ta fiche de paie",
            "Ton taux de pr\xE9l\xE8vement est calcul\xE9 par l'administration fiscale",
            "Tu peux demander un taux neutre si tu ne veux pas communiquer ta situation \xE0 ton employeur"
          ],
          conseils: "Si ton taux de pr\xE9l\xE8vement te semble trop \xE9lev\xE9, tu peux le modifier directement depuis ton espace personnel sur impots.gouv.fr.",
          liens: [
            {
              label: "impots.gouv.fr \u2014 Pr\xE9l\xE8vement \xE0 la source",
              url: "https://www.impots.gouv.fr/particulier/le-prelevement-a-la-source"
            },
            {
              label: "Service-public.fr \u2014 Taux neutre de pr\xE9l\xE8vement",
              url: "https://www.service-public.fr/particuliers/vosdroits/F34732"
            }
          ]
        },
        {
          titre: "Les revenus non imposables",
          texte: "Certaines sommes per\xE7ues ne sont pas soumises \xE0 l'imp\xF4t :",
          bullets: [
            "Les bourses sur crit\xE8res sociaux (CROUS)",
            "Les allocations familiales et certaines aides de la CAF",
            "Les indemnit\xE9s de stage inf\xE9rieures au SMIC annuel"
          ],
          conseils: "M\xEAme si tes revenus sont exon\xE9r\xE9s, il peut \xEAtre utile de les d\xE9clarer pour \xE9tablir ton historique fiscal et acc\xE9der \xE0 certaines aides sociales.",
          liens: [
            {
              label: "Service-public.fr \u2014 Revenus exon\xE9r\xE9s d'imp\xF4t",
              url: "https://www.service-public.fr/particuliers/vosdroits/F2273"
            },
            {
              label: "impots.gouv.fr \u2014 Indemnit\xE9s de stage et imposition",
              url: "https://www.impots.gouv.fr/particulier/questions/les-indemnites-de-stage-sont-elles-imposables"
            }
          ]
        }
      ]
    },
    espace: {
      titre: "Cr\xE9er et utiliser son espace fiscal",
      intro: "Ton espace personnel sur impots.gouv.fr est ton tableau de bord fiscal. C'est l\xE0 que tu d\xE9clares tes revenus, consultes tes avis d'imposition et g\xE8res ta situation. Voici comment le prendre en main.",
      sections: [
        {
          titre: "Cr\xE9er son compte impots.gouv.fr",
          texte: "La cr\xE9ation du compte est simple et se fait en quelques minutes :",
          bullets: [
            "Rends-toi sur impots.gouv.fr et clique sur \xAB Votre espace particulier \xBB",
            "Cr\xE9e ton compte avec ton num\xE9ro fiscal (visible sur un avis d'imposition ou une d\xE9claration de revenus)",
            "Si tu n'as jamais d\xE9clar\xE9, tu peux obtenir ton num\xE9ro fiscal aupr\xE8s du centre des imp\xF4ts de ta commune"
          ],
          conseils: "Ton num\xE9ro fiscal est personnel et ne change jamais. Note-le dans un endroit s\xFBr d\xE8s ta premi\xE8re connexion.",
          liens: [
            {
              label: "impots.gouv.fr \u2014 Cr\xE9er son espace particulier",
              url: "https://www.impots.gouv.fr/accueil"
            },
            {
              label: "Service-public.fr \u2014 Num\xE9ro fiscal : comment l'obtenir",
              url: "https://www.service-public.fr/particuliers/vosdroits/F32457"
            }
          ]
        },
        {
          titre: "Les fonctionnalit\xE9s principales",
          texte: "Depuis ton espace, tu peux :",
          bullets: [
            "D\xE9clarer tes revenus chaque ann\xE9e (avril-juin)",
            "Consulter tes avis d'imposition et les t\xE9l\xE9charger",
            "Modifier ton taux de pr\xE9l\xE8vement \xE0 la source",
            "Signaler un changement de situation (d\xE9m\xE9nagement, premier emploi...)"
          ],
          conseils: "L'avis d'imposition est un document officiel tr\xE8s souvent demand\xE9 pour les dossiers de location, les bourses ou les aides sociales. T\xE9l\xE9charge-le et garde-le \xE0 port\xE9e de main.",
          liens: [
            {
              label: "impots.gouv.fr \u2014 Espace particulier",
              url: "https://www.impots.gouv.fr/particulier"
            }
          ]
        },
        {
          titre: "D\xE9clarer en ligne facilement",
          texte: "La d\xE9claration en ligne est guid\xE9e et pr\xE9-remplie :",
          bullets: [
            "Les revenus d\xE9clar\xE9s par ton employeur sont d\xE9j\xE0 pr\xE9-remplis automatiquement",
            "Tu n'as qu'\xE0 v\xE9rifier, corriger si besoin, et valider",
            "Tu re\xE7ois une confirmation imm\xE9diate et un r\xE9capitulatif par e-mail"
          ],
          conseils: "Ne saute pas l'\xE9tape de v\xE9rification des cases pr\xE9-remplies. Une erreur de l'administration peut passer inaper\xE7ue si tu valides sans lire.",
          liens: [
            {
              label: "impots.gouv.fr \u2014 D\xE9clarer mes revenus en ligne",
              url: "https://www.impots.gouv.fr/particulier/declarer-mes-revenus"
            },
            {
              label: "Service-public.fr \u2014 D\xE9claration de revenus en ligne",
              url: "https://www.service-public.fr/particuliers/vosdroits/F357"
            }
          ]
        },
        {
          titre: "Les d\xE9lais \xE0 respecter",
          texte: "La d\xE9claration de revenus suit un calendrier annuel strict :",
          bullets: [
            "La campagne de d\xE9claration ouvre g\xE9n\xE9ralement en avril",
            "La date limite varie selon ton d\xE9partement (entre mai et juin)",
            "Un retard de d\xE9claration peut entra\xEEner une majoration de 10 %"
          ],
          conseils: "Active les alertes e-mail sur impots.gouv.fr pour \xEAtre notifi\xE9 \xE0 l'ouverture de la campagne et ne jamais rater la date limite.",
          liens: [
            {
              label: "impots.gouv.fr \u2014 Calendrier fiscal",
              url: "https://www.impots.gouv.fr/particulier/calendrier"
            },
            {
              label: "Service-public.fr \u2014 Dates limites de d\xE9claration",
              url: "https://www.service-public.fr/particuliers/actualites/A14745"
            }
          ]
        }
      ]
    },
    declarer: {
      titre: "Dois-je d\xE9clarer mes revenus ?",
      intro: "M\xEAme en \xE9tant \xE9tudiant, tu peux \xEAtre concern\xE9 par la d\xE9claration de revenus. Tout d\xE9pend de ta situation, de ton \xE2ge et des revenus que tu per\xE7ois.",
      sections: [
        {
          titre: "\xCAtes-vous rattach\xE9 au foyer fiscal de vos parents ?",
          texte: "Si tu as moins de 25 ans et que tu es \xE9tudiant, tu peux rester rattach\xE9 au foyer fiscal de tes parents. Dans ce cas, ce sont g\xE9n\xE9ralement eux qui d\xE9clarent tes revenus avec les leurs.",
          conseils: "Discute avec tes parents de la situation la plus avantageuse. Le rattachement leur permet de b\xE9n\xE9ficier d'une demi-part suppl\xE9mentaire, ce qui peut r\xE9duire leur imp\xF4t.",
          liens: [
            {
              label: "Service-public.fr \u2014 Rattachement enfant majeur \xE9tudiant",
              url: "https://www.service-public.fr/particuliers/vosdroits/F2(3)"
            },
            {
              label: "impots.gouv.fr \u2014 Simulateur foyer fiscal",
              url: "https://www.impots.gouv.fr/simulateur/calcul-impot"
            }
          ]
        },
        {
          titre: "Si vous faites votre propre d\xE9claration",
          texte: "Tu dois d\xE9clarer tes revenus si tu es ind\xE9pendant fiscalement ou si tu as choisi de ne plus \xEAtre rattach\xE9 au foyer de tes parents. Les revenus concern\xE9s peuvent \xEAtre :",
          bullets: [
            "Salaire d'un job \xE9tudiant",
            "R\xE9mun\xE9ration de stage",
            "Revenus per\xE7us pendant l'ann\xE9e"
          ],
          conseils: "M\xEAme si tu n'es pas imposable, faire ta d\xE9claration te permet d'obtenir un avis de non-imposition, souvent indispensable pour les dossiers de bourse ou de logement.",
          liens: [
            {
              label: "impots.gouv.fr \u2014 D\xE9clarer mes revenus",
              url: "https://www.impots.gouv.fr/particulier/declarer-mes-revenus"
            },
            {
              label: "Service-public.fr \u2014 \xC9tudiant et d\xE9claration de revenus",
              url: "https://www.service-public.fr/particuliers/vosdroits/F1564"
            }
          ]
        },
        {
          titre: "Les revenus \xE9tudiants sont parfois exon\xE9r\xE9s",
          texte: "Certains revenus \xE9tudiants peuvent \xEAtre partiellement exon\xE9r\xE9s d'imp\xF4t, dans certaines limites. Cela concerne souvent les jobs \xE9tudiants exerc\xE9s pendant les \xE9tudes.",
          bullets: [
            "M\xEAme si tu n'\xEAtes pas imposable, une d\xE9claration peut rester utile pour certaines aides ou d\xE9marches administratives"
          ],
          conseils: "Consulte le simulateur sur impots.gouv.fr pour savoir exactement si tu es imposable selon tes revenus. C'est gratuit, rapide et sans engagement.",
          liens: [
            {
              label: "impots.gouv.fr \u2014 Simulateur d'imp\xF4t sur le revenu",
              url: "https://www.impots.gouv.fr/simulateur/calcul-impot"
            },
            {
              label: "Service-public.fr \u2014 Exon\xE9ration jobs \xE9tudiants",
              url: "https://www.service-public.fr/particuliers/vosdroits/F1563"
            }
          ]
        },
        {
          titre: "Conseil",
          texte: "Si tu as un doute, il est recommand\xE9 de faire une simulation ou de consulter les informations officielles pour conna\xEEtre ta situation.",
          conseils: "N'h\xE9site pas \xE0 contacter directement le centre des imp\xF4ts de ta ville. Les agents fiscaux sont habitu\xE9s aux questions des \xE9tudiants et peuvent t'orienter gratuitement.",
          liens: [
            {
              label: "impots.gouv.fr \u2014 Contacter les imp\xF4ts",
              url: "https://www.impots.gouv.fr/contacts"
            },
            {
              label: "Service-public.fr \u2014 Trouver son centre des finances publiques",
              url: "https://www.service-public.fr/particuliers/vosdroits/R19755"
            }
          ]
        }
      ]
    }
  };
  const slug = Astro2.params.slug;
  const page = pages[slug];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${page.titre} \u2014 Oriento`, "heroSection": true, "data-astro-cid-atxlqv4m": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-wrapper" data-astro-cid-atxlqv4m> <section class="hero-section" aria-label="Présentation" data-astro-cid-atxlqv4m> <div class="hero-inner" data-astro-cid-atxlqv4m> <div class="hero-logo-wrap" data-astro-cid-atxlqv4m> <img${addAttribute(logoCompletBlanc.src, "src")} alt="Oriento" width="800" height="250" class="hero-logo-img" loading="eager" fetchpriority="high" data-astro-cid-atxlqv4m> </div> <div class="hero-texte" data-astro-cid-atxlqv4m> <p data-astro-cid-atxlqv4m>Les impôts</p> <div class="hero-img-wrap" data-astro-cid-atxlqv4m> <img${addAttribute(Img1.src, "src")} alt="Illustration les impôts" width="900" height="600" class="hero-img" loading="eager" fetchpriority="high" data-astro-cid-atxlqv4m> </div> </div> </div> </section> <section class="intro-section" aria-label="Introduction" data-astro-cid-atxlqv4m> <div class="intro-inner" data-astro-cid-atxlqv4m> <h1 class="intro-h1" data-astro-cid-atxlqv4m>${page.titre}</h1> <p class="intro-texte" data-astro-cid-atxlqv4m>${page.intro}</p> </div> </section> <section class="cards-section" aria-label="Contenu" data-astro-cid-atxlqv4m> <div class="cards-grid" data-astro-cid-atxlqv4m> ${page.sections.map((s) => renderTemplate`<div class="card" data-astro-cid-atxlqv4m> <h3 class="card-titre" data-astro-cid-atxlqv4m>${s.titre}</h3> ${s.texte && renderTemplate`<p class="card-texte" data-astro-cid-atxlqv4m>${s.texte}</p>`} ${s.bullets && s.bullets.length > 0 && renderTemplate`<ul class="card-bullets" data-astro-cid-atxlqv4m> ${s.bullets.map((b) => renderTemplate`<li data-astro-cid-atxlqv4m>${b}</li>`)} </ul>`} ${renderComponent($$result2, "BoutonConseil", $$BoutonConseil, { "conseils": s.conseils, "data-astro-cid-atxlqv4m": true })} ${s.liens && s.liens.length > 0 && renderTemplate`<div class="card-liens" data-astro-cid-atxlqv4m> <p class="card-liens-titre" data-astro-cid-atxlqv4m>
Sources officielles
</p> <ul class="card-liens-liste" data-astro-cid-atxlqv4m> ${s.liens.map((lien) => renderTemplate`<li data-astro-cid-atxlqv4m> <a${addAttribute(lien.url, "href")} target="_blank" rel="noopener noreferrer" class="card-lien" data-astro-cid-atxlqv4m> <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="lien-icon" data-astro-cid-atxlqv4m> <path d="M6 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-astro-cid-atxlqv4m></path> <path d="M9 2h5v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-atxlqv4m></path> <path d="M14 2 8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-astro-cid-atxlqv4m></path> </svg> ${lien.label} </a> </li>`)} </ul> </div>`} </div>`)} </div> </section> </div>  ` })}`;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/impots/[slug].astro", void 0);

const $$file = "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/impots/[slug].astro";
const $$url = "/impots/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
