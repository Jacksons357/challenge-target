import { Component, effect } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { useEstoqueQuery } from '../../core/queries/estoque.query'

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  displayedColumns = ['codigoProduto', 'descricaoProduto', 'estoque']
  estoque = useEstoqueQuery()

  constructor() {
    effect(() => {
      console.log('ESTOQUE DATA:', this.estoque.data())
      console.log('LOADING:', this.estoque.isLoading())
      console.log('ERROR:', this.estoque.isError())
    })
  }
}
