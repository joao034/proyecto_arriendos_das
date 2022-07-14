import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleArriendoComponent } from './detalle-arriendo.component';

describe('DetalleArriendoComponent', () => {
  let component: DetalleArriendoComponent;
  let fixture: ComponentFixture<DetalleArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleArriendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
