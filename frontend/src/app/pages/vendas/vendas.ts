import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-vendas',
  imports: [CommonModule, MatTableModule],
  templateUrl: './vendas.html',
  styleUrl: './vendas.css',
})
export class Vendas {
  displayedColumns = ['id', 'cliente', 'data', 'valor', 'status'];
  dataSource = [
    { id: 1001, cliente: 'Alice Santos', data: '2025-11-01', valor: 1299.9, status: 'Pago' },
    { id: 1002, cliente: 'Bruno Lima', data: '2025-11-05', valor: 259.0, status: 'Pendente' },
    { id: 1003, cliente: 'Carla Souza', data: '2025-11-06', valor: 749.5, status: 'Cancelado' },
    { id: 1004, cliente: 'Diego Rocha', data: '2025-11-10', valor: 89.9, status: 'Pago' },
  ];
}
