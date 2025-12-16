import { Injectable, signal } from '@angular/core';
import { getSkinRankValue } from '@dragons/models/dragon-elements-relations.config';
import { DragonSkinRankLabel } from '@dragons/models/dragon.model';


@Injectable({
	providedIn: 'root'
})
export class DragonSkinRankHighlightService {
	private hoveredRank = signal<DragonSkinRankLabel | null>(null);

	setHoveredRank(rank: DragonSkinRankLabel | null): void {
		this.hoveredRank.set(rank);
	}

	getHoveredRank() {
		return this.hoveredRank;
	}

	shouldHighlightAsBetter(rank: DragonSkinRankLabel): boolean {
		const hovered = this.hoveredRank();
		if (!hovered) return false;

		const hoveredValue = getSkinRankValue(hovered);
		const currentValue = getSkinRankValue(rank);

		return currentValue > hoveredValue;
	}

	shouldHighlightAsWorse(rank: DragonSkinRankLabel): boolean {
		const hovered = this.hoveredRank();
		if (!hovered) return false;

		const hoveredValue = getSkinRankValue(hovered);
		const currentValue = getSkinRankValue(rank);

		return currentValue < hoveredValue;
	}

	shouldHighlightAsEqual(rank: DragonSkinRankLabel): boolean {
		const hovered = this.hoveredRank();
		if (!hovered) return false;

		const hoveredValue = getSkinRankValue(hovered);
		const currentValue = getSkinRankValue(rank);

		return currentValue === hoveredValue && rank !== hovered;
	}

	getHighlightType(rank: DragonSkinRankLabel): 'better' | 'worse' | 'equal' | null {
		if (this.shouldHighlightAsBetter(rank)) return 'better';
		if (this.shouldHighlightAsWorse(rank)) return 'worse';
		if (this.shouldHighlightAsEqual(rank)) return 'equal';
		return null;
	}

	reset(): void {
		this.hoveredRank.set(null);
	}
}

