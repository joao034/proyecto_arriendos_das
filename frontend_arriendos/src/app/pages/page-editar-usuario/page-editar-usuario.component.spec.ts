import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditarUsuarioComponent } from './page-editar-usuario.component';

describe('PageEditarUsuarioComponent', () => {
  let component: PageEditarUsuarioComponent;
  let fixture: ComponentFixture<PageEditarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
