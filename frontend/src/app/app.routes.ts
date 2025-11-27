import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'estoque',
        loadComponent: () =>
          import('./pages/produtos/produtos')
            .then(m => m.Produtos)
      },
      {
        path: 'financeiro',
        loadComponent: () =>
          import('./pages/financeiro/financeiro')
            .then(m => m.Financeiro)
      },
      {
        path: 'vendas',
        loadComponent: () =>
          import('./pages/vendas/vendas')
            .then(m => m.Vendas)
      },
      { path: '', redirectTo: 'vendas', pathMatch: 'full' }
    ]
  }
];
