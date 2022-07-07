import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarArriendoComponent } from './buscar-arriendo.component';

describe('BuscarArriendoComponent', () => {
  let component: BuscarArriendoComponent;
  let fixture: ComponentFixture<BuscarArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarArriendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
