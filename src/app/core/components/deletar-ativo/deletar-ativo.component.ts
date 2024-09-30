import { Component, Inject, inject } from '@angular/core';
import { AtivosService } from '../../../shared/services/ativos.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackBarService } from '../../../shared/services/snack-bar.service';

@Component({
  selector: 'app-deletar-ativo',
  templateUrl: './deletar-ativo.component.html',
  styleUrls: ['./deletar-ativo.component.scss']
})
export class DeletarAtivoComponent {

  constructor(
    private ativosService: AtivosService,
    @Inject(MAT_DIALOG_DATA) public dataAtivo: any,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<DeletarAtivoComponent>
  ){
  }
  
  deletarAtivo(){
   this.ativosService.deleteAtivo(this.dataAtivo.id)
    .subscribe({
      next: () => {
        this.snackBarService.mensagem('Ativado deletado com sucesso!', 'snackbar-sucesso');
        this.dialogRef.close({data: true});
      },
      error: error => {
        if(error.status === 401){
          this.snackBarService.mensagem('Você não possui acesso autorizado!', 'snackbar-error');
        }else{
          this.snackBarService.mensagem('Ocorreu um error ao deletar o ativo!', 'snackbar-error');
        }
        this.dialogRef.close({data: false});
      }
    });
  }

}
