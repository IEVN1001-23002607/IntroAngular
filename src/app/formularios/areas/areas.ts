import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})
export class Areas {

  num1:string=''
  num2:string=''
  resultado:number=0


  operacion: string = 'triangulo'; 

  calcular(): void {
    
    let n1 = parseInt(this.num1);
    let n2 = parseInt(this.num2);

    
    switch (this.operacion) {
      case 'triangulo':
        this.resultado = n1 * n2 /2;
        break;
      case 'rectangulo':
        this.resultado = n1 * n2;
        break;
      case 'circulo':
        this.resultado = Math.PI * n1**2;
        break;
      case 'pentagono':
        this.resultado =5* n1 * n2/2;
        break;
    }
  }



}
