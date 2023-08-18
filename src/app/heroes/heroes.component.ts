import { Component } from '@angular/core';
import { Heroes } from '../heroes.interfaz';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {


  //names: string[] = ['Paola', 'Mauricio'];

  newHeroe =
  {
    name: 'nuevo heroe',
    age: '(1800 – 1900)',
    history: 'sin historia',
    photo: './assets/image/avatarwoman.png'
  };

  heroes: Heroes[] = [
    {
      name: 'Albert Einstein',
      age: '(1879 – 1955)',
      history: '',
      photo: './assets/image/einstein.png'
    },
    {
      name: 'Galileo Galilei',
      age: '(1564 – 1642)',
      history: '',
      photo: './assets/image/Galileo.png'
    },
    {
      name: 'Marie Curie',
      age: '(1867 – 1934)',
      history: '',
      photo: './assets/image/marie.png'
    },
    {
      name: 'Niels Bohr',
      age: '(1885 – 1962)',
      history: '',
      photo: './assets/image/Bohr.png'
    },
    {
      name: 'Max Planck',
      age: '(1858 - 1947)',
      history: '',
      photo: './assets/image/planck.png'
    },
  ]

  agregarHeroe() {
    this.heroes.push(this.newHeroe);
    this.newHeroe =
    {
      name: 'nuevo heroe',
      age: '(1800 – 1900)',
      history: 'sin historia',
      photo: './assets/image/avatarmen.png'
    };
  }

  eliminarHeroe(index: number) {
    this.heroes.splice(index, 1); /*splice para eliminar, index para saber que posicion elimina y elijo la cantidad*/
  }

}


