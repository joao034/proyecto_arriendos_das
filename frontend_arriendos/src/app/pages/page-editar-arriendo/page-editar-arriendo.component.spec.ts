import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditarArriendoComponent } from './page-editar-arriendo.component';

describe('PageEditarArriendoComponent', () => {
  let component: PageEditarArriendoComponent;
  let fixture: ComponentFixture<PageEditarArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditarArriendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditarArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
