import { Component, inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Ativos, AtivosService } from '../../../shared/services/ativos.service';
import {
  MatDialog,
} from '@angular/material/dialog';
import { DeletarAtivoComponent } from '../deletar-ativo/deletar-ativo.component';
import { EditarAtivoComponent } from '../editar-ativo/editar-ativo.component';
import { AdicionarAtivoComponent } from '../adicionar-ativo/adicionar-ativo.component';
import { SnackBarService } from '../../../shared/services/snack-bar.service';



@Component({
  selector: 'app-lista-ativos',
  templateUrl: './lista-ativos.component.html',
  styleUrls: ['./lista-ativos.component.scss']
})




export class ListaAtivosComponent {

  displayedColumns: string[] = ['descricao', 'dataValidade', 'investimentoMinimo', 'tipoProduto', 'indexador', 'acao'];
  dataSource: MatTableDataSource<Ativos>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dialog = inject(MatDialog);
  loader: boolean = false;
  
  constructor(
    private ativosService: AtivosService,
    private snackBarService: SnackBarService
  ){
  }

  ngOnInit(){
    this.getAtivos();
  }


  

   getAtivos(){
    this.loader = true;
     this.ativosService.getAtivos()
    .subscribe({
      next: (ativos: any) => {
        if(ativos){
          this.dataSource = new MatTableDataSource(ativos);
          this.dataSource.paginator = this.paginator;
        }
      },
      error: error => {
        if(error.status === 401){
          this.snackBarService.mensagem('Você não possui acesso autorizado!', 'snackbar-error');
        }else{
          this.snackBarService.mensagem('Ocorreu ao buscar ativos!', 'snackbar-error');
        }
      },
      complete: () => {
        this.loader = false;
      }
    });
  }

  aplicarFiltro(event: Event) {
    const textoFiltro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = textoFiltro.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  abrirDialogDeletarAtivo(ativo: any){
    const dialogRef = this.dialog.open(DeletarAtivoComponent, {
      width: '450px',
      data: ativo
    });

    dialogRef.afterClosed().subscribe((close: any) => {
      if(close?.data){
        setTimeout(() => {
          this.getAtivos();
        }, 200)
      }      
    })

  }



  abrirEdicaoAtivo(ativo: any){
    const dialogRef = this.dialog.open(EditarAtivoComponent, {
      width: '450px',
      data: ativo
    });

    dialogRef.afterClosed().subscribe((close: any) => {
      if(close?.data){
        setTimeout(() => {
          this.getAtivos();
        }, 200)
      }  
      
    })

  }


  abrirAdicionarAtivo(){
    const dialogRef = this.dialog.open(AdicionarAtivoComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((close: any) => {
      if(close?.data){
        setTimeout(() => {
          this.getAtivos();
        }, 200)
      }  
      
    })
  }

}
