import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { DragonCard } from '@dragons/components/dragon-card/dragon-card';
import { DRAGONS } from '@dragons/dragons.const';

@Component({
	selector: 'app-dragon-list',
	imports: [DragonCard],
	templateUrl: './dragon-list.html',
	styleUrl: './dragon-list.scss',
})
export class DragonList {
	private readonly router = inject(Router);

	dragons = signal(DRAGONS);

	goToCreateDragon(): void {
		this.router.navigate(['/dragons/create']);
	}
}
