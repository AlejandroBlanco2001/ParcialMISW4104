import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlantaComponent } from './lista-planta.component';
import { ListadoPlantaService } from '../listado-planta.service';
import { PlantaMinimumInformation } from '../planta';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { signal } from '@angular/core';

describe('ListaPlantaComponent', () => {
  let component: ListaPlantaComponent;
  let fixture: ComponentFixture<ListaPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaPlantaComponent],
      imports: [CommonModule],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ListadoPlantaService,
      ],
    }).compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(ListaPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should load of the table', () => {
    fixture = TestBed.createComponent(ListaPlantaComponent);
    component = fixture.componentInstance;

    component.listaPlantas = signal([
      new PlantaMinimumInformation(1, 'Rosa', 'Exterior', 'Tropical'),
      new PlantaMinimumInformation(2, 'Tulipán', 'Exterior', 'Templado'),
      new PlantaMinimumInformation(3, 'Girasol', 'Interior', 'Frío'),
    ]);

    fixture.detectChanges();

    const table = fixture.nativeElement.querySelector(
      '[data-testid="listado-plantas-table"]'
    );

    // Ensure that the table is being rendered
    expect(table).toBeTruthy();

    const tableHeaders = fixture.nativeElement.querySelectorAll(
      '[data-testid="listado-plantas-table-headers"]'
    );

    // Ensure number of table headers is correct
    expect(tableHeaders.length).toBe(1);

    expect(tableHeaders[0].textContent).toContain('#');
    expect(tableHeaders[0].textContent).toContain('Nombre');
    expect(tableHeaders[0].textContent).toContain('Tipo');
    expect(tableHeaders[0].textContent).toContain('Clima');

    // Ensure that the table rows are being rendered based on the list of plants
    const tableRows = fixture.nativeElement.querySelectorAll(
      '[data-testid="listado-plantas-table-row"]'
    );

    // Ensure number of table headers is correct
    expect(tableRows.length).toBe(3);

    // Ensure that the table headers are being rendered correctly
    expect(tableRows[0].textContent).toContain('Rosa');
    expect(tableRows[0].textContent).toContain('Exterior');
    expect(tableRows[0].textContent).toContain('Tropical');

    expect(tableRows[1].textContent).toContain('Tulipán');
    expect(tableRows[1].textContent).toContain('Exterior');
    expect(tableRows[1].textContent).toContain('Templado');

    expect(tableRows[2].textContent).toContain('Girasol');
    expect(tableRows[2].textContent).toContain('Interior');
    expect(tableRows[2].textContent).toContain('Frío');
  });
});
