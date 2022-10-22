export class Skill {
    id: number;
    nombre: string;
    tipo: string;
    porcentaje: number;

    constructor(nombre:string, tipo:string, porcentaje:number){
        this.nombre = nombre;
        this.tipo = tipo;
        this.porcentaje = porcentaje;
    }
}
