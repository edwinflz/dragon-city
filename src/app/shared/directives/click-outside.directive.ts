import { Directive, ElementRef, HostListener, inject, output } from '@angular/core';

@Directive({
	selector: '[clickOutside]',
	standalone: true,
})
export class ClickOutsideDirective {
	clickOutside = output<void>();

	private readonly el = inject(ElementRef);

	@HostListener('document:click', ['$event'])
	onClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target) return;

		const clickedInside: boolean = this.el.nativeElement.contains(target);
		if (!clickedInside) {
			this.clickOutside.emit();
		}
	}
}