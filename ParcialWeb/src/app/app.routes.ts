import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./planta/planta.module').then((m) => m.PlantaModule),
  },
];
