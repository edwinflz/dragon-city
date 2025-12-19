import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'dragons',
		loadComponent: () =>
			import('@dragons/container/dragon-list').then((m) => m.DragonList),
	},
	{
		path: 'dragons/create',
		loadComponent: () =>
			import('@dragons/components/dragon-form/dragon-form').then((m) => m.DragonForm),
	},
	{
		path: '**',
		redirectTo: 'dragons',
	},
];
