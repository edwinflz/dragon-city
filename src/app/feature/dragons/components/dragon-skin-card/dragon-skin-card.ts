import { Component, input, signal } from '@angular/core';
import { DragonRarity, DragonSkin } from '@dragons/models/dragon.model';
import { DragonRarityColorPipe, DragonSkinColorPipe } from '@shared/pipes';

@Component({
	selector: 'app-dragon-skin-card',
	imports: [DragonSkinColorPipe, DragonRarityColorPipe],
	templateUrl: './dragon-skin-card.html',
	styleUrl: './dragon-skin-card.scss',
})
export class DragonSkinCard {
	skin = input.required<DragonSkin>();
	rarity = input.required<DragonRarity>();

	isFlipped = signal(false);

	onToggleFlip(): void {
		this.isFlipped.set(!this.isFlipped());
	}
}
