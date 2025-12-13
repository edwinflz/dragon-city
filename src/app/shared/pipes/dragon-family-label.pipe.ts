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
		};

		return labelMap[family] || 'Unknown';
	}
}