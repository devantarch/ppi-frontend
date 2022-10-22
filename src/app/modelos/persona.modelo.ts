export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    posicion: string;
    about: string;
    url_img: string;
    url_back_img: string;

    constructor(nombre: string, apellido: string, posicion: string, about: string, url_img: string, url_back_img: string){
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.posicion = posicion;
        this.about = about;
        this.url_img = url_img;
        this.url_back_img = url_back_img;

    }
}