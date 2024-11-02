import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Planta } from './planta';

@Injectable({
  providedIn: 'root',
})
export class ListadoPlantaService {
  private client = inject(HttpClient);
  private URL =
    'https://gist.githubusercontent.com/josejbocanegra/7b71922ee9e2ab407d3210f1e5cb8400/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json';

  /**
   * Método que obtiene la lista de plantas
   * @returns Retorna la lista de plantas
   */
  getListadoPlantas<Planta>() {
    return this.client.get<Planta>(this.URL);
  }
}
