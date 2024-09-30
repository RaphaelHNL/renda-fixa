import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { 

  }

  mensagem(mensagem: string, tipoError: string){
    this.snackBar.open(mensagem, 'Fechar', {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [tipoError],
    });
  }
}
