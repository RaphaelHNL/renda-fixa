import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtivosService, Indexador, Produto } from '../../../shared/services/ativos.service';
import { SnackBarService } from '../../../shared/services/snack-bar.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-adicionar-ativo',
  templateUrl: './adicionar-ativo.component.html',
  styleUrls: ['./adicionar-ativo.component.scss']
})
export class AdicionarAtivoComponent {
  adicionarAtivoFormGroup: FormGroup;
  tiposProduto: Produto[] = [];
  indexadores: Indexador[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private ativosService: AtivosService,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<AdicionarAtivoComponent>,
    private currencyPipe: CurrencyPipe
  ){}

  ngOnInit(){
    this.getTipoProduto();
    this.inicializacaoFormulario();
  }

  inicializacaoFormulario(){
    this.adicionarAtivoFormGroup = this.formBuilder.group({
      descricao: ['', Validators.required],
      dataValidade: ['', Validators.required],
      investimentoMinimo: ['', Validators.required],
      tipoProdutoId: ['', Validators.required],
      indexadorId: ['', Validators.required],
    })

    this.adicionarAtivoFormGroup.get('indexadorId')?.disable();
  }


  getTipoProduto(){
    this.ativosService.getTipoProduto()
    .subscribe({
      next: produto => {
        if (produto) {
          this.tiposProduto = produto;
        }
      },
      error: error => {
        if(error.status === 401){
          this.snackBarService.mensagem('Você não possui acesso autorizado!', 'snackbar-error');
        }else{
          this.snackBarService.mensagem('Ocorreu um error ao buscar o tipo do produto!', 'snackbar-error');
        }
      }
    });
  }


  getIndexador(event: any){
    const idTipoProduto = event.value;
    this.ativosService.getIndexador(idTipoProduto)
    .subscribe({
      next: indexador => {
        if (indexador) {
          this.indexadores = indexador;
          this.adicionarAtivoFormGroup.get('indexadorId')?.enable();
        }
      },
      error: error => {
        if(error.status === 401){
          this.snackBarService.mensagem('Você não possui acesso autorizado!', 'snackbar-error');
        }else{
          this.snackBarService.mensagem('Ocorreu um error ao buscar o indexador!', 'snackbar-error');
        }
      }
    });

  }

  adicionarNovoAtivo(){
  
    const dataFormatada = new Date(this.adicionarAtivoFormGroup.get('dataValidade')?.value).toISOString().split('T')[0];
    const payloadAtivo = {
      "descricao": this.adicionarAtivoFormGroup.get('descricao')?.value,
      "dataValidade": dataFormatada,
      "investimentoMinimo": this.adicionarAtivoFormGroup.get('investimentoMinimo')?.value,
      "tipoProdutoId": this.adicionarAtivoFormGroup.get('tipoProdutoId')?.value,
      "indexadorId": this.adicionarAtivoFormGroup.get('indexadorId')?.value,
    }

    this.ativosService.adicionarAtivo(payloadAtivo)
    .subscribe({
      next: () => {
        this.snackBarService.mensagem('Ativo adicionado com sucesso!', 'snackbar-sucesso');
        this.dialogRef.close({data: true});
      },
      error: error => {
        if(error.status === 401){
          this.snackBarService.mensagem('Você não possui acesso autorizado!', 'snackbar-error');
        }else{
          this.snackBarService.mensagem('Ocorreu um error ao adicionar o ativo!', 'snackbar-error');
        }
        this.dialogRef.close({data: false});
      }
    });
  }

}
