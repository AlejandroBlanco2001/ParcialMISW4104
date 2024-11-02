import { TestBed } from '@angular/core/testing';

import { ListadoPlantaService } from './listado-planta.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ListadoPlantaService', () => {
  let service: ListadoPlantaService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListadoPlantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get listado plantas', () => {
    service.getListadoPlantas().subscribe();

    httpTesting.expectOne((req) => {
      expect(req.url).toBe(
        'https://gist.githubusercontent.com/josejbocanegra/7b71922ee9e2ab407d3210f1e5cb8400/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json'
      );

      return true;
    });
  });
});
