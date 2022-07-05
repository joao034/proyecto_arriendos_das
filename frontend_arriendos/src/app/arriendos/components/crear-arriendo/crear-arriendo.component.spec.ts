import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArriendoComponent } from './crear-arriendo.component';

describe('CrearArriendoComponent', () => {
  let component: CrearArriendoComponent;
  let fixture: ComponentFixture<CrearArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearArriendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
