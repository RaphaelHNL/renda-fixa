import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAtivosComponent } from './lista-ativos.component';

describe('ListaAtivosComponent', () => {
  let component: ListaAtivosComponent;
  let fixture: ComponentFixture<ListaAtivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAtivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAtivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
