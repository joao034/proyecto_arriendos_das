import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTipoComponent } from './page-tipo.component';

describe('PageTipoComponent', () => {
  let component: PageTipoComponent;
  let fixture: ComponentFixture<PageTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
