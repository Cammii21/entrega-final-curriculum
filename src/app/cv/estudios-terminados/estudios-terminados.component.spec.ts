import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosTerminadosComponent } from './estudios-terminados.component';

describe('EstudiosTerminadosComponent', () => {
  let component: EstudiosTerminadosComponent;
  let fixture: ComponentFixture<EstudiosTerminadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudiosTerminadosComponent]
    });
    fixture = TestBed.createComponent(EstudiosTerminadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
