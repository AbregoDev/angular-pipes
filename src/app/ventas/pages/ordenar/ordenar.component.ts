import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

   toUpper: boolean = true;
   orderBy: string = '';
   heroes: Heroe[] = [
      {
         nombre: 'Superman',
         vuela: true,
         color: Color.azul,
      },
      {
         nombre: 'Batman',
         vuela: false,
         color: Color.negro,
      },
      {
         nombre: 'Robin',
         vuela: false,
         color: Color.verde
      },
      {
         nombre: 'Daredevil',
         vuela: false,
         color: Color.rojo,
      },
      {
         nombre: 'Green Lantern',
         vuela: true,
         color: Color.verde,
      },
   ];

   alterCase(): void {
      this.toUpper = !this.toUpper;
   }

   changeOrder(orderBy: string) {
      this.orderBy = orderBy;
   }
}
