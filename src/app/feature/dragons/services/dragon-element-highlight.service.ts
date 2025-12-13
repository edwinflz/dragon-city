import { Injectable, signal } from '@angular/core';
import { DragonElement } from '../models/dragon.model';
import { getStrongAgainst, getWeakAgainst } from '@dragons/models/dragon-elements-relations.config';

@Injectable({
	providedIn: 'root'
})
export class DragonElementHighlightService {
	private hoveredElement = signal<DragonElement | null>(null);

	setHoveredElement(element: DragonElement | null): void {
		this.hoveredElement.set(element);
	}

	getHoveredElement() {
		return this.hoveredElement;
	}

	shouldHighlightAsStrong(element: DragonElement): boolean {
		const hovered = this.hoveredElement();
		if (!hovered) return false;

		const strongAgainst = getStrongAgainst(hovered);
		return strongAgainst.includes(element);
	}

	shouldHighlightAsWeak(element: DragonElement): boolean {
		const hovered = this.hoveredElement();
		if (!hovered) return false;

		const weakAgainst = getWeakAgainst(hovered);
		return weakAgainst.includes(element);
	}

	getHighlightType(element: DragonElement): 'strong' | 'weak' | null {
		if (this.shouldHighlightAsStrong(element)) return 'strong';
		if (this.shouldHighlightAsWeak(element)) return 'weak';
		return null;
	}

	reset(): void {
		this.hoveredElement.set(null);
	}
}