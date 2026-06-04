import { c as createComponent, i as renderComponent, r as renderTemplate, f as createAstro, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_B-6veMXF.mjs';
import { $ as $$BoutonConseil } from '../../chunks/BoutonConseil_DPsAEg-Z.mjs';
import { l as logoCompletBlanc } from '../../chunks/Footer_SRN4hEaZ.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const Img1 = new Proxy({"src":"/_astro/assu_assu_img.B1pG6bZq.avif","width":490,"height":380,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/assu_assu_img.avif";
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
      titre: "Comprendre les assurances essentielles",
      intro: "\xCAtre \xE9tudiant implique souvent de vivre de mani\xE8re autonome et de g\xE9rer certaines responsabilit\xE9s. Avoir les bonnes assurances te prot\xE8ge dans ta vie quotidienne et en cas d'impr\xE9vu.",
      sections: [
        {
          titre: "L'assurance responsabilit\xE9 civile",
          texte: "La responsabilit\xE9 civile est l'assurance de base que tout \xE9tudiant devrait avoir. Elle couvre les dommages que tu pourrais causer \xE0 quelqu'un d'autre ou \xE0 ses biens, que ce soit accidentel ou involontaire.",
          bullets: [
            "Elle est parfois incluse dans le contrat scolaire ou dans certaines assurances habitation"
          ],
          conseils: "V\xE9rifie si tes parents t'ont d\xE9j\xE0 couvert via leur contrat multirisque habitation. Beaucoup d'\xE9tudiants sont encore inclus dedans sans le savoir.",
          liens: [
            {
              label: "Service-public.fr \u2014 Responsabilit\xE9 civile",
              url: "https://www.service-public.fr/particuliers/vosdroits/F2123"
            },
            {
              label: "economie.gouv.fr \u2014 Les assurances obligatoires",
              url: "https://www.economie.gouv.fr/particuliers/assurances-obligatoires"
            }
          ]
        },
        {
          titre: "L'assurance habitation",
          texte: "M\xEAme si tu loues un studio ou que tu vis en r\xE9sidence universitaire, l'assurance habitation est souvent obligatoire :",
          bullets: [
            "Elle couvre les d\xE9g\xE2ts caus\xE9s \xE0 ton logement ou \xE0 celui d'un voisin",
            "Elle peut inclure la responsabilit\xE9 civile",
            "Certains contrats \xE9tudiants sont tr\xE8s abordables (moins de 5 \u20AC par mois)"
          ],
          conseils: "Compare les offres en ligne avant de souscrire. Des assureurs comme Luko, Lovys ou la MAIF proposent des formules sp\xE9cialement adapt\xE9es aux \xE9tudiants.",
          liens: [
            {
              label: "Service-public.fr \u2014 Assurance habitation locataire",
              url: "https://www.service-public.fr/particuliers/vosdroits/F1353"
            },
            {
              label: "ANIL \u2014 Assurance et location",
              url: "https://www.anil.org/votre-projet/vous-etes-locataire/entree-dans-les-lieux/assurance-habitation/"
            }
          ]
        },
        {
          titre: "L'assurance sant\xE9 compl\xE9mentaire (mutuelle \xE9tudiante)",
          texte: "La s\xE9curit\xE9 sociale rembourse une partie des frais m\xE9dicaux, mais pas tout. Une mutuelle est utile pour couvrir le reste :",
          bullets: [
            "Consultations m\xE9dicales et soins dentaires et optiques",
            "Certains m\xE9dicaments non rembours\xE9s par la s\xE9curit\xE9 sociale"
          ],
          conseils: "Si tu as moins de 25 ans, tu peux rester sur la mutuelle de tes parents. V\xE9rifie d'abord avant de souscrire une nouvelle compl\xE9mentaire sant\xE9.",
          liens: [
            {
              label: "Ameli.fr \u2014 Droits \xE0 l'assurance maladie \xE9tudiant",
              url: "https://www.ameli.fr/assure/droits-demarches/etudes-emploi-retraite/vous-etes-etudiant/votre-couverture-maladie"
            },
            {
              label: "1jeune1solution \u2014 Sant\xE9 \xE9tudiante",
              url: "https://www.1jeune1solution.gouv.fr/sante"
            }
          ]
        },
        {
          titre: "L'assurance des biens personnels",
          texte: "Si tu poss\xE8des du mat\xE9riel informatique, un v\xE9lo ou d'autres objets de valeur, certaines assurances permettent de prot\xE9ger tes biens :",
          bullets: [
            "Le casse accidentelle",
            "Les dommages li\xE9s \xE0 un incendie ou des d\xE9g\xE2ts des eaux"
          ],
          conseils: "Garde toujours les factures de tes appareils \xE9lectroniques. En cas de sinistre, elles sont indispensables pour \xEAtre rembours\xE9 correctement.",
          liens: [
            {
              label: "Service-public.fr \u2014 D\xE9claration de sinistre",
              url: "https://www.service-public.fr/particuliers/vosdroits/F2149"
            }
          ]
        }
      ]
    },
    choisir: {
      titre: "Choisir la bonne assurance",
      intro: "Face \xE0 la multitude d'offres sur le march\xE9, choisir une assurance adapt\xE9e \xE0 ton profil d'\xE9tudiant peut sembler compliqu\xE9. Voici les crit\xE8res essentiels pour faire le bon choix sans te faire avoir.",
      sections: [
        {
          titre: "Analyser ses besoins r\xE9els",
          texte: "Avant de comparer des offres, commence par faire le point sur ta situation :",
          bullets: [
            "Tu vis seul ou en colocation ? Les garanties ne sont pas les m\xEAmes",
            "Tu as du mat\xE9riel co\xFBteux (ordinateur, v\xE9lo, instrument) \xE0 prot\xE9ger ?",
            "Tu es encore rattach\xE9 \xE0 la mutuelle ou l'habitation de tes parents ?"
          ],
          conseils: "Ne souscris pas une assurance par d\xE9faut. Prends 10 minutes pour lister ce que tu poss\xE8des et ce que tu risques r\xE9ellement de perdre ou d'ab\xEEmer.",
          liens: [
            {
              label: "Service-public.fr \u2014 Guide des assurances",
              url: "https://www.service-public.fr/particuliers/vosdroits/N44"
            }
          ]
        },
        {
          titre: "Comparer les offres",
          texte: "Tous les contrats ne se valent pas. Voici comment les comparer efficacement :",
          bullets: [
            "Utilise des comparateurs en ligne comme LeLynx ou AssurLand",
            "V\xE9rifie les plafonds de remboursement et les exclusions de garanties",
            "Lis les avis clients pour \xE9valuer la r\xE9activit\xE9 en cas de sinistre"
          ],
          conseils: "Le prix ne fait pas tout. Un contrat moins cher avec de nombreuses exclusions peut te co\xFBter bien plus cher en cas de p\xE9pin.",
          liens: [
            {
              label: "LeLynx \u2014 Comparateur assurance habitation",
              url: "https://www.lelynx.fr/assurance-habitation/"
            },
            {
              label: "Assurland \u2014 Comparateur assurance",
              url: "https://www.assurland.com"
            }
          ]
        },
        {
          titre: "Les labels et certifications",
          texte: "Certains crit\xE8res te permettent de v\xE9rifier la fiabilit\xE9 d'un assureur :",
          bullets: [
            "V\xE9rifier que l'assureur est agr\xE9\xE9 par l'ACPR (Autorit\xE9 de Contr\xF4le Prudentiel et de R\xE9solution)",
            "Chercher des avis sur des plateformes ind\xE9pendantes (Trustpilot, Google)",
            "Pr\xE9f\xE9rer les assureurs sp\xE9cialis\xE9s dans les offres \xE9tudiantes"
          ],
          conseils: "Les mutuelles \xE9tudiantes historiques (LMDE, SMEREP) ont une bonne connaissance du profil \xE9tudiant. N'h\xE9site pas \xE0 les contacter directement pour un devis personnalis\xE9.",
          liens: [
            {
              label: "ACPR \u2014 V\xE9rifier un assureur agr\xE9\xE9",
              url: "https://www.acpr.banque-france.fr/lagrement-et-la-surveillance/les-recherches-dans-les-fichiers-de-lautorite/registre-des-agents-financiers"
            },
            {
              label: "LMDE \u2014 Mutuelle \xE9tudiante",
              url: "https://www.lmde.fr"
            }
          ]
        },
        {
          titre: "Attention aux pi\xE8ges courants",
          texte: "Certaines erreurs reviennent fr\xE9quemment chez les \xE9tudiants :",
          bullets: [
            "Souscrire une assurance d\xE9j\xE0 couverte par celle des parents",
            "Oublier de d\xE9clarer une colocation, ce qui peut annuler le contrat",
            "Ne pas lire les conditions de r\xE9siliation (souvent annuelle avec pr\xE9avis)"
          ],
          conseils: "Note la date d'\xE9ch\xE9ance de ton contrat dans ton t\xE9l\xE9phone d\xE8s la souscription. Sans r\xE9siliation \xE0 temps, le contrat se renouvelle automatiquement pour un an.",
          liens: [
            {
              label: "Service-public.fr \u2014 R\xE9siliation d'assurance (loi Hamon)",
              url: "https://www.service-public.fr/particuliers/vosdroits/F19083"
            }
          ]
        }
      ]
    },
    souscrire: {
      titre: "Souscrire une assurance \xE9tudiant",
      intro: "Une fois que tu as identifi\xE9 l'assurance qu'il te faut, il est temps de passer \xE0 la souscription. Les d\xE9marches sont simples et se font souvent enti\xE8rement en ligne en quelques minutes.",
      sections: [
        {
          titre: "Les documents n\xE9cessaires",
          texte: "Pour souscrire une assurance, tu auras g\xE9n\xE9ralement besoin de :",
          bullets: [
            "Une pi\xE8ce d'identit\xE9 valide (carte nationale d'identit\xE9 ou passeport)",
            "Un justificatif de domicile ou le bail de ton logement",
            "Ton num\xE9ro de s\xE9curit\xE9 sociale pour une mutuelle sant\xE9",
            "Un RIB pour la mise en place du pr\xE9l\xE8vement automatique"
          ],
          conseils: "Scanne tous ces documents \xE0 l'avance et garde-les dans un dossier num\xE9rique. La plupart des souscriptions en ligne les demandent en format PDF ou JPEG.",
          liens: [
            {
              label: "Service-public.fr \u2014 Pi\xE8ces justificatives courantes",
              url: "https://www.service-public.fr/particuliers/vosdroits/F1168"
            }
          ]
        },
        {
          titre: "Les \xE9tapes de souscription",
          texte: "La souscription en ligne se d\xE9roule g\xE9n\xE9ralement en quelques \xE9tapes simples :",
          bullets: [
            "Remplir le formulaire avec tes informations personnelles et la description de ton logement ou de ta situation",
            "Choisir tes garanties et personnaliser ton contrat selon tes besoins",
            "Signer \xE9lectroniquement le contrat et r\xE9gler la premi\xE8re cotisation"
          ],
          conseils: "Lis bien les conditions g\xE9n\xE9rales avant de signer, m\xEAme en diagonale. Rep\xE8re notamment les d\xE9lais de carence et les exclusions principales.",
          liens: [
            {
              label: "economie.gouv.fr \u2014 Signature \xE9lectronique",
              url: "https://www.economie.gouv.fr/entreprises/signature-electronique"
            }
          ]
        },
        {
          titre: "La date d'effet du contrat",
          texte: "La couverture ne d\xE9marre pas toujours imm\xE9diatement :",
          bullets: [
            "Pour une assurance habitation, la prise d'effet est souvent imm\xE9diate ou le lendemain",
            "Pour une mutuelle sant\xE9, un d\xE9lai de carence de 1 \xE0 3 mois peut s'appliquer",
            "Certains sinistres survenus avant la date d'effet ne sont pas couverts"
          ],
          conseils: "Souscris ton assurance habitation avant m\xEAme d'emm\xE9nager. En cas de d\xE9g\xE2t des eaux le jour de ton arriv\xE9e, tu seras couvert d\xE8s le d\xE9part.",
          liens: [
            {
              label: "Service-public.fr \u2014 Assurance habitation et location",
              url: "https://www.service-public.fr/particuliers/vosdroits/F1353"
            },
            {
              label: "Ameli.fr \u2014 D\xE9lai de carence mutuelle",
              url: "https://www.ameli.fr/assure/remboursements/rembourse/complement-mutuelle/choisir-mutuelle"
            }
          ]
        },
        {
          titre: "G\xE9rer et modifier son contrat",
          texte: "Apr\xE8s la souscription, tu peux g\xE9rer ton contrat facilement :",
          bullets: [
            "Modifier tes garanties en cours d'ann\xE9e si ta situation change (d\xE9m\xE9nagement, nouveau mat\xE9riel)",
            "D\xE9clarer un sinistre via l'espace client en ligne ou l'application mobile",
            "R\xE9silier le contrat \xE0 l'\xE9ch\xE9ance annuelle ou en cas de changement de situation (loi Hamon)"
          ],
          conseils: "T\xE9l\xE9charge l'application de ton assureur sur ton t\xE9l\xE9phone. En cas de sinistre, tu pourras d\xE9clarer et suivre ton dossier directement depuis ton smartphone.",
          liens: [
            {
              label: "Service-public.fr \u2014 R\xE9siliation loi Hamon",
              url: "https://www.service-public.fr/particuliers/vosdroits/F19083"
            },
            {
              label: "Service-public.fr \u2014 D\xE9clarer un sinistre",
              url: "https://www.service-public.fr/particuliers/vosdroits/F2149"
            }
          ]
        }
      ]
    }
  };
  const slug = Astro2.params.slug;
  const page = pages[slug];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${page.titre} \u2014 Oriento`, "heroSection": true, "data-astro-cid-yxphkafe": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-wrapper" data-astro-cid-yxphkafe> <section class="hero-section" aria-label="Présentation" data-astro-cid-yxphkafe> <div class="hero-inner" data-astro-cid-yxphkafe> <div class="hero-logo-wrap" data-astro-cid-yxphkafe> <img${addAttribute(logoCompletBlanc.src, "src")} alt="Oriento" width="800" height="250" class="hero-logo-img" loading="eager" fetchpriority="high" data-astro-cid-yxphkafe> </div> <div class="hero-texte" data-astro-cid-yxphkafe> <p data-astro-cid-yxphkafe>Les assurances</p> <div class="hero-img-wrap" data-astro-cid-yxphkafe> <img${addAttribute(Img1.src, "src")} alt="Illustration les assurances" width="900" height="600" class="hero-img" loading="eager" fetchpriority="high" data-astro-cid-yxphkafe> </div> </div> </div> </section> <section class="intro-section" aria-label="Introduction" data-astro-cid-yxphkafe> <div class="intro-inner" data-astro-cid-yxphkafe> <h1 class="intro-h1" data-astro-cid-yxphkafe>${page.titre}</h1> <p class="intro-texte" data-astro-cid-yxphkafe>${page.intro}</p> </div> </section> <section class="cards-section" aria-label="Contenu" data-astro-cid-yxphkafe> <div class="cards-grid" data-astro-cid-yxphkafe> ${page.sections.map((s) => renderTemplate`<div class="card" data-astro-cid-yxphkafe> <h3 class="card-titre" data-astro-cid-yxphkafe>${s.titre}</h3> ${s.texte && renderTemplate`<p class="card-texte" data-astro-cid-yxphkafe>${s.texte}</p>`} ${s.bullets && s.bullets.length > 0 && renderTemplate`<ul class="card-bullets" data-astro-cid-yxphkafe> ${s.bullets.map((b) => renderTemplate`<li data-astro-cid-yxphkafe>${b}</li>`)} </ul>`} ${renderComponent($$result2, "BoutonConseil", $$BoutonConseil, { "conseils": s.conseils, "data-astro-cid-yxphkafe": true })} ${s.liens && s.liens.length > 0 && renderTemplate`<div class="card-liens" data-astro-cid-yxphkafe> <p class="card-liens-titre" data-astro-cid-yxphkafe>
Sources officielles
</p> <ul class="card-liens-liste" data-astro-cid-yxphkafe> ${s.liens.map((lien) => renderTemplate`<li data-astro-cid-yxphkafe> <a${addAttribute(lien.url, "href")} target="_blank" rel="noopener noreferrer" class="card-lien" data-astro-cid-yxphkafe> <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="lien-icon" data-astro-cid-yxphkafe> <path d="M6 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-astro-cid-yxphkafe></path> <path d="M9 2h5v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-yxphkafe></path> <path d="M14 2 8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-astro-cid-yxphkafe></path> </svg> ${lien.label} </a> </li>`)} </ul> </div>`} </div>`)} </div> </section> </div>  ` })}`;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/assurance/[slug].astro", void 0);

const $$file = "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/assurance/[slug].astro";
const $$url = "/assurance/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
