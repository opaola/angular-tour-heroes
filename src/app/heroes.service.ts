import { Injectable } from '@angular/core';
import { Heroes } from './heroes.interfaz';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Heroes[] = [];

  constructor() {}

  getHeroes(): Heroes[] {
    return this.heroes;
  }

  addHero(newHero: Heroes): void {
    this.heroes.push(newHero);
  }

  deleteHero(index: number): void {
    this.heroes.splice(index, 1);
  }
}
