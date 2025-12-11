import { Component } from '@angular/core';
import { DragonCard } from '@dragons/components/dragon-card/dragon-card';

@Component({
  selector: 'app-dragon-list',
  imports: [DragonCard],
  templateUrl: './dragon-list.html',
  styleUrl: './dragon-list.scss',
})
export class DragonList {

}
