const homeImg1 = new Proxy({"src":"/_astro/Home_img1.DHyurye8.avif","width":776,"height":1100,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/coura/OneDrive/Documents/GitHub/projet-co-s2-2026-projet-18-oriento/src/assets/Oriento_img/Home_img1.avif";
							}
							
							return target[name];
						}
					});

export { homeImg1 as h };
