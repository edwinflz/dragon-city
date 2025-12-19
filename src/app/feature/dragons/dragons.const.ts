import { DragonCategory, DragonElement, DragonFamily, DragonRarity, DragonSkill, DragonSkinRank, DragonSkinRankLabel, DragonSpecialSkill, DragonStrongSkill } from "./models/dragon.model";

export const DRAGONS = [
	{
		id: 1,
		name: 'Dragón bailarín maldito',
		rarity: DragonRarity.Mythic,
		image: 'images/dragons/dragon_doomdancer.png',
		specialSkillTitle: 'Marca Maldita',
		specialSkillDescription: 'Aplica una Marca maldita al unirse de forma activa a la batalla.',
		specialSkillType: DragonSpecialSkill.Passive,
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
		specialSkillTitle: 'Marca Maldita',
		specialSkillDescription: 'Aplica Marca maldita cuando el usuario está noqueado.',
		specialSkillType: DragonSpecialSkill.Passive,
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
		specialSkillTitle: 'Marca Maldita',
		specialSkillDescription: 'Aplica una Marca maldita al unirse de forma activa a la batalla.',
		specialSkillType: DragonSpecialSkill.Passive,
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
		specialSkillTitle: 'Armadura',
		specialSkillDescription: 'Aplica un 30% de armadura a todos los aliados.',
		specialSkillType: DragonSpecialSkill.Active,
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
]