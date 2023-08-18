import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Paola Osorio'; /* en el componente angular original se cambia titulo por la variable creada en 'ejemploangular.ts'. y siempre deben ir publico para que coja en el html*/
  age = 31;
  img = '/assets/image/avatar.png';
  btnDisabled = true; /*puedo activar o desactivar propiedades que se renderiza automaticamente en el html*/

  /*objetos*/
  person = {
    name: 'Paola',
    age: 18,
    avatar: '/assets/imagen/_96cf83a7-88bb-41e7-bd7b-a4f2bcce7de3.jpg',
  }
  toggleButton() {
    this.btnDisabled = !this.btnDisabled; /*el ! sirve para negar una funcion, si esta activo entonces quedara inactivo*/
  }
  increaseAge() {
    this.person.age += 1; /*para incrementar 1 cada vez que se escucha el evento (oprime el boton)*/
  }
  decreaseAge() {
    this.person.age -= 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement; /*aqui se especifica de que propiedad hace parte, ej: div es de html*/
    console.log(element.scrollTop); /*scroll es la barra espaciadora, el evento target es para contar la posicion*/
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement; /*aqui se especifica de que propiedad hace parte, ej: input es una propiedad aparte*/
    this.person.name = element.value; /*esto permite que se cambie el nombre cada vez que escribimos se cambia*/
  }
}



