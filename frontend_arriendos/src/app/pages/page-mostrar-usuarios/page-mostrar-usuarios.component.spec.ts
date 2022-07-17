import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMostrarUsuariosComponent } from './page-mostrar-usuarios.component';

describe('PageMostrarUsuariosComponent', () => {
  let component: PageMostrarUsuariosComponent;
  let fixture: ComponentFixture<PageMostrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMostrarUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMostrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
