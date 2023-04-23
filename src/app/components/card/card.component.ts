import { Component } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  pokemon!:PokemonData
  name: string = "dito"
  attributesTypes: string[] = ['fire', 'rock']

  constructor(
    private service: PokemonService
  ) { }

ngOnInit(): void{
  this.service.getPokemon("ditto").subscribe(
    {
      next:(res) => {
        this.pokemon ={
          id:res.id,
          name:res.name,
          sprites:res.sprites,
          types:res.types
        }
        console.log(res)
        console.log(this.pokemon)
      },
      error:(err) => console.log(err)
    }
  )
}
}
