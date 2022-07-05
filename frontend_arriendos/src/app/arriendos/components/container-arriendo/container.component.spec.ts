import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerArriendoComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: ContainerArriendoComponent;
  let fixture: ComponentFixture<ContainerArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerArriendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
