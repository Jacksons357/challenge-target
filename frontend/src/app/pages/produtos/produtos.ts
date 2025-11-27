import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { useEstoqueQuery } from '../../core/queries/estoque.query'
import { MatButtonModule } from '@angular/material/button'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import type { Produto } from '../../core/http/api'
import { MovimentacaoDialog } from './movimentacao-dialog'

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatDialogModule, MovimentacaoDialog],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  displayedColumns = ['codigoProduto', 'descricaoProduto', 'estoque', 'actions']
  estoque = useEstoqueQuery()

  constructor(private dialog: MatDialog) {}

  abrirMovimentacao(produto: Produto) {
    const ref = this.dialog.open(MovimentacaoDialog, {
      data: produto,
      width: '400px'
    })
    ref.afterClosed().subscribe(ok => {
      if (ok) {
        this.estoque.refetch()
      }
    })
  }
}
