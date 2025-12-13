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
		};

		return labelMap[family] || 'Unknown';
	}
}