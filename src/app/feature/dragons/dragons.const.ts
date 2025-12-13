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
					'La cantidad de marcas de fatalidad que aplica la habilidad Marca maldita aumenta de 1 a 2.',
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
	}
]