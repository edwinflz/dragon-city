import {
	DragonElement,
	DragonSkill,
	DragonStrongSkill,
	DragonSkinRankLabel,
	DragonSkinRank
} from '../models/dragon.model';
import { ElementOption, SkillOption, SelectOption } from '../models/select-options.model';

export function getElementOptions(): ElementOption[] {
	return [
		{ value: DragonElement.Beauty, label: 'Beauty', image: DragonElement.Beauty },
		{ value: DragonElement.Chaos, label: 'Chaos', image: DragonElement.Chaos },
		{ value: DragonElement.Dark, label: 'Dark', image: DragonElement.Dark },
		{ value: DragonElement.Dream, label: 'Dream', image: DragonElement.Dream },
		{ value: DragonElement.Earth, label: 'Earth', image: DragonElement.Earth },
		{ value: DragonElement.Electric, label: 'Electric', image: DragonElement.Electric },
		{ value: DragonElement.Fire, label: 'Fire', image: DragonElement.Fire },
		{ value: DragonElement.Green, label: 'Green', image: DragonElement.Green },
		{ value: DragonElement.Happiness, label: 'Happiness', image: DragonElement.Happiness },
		{ value: DragonElement.Ice, label: 'Ice', image: DragonElement.Ice },
		{ value: DragonElement.Light, label: 'Light', image: DragonElement.Light },
		{ value: DragonElement.Legend, label: 'Legend', image: DragonElement.Legend },
		{ value: DragonElement.Magic, label: 'Magic', image: DragonElement.Magic },
		{ value: DragonElement.Metal, label: 'Metal', image: DragonElement.Metal },
		{ value: DragonElement.Pure, label: 'Pure', image: DragonElement.Pure },
		{ value: DragonElement.Primal, label: 'Primal', image: DragonElement.Primal },
		{ value: DragonElement.Soul, label: 'Soul', image: DragonElement.Soul },
		{ value: DragonElement.Time, label: 'Time', image: DragonElement.Time },
		{ value: DragonElement.War, label: 'War', image: DragonElement.War },
		{ value: DragonElement.Water, label: 'Water', image: DragonElement.Water },
		{ value: DragonElement.Wind, label: 'Wind', image: DragonElement.Wind },
	];
}

export function getSkillOptions(): SkillOption[] {
	return [
		{ value: DragonSkill.Beauty, label: 'Beauty', image: DragonSkill.Beauty },
		{ value: DragonSkill.Chaos, label: 'Chaos', image: DragonSkill.Chaos },
		{ value: DragonSkill.Dark, label: 'Dark', image: DragonSkill.Dark },
		{ value: DragonSkill.Dream, label: 'Dream', image: DragonSkill.Dream },
		{ value: DragonSkill.Earth, label: 'Earth', image: DragonSkill.Earth },
		{ value: DragonSkill.Electric, label: 'Electric', image: DragonSkill.Electric },
		{ value: DragonSkill.Fire, label: 'Fire', image: DragonSkill.Fire },
		{ value: DragonSkill.Green, label: 'Green', image: DragonSkill.Green },
		{ value: DragonSkill.Happiness, label: 'Happiness', image: DragonSkill.Happiness },
		{ value: DragonSkill.Ice, label: 'Ice', image: DragonSkill.Ice },
		{ value: DragonSkill.Light, label: 'Light', image: DragonSkill.Light },
		{ value: DragonSkill.Legend, label: 'Legend', image: DragonSkill.Legend },
		{ value: DragonSkill.Magic, label: 'Magic', image: DragonSkill.Magic },
		{ value: DragonSkill.Metal, label: 'Metal', image: DragonSkill.Metal },
		{ value: DragonSkill.Pure, label: 'Pure', image: DragonSkill.Pure },
		{ value: DragonSkill.Primal, label: 'Primal', image: DragonSkill.Primal },
		{ value: DragonSkill.Soul, label: 'Soul', image: DragonSkill.Soul },
		{ value: DragonSkill.Time, label: 'Time', image: DragonSkill.Time },
		{ value: DragonSkill.War, label: 'War', image: DragonSkill.War },
		{ value: DragonSkill.Water, label: 'Water', image: DragonSkill.Water },
		{ value: DragonSkill.Wind, label: 'Wind', image: DragonSkill.Wind },
	];
}

export function getStrongSkillOptions(): SelectOption<string>[] {
	return [
		{ value: '', label: 'Ninguno', image: '' },
		{ value: DragonStrongSkill.StrongSkill, label: 'Strong Skill', image: DragonStrongSkill.StrongSkill },
		{ value: DragonStrongSkill.StrongSkill3, label: 'Strong Skill 3', image: DragonStrongSkill.StrongSkill3 },
		{ value: DragonStrongSkill.StrongSkill4, label: 'Strong Skill 4', image: DragonStrongSkill.StrongSkill4 },
	];
}

export function getSkinRankOptions(): SelectOption<DragonSkinRankLabel>[] {
	return [
		{ value: DragonSkinRankLabel.SS, label: 'SS', image: DragonSkinRank.SS },
		{ value: DragonSkinRankLabel.S_PLUS, label: 'S+', image: DragonSkinRank.S_PLUS },
		{ value: DragonSkinRankLabel.S, label: 'S', image: DragonSkinRank.S },
		{ value: DragonSkinRankLabel.S_MINUS, label: 'S-', image: DragonSkinRank.S_MINUS },
		{ value: DragonSkinRankLabel.A_PLUS, label: 'A+', image: DragonSkinRank.A_PLUS },
		{ value: DragonSkinRankLabel.AA, label: 'AA', image: DragonSkinRank.AA },
		{ value: DragonSkinRankLabel.A, label: 'A', image: DragonSkinRank.A },
		{ value: DragonSkinRankLabel.A_MINUS, label: 'A-', image: DragonSkinRank.A_MINUS },
	];
}