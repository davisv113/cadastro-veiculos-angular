import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

export interface Veiculo {
  id: number;
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: number;
}

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private veiculos: Veiculo[] = [
    {
      id: 1,
      placa: 'ABC1234',
      chassi: '9BWZZZ377VT004251',
      renavam: '12345678900',
      modelo: 'Gol',
      marca: 'Volkswagen',
      ano: 2018
    },
    {
      id: 2,
      placa: 'XYZ9876',
      chassi: '9BWZZZ377VT004252',
      renavam: '98765432100',
      modelo: 'Civic',
      marca: 'Honda',
      ano: 2020
    }
  ];

  private veiculosSubject = new BehaviorSubject<Veiculo[]>(this.veiculos);
  veiculos$ = this.veiculosSubject.asObservable();

  buscarPorId(id: number): Veiculo | undefined {
    return this.veiculos.find(v => v.id === id);
  }

  listar(): Veiculo[] {
    return this.veiculos;
  }

  adicionar(veiculo: Veiculo): void {
    veiculo.id = this.gerarId();
    this.veiculos.push(veiculo);
    this.atualizarLista();
  }

  atualizar(veiculo: Veiculo): void {
    const index = this.veiculos.findIndex(v => v.id === veiculo.id);
    if (index !== -1) {
      this.veiculos[index] = veiculo;
    }
  }

  remover(id: number): void {
    this.veiculos = this.veiculos.filter(v => v.id !== id);
    this.atualizarLista();
  }

  private gerarId(): number {
    return this.veiculos.length > 0
      ? Math.max(...this.veiculos.map(v => v.id)) + 1
      : 1;
  }

  private atualizarLista(): void {
    this.veiculosSubject.next([...this.veiculos]);
  }
}
