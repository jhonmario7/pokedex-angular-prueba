import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  //Metodos que vamos a llamar de la API de POKEMON, en su preferencias las llamadas desde el backend.

  async getBypage(page: number, size: number = 40): Promise<Resultado[]> {
    if (page > 5) return [];
    //Funcion para paginación.
    const offset = size * (page - 1);
    //El metodo fecth, se comunica con URL, y espera un resultado.
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`);
    const resJson = await res.json();
    // console.log(resJson);
    if (resJson.results.length > 0) return resJson.results
    return [];
  }

  //Datos por ID de pokemon.
  async getById(id: string): Promise<Pokemon> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await res.json();;
  }

  async getDescripcion(id:string | number): Promise<string> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const resJson = await res.json();
    const texto = resJson.flavor_text_entries.find((texto:any) => texto.language.name === "es")
    return texto.flavor_text;
  }

}
