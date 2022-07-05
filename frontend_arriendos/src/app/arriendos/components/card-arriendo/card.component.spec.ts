import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArriendoComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardArriendoComponent;
  let fixture: ComponentFixture<CardArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardArriendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
