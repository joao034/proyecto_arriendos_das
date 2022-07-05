import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarArriendoComponent } from './editar-arriendo.component';

describe('EditarArriendoComponent', () => {
  let component: EditarArriendoComponent;
  let fixture: ComponentFixture<EditarArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarArriendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
