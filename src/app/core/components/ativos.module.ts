import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ListaAtivosComponent } from './lista-ativos/lista-ativos.component';
import { DeletarAtivoComponent } from './deletar-ativo/deletar-ativo.component';
import { EditarAtivoComponent } from './editar-ativo/editar-ativo.component';
import { AdicionarAtivoComponent } from './adicionar-ativo/adicionar-ativo.component';
import { AtivosRoutingModule } from './ativos-routing.module';
import { NgxCurrencyModule } from "ngx-currency";


@NgModule({
    declarations: [
        ListaAtivosComponent,
        DeletarAtivoComponent,
        EditarAtivoComponent,
        AdicionarAtivoComponent,
    ],
    imports: [
        CommonModule,
        AtivosRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        NgxCurrencyModule
    ],
    providers: [CurrencyPipe]
})
export class AtivosModule { }