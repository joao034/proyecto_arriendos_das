import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaArriendoComponent } from './busqueda-arriendo.component';

describe('BusquedaArriendoComponent', () => {
  let component: BusquedaArriendoComponent;
  let fixture: ComponentFixture<BusquedaArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaArriendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
