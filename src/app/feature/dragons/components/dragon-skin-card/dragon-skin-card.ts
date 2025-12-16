import { Component, inject, input, signal } from '@angular/core';
import { DragonRarity, DragonSkin } from '@dragons/models/dragon.model';
import { DragonSkinRankHighlightService } from '@dragons/services/dragon-skin-rank-highlight.service';
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

	private rankHighlightService = inject(DragonSkinRankHighlightService);

	isFlipped = signal(false);

	onToggleFlip(): void {
		this.isFlipped.set(!this.isFlipped());
	}

	onRankHover(): void {
		this.rankHighlightService.setHoveredRank(this.skin().rank);
	}

	onRankLeave(): void {
		this.rankHighlightService.setHoveredRank(null);
	}

	getRankHighlightClass(): string {
		const type = this.rankHighlightService.getHighlightType(this.skin().rank);
		if (type === 'better') return 'rank-highlight-better';
		if (type === 'worse') return 'rank-highlight-worse';
		if (type === 'equal') return 'rank-highlight-equal';
		return '';
	}

	isRankHovered(): boolean {
		return this.rankHighlightService.getHoveredRank()() === this.skin().rank;
	}
}
