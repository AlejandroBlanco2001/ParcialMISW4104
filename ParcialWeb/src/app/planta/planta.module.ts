import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPlantaComponent } from './lista-planta/lista-planta.component';
import { PlantaRoutingModule } from './planta.routing.module';
import { ListadoPlantaService } from './listado-planta.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListaPlantaComponent],
  imports: [CommonModule, PlantaRoutingModule, HttpClientModule],
  exports: [ListaPlantaComponent],
  providers: [ListadoPlantaService],
})
export class PlantaModule {}
