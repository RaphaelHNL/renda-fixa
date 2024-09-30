import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarAtivoComponent } from './deletar-ativo.component';

describe('DeletarAtivoComponent', () => {
  let component: DeletarAtivoComponent;
  let fixture: ComponentFixture<DeletarAtivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarAtivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
