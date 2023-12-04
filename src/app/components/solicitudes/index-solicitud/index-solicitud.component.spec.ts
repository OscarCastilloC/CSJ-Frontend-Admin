import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSolicitudComponent } from './index-solicitud.component';

describe('IndexSolicitudComponent', () => {
  let component: IndexSolicitudComponent;
  let fixture: ComponentFixture<IndexSolicitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexSolicitudComponent]
    });
    fixture = TestBed.createComponent(IndexSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
