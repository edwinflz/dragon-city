import { Pipe, PipeTransform } from '@angular/core';
import { DragonRarity } from '@dragons/models/dragon.model';

@Pipe({
	name: 'dragonRarityImage',
	standalone: true
})
export class DragonRarityImagePipe implements PipeTransform {

	transform(rarity: DragonRarity): string {
		const imageMap: Record<DragonRarity, string> = {
			[DragonRarity.Heroic]: 'images/rarity/H.png',
			[DragonRarity.Mythic]: 'images/rarity/M.png',
			[DragonRarity.Legendary]: 'images/rarity/L.png'
		};

		return imageMap[rarity] || 'Unknown';
	}
}