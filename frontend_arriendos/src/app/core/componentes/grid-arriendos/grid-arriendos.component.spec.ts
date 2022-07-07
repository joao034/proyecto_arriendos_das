import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridArriendosComponent } from './grid-arriendos.component';

describe('GridArriendosComponent', () => {
  let component: GridArriendosComponent;
  let fixture: ComponentFixture<GridArriendosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridArriendosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridArriendosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
