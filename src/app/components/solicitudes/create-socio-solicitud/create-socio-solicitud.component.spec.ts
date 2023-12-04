import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSocioSolicitudComponent } from './create-socio-solicitud.component';

describe('CreateSocioSolicitudComponent', () => {
  let component: CreateSocioSolicitudComponent;
  let fixture: ComponentFixture<CreateSocioSolicitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSocioSolicitudComponent]
    });
    fixture = TestBed.createComponent(CreateSocioSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
