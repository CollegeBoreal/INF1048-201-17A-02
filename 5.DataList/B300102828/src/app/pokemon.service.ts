import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PokemonService {

  constructor(private http: Http) {
  }
pokemonInit() {
   const pokemons: Array<any> = [];
  this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  .map( tout => tout.json() )
    .flatMap( tableau => tableau.results)
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
