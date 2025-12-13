import { Component, computed, effect, inject, input, output } from '@angular/core';
import { DragonSkinCard } from '../dragon-skin-card/dragon-skin-card';
import { Dragon, DragonElement } from '@dragons/models/dragon.model';
import { DragonElementHighlightService } from '@dragons/services/dragon-element-highlight.service';


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

	constructor() {
		effect(() => {
			if (this.isOpen()) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
				this.highlightService.reset();
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
}
