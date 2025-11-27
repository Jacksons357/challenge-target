import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-produtos',
  imports: [CommonModule, MatTableModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  displayedColumns = ['sku', 'produto', 'categoria', 'estoque', 'preco'];
  dataSource = [
    { sku: 'SKU-001', produto: 'Notebook Pro 14"', categoria: 'Eletrônicos', estoque: 12, preco: 6999.9 },
    { sku: 'SKU-002', produto: 'Mouse Gamer', categoria: 'Acessórios', estoque: 45, preco: 199.9 },
    { sku: 'SKU-003', produto: 'Cadeira Ergonômica', categoria: 'Móveis', estoque: 7, preco: 1299.0 },
    { sku: 'SKU-004', produto: 'Monitor 27" 144Hz', categoria: 'Eletrônicos', estoque: 18, preco: 1899.5 },
  ];
}
