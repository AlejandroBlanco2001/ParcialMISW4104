import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPlantaComponent } from './lista-planta/lista-planta.component';

const routes: Routes = [
  {
    path: '',
    component: ListaPlantaComponent, // This will be the default route when accessing 'movies'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantaRoutingModule {}
