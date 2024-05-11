export interface Data{
    count: number,
    next: string,
    previus: string;
    result: Resultado
}

export interface Resultado {
    name: string,
    url: string 
}