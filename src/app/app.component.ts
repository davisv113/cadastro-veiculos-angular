import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MenubarModule, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Início', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Cadastro', icon: 'pi pi-plus-circle', routerLink: '/cadastro' },
      { label: 'Lista', icon: 'pi pi-list', routerLink: '/lista' },
    ];
  }
}
