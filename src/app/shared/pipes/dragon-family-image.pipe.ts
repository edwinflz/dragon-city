import { Pipe, PipeTransform } from '@angular/core';
import { DragonFamily } from '@dragons/models/dragon.model';

@Pipe({
	name: 'dragonFamilyImage',
	standalone: true
})
export class DragonFamilyImagePipe implements PipeTransform {

	transform(family: DragonFamily): string {
		const labelMap: Record<DragonFamily, string> = {
			[DragonFamily.Doom]: 'images/family/doom-icon.png',
			[DragonFamily.Armor]: 'images/family/armor-icon.png',
			[DragonFamily.Critical]: 'images/family/critical-icon.png',
			[DragonFamily.Silencer]: 'images/family/silencer-icon.png',
			[DragonFamily.Evader]: 'images/family/evader-icon.png',
			[DragonFamily.Strategist]: 'images/family/strategist-icon.png',
			[DragonFamily.Extractor]: 'images/family/extractor-icon.png',
			[DragonFamily.Ascended]: 'images/family/h_vip-icon.png',
			[DragonFamily.Arcana]: 'images/family/arcana-icon.png',
			[DragonFamily.Spikes]: 'images/family/spikes-icon.png',
			[DragonFamily.Guard]: 'images/family/guard-icon.png',
			[DragonFamily.Berserk]: 'images/family/berserk-icon.png',
			[DragonFamily.Quantum]: 'images/family/quantum-icon.png',
			[DragonFamily.Plasma]: 'images/family/plasma-icon.png',
			[DragonFamily.Eternal]: 'images/family/eternal-icon.png',
			[DragonFamily.Dual]: 'images/family/dual-icon.png',
			[DragonFamily.Redemption]: 'images/family/h_redemption-icon.png',
			[DragonFamily.Karma]: 'images/family/vip-icon.png',
			[DragonFamily.Corrupted]: 'images/family/hct-icon.png',
			[DragonFamily.Vampire]: 'images/family/vampire-icon.png',
			[DragonFamily.Titan]: 'images/family/titan-icon.png',
			[DragonFamily.Mythical]: 'images/family/mythical-icon.png',
			[DragonFamily.Cyber]: 'images/family/cyberfamily-icon.png'
		};

		return labelMap[family] || 'Unknown';
	}
}