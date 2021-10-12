import { Component } from '@angular/core';

//decorador
@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>

    <!-- <button (click)="numero=numero+1;">+ 1</button> -->
    <button (click)="sumar()">+ 1</button>
    <span> {{ numero }} </span>
    <button (click)="acumular(-1)">- 1</button>

    <h3>
      La base es: <strong> {{ base }} </strong>
    </h3>

    <button (click)="acumular(base)">+ {{ base }}</button>
    <span> {{ base }} </span>
    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})

//clase exportada
export class ContadorComponent {
  titulo: string = 'Contador';
  numero: number = 0;

  sumar() {
    this.numero += 1;
  }

  acumular(valor: number) {
    this.numero += valor;
  }

  base: number = 5;
}
