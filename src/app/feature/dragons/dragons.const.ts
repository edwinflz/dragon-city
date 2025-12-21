import { DragonCategory, DragonElement, DragonFamily, DragonRarity, DragonSkill, DragonSkinRank, DragonSkinRankLabel, DragonSpecialSkill, DragonStrongSkill } from "./models/dragon.model";

export const DRAGONS = [
	{
		id: 1,
		name: 'Dragón bailarín maldito',
		rarity: DragonRarity.Mythic,
		image: 'images/dragons/dragon_doomdancer.png',
		specialSkills: [
			{
				title: 'Marca Maldita',
				description: 'Aplica una Marca maldita al unirse de forma activa a la batalla.',
				type: DragonSpecialSkill.Passive
			}
		],
		category: DragonCategory.Category10,
		family: DragonFamily.Doom,
		elements: [DragonElement.Dream, DragonElement.Green, DragonElement.Earth, DragonElement.Wind],
		criticalElements: [
			DragonElement.Chaos,
			DragonElement.Happiness,
			DragonElement.Water,
			DragonElement.Light,
			DragonElement.Fire,
			DragonElement.Electric,
			DragonElement.Time,
		],
		weakElements: [
			DragonElement.Soul,
			DragonElement.Beauty
		],
		skins: [
			{
				name: 'Bone Skill Skin',
				image: 'images/skins/dragon_doomdancer_skin1.png',
				rank: DragonSkinRankLabel.AA,
				rankIcon: DragonSkinRank.AA,
				benefits: [
					'La cantidad de marcas de perdición que aplica la habilidad Marca maldita aumenta de 1 a 2.',
					'El poder de la habilidad Baile maldito aumenta de 1,700 a 2,100.',
					'Los turnos de enfriamiento (cooldown) de la habilidad Baile maldito se reducen de 3 a 2.',
				]
			},
			{
				name: 'Glacial Skill Skin',
				image: 'images/skins/dragon_doomdancer_skin2.png',
				rank: DragonSkinRankLabel.A_PLUS,
				rankIcon: DragonSkinRank.A_PLUS,
				benefits: [
					'Aumenta en un 25% la salud y el daño del dragón.',
				]
			}
		],
		skills: [
			{
				name: 'Baile maldito',
				image: DragonSkill.Dream,
				description: 'Provoca daño y aplica 2 Marcas malditas.',
				isSpecial: true,
				strongSkill: DragonStrongSkill.StrongSkill
			},
			{
				name: 'Guarda maldito',
				image: DragonSkill.Green,
				description: 'Provoca daño y reduce el daño provocado al usuario y a los aliados durante varios turnos.',
				isSpecial: true,
				strongSkill: DragonStrongSkill.StrongSkill4
			},
			{
				image: DragonSkill.Earth,
			},
			{
				image: DragonSkill.Wind,
			}
		]
	},
	{
		id: 2,
		name: 'Dragón tambor maldito',
		rarity: DragonRarity.Legendary,
		image: 'images/dragons/dragon_doomdrummer.png',
		specialSkills: [
			{
				title: 'Marca Maldita',
				description: 'Aplica Marca maldita cuando el usuario está noqueado.',
				type: DragonSpecialSkill.Passive
			}
		],
		category: DragonCategory.Category9,
		family: DragonFamily.Doom,
		elements: [DragonElement.Electric, DragonElement.Primal, DragonElement.Fire, DragonElement.Light],
		criticalElements: [
			DragonElement.Water,
			DragonElement.Metal,
			DragonElement.Pure,
			DragonElement.Green,
			DragonElement.Ice,
			DragonElement.Electric,
			DragonElement.Dark,
		],
		weakElements: [
			DragonElement.Earth,
			DragonElement.Light
		],
		skins: [
			{
				name: 'Ritual Skill Skin',
				image: 'images/skins/dragon_doomdrummer_skin1.png',
				rank: DragonSkinRankLabel.AA,
				rankIcon: DragonSkinRank.AA,
				benefits: [
					'La cantidad de marcas de perdición que aplica la habilidad Marca maldita aumenta de 2 a 3.',
					'El poder de la habilidad Tambor maldito aumenta de 1,800 a 2,100.',
					'Los turnos de enfriamiento (cooldown) de la habilidad Tambor maldito se reducen de 3 a 2',
				]
			},
			{
				name: 'Drummer Skill Skin',
				image: 'images/skins/dragon_doomdrummer_skin2.png',
				rank: DragonSkinRankLabel.A_PLUS,
				rankIcon: DragonSkinRank.A_PLUS,
				benefits: [
					'Aumenta en un 25% la salud y el daño del dragón.',
				]
			}
		],
		skills: [
			{
				name: 'Tambor maldito',
				image: DragonSkill.Electric,
				description: 'Provoca daño y aplica 2 Marcas malditas.',
				isSpecial: true,
				strongSkill: DragonStrongSkill.StrongSkill
			},
			{
				image: DragonSkill.Primal,
			},
			{
				image: DragonSkill.Fire,
			},
			{
				image: DragonSkill.Light,
			}
		]
	},
	{
		id: 3,
		name: 'Noble dragón sacerdotisa mortal',
		rarity: DragonRarity.Heroic,
		image: 'images/dragons/dragon_highdoompriestess.png',
		specialSkills: [
			{
				title: 'Marca Maldita',
				description: 'Aplica una Marca maldita al unirse de forma activa a la batalla.',
				type: DragonSpecialSkill.Passive
			}
		],
		category: DragonCategory.Category11,
		family: DragonFamily.Doom,
		elements: [DragonElement.Chaos, DragonElement.Dark, DragonElement.Water, DragonElement.Pure],
		criticalElements: [
			DragonElement.Magic,
			DragonElement.Soul,
			DragonElement.Metal,
			DragonElement.Light,
			DragonElement.Fire,
			DragonElement.War,
			DragonElement.Wind,
		],
		weakElements: [
			DragonElement.Dream,
			DragonElement.Happiness
		],
		skins: [
			{
				name: 'Autumn Skill Skin',
				image: 'images/skins/dragon_highdoompriestess_skin1.png',
				rank: DragonSkinRankLabel.A_PLUS,
				rankIcon: DragonSkinRank.A_PLUS,
				benefits: [
					'La cantidad de marcas de perdición que aplica la habilidad Marca Maldita aumenta de 1 a 3.',
				]
			},
			{
				name: 'Skeleton Skill Skin',
				image: 'images/skins/dragon_highdoompriestess_skin2.png',
				rank: DragonSkinRankLabel.AA,
				rankIcon: DragonSkinRank.AA,
				benefits: [
					'Aumenta en un 25% la salud y el daño del dragón.',
				]
			}
		],
		skills: [
			{
				name: 'Los marcados',
				image: DragonSkill.Chaos,
				description: 'Provoca daño y aplica 2 Marcas malditas.',
				isSpecial: true,
				strongSkill: DragonStrongSkill.StrongSkill
			},
			{
				name: 'Visión sacerdotisa',
				image: DragonSkill.Dark,
				description: 'Daña a todos los oponentes, pero el usuario también recibe daño.',
				isSpecial: true,
				strongSkill: DragonStrongSkill.StrongSkill
			},
			{
				image: DragonSkill.Water,
				isSpecial: true,
				strongSkill: DragonStrongSkill.StrongSkill3
			},
			{
				image: DragonSkill.Pure,
			}
		]
	},
	{
		id: 4,
		name: 'Noble dragón volador acorazado',
		rarity: DragonRarity.Heroic,
		image: 'images/dragons/dragon_highflightarmored.png',
		specialSkills: [
			{
				title: 'Armadura',
				description: 'Aplica un 30% de armadura a todos los aliados.',
				type: DragonSpecialSkill.Active
			}
		],
		category: DragonCategory.Category11,
		family: DragonFamily.Armor,
		elements: [DragonElement.Primal, DragonElement.Green, DragonElement.Pure, DragonElement.Chaos],
		criticalElements: [
			DragonElement.Pure,
			DragonElement.Water,
			DragonElement.Light,
			DragonElement.Wind,
			DragonElement.Magic,
			DragonElement.Soul
		],
		weakElements: [
			DragonElement.Legend
		],
		skins: [
			{
				name: 'Vined Skill Skin',
				image: 'images/skins/dragon_highflightarmored_skin1.png',
				rank: DragonSkinRankLabel.AA,
				rankIcon: DragonSkinRank.AA,
				benefits: [
					'El poder de la habilidad Quitaenredaderas aumenta de 1.600 a 2.000.',
					'El multiplicador de curación de la habilidad Quitaenredaderas aumenta de x1,5 a x1,7.',
					'La habilidad Quitaenredaderas pasa a llamarse Drenaje de Manglar.',
					'El poder de la habilidad Armadura voladora aumenta de 1.650 a 2.100.',
					'La segunda barra de vida de la habilidad Armadura voladora aumenta de 30 % a 35 %.',
					'El tiempo de reutilización de la habilidad Armadura voladora se reduce de 3 a 2 turnos.',
					'La habilidad Armadura voladora pasa a llamarse Armadura Cielo Alto.'
				]
			},
			{
				name: 'Plated Skill Skin',
				image: 'images/skins/dragon_highflightarmored_skin2.png',
				rank: DragonSkinRankLabel.AA,
				rankIcon: DragonSkinRank.AA,
				benefits: [
					'Incrementa en un 25 % las estadísticas de salud y daño del dragón.'
				]
			}
		],
		skills: [
			{
				image: DragonSkill.Primal,
			},
			{
				name: 'Quitaenredaderas',
				image: DragonSkill.Green,
				description: 'Provoca daño y cura solo a los aliados.',
				isSpecial: true,
				strongSkill: DragonStrongSkill.StrongSkill
			},
			{
				name: 'Armadura voladora',
				image: DragonSkill.Pure,
				description: 'Provoca daño y aplica un 30% de armadura al usuario.',
				isSpecial: true,
				strongSkill: DragonStrongSkill.StrongSkill
			},
			{
				image: DragonSkill.Chaos,
			}
		]
	},
	{
		id: 5,
		name: 'Dragón criogénico acorazado',
		rarity: DragonRarity.Legendary,
		image: 'images/dragons/dragon_cryoarmored.png',
		specialSkills: [
			{
				title: '',
				description: '',
				type: DragonSpecialSkill.Active
			}
		],
		category: DragonCategory.Category9,
		family: DragonFamily.Armor,
		elements: [DragonElement.Ice, DragonElement.Time, DragonElement.Electric, DragonElement.Happiness],
		criticalElements: [
			DragonElement.Green,
			DragonElement.War,
			DragonElement.Legend,
			DragonElement.Water,
			DragonElement.Metal,
			DragonElement.Magic,
			DragonElement.Chaos
		],
		weakElements: [
			DragonElement.Fire,
			DragonElement.Metal
		],
		skins: [
			{
				name: 'Cryo Skill Skin',
				image: 'images/skins/dragon_cryoarmored_skin1.png',
				rank: DragonSkinRankLabel.A_PLUS,
				rankIcon: DragonSkinRank.A_PLUS,
				benefits: [
					'Aumenta la salud y el daño del dragón en un 30%.'
				]
			}
		],
		skills: [
			{
				name: 'Criogénico acorazado',
				image: DragonSkill.Ice,
				description: 'Provoca daño y aplica un 40% de armadura al usuario.',
				isSpecial: true,
				strongSkill: DragonStrongSkill.StrongSkill
			},
			{
				image: DragonSkill.Time,
			},
			{
				name: 'Segundo golpe',
				image: DragonSkill.Electric,
				description: 'Provoca daño y otorga un turno extra.',
				isSpecial: true,
				strongSkill: DragonStrongSkill.StrongSkill
			},
			{
				image: DragonSkill.Happiness,
			}
		]
	},
	{
		id: 6,
		name: 'Noble dragón civil acorazado ',
		rarity: DragonRarity.Heroic,
		image: 'images/dragons/dragon_highcivilarmored.png',
		specialSkills: [
			{
				title: 'Armadura',
				description: 'Aplica un 50% de armadura al usuario.',
				type: DragonSpecialSkill.Passive
			},
			{
				title: 'Hiperdisparo',
				description: 'Los golpes críticos también provocan daño a otros 2 oponentes.',
				type: DragonSpecialSkill.Passive
			},
		],
		category: DragonCategory.Category11,
		family: DragonFamily.Armor,
		elements: [DragonElement.War, DragonElement.Magic, DragonElement.Earth, DragonElement.Soul],
		criticalElements: [
			DragonElement.Earth,
			DragonElement.Dark,
			DragonElement.Soul,
			DragonElement.Beauty,
			DragonElement.Fire,
			DragonElement.Electric,
			DragonElement.Dream
		],
		weakElements: [
			DragonElement.Water,
			DragonElement.Ice
		],
		skins: [
			{
				name: 'Rebellion Skill Skin',
				image: 'images/skins/dragon_highcivilarmored_skin1.png',
				rank: DragonSkinRankLabel.AA,
				rankIcon: DragonSkinRank.AA,
				benefits: [
					'Aumenta la salud y el daño del dragón en un 25%.'
				]
			},
			{
				name: 'United Skill Skin',
				image: 'images/skins/dragon_highcivilarmored_skin2.png',
				rank: DragonSkinRankLabel.S_MINUS,
				rankIcon: DragonSkinRank.S_MINUS,
				benefits: [
					'El poder de la habilidad Armadura Encantada aumenta de 1.500 a 1.700.',
					'La habilidad Armadura Encantada pasa a llamarse Armadura Bendita.',
					'El poder de la habilidad Espíritu Paladín aumenta de 1.800 a 2.000.',
					'Los multiplicadores de daño de las habilidades Armadura Encantada y Espíritu Paladín aumentan de x1,4 a x1,6.',
					'La habilidad Espíritu Paladín pasa a llamarse Espíritus del Paladín.',
					'Obtiene la habilidad HyperShot.'
				]
			}
		],
		skills: [
			{
				image: DragonSkill.War,
			},
			{
				name: 'Armadura encantada',
				image: DragonSkill.Magic,
				description: 'Provoca daño y aplica un 50% de armadura al usuario.',
				isSpecial: true,
				strongSkill: DragonStrongSkill.StrongSkill
			},
			{
				image: DragonSkill.Earth,
			},
			{
				name: 'Espíritu paladín',
				image: DragonSkill.Soul,
				description: 'Provoca daño a todos los oponentes',
				isSpecial: true,
				strongSkill: DragonStrongSkill.StrongSkill
			}
		]
	},
	{
		id: 7,
		name: 'Dragón escamoso acorazado',
		rarity: DragonRarity.Mythic,
		image: 'images/dragons/dragon_scalyarmored.png',
		specialSkills: [
			{
				title: '',
				description: '',
				type: DragonSpecialSkill.Active
			}
		],
		category: DragonCategory.Category10,
		family: DragonFamily.Armor,
		elements: [DragonElement.Wind, DragonElement.Magic, DragonElement.Metal, DragonElement.Beauty],
		criticalElements: [
			DragonElement.Time,
			DragonElement.Soul,
			DragonElement.Beauty,
			DragonElement.Earth,
			DragonElement.Ice,
			DragonElement.Dream,
			DragonElement.Happiness
		],
		weakElements: [
			DragonElement.Pure
		],
		skins: [
			{
				name: 'Scaly Skill Skin',
				image: 'images/skins/dragon_scalyarmored_skin1.png',
				rank: DragonSkinRankLabel.A_PLUS,
				rankIcon: DragonSkinRank.A_PLUS,
				benefits: [
					'Aumenta la salud y el daño del dragón en un 25%.'
				]
			}
		],
		skills: [
			{
				image: DragonSkill.Wind,
			},
			{
				image: DragonSkill.Magic,
			},
			{
				name: 'Coraza escamada',
				image: DragonSkill.Metal,
				description: 'Provoca daño y aplica un 25% de armadura al usuario.',
				isSpecial: true,
				strongSkill: DragonStrongSkill.StrongSkill
			},
			{
				name: 'Imitación celosa',
				image: DragonSkill.Beauty,
				description: 'Copia el último ataque o habilidad recibido (incluido el elemento) con un 20% de daño potenciado.',
				isSpecial: true,
				strongSkill: DragonStrongSkill.StrongSkill
			}
		]
	},
]