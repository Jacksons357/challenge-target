import { Component, Inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { Api, MovimentacaoDto, Produto } from '../../core/http/api'

@Component({
  selector: 'app-movimentacao-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  template: `
    <h2 mat-dialog-title class="text-lg font-semibold">
      Movimentar Estoque
    </h2>

    <mat-dialog-content class="mt-2 space-y-3">

      <div class="p-3 rounded border bg-gray-50">
        <strong>{{ data.descricaoProduto }}</strong>
        <div class="text-sm text-gray-600">
          Código: {{ data.codigoProduto }}
        </div>
      </div>

      <mat-form-field appearance="outline" class="w-full">
        <mat-label>Quantidade</mat-label>
        <input 
          matInput 
          type="number" 
          [(ngModel)]="quantidade" 
          min="1" 
          required 
        />
        <mat-hint>Informe a quantidade movimentada</mat-hint>

        <mat-error *ngIf="quantidade <= 0">
          A quantidade deve ser maior que zero.
        </mat-error>
      </mat-form-field>

      <mat-form-field appearance="outline" class="w-full">
        <mat-label>Descrição da movimentação</mat-label>
        <textarea 
          matInput 
          rows="2"
          [(ngModel)]="descricao" 
          required>
        </textarea>
        <mat-hint>Ex: Compra da fábrica, devolução, ajuste…</mat-hint>

        <mat-error *ngIf="!descricao">
          A descrição é obrigatória.
        </mat-error>
      </mat-form-field>

    </mat-dialog-content>

    <mat-dialog-actions align="end" class="mt-2 space-x-2">

      <button 
        mat-flat-button 
        color="primary" 
        (click)="onSubmit('ENTRADA')" 
        [disabled]="!valid()"
      >
        ➕ Entrada
      </button>

      <button 
        mat-flat-button 
        color="warn" 
        (click)="onSubmit('SAIDA')" 
        [disabled]="!valid()"
      >
        ➖ Saída
      </button>

    </mat-dialog-actions>
  `,
})
export class MovimentacaoDialog {
  quantidade = 1
  descricao = ''

  constructor(
    private api: Api,
    private ref: MatDialogRef<MovimentacaoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Produto
  ) {}

  valid() {
    return typeof this.quantidade === 'number' && this.quantidade > 0
  }

  onSubmit(tipo: MovimentacaoDto['tipo']) {
    const dto: MovimentacaoDto = {
      produtoId: this.data.codigoProduto,
      tipo,
      quantidade: this.quantidade,
      descricao: 'Movimentação de estoque'
    }
    this.api.movimentarEstoque(dto).subscribe({
      next: () => this.ref.close(true),
      error: () => this.ref.close(false)
    })
  }
}
