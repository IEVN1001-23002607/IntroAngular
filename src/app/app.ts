import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = "Fernadez Angel";


  duplicaNUmero(n1:number):number{
    return n1*2
  }

  peliculas={
    titulo:'spiderman',
    fechalansamiento:new Date(),
    precio:1234
  }
}