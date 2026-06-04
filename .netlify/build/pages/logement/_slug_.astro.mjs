import { c as createComponent, i as renderComponent, r as renderTemplate, f as createAstro, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_B-6veMXF.mjs';
import { $ as $$BoutonConseil } from '../../chunks/BoutonConseil_DPsAEg-Z.mjs';
import { l as logoCompletBlanc } from '../../chunks/Footer_SRN4hEaZ.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const Img1 = new Proxy({"src":"/_astro/logement_logement_img.D8y4Mcqc.avif","width":674,"height":502,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/logement_logement_img.avif";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const pages = {
    preparer: {
      titre: "Pr\xE9parer son dossier de location",
      intro: "Pour louer un logement, vous devrez g\xE9n\xE9ralement fournir plusieurs documents au propri\xE9taire ou \xE0 l'agence. Pr\xE9parer votre dossier \xE0 l'avance vous permettra de r\xE9pondre rapidement aux annonces et d'augmenter vos chances d'obtenir le logement.",
      sections: [
        {
          titre: "Pi\xE8ce d'identit\xE9",
          texte: "Carte d'identit\xE9, passeport ou titre de s\xE9jour valide.",
          conseils: "Scanne ta pi\xE8ce d'identit\xE9 en haute r\xE9solution et garde-la toujours pr\xEAte en PDF. Certaines agences refusent les photos floues ou recadr\xE9es.",
          liens: [
            {
              label: "Service-public.fr \u2014 Documents autoris\xE9s pour la location",
              url: "https://www.service-public.fr/particuliers/vosdroits/F1169"
            }
          ]
        },
        {
          titre: "Justificatif \xE9tudiant",
          texte: "Carte \xE9tudiante, certificat de scolarit\xE9 ou attestation d'inscription dans votre \xE9tablissement.",
          conseils: "T\xE9l\xE9charge ton certificat de scolarit\xE9 depuis ton ENT d\xE8s la rentr\xE9e. Il est souvent disponible en quelques clics et accept\xE9 par tous les bailleurs.",
          liens: [
            {
              label: "messervices.etudiant.gouv.fr \u2014 Certificat de scolarit\xE9",
              url: "https://www.messervices.etudiant.gouv.fr"
            }
          ]
        },
        {
          titre: "Justificatif de revenus",
          texte: "Bulletins de salaire, contrat d'alternance, attestation de bourse ou tout document prouvant vos ressources.",
          conseils: "Si tu n'as pas de revenus propres, une attestation de bourse ou une lettre de tes parents indiquant qu'ils prennent en charge ton loyer peut suffire.",
          liens: [
            {
              label: "Service-public.fr \u2014 Pi\xE8ces justificatives demand\xE9es par le bailleur",
              url: "https://www.service-public.fr/particuliers/vosdroits/F1169"
            }
          ]
        },
        {
          titre: "Garant (si demand\xE9)",
          texte: "Un garant peut \xEAtre demand\xE9 pour assurer le paiement du loyer. Il devra fournir :",
          bullets: [
            "une pi\xE8ce d'identit\xE9",
            "un justificatif de revenus",
            "un avis d'imposition"
          ],
          conseils: "Si tu n'as pas de garant physique, tu peux utiliser le dispositif Visale (gratuit, propos\xE9 par Action Logement) qui se porte garant \xE0 ta place aupr\xE8s du propri\xE9taire.",
          liens: [
            {
              label: "visale.fr \u2014 Garantie locative gratuite Visale",
              url: "https://www.visale.fr"
            },
            {
              label: "Service-public.fr \u2014 Se porter garant pour un locataire",
              url: "https://www.service-public.fr/particuliers/vosdroits/F31267"
            }
          ]
        },
        {
          titre: "Conseils pratiques",
          bullets: [
            "Pr\xE9parez des copies num\xE9riques de vos documents",
            "Regroupez-les dans un seul fichier PDF",
            "V\xE9rifiez que les documents sont lisibles et \xE0 jour"
          ],
          conseils: "Cr\xE9e un dossier de location sur DossierFacile.fr, le service gratuit de l'\xC9tat. Il certifie ton dossier et rassure les propri\xE9taires, ce qui peut faire la diff\xE9rence face \xE0 d'autres candidats.",
          liens: [
            {
              label: "DossierFacile.fr \u2014 Dossier de location certifi\xE9 par l'\xC9tat",
              url: "https://www.dossierfacile.logement.gouv.fr"
            }
          ]
        }
      ]
    },
    bail: {
      titre: "Comprendre son bail de location",
      intro: "Le bail est le contrat qui encadre ta relation avec ton propri\xE9taire. Le lire attentivement avant de signer te prot\xE8ge des mauvaises surprises et te permet de conna\xEEtre tes droits et obligations.",
      sections: [
        {
          titre: "Les types de bail",
          texte: "Il existe plusieurs types de contrats de location selon le logement :",
          bullets: [
            "Bail nu (vide) : dur\xE9e de 3 ans minimum, renouvelable automatiquement",
            "Bail meubl\xE9 : dur\xE9e de 1 an minimum (9 mois pour les \xE9tudiants)",
            "Bail mobilit\xE9 : entre 1 et 10 mois, non renouvelable, id\xE9al pour les stages ou alternances"
          ],
          conseils: "Pour un logement \xE9tudiant, pr\xE9f\xE8re un bail meubl\xE9 ou mobilit\xE9. Ils sont plus courts et plus flexibles si tu changes de ville ou de formation.",
          liens: [
            {
              label: "Service-public.fr \u2014 Bail meubl\xE9 \xE9tudiant (9 mois)",
              url: "https://www.service-public.fr/particuliers/vosdroits/F31723"
            },
            {
              label: "Service-public.fr \u2014 Bail mobilit\xE9",
              url: "https://www.service-public.fr/particuliers/vosdroits/F34038"
            }
          ]
        },
        {
          titre: "Les clauses importantes",
          texte: "Certaines mentions dans le bail m\xE9ritent une attention particuli\xE8re :",
          bullets: [
            "Le montant du loyer et des charges (d\xE9tail des charges incluses ou non)",
            "Le montant du d\xE9p\xF4t de garantie (1 mois pour un meubl\xE9, 2 mois pour un bail nu)",
            "Les conditions de r\xE9siliation et le pr\xE9avis (1 mois en meubl\xE9, 3 mois en nu)"
          ],
          conseils: "Tout ce qui n'est pas \xE9crit dans le bail n'a pas de valeur l\xE9gale. Si ton propri\xE9taire te promet quelque chose verbalement, demande-lui de l'\xE9crire dans le contrat ou dans un avenant.",
          liens: [
            {
              label: "Service-public.fr \u2014 Contenu obligatoire du bail",
              url: "https://www.service-public.fr/particuliers/vosdroits/F920"
            },
            {
              label: "ANIL \u2014 D\xE9p\xF4t de garantie : r\xE8gles et restitution",
              url: "https://www.anil.org/votre-projet/vous-etes-locataire/entree-dans-les-lieux/depot-de-garantie/"
            }
          ]
        },
        {
          titre: "L'\xE9tat des lieux",
          texte: "L'\xE9tat des lieux est un document obligatoire qui d\xE9crit l'\xE9tat du logement \xE0 ton entr\xE9e et \xE0 ta sortie :",
          bullets: [
            "Il doit \xEAtre fait contradictoirement (en pr\xE9sence du locataire et du propri\xE9taire)",
            "Note tous les d\xE9fauts existants, m\xEAme mineurs, avec des photos dat\xE9es",
            "Un \xE9tat des lieux incomplet peut te co\xFBter des retenues injustifi\xE9es sur ta caution"
          ],
          conseils: "Prends des photos de chaque pi\xE8ce le jour de l'\xE9tat des lieux d'entr\xE9e et envoie-les par e-mail \xE0 ton propri\xE9taire. Elles serviront de preuve en cas de litige \xE0 la sortie.",
          liens: [
            {
              label: "Service-public.fr \u2014 \xC9tat des lieux d'entr\xE9e",
              url: "https://www.service-public.fr/particuliers/vosdroits/F31269"
            },
            {
              label: "Service-public.fr \u2014 \xC9tat des lieux de sortie",
              url: "https://www.service-public.fr/particuliers/vosdroits/F31270"
            }
          ]
        },
        {
          titre: "Tes droits en tant que locataire",
          texte: "La loi te prot\xE8ge en tant que locataire :",
          bullets: [
            "Le propri\xE9taire ne peut pas entrer dans ton logement sans ton accord",
            "Il ne peut pas augmenter le loyer en cours de bail sans raison l\xE9gale",
            "Tu as droit \xE0 un logement d\xE9cent : chauffage, eau chaude, absence d'humidit\xE9 excessive"
          ],
          conseils: "En cas de litige avec ton propri\xE9taire, contacte l'ADIL (Agence D\xE9partementale d'Information sur le Logement) de ta ville. La consultation est gratuite et les conseils sont juridiquement fiables.",
          liens: [
            {
              label: "Service-public.fr \u2014 Droits et obligations du locataire",
              url: "https://www.service-public.fr/particuliers/vosdroits/F1699"
            },
            {
              label: "ANIL \u2014 Trouver l'ADIL de votre d\xE9partement",
              url: "https://www.anil.org/lanil-et-les-adil/votre-adil/"
            }
          ]
        }
      ]
    },
    aides: {
      titre: "Les aides au logement \xE9tudiant",
      intro: "Se loger est souvent le poste de d\xE9pense le plus important pour un \xE9tudiant. Heureusement, plusieurs aides existent pour all\xE9ger cette charge financi\xE8re. Voici tout ce qu'il faut savoir pour en b\xE9n\xE9ficier.",
      sections: [
        {
          titre: "L'APL (Aide Personnalis\xE9e au Logement)",
          texte: "L'APL est l'aide la plus connue et la plus r\xE9pandue pour les \xE9tudiants :",
          bullets: [
            "Vers\xE9e directement par la CAF, souvent d\xE9duite automatiquement de ton loyer",
            "Son montant d\xE9pend de tes revenus, de ton loyer et de ta localisation",
            "Elle est accessible d\xE8s ton entr\xE9e dans le logement, sans condition d'\xE2ge"
          ],
          conseils: "Fais ta demande d'APL sur caf.fr d\xE8s que tu signes ton bail. Chaque mois de retard est une aide perdue d\xE9finitivement.",
          liens: [
            {
              label: "CAF.fr \u2014 Faire une demande d'aide au logement",
              url: "https://www.caf.fr/allocataires/droits-et-prestations/s-informer-sur-les-aides/logement-et-cadre-de-vie/l-aide-au-logement"
            },
            {
              label: "Service-public.fr \u2014 APL, ALS, ALF : aide au logement \xE9tudiant",
              url: "https://www.service-public.fr/particuliers/vosdroits/F1563"
            }
          ]
        },
        {
          titre: "Les r\xE9sidences CROUS",
          texte: "Les r\xE9sidences universitaires g\xE9r\xE9es par le CROUS sont une alternative tr\xE8s abordable :",
          bullets: [
            "Loyers bien inf\xE9rieurs au march\xE9 priv\xE9 (entre 150 \u20AC et 400 \u20AC selon la ville et le type de chambre)",
            "La demande se fait sur trouvermonlogement.etudiant.gouv.fr d\xE8s le mois d'avril",
            "Les boursiers sont prioritaires dans l'attribution des logements"
          ],
          conseils: "Ne compte pas uniquement sur une place en CROUS. Les demandes sont nombreuses et les places limit\xE9es. Pr\xE9pare un plan B avec des logements priv\xE9s en parall\xE8le.",
          liens: [
            {
              label: "trouvermonlogement.etudiant.gouv.fr \u2014 Demander un logement CROUS",
              url: "https://trouvermonlogement.etudiant.gouv.fr"
            },
            {
              label: "messervices.etudiant.gouv.fr \u2014 Dossier Social \xC9tudiant (logement)",
              url: "https://www.messervices.etudiant.gouv.fr"
            }
          ]
        },
        {
          titre: "Le dispositif Visale",
          texte: "Visale est une garantie locative gratuite propos\xE9e par Action Logement :",
          bullets: [
            "Il se porte garant \xE0 ta place aupr\xE8s du propri\xE9taire",
            "Accessible aux \xE9tudiants de moins de 30 ans sans condition de revenus",
            "La demande se fait en ligne sur visale.fr en quelques minutes"
          ],
          conseils: "Obtiens ton visa Visale avant m\xEAme de commencer \xE0 chercher un logement. Certains propri\xE9taires l'acceptent plus facilement qu'un garant physique.",
          liens: [
            {
              label: "visale.fr \u2014 Obtenir sa garantie Visale",
              url: "https://www.visale.fr"
            },
            {
              label: "Service-public.fr \u2014 Visale, caution locative \xE9tudiante",
              url: "https://www.service-public.fr/particuliers/vosdroits/F34002"
            }
          ]
        },
        {
          titre: "Autres aides disponibles",
          texte: "D'autres dispositifs peuvent compl\xE9ter tes ressources :",
          bullets: [
            "La caution Locapass d'Action Logement pour financer ton d\xE9p\xF4t de garantie",
            "Les aides r\xE9gionales au logement \xE9tudiant selon ta r\xE9gion",
            "Les aides d'urgence du CROUS en cas de difficult\xE9s financi\xE8res impr\xE9vues"
          ],
          conseils: "Consulte le site de ta r\xE9gion et de ton CROUS local. Beaucoup d'aides sont peu connues et donc peu demand\xE9es, ce qui augmente tes chances de les obtenir.",
          liens: [
            {
              label: "actionlogement.fr \u2014 Locapass et aides au logement",
              url: "https://www.actionlogement.fr/le-locapass"
            },
            {
              label: "Service-public.fr \u2014 Aides d'urgence CROUS",
              url: "https://www.service-public.fr/particuliers/vosdroits/F1024"
            },
            {
              label: "1jeune1solution.gouv.fr \u2014 Aides logement jeunes",
              url: "https://www.1jeune1solution.gouv.fr/logement"
            }
          ]
        }
      ]
    }
  };
  const slug = Astro2.params.slug;
  const page = pages[slug];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${page.titre} \u2014 Oriento`, "heroSection": true, "data-astro-cid-oo7ah3s3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-wrapper" data-astro-cid-oo7ah3s3> <section class="hero-section" aria-label="Présentation" data-astro-cid-oo7ah3s3> <div class="hero-inner" data-astro-cid-oo7ah3s3> <div class="hero-logo-wrap" data-astro-cid-oo7ah3s3> <img${addAttribute(logoCompletBlanc.src, "src")} alt="Oriento" width="800" height="250" class="hero-logo-img" loading="eager" fetchpriority="high" data-astro-cid-oo7ah3s3> </div> <div class="hero-texte" data-astro-cid-oo7ah3s3> <p data-astro-cid-oo7ah3s3>Trouver un logement</p> <div class="hero-img-wrap" data-astro-cid-oo7ah3s3> <img${addAttribute(Img1.src, "src")} alt="Illustration logement" width="900" height="600" class="hero-img" loading="eager" fetchpriority="high" data-astro-cid-oo7ah3s3> </div> </div> </div> </section> <section class="intro-section" aria-label="Introduction" data-astro-cid-oo7ah3s3> <div class="intro-inner" data-astro-cid-oo7ah3s3> <h1 class="intro-h1" data-astro-cid-oo7ah3s3>${page.titre}</h1> <p class="intro-texte" data-astro-cid-oo7ah3s3>${page.intro}</p> </div> </section> <section class="cards-section" aria-label="Contenu" data-astro-cid-oo7ah3s3> <div class="cards-grid" data-astro-cid-oo7ah3s3> ${page.sections.map((s) => renderTemplate`<div class="card" data-astro-cid-oo7ah3s3> <h3 class="card-titre" data-astro-cid-oo7ah3s3>${s.titre}</h3> ${s.texte && renderTemplate`<p class="card-texte" data-astro-cid-oo7ah3s3>${s.texte}</p>`} ${s.bullets && s.bullets.length > 0 && renderTemplate`<ul class="card-bullets" data-astro-cid-oo7ah3s3> ${s.bullets.map((b) => renderTemplate`<li data-astro-cid-oo7ah3s3>${b}</li>`)} </ul>`} ${renderComponent($$result2, "BoutonConseil", $$BoutonConseil, { "conseils": s.conseils, "data-astro-cid-oo7ah3s3": true })} ${s.liens && s.liens.length > 0 && renderTemplate`<div class="card-liens" data-astro-cid-oo7ah3s3> <p class="card-liens-titre" data-astro-cid-oo7ah3s3>
Sources officielles
</p> <ul class="card-liens-liste" data-astro-cid-oo7ah3s3> ${s.liens.map((lien) => renderTemplate`<li data-astro-cid-oo7ah3s3> <a${addAttribute(lien.url, "href")} target="_blank" rel="noopener noreferrer" class="card-lien" data-astro-cid-oo7ah3s3> <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="lien-icon" data-astro-cid-oo7ah3s3> <path d="M6 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-astro-cid-oo7ah3s3></path> <path d="M9 2h5v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-oo7ah3s3></path> <path d="M14 2 8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-astro-cid-oo7ah3s3></path> </svg> ${lien.label} </a> </li>`)} </ul> </div>`} </div>`)} </div> </section> </div>  ` })}`;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/logement/[slug].astro", void 0);

const $$file = "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/logement/[slug].astro";
const $$url = "/logement/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
