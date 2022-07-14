import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArriendoComponent } from './edit-arriendo.component';

describe('EditArriendoComponent', () => {
  let component: EditArriendoComponent;
  let fixture: ComponentFixture<EditArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditArriendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
