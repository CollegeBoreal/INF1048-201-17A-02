import {Component, OnInit} from '@angular/core';
import {PokemonService} from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  pokemons: Array<any>;
  constructor(private pokemonService: PokemonService) {
  this.pokemons = [];
  }
 ngOnInit() {
    this.pokemons = this.pokemonService.pokemonInit();
 }
}
