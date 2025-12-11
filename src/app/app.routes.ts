import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'dragons',
		loadComponent: () =>
			import('@dragons/container/dragon-list').then((m) => m.DragonList),
	},
	{
		path: '**',
		redirectTo: 'dragons',
	},
];
