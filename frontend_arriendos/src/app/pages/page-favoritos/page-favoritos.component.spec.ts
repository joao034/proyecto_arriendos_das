import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFavoritosComponent } from './page-favoritos.component';

describe('PageFavoritosComponent', () => {
  let component: PageFavoritosComponent;
  let fixture: ComponentFixture<PageFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
