import { Pipe, PipeTransform } from '@angular/core';
import { DragonRarity } from '@dragons/models/dragon.model';

@Pipe({
	name: 'dragonSkinColor',
	standalone: true
})
export class DragonSkinColorPipe implements PipeTransform {

	transform(rarity: DragonRarity): string {
		const colorMap: Record<DragonRarity, string> = {
			[DragonRarity.Heroic]: '',
			[DragonRarity.Mythic]: 'skin-card--pink',
			[DragonRarity.Legendary]: 'skin-card--purple'
		};

		return colorMap[rarity] || '';
	}
}