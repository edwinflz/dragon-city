export enum DragonRarity {
	Heroic = 'heroic',
	Mythic = 'mythic',
	Legendary = 'legendary',
}

export enum DragonSpecialSkill {
	Passive = 'passive',
	Active = 'active',
	Mix = 'mix',
}

export enum DragonCategory {
	Category9 = 'Cat.9',
	Category10 = 'Cat.10',
	Category11 = 'Cat.11',
}

export enum DragonFamily {
	Doom = 'doom',
}

export enum DragonSkill {
	Dream = 'images/skills/dream-skill.png',
	Green = 'images/skills/green-skill.png',
	Earth = 'images/skills/earth-skill.png',
	Wind = 'images/skills/wind-skill.png',
	Electric = 'images/skills/electric-skill.png',
	Primal = 'images/skills/primal-skill.png',
	Fire = 'images/skills/fire-skill.png',
	Light = 'images/skills/light-skill.png',
	Chaos = 'images/skills/chaos-skill.png',
	Dark = 'images/skills/dark-skill.png',
	Water = 'images/skills/water-skill.png',
	Pure = 'images/skills/pure-skill.png',
}

export enum DragonStrongSkill {
	StrongSkill = 'images/skills/ic-strong-skill.png',
	StrongSkill3 = 'images/skills/bt_special_attack.png',
	StrongSkill4 = 'images/skills/ic-strong-skill-4.png',
}

export enum DragonElement {
	Chaos = 'images/elements/ic-chaos-flag.png',
	Happiness = 'images/elements/ic-happiness-flag.png',
	Water = 'images/elements/ic-water-flag.png',
	Light = 'images/elements/ic-light-flag.png',
	Fire = 'images/elements/ic-fire-flag.png',
	Electric = 'images/elements/ic-electric-flag.png',
	Time = 'images/elements/ic-time-flag.png',
	Soul = 'images/elements/ic-soul-flag.png',
	Beauty = 'images/elements/ic-beauty-flag.png',
	Dream = 'images/elements/ic-dream-flag.png',
	Green = 'images/elements/ic-plant-flag.png',
	Earth = 'images/elements/ic-earth-flag.png',
	Wind = 'images/elements/ic-wind-flag.png',
	Ice = 'images/elements/ic-ice-flag.png',
	Metal = 'images/elements/ic-metal-flag.png',
	Dark = 'images/elements/ic-dark-flag.png',
	War = 'images/elements/ic-war-flag.png',
	Pure = 'images/elements/ic-pure-flag.png',
	Primal = 'images/elements/ic-primal-flag.png',
	Legend = 'images/elements/ic-legend-flag.png',
	Magic = 'images/elements/ic-magic-flag.png',
}

export enum DragonSkinRank {
	SS = 'images/ranks/SS.webp',
	S_PLUS = 'images/ranks/S+.webp',
	S = 'images/ranks/S.webp',
	S_MINUS = 'images/ranks/S-.webp',
	A_PLUS = 'images/ranks/A+.webp',
	AA = 'images/ranks/AA.webp',
	A = 'images/ranks/A.webp',
	A_MINUS = 'images/ranks/A-.webp',
}

export enum DragonSkinRankLabel {
	SS = 'ss',
	S_PLUS = 's+',
	S = 's',
	S_MINUS = 's-',
	A_PLUS = 'a+',
	AA = 'aa',
	A = 'a',
	A_MINUS = 'a-',
}

export interface Dragon {
	id: number;
	name: string;
	rarity: DragonRarity;
	image: string;
	specialSkillTitle?: string;
	specialSkillDescription?: string;
	specialSkillType: DragonSpecialSkill;
	category: DragonCategory;
	family: DragonFamily;
	elements: DragonElement[];
	criticalElements: DragonElement[];
	weakElements: DragonElement[];
	skills: DragonSkillInfo[];
	skins?: DragonSkin[];
}

export interface DragonSkin {
	name: string;
	image: string;
	rank: DragonSkinRankLabel;
	rankIcon: DragonSkinRank;
	benefits: string[];
}

export interface DragonSkillInfo {
	name?: string;
	image: DragonSkill;
	description?: string;
	isSpecial?: boolean;
	strongSkill?: DragonStrongSkill;
}