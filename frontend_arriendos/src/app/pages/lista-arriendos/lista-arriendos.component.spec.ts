import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArriendosComponent } from './lista-arriendos.component';

describe('ListaArriendosComponent', () => {
  let component: ListaArriendosComponent;
  let fixture: ComponentFixture<ListaArriendosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaArriendosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArriendosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
