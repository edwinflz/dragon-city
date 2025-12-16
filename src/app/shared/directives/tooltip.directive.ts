import {
	Directive,
	input,
	ElementRef,
	HostListener,
	ComponentRef,
	ViewContainerRef,
	inject,
	OnDestroy,
	effect
} from '@angular/core';
import { Overlay, OverlayRef, ConnectedPosition } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TooltipComponent } from '@shared/components/index';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipTrigger = 'hover' | 'click';

@Directive({
	selector: '[dragonTooltip]',
	standalone: true
})
export class TooltipDirective implements OnDestroy {

	dragonTooltip = input<string | undefined>('');
	tooltipTitle = input<string | undefined>('');
	tooltipPosition = input<TooltipPosition>('top');
	tooltipTrigger = input<TooltipTrigger>('hover');
	tooltipDisabled = input<boolean>(false);

	private overlay = inject(Overlay);
	private elementRef = inject(ElementRef);
	private viewContainerRef = inject(ViewContainerRef);

	private overlayRef?: OverlayRef;
	private tooltipRef?: ComponentRef<TooltipComponent>;
	private hideTimeout?: ReturnType<typeof setTimeout>;

	constructor() {
		effect(() => {
			if (this.tooltipDisabled()) {
				this.hide();
			}
		});
	}

	@HostListener('mouseenter')
	onMouseEnter(): void {
		if (this.tooltipTrigger() === 'hover' && !this.tooltipDisabled()) {
			this.show();
		}
	}

	@HostListener('mouseleave')
	onMouseLeave(): void {
		if (this.tooltipTrigger() === 'hover') {
			this.hideWithDelay();
		}
	}

	@HostListener('click')
	onClick(): void {
		if (this.tooltipTrigger() === 'click' && !this.tooltipDisabled()) {
			this.toggle();
		}
	}

	private hasContent(): boolean {
		const title = this.tooltipTitle();
		const content = this.dragonTooltip();

		return !!(title || content);
	}

	private show(): void {
		if (!this.hasContent()) {
			return;
		}
		
		if (this.overlayRef?.hasAttached()) {
			return;
		}

		this.clearHideTimeout();
		this.attachTooltip();
	}

	private hide(): void {
		this.clearHideTimeout();

		if (this.overlayRef?.hasAttached()) {
			this.overlayRef.detach();
		}
	}

	private hideWithDelay(): void {
		this.clearHideTimeout();
		this.hideTimeout = setTimeout(() => this.hide(), 100);
	}

	private toggle(): void {
		if (this.overlayRef?.hasAttached()) {
			this.hide();
		} else {
			this.show();
		}
	}

	private attachTooltip(): void {
		if (!this.overlayRef) {
			this.overlayRef = this.overlay.create({
				positionStrategy: this.getPositionStrategy(),
				scrollStrategy: this.overlay.scrollStrategies.reposition(),
				panelClass: 'dragon-tooltip-panel'
			});

			if (this.tooltipTrigger() === 'click') {
				this.overlayRef.backdropClick().subscribe(() => this.hide());
			}
		}

		const tooltipPortal = new ComponentPortal(TooltipComponent, this.viewContainerRef);
		this.tooltipRef = this.overlayRef.attach(tooltipPortal);

		this.tooltipRef.instance.title.set(this.tooltipTitle()!);
		this.tooltipRef.instance.content.set(this.dragonTooltip()!);
		this.tooltipRef.instance.position.set(this.tooltipPosition());

		if (this.tooltipTrigger() === 'hover') {
			this.tooltipRef.location.nativeElement.addEventListener('mouseenter', () => {
				this.clearHideTimeout();
			});

			this.tooltipRef.location.nativeElement.addEventListener('mouseleave', () => {
				this.hideWithDelay();
			});
		}
	}

	private getPositionStrategy() {
		const positions = this.getPositions();

		return this.overlay
			.position()
			.flexibleConnectedTo(this.elementRef)
			.withPositions(positions)
			.withPush(false)
			.withViewportMargin(8);
	}

	private getPositions(): ConnectedPosition[] {
		const position = this.tooltipPosition();

		const positionMap: Record<TooltipPosition, ConnectedPosition[]> = {
			top: [
				{
					originX: 'center',
					originY: 'top',
					overlayX: 'center',
					overlayY: 'bottom',
					offsetY: -8
				},
				{
					originX: 'center',
					originY: 'bottom',
					overlayX: 'center',
					overlayY: 'top',
					offsetY: 8
				}
			],
			bottom: [
				{
					originX: 'center',
					originY: 'bottom',
					overlayX: 'center',
					overlayY: 'top',
					offsetY: 8
				},
				{
					originX: 'center',
					originY: 'top',
					overlayX: 'center',
					overlayY: 'bottom',
					offsetY: -8
				}
			],
			left: [
				{
					originX: 'start',
					originY: 'center',
					overlayX: 'end',
					overlayY: 'center',
					offsetX: -8
				},
				{
					originX: 'end',
					originY: 'center',
					overlayX: 'start',
					overlayY: 'center',
					offsetX: 8
				}
			],
			right: [
				{
					originX: 'end',
					originY: 'center',
					overlayX: 'start',
					overlayY: 'center',
					offsetX: 8
				},
				{
					originX: 'start',
					originY: 'center',
					overlayX: 'end',
					overlayY: 'center',
					offsetX: -8
				}
			]
		};

		return positionMap[position];
	}

	private clearHideTimeout(): void {
		if (this.hideTimeout) {
			clearTimeout(this.hideTimeout);
			this.hideTimeout = undefined;
		}
	}

	ngOnDestroy(): void {
		this.clearHideTimeout();

		if (this.overlayRef) {
			this.overlayRef.dispose();
		}
	}
}