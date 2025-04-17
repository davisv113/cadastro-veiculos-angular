import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Veiculo, VeiculoService } from '../../core/services/veiculo.service';

@Component({
  selector: 'app-lista-veiculos',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './lista-veiculos.component.html',
  styleUrl: './lista-veiculos.component.scss'
})
export class ListaVeiculosComponent implements OnInit {
  veiculos: Veiculo[] = [];

  constructor(private veiculoService: VeiculoService, private router: Router) {}

  ngOnInit(): void {
    this.veiculos = this.veiculoService.listar();
  }

  remover(id: number) {
    this.veiculoService.remover(id);
    this.veiculos = this.veiculoService.listar();
  }

  editar(id: number) {
    this.router.navigate(['/cadastro', id]);
  }
}
