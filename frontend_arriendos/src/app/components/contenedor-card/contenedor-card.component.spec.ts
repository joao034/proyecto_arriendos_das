import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorCardComponent } from './contenedor-card.component';

describe('ContenedorCardComponent', () => {
  let component: ContenedorCardComponent;
  let fixture: ComponentFixture<ContenedorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
