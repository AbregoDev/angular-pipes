import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
   selector: 'app-no-comunes',
   templateUrl: './no-comunes.component.html',
   styles: [
   ]
})
export class NoComunesComponent {

   // i18nSelect
   nombre: string = 'Daniela';
   genero: string = 'femenino';
   invitacionMapa = {
      'masculino': 'jodido',
      'femenino': 'jodida'
   };
   // i18nPlural
   clientes: string[] = ['Bryan', 'Daniel', 'Ramirez', 'Gutierritos', 'Godinez'];
   clientesMapa = {
      '=0': 'no tenemos ningún cliente esperando.',
      '=1': 'tenemos un cliente esperando.',
      'other': 'tenemos # clientes esperando.',
   };
   labelButtonClientes: string = 'Atender cliente';
   // KeyValue
   persona = {
      nombre: 'Bryan',
      edad: 21,
      direccion: 'Puebla, México'
   };
   // JSON
   heroes = [
      {
         nombre: 'Batman',
         vuela: false
      },
      {
         nombre: 'Superman',
         vuela: true
      },
      {
         nombre: 'Green Lantern',
         vuela: true
      },
      {
         nombre: 'The Flash',
         vuela: false
      }
   ];
   // Async
   observable = interval(1000);
   promesa = new Promise( (resolve, reject) => {
      setTimeout(() =>{
         resolve('Updated data');
      }, 2000);
   });

   cambiarGenero(): void {
      if (this.genero === 'femenino') {
         this.nombre = 'Bryan';
         this.genero = 'masculino';
      } else {
         this.nombre = 'Daniela';
         this.genero = 'femenino';
      }
   }

   atenderCliente(): void {
      if (this.clientes.length > 0) {
         this.clientes.pop();
      } else {
         this.clientes = ['Bryan', 'Daniel', 'Ramirez', 'Gutierritoz', 'Godinez'];
      }

      this.labelButtonClientes = this.clientes.length === 0 ? 'Restablecer clientes' : 'Atender cliente';
   }
}
