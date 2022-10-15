export class Experiencia {
    id? : number;
    nombreE : string;
    cargo : string;
    inicio : string;
    fin : string;
    tareas : string;
    url_img : string;
    url : string;

    constructor(nombreE:string, cargo:string, inicio:string, fin:string, tareas:string, url_img: string, url: string){
        this.nombreE = nombreE;
        this.cargo = cargo;
        this.inicio = inicio;
        this.fin = fin;
        this.tareas = tareas;
        this.url_img = url_img;
        this.url = url
    }

}
