import {PokemonUrl} from './pokemon-url';

export interface PokemonApi {
  count: number;
  previous: string;
  results: PokemonUrl;
  next: string;
}

