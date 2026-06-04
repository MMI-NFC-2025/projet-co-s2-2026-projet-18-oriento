import { c as createComponent, i as renderComponent, r as renderTemplate, f as createAstro, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_p9yWZfpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_B-6veMXF.mjs';
import { $ as $$BoutonConseil } from '../../chunks/BoutonConseil_DPsAEg-Z.mjs';
import { l as logoCompletBlanc } from '../../chunks/Footer_SRN4hEaZ.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const Img1 = new Proxy({"src":"/_astro/etude_etude_img.DMz2blH1.avif","width":634,"height":404,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/etude_etude_img.avif";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const pages = {
    inscription: {
      titre: "S'inscrire dans un \xE9tablissement",
      intro: "Une fois que tu as choisi ta formation, il faut finaliser ton inscription. Cela implique plusieurs \xE9tapes administratives importantes pour pouvoir commencer tes \xE9tudes dans de bonnes conditions.",
      sections: [
        {
          titre: "D\xE9marches administratives",
          texte: "Chaque \xE9tablissement peut avoir ses propres proc\xE9dures, mais voici les principales \xE9tapes :",
          bullets: [
            "Remplir le dossier d'inscription formulaire en ligne ou papier, avec toutes les informations personnelles et acad\xE9miques",
            "Fournir les documents requis : pi\xE8ce d'identit\xE9, dipl\xF4me ou relev\xE9 de notes, certificat de scolarit\xE9 pr\xE9c\xE9dent, etc.",
            "Valider ton inscription : l'\xE9tablissement confirme que ton dossier est complet et accept\xE9"
          ],
          conseils: "Pr\xE9pare une copie num\xE9rique de tous tes documents et garde-les dans un dossier cloud accessible partout.",
          liens: [
            {
              label: "Service-public.fr \u2014 S'inscrire dans l'enseignement sup\xE9rieur",
              url: "https://www.service-public.fr/particuliers/vosdroits/F2865"
            },
            {
              label: "Service-public.fr \u2014 Pi\xE8ces justificatives courantes",
              url: "https://www.service-public.fr/particuliers/vosdroits/F1168"
            }
          ]
        },
        {
          titre: "Paiement des frais de scolarit\xE9",
          texte: "Les frais de scolarit\xE9 varient selon l'\xE9tablissement :",
          bullets: [
            "Certaines \xE9coles proposent des facilit\xE9s de paiement ou des bourses",
            "Le paiement peut se faire en ligne ou via virement bancaire",
            "Certains \xE9tablissements proposent un accompagnement pour les situations financi\xE8res difficiles"
          ],
          conseils: "Renseigne-toi sur les bourses disponibles (CROUS, bourses r\xE9gionales) avant de payer. Beaucoup d'\xE9tudiants y ont droit sans le savoir.",
          liens: [
            {
              label: "Service-public.fr \u2014 Frais d'inscription dans le sup\xE9rieur",
              url: "https://www.service-public.fr/particuliers/vosdroits/F2865"
            },
            {
              label: "messervices.etudiant.gouv.fr \u2014 Demander une bourse (DSE)",
              url: "https://www.messervices.etudiant.gouv.fr"
            }
          ]
        },
        {
          titre: "Cr\xE9ation du compte \xE9tudiant",
          texte: "Ton compte \xE9tudiant te permettra d'acc\xE9der \xE0 :",
          bullets: [
            "La plateforme de cours et ressources en ligne",
            "L'emploi du temps",
            "La messagerie interne de l'\xE9tablissement",
            "Les informations administratives et financi\xE8res"
          ],
          conseils: "Active les notifications pour ne manquer aucune information importante de ton \xE9tablissement.",
          liens: [
            {
              label: "messervices.etudiant.gouv.fr \u2014 Espace \xE9tudiant",
              url: "https://www.messervices.etudiant.gouv.fr"
            }
          ]
        },
        {
          titre: "Carte \xE9tudiante",
          texte: "La carte \xE9tudiante est utile pour :",
          bullets: [
            "Acc\xE9der aux biblioth\xE8ques, laboratoires et salles informatiques",
            "B\xE9n\xE9ficier des tarifs r\xE9duits dans les transports ou pour des activit\xE9s culturelles",
            "Justifier ton statut d'\xE9tudiant aupr\xE8s d'organismes et administrations"
          ],
          conseils: "Ta carte \xE9tudiante te donne souvent acc\xE8s \xE0 des r\xE9ductions dans de nombreux commerces et services. N'oublie pas de la pr\xE9senter !",
          liens: [
            {
              label: "Service-public.fr \u2014 Carte d'\xE9tudiant des m\xE9tiers",
              url: "https://www.service-public.fr/particuliers/vosdroits/F15984"
            }
          ]
        }
      ]
    },
    orientation: {
      titre: "Choisir son orientation",
      intro: "Choisir sa formation est une \xE9tape cl\xE9. Il existe de nombreuses ressources pour t'aider \xE0 trouver la voie qui te correspond.",
      sections: [
        {
          titre: "Parcoursup",
          texte: "Parcoursup est la plateforme nationale d'admission dans l'enseignement sup\xE9rieur :",
          bullets: [
            "Consulter les formations disponibles et leurs crit\xE8res",
            "Constituer et envoyer ton dossier",
            "Suivre tes candidatures et r\xE9pondre aux offres"
          ],
          conseils: "Candidate \xE0 des formations vari\xE9es (niveau, type) pour maximiser tes chances. Ne mets pas tous tes \u0153ufs dans le m\xEAme panier.",
          liens: [
            {
              label: "Parcoursup \u2014 Plateforme officielle",
              url: "https://www.parcoursup.gouv.fr"
            },
            {
              label: "Service-public.fr \u2014 Parcoursup, comment \xE7a marche",
              url: "https://www.service-public.fr/particuliers/vosdroits/F23476"
            }
          ]
        },
        {
          titre: "Les types de formations",
          texte: "Il existe plusieurs types de formations apr\xE8s le bac :",
          bullets: [
            "Universit\xE9 (licence, master, doctorat)",
            "BTS et BUT (formations professionnalisantes courtes)",
            "Classes pr\xE9paratoires (CPGE)",
            "\xC9coles sp\xE9cialis\xE9es (commerce, ing\xE9nierie, art...)"
          ],
          conseils: "Les BTS et BUT offrent une insertion professionnelle rapide. L'universit\xE9 offre plus de flexibilit\xE9 pour se r\xE9orienter.",
          liens: [
            {
              label: "Onisep \u2014 Explorer les formations",
              url: "https://www.onisep.fr/formation"
            },
            {
              label: "orientation.gouv.fr \u2014 Choisir son orientation",
              url: "https://www.orientation.gouv.fr"
            }
          ]
        }
      ]
    },
    aidesetudiantes: {
      titre: "Demander les aides \xE9tudiantes",
      intro: "En tant qu'\xE9tudiant, tu peux b\xE9n\xE9ficier de nombreuses aides financi\xE8res pour t'aider \xE0 financer tes \xE9tudes, ton logement ou ta vie quotidienne. Voici tout ce qu'il faut savoir pour en profiter.",
      sections: [
        {
          titre: "Bourses \xE9tudiantes",
          texte: "La bourse sur crit\xE8res sociaux est l'aide la plus connue :",
          bullets: [
            "Attribu\xE9e par le CROUS selon les revenus de la famille et la situation personnelle",
            "Plusieurs \xE9chelons existent, de 0bis \xE0 7 \u2014 plus l'\xE9chelon est \xE9lev\xE9, plus le montant est important",
            "La demande se fait via le Dossier Social \xC9tudiant (DSE) sur messervices.etudiant.gouv.fr"
          ],
          conseils: "Fais ta demande de bourse d\xE8s le mois d'avril, m\xEAme si tu n'es pas encore inscrit dans une formation. Il vaut mieux anticiper : les d\xE9lais peuvent \xEAtre longs.",
          liens: [
            {
              label: "messervices.etudiant.gouv.fr \u2014 Constituer son DSE",
              url: "https://www.messervices.etudiant.gouv.fr"
            },
            {
              label: "Service-public.fr \u2014 Bourse sur crit\xE8res sociaux",
              url: "https://www.service-public.fr/particuliers/vosdroits/F12216"
            }
          ]
        },
        {
          titre: "Aides au logement",
          texte: "Se loger est souvent le poste de d\xE9pense le plus lourd pour un \xE9tudiant :",
          bullets: [
            "L'APL (Aide Personnalis\xE9e au Logement) est vers\xE9e par la CAF directement sur ton loyer",
            "Les r\xE9sidences CROUS proposent des logements \xE0 tarifs r\xE9duits \xE0 demander sur trouvermonlogement.etudiant.gouv.fr",
            "Certaines r\xE9gions proposent des aides compl\xE9mentaires au logement \xE9tudiant"
          ],
          conseils: "Fais ta demande d'APL d\xE8s ton entr\xE9e dans le logement. Chaque mois sans demande est un mois d'aide perdu d\xE9finitivement.",
          liens: [
            {
              label: "CAF.fr \u2014 Aide au logement \xE9tudiant",
              url: "https://www.caf.fr/allocataires/droits-et-prestations/s-informer-sur-les-aides/logement-et-cadre-de-vie/l-aide-au-logement"
            },
            {
              label: "Service-public.fr \u2014 APL, ALS, ALF pour \xE9tudiant",
              url: "https://www.service-public.fr/particuliers/vosdroits/F1563"
            },
            {
              label: "trouvermonlogement.etudiant.gouv.fr \u2014 R\xE9sidences CROUS",
              url: "https://trouvermonlogement.etudiant.gouv.fr"
            }
          ]
        },
        {
          titre: "Aides r\xE9gionales",
          texte: "En dehors des aides nationales, ta r\xE9gion peut proposer des dispositifs sp\xE9cifiques :",
          bullets: [
            "Bourses r\xE9gionales pour les formations non couvertes par le CROUS",
            "Aides \xE0 la mobilit\xE9 internationale pour les s\xE9jours \xE0 l'\xE9tranger",
            "Aides au permis de conduire ou aux transports selon les r\xE9gions"
          ],
          conseils: "Consulte le site de ta r\xE9gion et de ton \xE9tablissement : beaucoup d'aides r\xE9gionales sont m\xE9connues et peu demand\xE9es, ce qui augmente tes chances de les obtenir.",
          liens: [
            {
              label: "Service-public.fr \u2014 Bourses et aides pour \xE9tudiant",
              url: "https://www.service-public.fr/particuliers/vosdroits/N20398"
            },
            {
              label: "1jeune1solution.gouv.fr \u2014 Toutes les aides",
              url: "https://www.1jeune1solution.gouv.fr/aides-et-formations"
            }
          ]
        },
        {
          titre: "Aides sp\xE9cifiques selon ta situation",
          texte: "Certaines situations ouvrent droit \xE0 des aides suppl\xE9mentaires :",
          bullets: [
            "\xC9tudiant en situation de handicap : AEEH, am\xE9nagements p\xE9dagogiques, aides de la MDPH",
            "\xC9tudiant isol\xE9 ou en rupture familiale : aide d'urgence du CROUS, CVEC r\xE9duite",
            "\xC9tudiant salari\xE9 ou alternant : droits sp\xE9cifiques \xE0 la formation et aides \xE0 l'\xE9quipement"
          ],
          conseils: "Si tu te retrouves en difficult\xE9 financi\xE8re en cours d'ann\xE9e, contacte le service social du CROUS. Des aides d'urgence existent et peuvent \xEAtre d\xE9bloqu\xE9es rapidement.",
          liens: [
            {
              label: "Service-public.fr \u2014 Aide d'urgence CROUS",
              url: "https://www.service-public.fr/particuliers/vosdroits/F1024"
            },
            {
              label: "Service-public.fr \u2014 \xC9tudiant en situation de handicap",
              url: "https://www.service-public.fr/particuliers/vosdroits/F20559"
            }
          ]
        }
      ]
    }
  };
  const slug = Astro2.params.slug;
  const page = pages[slug];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${page.titre} \u2014 Oriento`, "heroSection": true, "data-astro-cid-2xqnjs3g": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-wrapper" data-astro-cid-2xqnjs3g> <section class="hero-section" aria-label="Présentation" data-astro-cid-2xqnjs3g> <div class="hero-inner" data-astro-cid-2xqnjs3g> <div class="hero-logo-wrap" data-astro-cid-2xqnjs3g> <img${addAttribute(logoCompletBlanc.src, "src")} alt="Oriento" width="800" height="250" class="hero-logo-img" loading="eager" fetchpriority="high" data-astro-cid-2xqnjs3g> </div> <div class="hero-texte" data-astro-cid-2xqnjs3g> <p data-astro-cid-2xqnjs3g>Les études</p> <div class="hero-img-wrap" data-astro-cid-2xqnjs3g> <img${addAttribute(Img1.src, "src")} alt="Illustration les études" width="900" height="600" class="hero-img" loading="eager" fetchpriority="high" data-astro-cid-2xqnjs3g> </div> </div> </div> </section> <section class="intro-section" aria-label="Introduction" data-astro-cid-2xqnjs3g> <div class="intro-inner" data-astro-cid-2xqnjs3g> <h1 class="intro-h1" data-astro-cid-2xqnjs3g>${page.titre}</h1> <p class="intro-texte" data-astro-cid-2xqnjs3g>${page.intro}</p> </div> </section> <section class="cards-section" aria-label="Contenu" data-astro-cid-2xqnjs3g> <div class="cards-grid" data-astro-cid-2xqnjs3g> ${page.sections.map((s) => renderTemplate`<div class="card" data-astro-cid-2xqnjs3g> <h3 class="card-titre" data-astro-cid-2xqnjs3g>${s.titre}</h3> ${s.texte && renderTemplate`<p class="card-texte" data-astro-cid-2xqnjs3g>${s.texte}</p>`} ${s.bullets && s.bullets.length > 0 && renderTemplate`<ul class="card-bullets" data-astro-cid-2xqnjs3g> ${s.bullets.map((b) => renderTemplate`<li data-astro-cid-2xqnjs3g>${b}</li>`)} </ul>`} ${renderComponent($$result2, "BoutonConseil", $$BoutonConseil, { "conseils": s.conseils, "data-astro-cid-2xqnjs3g": true })} ${s.liens && s.liens.length > 0 && renderTemplate`<div class="card-liens" data-astro-cid-2xqnjs3g> <p class="card-liens-titre" data-astro-cid-2xqnjs3g>
Sources officielles
</p> <ul class="card-liens-liste" data-astro-cid-2xqnjs3g> ${s.liens.map((lien) => renderTemplate`<li data-astro-cid-2xqnjs3g> <a${addAttribute(lien.url, "href")} target="_blank" rel="noopener noreferrer" class="card-lien" data-astro-cid-2xqnjs3g> <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="lien-icon" data-astro-cid-2xqnjs3g> <path d="M6 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-astro-cid-2xqnjs3g></path> <path d="M9 2h5v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2xqnjs3g></path> <path d="M14 2 8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-astro-cid-2xqnjs3g></path> </svg> ${lien.label} </a> </li>`)} </ul> </div>`} </div>`)} </div> </section> </div>  ` })}`;
}, "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/etudes/[slug].astro", void 0);

const $$file = "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/pages/etudes/[slug].astro";
const $$url = "/etudes/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
