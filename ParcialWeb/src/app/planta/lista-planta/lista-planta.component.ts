import { Component, inject, signal } from '@angular/core';
import { ListadoPlantaService } from '../listado-planta.service';
import { Planta } from '../planta';
import { catchError, of, take } from 'rxjs';

@Component({
  selector: 'app-lista-planta',
  templateUrl: './lista-planta.component.html',
  styleUrl: './lista-planta.component.css',
  providers: [ListadoPlantaService],
})
export class ListaPlantaComponent {
  plantasService = inject(ListadoPlantaService);
  listaPlantas = signal<Planta[]>([]);

  cantidadPlantasExteriores = signal(0);
  cantidadPlantasInteriores = signal(0);

  ngOnInit() {
    this.plantasService
      .getListadoPlantas()
      .pipe(
        take(1),
        catchError((error) => {
          console.error('Error al obtener la lista de plantas', error);
          return of([]);
        })
      )
      .subscribe((plantas) => {
        console.log(plantas);
        this.listaPlantas.set(plantas as Planta[]);

        let plantasExteriores = this.listaPlantas().filter(
          (planta: Planta) => planta.tipo === 'Exterior'
        );
        let plantasInteriores = this.listaPlantas().filter(
          (planta: Planta) => planta.tipo === 'Interior'
        );

        this.cantidadPlantasExteriores.set(plantasExteriores.length);
        this.cantidadPlantasInteriores.set(plantasInteriores.length);
      });
  }
}
