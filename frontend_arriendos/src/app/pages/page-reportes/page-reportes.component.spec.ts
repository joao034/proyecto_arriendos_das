import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReportesComponent } from './page-reportes.component';

describe('PageReportesComponent', () => {
  let component: PageReportesComponent;
  let fixture: ComponentFixture<PageReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageReportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
