export class Educacion {
    id: number;
    nombreE : string;
    titulo: string;
    inicio: string;
    fin: string;
    descripcion: string;
    url_img: string;
    url: string;

    constructor(nombreE: string, titulo: string, inicio: string, fin: string, descripcion: string, url_img: string, url: string){
        this.nombreE = nombreE;
        this.titulo = titulo;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion = descripcion;
        this.url_img = url_img;
        this.url = url;
    }

}
