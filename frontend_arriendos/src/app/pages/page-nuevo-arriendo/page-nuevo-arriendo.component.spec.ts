import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNuevoArriendoComponent } from './page-nuevo-arriendo.component';

describe('PageNuevoArriendoComponent', () => {
  let component: PageNuevoArriendoComponent;
  let fixture: ComponentFixture<PageNuevoArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNuevoArriendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNuevoArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
