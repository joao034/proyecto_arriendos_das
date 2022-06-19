import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionArriendoComponent } from './visualizacion-arriendo.component';

describe('VisualizacionArriendoComponent', () => {
  let component: VisualizacionArriendoComponent;
  let fixture: ComponentFixture<VisualizacionArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizacionArriendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacionArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
