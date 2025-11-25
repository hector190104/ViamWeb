import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css'],
  imports: [FormsModule, CommonModule]
})
export class ConfiguracionComponent {
  modoOscuro = false;
  loading = false;

  constructor(private router: Router) {
    // Mantener preferencia al recargar
    if (typeof window !== 'undefined' && window.localStorage) {
      this.modoOscuro = localStorage.getItem('modoOscuro') === 'true';
    }
    this.setModoOscuro(this.modoOscuro);
  }

  toggleModoOscuro() {
    // NO invertir, solo aplicar el valor actual
    this.setModoOscuro(this.modoOscuro);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('modoOscuro', String(this.modoOscuro));
    }
  }

  setModoOscuro(activo: boolean) {
    if (typeof document !== 'undefined') {
      if (activo) {
        document.body.classList.add('modo-oscuro');
      } else {
        document.body.classList.remove('modo-oscuro');
      }
    }
  }

  cerrarSesion() {
    this.loading = true;
    // Mejor animación: spinner + fadeout del card + feedback visual
    let card: HTMLElement | null = null;
    if (typeof document !== 'undefined') {
      card = document.querySelector('.config-card') as HTMLElement;
      if (card) {
        card.style.transition = 'opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1)';
        card.style.opacity = '0.3';
        card.style.transform = 'scale(0.97) translateY(18px)';
      }
    }
    setTimeout(() => {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.clear();
      }
      this.loading = false;
      this.router.navigate(['/home']);
      if (card) {
        card.style.opacity = '';
        card.style.transform = '';
        card.style.transition = '';
      }
    }, 1100);
  }
}
