import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFavoritosComponent } from './tabla-favoritos.component';

describe('TablaFavoritosComponent', () => {
  let component: TablaFavoritosComponent;
  let fixture: ComponentFixture<TablaFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
