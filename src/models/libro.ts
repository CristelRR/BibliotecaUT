export interface Libro{
    id_libro?: any,            //<<< ...No es obligatorio que tenga el mismo nobre de atributo en la base... ? significa que es opcional
    titulo: string,
    autor: string,
    id_editorial: number,
    id_categoria: number,
    edicion: number,      //<<<
    volumen: number ,   //<<<
    ubicacion:string,
    fecha_publicacion:string,
    lugar_publicacion:string,
    id_tipo:number,
}