import { Component, computed, effect, inject, input, output } from '@angular/core';
import { DragonSkinCard } from '../dragon-skin-card/dragon-skin-card';
import { Dragon, DragonElement, DragonSkinRankLabel } from '@dragons/models/dragon.model';
import { DragonElementHighlightService } from '@dragons/services/dragon-element-highlight.service';
import { DragonSkinRankHighlightService } from '@dragons/services/dragon-skin-rank-highlight.service';


@Component({
	selector: 'app-dragon-modal',
	imports: [DragonSkinCard],
	templateUrl: './dragon-modal.html',
	styleUrl: './dragon-modal.scss',
})
export class DragonModal {
	dragon = input.required<Dragon>();
	isOpen = input<boolean>(false);
	closeModal = output<void>();

	private highlightService = inject(DragonElementHighlightService);
	private rankHighlightService = inject(DragonSkinRankHighlightService);

	uniqueRanks = computed(() => {
		const skins = this.dragon().skins || [];
		const ranks = skins.map(s => s.rank);
		return [...new Set(ranks)];
	});

	constructor() {
		effect(() => {
			if (this.isOpen()) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
				this.highlightService.reset();
				this.rankHighlightService.reset();
			}
		});
	}

	onClose(): void {
		this.closeModal.emit();
	}

	onBackdropClick(event: MouseEvent): void {
		if (event.target === event.currentTarget) {
			this.onClose();
		}
	}

	onHeaderElementHover(element: DragonElement): void {
		this.highlightService.setHoveredElement(element);
	}

	onHeaderElementLeave(): void {
		this.highlightService.setHoveredElement(null);
	}

	getElementHighlightClass(element: DragonElement): string {
		const type = this.highlightService.getHighlightType(element);
		if (type === 'strong') return 'element-highlight-strong';
		if (type === 'weak') return 'element-highlight-weak';
		return '';
	}

	isElementHovered(element: DragonElement): boolean {
		return this.highlightService.getHoveredElement()() === element;
	}

	onRankHover(rank: DragonSkinRankLabel): void {
		this.rankHighlightService.setHoveredRank(rank);
	}

	onRankLeave(): void {
		this.rankHighlightService.setHoveredRank(null);
	}

	getRankHighlightClass(rank: DragonSkinRankLabel): string {
		const type = this.rankHighlightService.getHighlightType(rank);
		if (type === 'better') return 'rank-highlight-better';
		if (type === 'worse') return 'rank-highlight-worse';
		if (type === 'equal') return 'rank-highlight-equal';
		return '';
	}

	isRankHovered(rank: DragonSkinRankLabel): boolean {
		return this.rankHighlightService.getHoveredRank()() === rank;
	}
}
