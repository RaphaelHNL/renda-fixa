import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AtivosService } from '../../../shared/services/ativos.service';
import { SnackBarService } from '../../../shared/services/snack-bar.service';

@Component({
  selector: 'app-editar-ativo',
  templateUrl: './editar-ativo.component.html',
  styleUrls: ['./editar-ativo.component.scss']
})
export class EditarAtivoComponent {
  ativoFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dataAtivo: any,
    private ativosService: AtivosService,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<EditarAtivoComponent>,
  ){

  }
  ngOnInit(){
    this.inicializacaoFormulario();
  }

  inicializacaoFormulario(){
    this.ativoFormGroup = this.formBuilder.group({
      descricao: [this.dataAtivo?.descricao, Validators.required],
      dataValidade: [this.dataAtivo?.dataValidade, Validators.required],
      investimentoMinimo: [this.dataAtivo?.investimentoMinimo, Validators.required],
    })
  }

  editarAtivo(){
    const dataFormatada = new Date(this.ativoFormGroup.get('dataValidade')?.value).toISOString().split('T')[0];
    const payloadAtivo = {
      "id": this.dataAtivo.id,
      "descricao": this.ativoFormGroup.get('descricao')?.value,
      "dataValidade": dataFormatada,
      "investimentoMinimo": this.ativoFormGroup.get('investimentoMinimo')?.value,
      "tipoProdutoId": this.dataAtivo.tipoProduto?.id,
      "indexadorId": this.dataAtivo.indexador?.id 
    }
    this.ativosService.editarAtivo(payloadAtivo)
    .subscribe({
      next: () => {
        this.snackBarService.mensagem('Editado com sucesso!', 'snackbar-sucesso');
        this.dialogRef.close({data: true});
      },
      error: error => {
        if(error.status === 401){
          this.snackBarService.mensagem('Você não possui acesso autorizado!', 'snackbar-error');
        }else{
          this.snackBarService.mensagem('Ocorreu um error ao editar o ativo!', 'snackbar-error');
        }
        this.dialogRef.close({data: false});
      }
    });

  }
}
