import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { VeiculoService, Veiculo } from '../../core/services/veiculo.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro-veiculo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    RouterModule,
  ],
  providers: [MessageService],
  templateUrl: './cadastro-veiculo.component.html',
  styleUrl: './cadastro-veiculo.component.scss',
})
export class CadastroVeiculoComponent implements OnInit {
  form!: FormGroup;
  veiculoId?: number;
  modoEdicao = false;

  constructor(
    private fb: FormBuilder,
    private veiculoService: VeiculoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [0],
      placa: ['', Validators.required],
      chassi: ['', Validators.required],
      renavam: ['', Validators.required],
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      ano: ['', [Validators.required, Validators.min(1900)]],
    });

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.modoEdicao = true;
      this.veiculoId = +id;
      const veiculo = this.veiculoService.buscarPorId(this.veiculoId);

      if (veiculo) {
        console.log(veiculo);
        this.form.patchValue(veiculo);
      }
    }
  }

  salvar() {
    if (this.form.valid) {
      const veiculo: Veiculo = this.form.value;

      if (veiculo.id) {
        this.veiculoService.atualizar(veiculo);
        this.messageService.add({ severity: 'success', summary: 'Atualizado', detail: 'Veículo atualizado com sucesso!' });
      } else {
        this.veiculoService.adicionar(veiculo);
        this.messageService.add({ severity: 'success', summary: 'Cadastrado', detail: 'Veículo cadastrado com sucesso!' });
      }

      setTimeout(() => {
        this.router.navigate(['/lista']);
      }, 2000);
    } else {
      this.form.markAllAsTouched();
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Preencha todos os campos obrigatórios!' });
    }
  }


}
