import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoLoginComponent } from './page-no-login.component';

describe('PageNoLoginComponent', () => {
  let component: PageNoLoginComponent;
  let fixture: ComponentFixture<PageNoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNoLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
