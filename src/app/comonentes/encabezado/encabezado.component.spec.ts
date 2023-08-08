import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoComponent } from './encabezado.component';

describe('EncabezadoComponent', () => {
  let component: EncabezadoComponent;
  let fixture: ComponentFixture<EncabezadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncabezadoComponent]
    });
    fixture = TestBed.createComponent(EncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
