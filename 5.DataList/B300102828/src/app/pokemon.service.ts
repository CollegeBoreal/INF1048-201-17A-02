import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PokemonService {

  constructor(private http: Http) {
  }
pokemonInit() {
    let pokemons: Array<any> = [];
  this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  .map( result => result.json() )
    .flatMap( tableau => tableau.result)
    .subscribe (
    donnee => {
      pokemons.push(donnee);
    },
    erreur => {
      console.error(erreur);
    }
  );
  return pokemons;
}
}
