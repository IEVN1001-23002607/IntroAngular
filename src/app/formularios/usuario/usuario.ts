import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: false,
  
  templateUrl: './usuario.html',
})
export class Usuario {

  usuarioCorrecto: string = 'admin';
  contraCorrecta: string = '12345';

  
  resultado: string = '';

  calcular(usuarioIngresado: string, contraIngresada: string): void {
    if (usuarioIngresado !== this.usuarioCorrecto) {
      this.resultado = "El nombre de usuario no es válido.";
    } else if (contraIngresada !== this.contraCorrecta) {
      this.resultado = "La contraseña no es válida.";
    } else {
      this.resultado = `Bienvenido al sistema, ${usuarioIngresado}.`;
    }
  }
}
 