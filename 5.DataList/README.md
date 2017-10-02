# Angular: Gestion de la liste


Creer un projet Angular-CLI et afficher les donnes ci-dessous a travers un Service Angular 

https://pokeapi.co/api/v2/pokemon?limit=15



```
import "rxjs/Rx";
```

```
  pokemonInit():Array<any>{
        let pokemons: Array<any> = [];
        this.http.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .map( result => result.json())
        .flatMap(result => result.results)
        .subscribe(
            result => {
                pokemons.push(result);
            },
            error => {
                console.error(error);
            }
        );
     return pokemons;
    }
```
