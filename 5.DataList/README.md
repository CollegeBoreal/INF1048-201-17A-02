# Angular: Gestion de la liste


Creer un projet Angular-CLI et afficher les donnes ci-dessous a travers un Service Angular 

https://pokeapi.co/api/v2/pokemon?limit=15


* Representation des donnees en JSON

https://www.w3schools.com/js/js_json_intro.asp

* Utilisation de la platefrome reactive

http://reactivex.io/

```
import "rxjs/Rx";
```

```
  constructor(private http: Http) {

  }
```

```
  pokemonInit(){
    let pokemons: Array<any> = [];

    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .map( tout => tout.json() )
    .flatMap( tableau => tableau.results )
    .subscribe(
      donnee => {
        pokemons.push(donnee)
      },
      erreur => {
        console.error(erreur)
      }
    );

    return pokemons;
  }
```

Devoir: Recuperer les informations (Pokemon) grace a la librairie rxjs/Rx et l'afficher dans un composant
