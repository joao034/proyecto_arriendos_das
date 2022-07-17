import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMesComponent } from './page-mes.component';

describe('PageMesComponent', () => {
  let component: PageMesComponent;
  let fixture: ComponentFixture<PageMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
