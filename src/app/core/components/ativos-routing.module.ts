import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAtivosComponent } from './lista-ativos/lista-ativos.component';


const routes: Routes = [
  { path: '', component: ListaAtivosComponent },
  { path: 'ativos', component: ListaAtivosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class AtivosRoutingModule { }
