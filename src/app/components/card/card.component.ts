import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  name: string = "dito"
  attributesTypes: string[] = ['fire', 'rock']

  constructor(
    private service: PokemonService
  ) { }

ngOnInit(): void{
  this.service.getPokemon("ditto").subscribe(
    {
      next:(res) => console.log(res),
      error:(err) => console.log(err)
    }
  )
}
}
