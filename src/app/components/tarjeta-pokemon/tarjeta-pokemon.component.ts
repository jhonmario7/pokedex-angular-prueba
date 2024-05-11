import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/servicies/pokemon.service';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrls: ['./tarjeta-pokemon.component.scss']
})


//OnChanges es una funcion que se ejecuta cada vez que se recibe de los inputs cuando yo llamo el elemento.
export class TarjetaPokemonComponent implements OnChanges{

  constructor (private PokemonService: PokemonService){} 


  ngOnChanges(changes: SimpleChanges): void {
    this.extraerInformacion()
  }

  //Aquí hacemos que la tarjeta pueda recibir algo desde su padre.
  @Input() data?:Resultado;
  @Input() seleccionado:boolean = false;
  @Input() fullData?: Pokemon; 
  @Output() clickeado = new EventEmitter<string>();

  //extraemos el numero del pokemon.
    id:string = "0";

    extraerInformacion(){
      if(this.data && this.data.url !== ""){
        this.id = this.data.url.substring(34,this.data.url.length-1);
        return
      }
      if(this.fullData){
        this.id = this.fullData.species.url.substring(42,this.fullData.species.url.length-1);
        this.data = {
          name: this.fullData.species.name,
          url: ""
        }
      }
    }
}
