import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    if (this.email === '' || this.password === '') {
      this.error = 'Todos los campos son obligatorios';
      return;
    }

    // Simulación login (luego lo conectas a API)
    if (this.email === "admin@gmail.com" && this.password === "123456") {
      this.router.navigate(['/']);
    } else {
      this.error = 'Correo o contraseña incorrectos';
    }
  }
}
