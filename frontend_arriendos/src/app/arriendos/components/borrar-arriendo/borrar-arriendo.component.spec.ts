import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarArriendoComponent } from './borrar-arriendo.component';

describe('BorrarArriendoComponent', () => {
  let component: BorrarArriendoComponent;
  let fixture: ComponentFixture<BorrarArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarArriendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
