import { Pipe, PipeTransform } from '@angular/core';
import { DragonRarity } from '@dragons/models/dragon.model';

@Pipe({
	name: 'dragonRarityLabel',
	standalone: true
})
export class DragonRarityLabelPipe implements PipeTransform {

	transform(rarity: DragonRarity): string {
		const labelMap: Record<DragonRarity, string> = {
			[DragonRarity.Heroic]: 'Héroico',
			[DragonRarity.Mythic]: 'Mítico',
			[DragonRarity.Legendary]: 'Legendario'
		};

		return labelMap[rarity] || 'Unknown';
	}
}