import { Component, HostListener, input, signal } from '@angular/core';
import { ClickOutsideDirective } from '@shared/index';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

@Component({
	selector: 'app-dragon-tooltip',
	imports: [ClickOutsideDirective],
	templateUrl: './dragon-tooltip.html',
	styleUrl: './dragon-tooltip.scss',
})
export class DragonTooltip {

	title = input<string>('');
	description = input<string>('');
	position = input<TooltipPosition>('top');
	showOnHover = input<boolean>(true);

	isOpen = signal(false);

	onToggle(): void {
		if (!this.showOnHover()) {
			this.isOpen.set(!this.isOpen());
		}
	}

	onClose(): void {
		this.isOpen.set(false);
	}

	@HostListener('mouseenter')
	onMouseEnter(): void {
		if (this.showOnHover()) {
			this.isOpen.set(true);
		}
	}

	@HostListener('mouseleave')
	onMouseLeave(): void {
		if (this.showOnHover()) {
			this.isOpen.set(false);
		}
	}
}
