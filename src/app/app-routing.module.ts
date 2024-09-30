import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAtivosComponent } from './core/components/lista-ativos/lista-ativos.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'ativos',
    pathMatch:'full'
  },
  {
    path:'ativos',
    loadChildren:()=> import('./core/components/ativos.module').then(m=> m.AtivosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
