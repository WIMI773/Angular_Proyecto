import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  nombre: string = '';
  email: string = '';
  password: string = '';
  confirmar: string = '';
  error: string = '';

  constructor(private router: Router) {}

  registrar() {
    if (!this.nombre || !this.email || !this.password || !this.confirmar) {
      this.error = 'Todos los campos son obligatorios';
      return;
    }

    if (this.password !== this.confirmar) {
      this.error = 'Las contraseñas no coinciden';
      return;
    }

    // Aquí luego conectas tu API para guardar el usuario
    console.log('Usuario registrado:', this.nombre, this.email);

    // Redirige al login
    this.router.navigate(['/login']);
  }
}
