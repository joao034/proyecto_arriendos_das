import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCalificacionesComponent } from './page-calificaciones.component';

describe('PageCalificacionesComponent', () => {
  let component: PageCalificacionesComponent;
  let fixture: ComponentFixture<PageCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCalificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
