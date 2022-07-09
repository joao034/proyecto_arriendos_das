import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTusAnunciosComponent } from './page-tus-anuncios.component';

describe('PageTusAnunciosComponent', () => {
  let component: PageTusAnunciosComponent;
  let fixture: ComponentFixture<PageTusAnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTusAnunciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTusAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
