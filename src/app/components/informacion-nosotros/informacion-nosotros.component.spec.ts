import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionNosotrosComponent } from './informacion-nosotros.component';

describe('InformacionNosotrosComponent', () => {
  let component: InformacionNosotrosComponent;
  let fixture: ComponentFixture<InformacionNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionNosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
