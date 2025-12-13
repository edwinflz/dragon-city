import { Pipe, PipeTransform } from '@angular/core';
import { DragonRarity } from '@dragons/models/dragon.model';

@Pipe({
	name: 'dragonRarityColor',
	standalone: true
})
export class DragonRarityColorPipe implements PipeTransform {

	transform(rarity: DragonRarity): string {
		const colorMap: Record<DragonRarity, string> = {
			[DragonRarity.Heroic]: 'card-container',
			[DragonRarity.Mythic]: 'card-container card-container--pink',
			[DragonRarity.Legendary]: 'card-container card-container--purple'
		};

		return colorMap[rarity] || 'card-container';
	}
}