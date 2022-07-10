import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLogComponent } from './no-log.component';

describe('NoLogComponent', () => {
  let component: NoLogComponent;
  let fixture: ComponentFixture<NoLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
