import { Pipe, PipeTransform } from '@angular/core';
import { DragonSpecialSkill } from '@dragons/models/dragon.model';

@Pipe({
	name: 'dragonSpecialSkillImage',
	standalone: true
})
export class DragonSpecialSkillImagePipe implements PipeTransform {

	transform(rarity: DragonSpecialSkill): string {
		const imageMap: Record<DragonSpecialSkill, string> = {
			[DragonSpecialSkill.Active]: 'images/skills/ic-skills-special-1.png',
			[DragonSpecialSkill.Passive]: 'images/skills/ic-skills-passive-special-1.png',
			[DragonSpecialSkill.Mix]: 'images/skills/ic-skills-special-2.png'
		};

		return imageMap[rarity] || 'undefined';
	}
}