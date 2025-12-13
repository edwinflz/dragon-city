import { Component, signal, ViewEncapsulation } from '@angular/core';
import { TooltipPosition } from '@shared/directives/tooltip.directive';

@Component({
	selector: 'app-tooltip',
	imports: [],
	templateUrl: './tooltip.html',
	styleUrl: './tooltip.scss',
	encapsulation: ViewEncapsulation.None,
})
export class TooltipComponent {
	title = signal<string>('');
	content = signal<string>('');
	position = signal<TooltipPosition>('top');
}
