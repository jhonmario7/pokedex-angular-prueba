import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../../servicies/pokemon.service';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private PokemonService: PokemonService) { }

  //ViewChild lo que nos hace es que nos genera una tarjeta una variable que hace referencia al elemento en si.

  @ViewChild('tarjetas') tarjetasElement!: ElementRef;

  listaPokemon: Resultado[] = []

  pagina: number = 1;
  cargando: boolean = false;
  detalle: boolean = false;
  pokemonSeleccionado?: Pokemon


  ngOnInit(): void {
    this.cargarLista();
    this.PokemonService.getById("1");
  }

  //Funcion asincrona (async).
  async cargarLista() {
    this.cargando = true;
    this.listaPokemon = [...this.listaPokemon, ...await this.PokemonService.getBypage(this.pagina)]
    this.cargando = false;
    this.pagina++;
  }

  //Implementamos Evento, que pueda escuchar todos los elementos de scroll que tenga esos en particular.

  onScroll(e: any) {
    if (this.cargando) return;
    if (
      Math.round(
        this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop
      )
      === e.srcElement.scrollHeight) {
      this.cargarLista()
    }
  }

  async tarjetaClikeada(id: string) {
    if(this.pokemonSeleccionado && id === this.pokemonSeleccionado?.id.toString()){
      return this.cambiarEstadoDetalle()
    }
    this.pokemonSeleccionado = await this.PokemonService.getById(id);
  }


  cambiarEstadoDetalle() {
    if (this.pokemonSeleccionado) this.detalle = !this.detalle;
    console.log(this.detalle);
  }


}
