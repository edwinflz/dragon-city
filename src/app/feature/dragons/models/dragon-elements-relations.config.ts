import { DragonElement, DragonSkinRankLabel } from './dragon.model';

export interface ElementRelations {
	strong: DragonElement[];
	weak: DragonElement[];
}

export const ELEMENT_RELATIONS: Record<DragonElement, ElementRelations> = {
	[DragonElement.Earth]: {
		strong: [DragonElement.Electric, DragonElement.Fire],
		weak: [DragonElement.Metal, DragonElement.War]
	},
	[DragonElement.Fire]: {
		strong: [DragonElement.Ice, DragonElement.Green],
		weak: [DragonElement.Water, DragonElement.Earth]
	},
	[DragonElement.Water]: {
		strong: [DragonElement.Fire, DragonElement.War],
		weak: [DragonElement.Electric, DragonElement.Green]
	},
	[DragonElement.Green]: {
		strong: [DragonElement.Water, DragonElement.Light],
		weak: [DragonElement.Fire, DragonElement.Ice]
	},
	[DragonElement.Electric]: {
		strong: [DragonElement.Water, DragonElement.Metal],
		weak: [DragonElement.Earth, DragonElement.Light]
	},
	[DragonElement.Ice]: {
		strong: [DragonElement.Green, DragonElement.War],
		weak: [DragonElement.Fire, DragonElement.Metal]
	},
	[DragonElement.Metal]: {
		strong: [DragonElement.Earth, DragonElement.Ice],
		weak: [DragonElement.Electric, DragonElement.Dark]
	},
	[DragonElement.Dark]: {
		strong: [DragonElement.Metal, DragonElement.Light],
		weak: [DragonElement.War]
	},
	[DragonElement.Light]: {
		strong: [DragonElement.Electric, DragonElement.Dark],
		weak: [DragonElement.Green]
	},
	[DragonElement.War]: {
		strong: [DragonElement.Earth, DragonElement.Dark],
		weak: [DragonElement.Water, DragonElement.Ice]
	},
	[DragonElement.Pure]: {
		strong: [DragonElement.Wind],
		weak: [DragonElement.Primal]
	},
	[DragonElement.Legend]: {
		strong: [DragonElement.Primal],
		weak: [DragonElement.Pure]
	},
	[DragonElement.Primal]: {
		strong: [DragonElement.Pure],
		weak: [DragonElement.Time]
	},
	[DragonElement.Wind]: {
		strong: [DragonElement.Time],
		weak: [DragonElement.Legend]
	},
	[DragonElement.Time]: {
		strong: [DragonElement.Legend],
		weak: [DragonElement.Wind]
	},

	// Elementos especiales
	[DragonElement.Happiness]: {
		strong: [DragonElement.Chaos, DragonElement.Magic],
		weak: [DragonElement.Dream, DragonElement.Beauty]
	},
	[DragonElement.Chaos]: {
		strong: [DragonElement.Magic, DragonElement.Soul],
		weak: [DragonElement.Happiness, DragonElement.Dream]
	},
	[DragonElement.Magic]: {
		strong: [DragonElement.Soul, DragonElement.Beauty],
		weak: [DragonElement.Happiness, DragonElement.Chaos]
	},
	[DragonElement.Soul]: {
		strong: [DragonElement.Beauty, DragonElement.Dream],
		weak: [DragonElement.Chaos, DragonElement.Magic]
	},
	[DragonElement.Beauty]: {
		strong: [DragonElement.Dream, DragonElement.Happiness],
		weak: [DragonElement.Magic, DragonElement.Soul]
	},
	[DragonElement.Dream]: {
		strong: [DragonElement.Happiness, DragonElement.Chaos],
		weak: [DragonElement.Soul, DragonElement.Beauty]
	},
};

export const SKIN_RANK_VALUES: Record<DragonSkinRankLabel, number> = {
	[DragonSkinRankLabel.SS]: 8,
	[DragonSkinRankLabel.S_PLUS]: 7,
	[DragonSkinRankLabel.S]: 6,
	[DragonSkinRankLabel.S_MINUS]: 5,
	[DragonSkinRankLabel.A_PLUS]: 4,
	[DragonSkinRankLabel.AA]: 3,
	[DragonSkinRankLabel.A]: 2,
	[DragonSkinRankLabel.A_MINUS]: 1
};

export function getSkinRankValue(rank: DragonSkinRankLabel): number {
	return SKIN_RANK_VALUES[rank];
}

export function getStrongAgainst(element: DragonElement): DragonElement[] {
  return ELEMENT_RELATIONS[element]?.strong || [];
}

export function getWeakAgainst(element: DragonElement): DragonElement[] {
  return ELEMENT_RELATIONS[element]?.weak || [];
}