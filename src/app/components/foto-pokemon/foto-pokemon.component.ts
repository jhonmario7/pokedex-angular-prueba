import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-foto-pokemon',
  templateUrl: './foto-pokemon.component.html',
  styleUrls: ['./foto-pokemon.component.scss']
})
export class FotoPokemonComponent {
  @Input() pokemon?: Pokemon;
    get animatedPhoto(): string | undefined {
      if (this.pokemon && this.pokemon.id) {
        if (this.pokemon.id >= 650) {
          return this.pokemon.sprites.front_default.toString()
        } else {
          return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${this.pokemon.id}.gif`;
        }
      }
      return undefined;
    }
}
