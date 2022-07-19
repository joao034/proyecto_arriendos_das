import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUsuariosComponent } from './tabla-usuarios.component';

describe('TablaUsuariosComponent', () => {
  let component: TablaUsuariosComponent;
  let fixture: ComponentFixture<TablaUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
