import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./module/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'cadastro',
    loadComponent: () =>
      import('./module/cadastro-veiculo/cadastro-veiculo.component').then((m) => m.CadastroVeiculoComponent),
  },
  {
    path: 'cadastro/:id',
    loadComponent: () =>
      import('./module/cadastro-veiculo/cadastro-veiculo.component').then((m) => m.CadastroVeiculoComponent),
  },
  {
    path: 'lista',
    loadComponent: () =>
      import('./module/lista-veiculos/lista-veiculos.component').then((m) => m.ListaVeiculosComponent),
  },
];
