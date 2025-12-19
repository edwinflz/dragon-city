import { Pipe, PipeTransform } from '@angular/core';
import { DragonFamily } from '@dragons/models/dragon.model';

@Pipe({
	name: 'dragonFamilyLabel',
	standalone: true
})
export class DragonFamilyLabelPipe implements PipeTransform {

	transform(family: DragonFamily): string {
		const labelMap: Record<DragonFamily, string> = {
			[DragonFamily.Doom]: 'Maldito',
			[DragonFamily.Armor]: 'Acorazado',
			[DragonFamily.Critical]: 'Critico',
			[DragonFamily.Silencer]: 'Silenciador',
			[DragonFamily.Evader]: 'Evasor',
			[DragonFamily.Strategist]: 'Estratega',
			[DragonFamily.Extractor]: 'Extractora',
			[DragonFamily.Spikes]: 'Punzante',
			[DragonFamily.Guard]: 'Gammaguarda',
			[DragonFamily.Berserk]: 'Furioso',
			[DragonFamily.Quantum]: 'Cuantico',
			[DragonFamily.Plasma]: 'Plasma',
			[DragonFamily.Arcana]: 'Arcana',
			[DragonFamily.Eternal]: 'Eterno',
			[DragonFamily.Dual]: 'Dual',
			[DragonFamily.Redemption]: 'Redentora',
			[DragonFamily.Karma]: 'Karma',
			[DragonFamily.Ascended]: 'Ascendido',
			[DragonFamily.Corrupted]: 'Corrupto',
			[DragonFamily.Vampire]: 'Vampiro',
			[DragonFamily.Titan]: 'Titán',
			[DragonFamily.Mythical]: 'Mítico',
			[DragonFamily.Cyber]: 'Cibernético'
		};

		return labelMap[family] || 'Unknown';
	}
}