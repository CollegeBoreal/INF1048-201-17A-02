import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {PokemonUrl} from './@core/models/pokemon-url';
import {HttpClient} from '@angular/common/http';
import {PokemonApi} from './@core/models/pokemon-api';
@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {
  }
pokemonInit(): PokemonUrl[]  {
   const pokemons: PokemonUrl[] = [];
  this.http.get<PokemonApi>('https://pokeapi.co/api/v2/pokemon?limit=151')
  .map( tout => tout.results)
    .subscribe (
      (donnee: PokemonUrl) => {
      pokemons.push(donnee);
    },
    erreur => {
      console.error(erreur);
    }
  );
  return pokemons;
}
}
