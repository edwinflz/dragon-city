import { Component } from '@angular/core';
import { DragonCard } from '@dragons/components/dragon-card/dragon-card';
import { DRAGONS } from '@dragons/dragons.const';
import { Dragon } from '@dragons/models/dragon.model';

@Component({
	selector: 'app-dragon-list',
	imports: [DragonCard],
	templateUrl: './dragon-list.html',
	styleUrl: './dragon-list.scss',
})
export class DragonList {
	dragons: Dragon[] = DRAGONS;
}
