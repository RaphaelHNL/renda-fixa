import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAtivoComponent } from './editar-ativo.component';

describe('EditarAtivoComponent', () => {
  let component: EditarAtivoComponent;
  let fixture: ComponentFixture<EditarAtivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAtivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
