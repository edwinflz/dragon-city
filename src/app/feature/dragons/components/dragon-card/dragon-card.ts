import { Component, input, signal } from '@angular/core';
import { DragonFamilyImagePipe, DragonFamilyLabelPipe, DragonRarityImagePipe, DragonRarityLabelPipe, DragonSpecialSkillImagePipe, TooltipDirective, DragonRarityColorPipe } from '@shared/index';
import { DragonModal } from '../dragon-modal/dragon-modal';
import { Dragon, DragonStrongSkill } from '@dragons/models/dragon.model';

@Component({
	selector: 'app-dragon-card',
	imports: [TooltipDirective, DragonModal, DragonRarityColorPipe, DragonRarityLabelPipe, DragonRarityImagePipe,
		DragonSpecialSkillImagePipe, DragonFamilyLabelPipe, DragonFamilyImagePipe
	],
	templateUrl: './dragon-card.html',
	styleUrl: './dragon-card.scss',
})
export class DragonCard {
	dragon = input.required<Dragon>();

	isModalOpen = signal(false);

	readonly strongSkillType = DragonStrongSkill;

	openModal(): void {
		this.isModalOpen.set(true);
	}

	closeModal(): void {
		this.isModalOpen.set(false);
	}

}
