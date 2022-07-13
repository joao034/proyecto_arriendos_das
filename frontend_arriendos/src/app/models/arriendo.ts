import { FotoI } from "./foto.interface";

export class Arriendo{

    idArr?:number;
    tipoArr?:number;
    usuPro?:number;
    numHab?:number;
    numBanos?:number;
    numPisos?:number;
    numPersonas?:number;
    ciudArr?:number;
    dirArr?:string;
    publicado:boolean = false;
    superficie?:number;
    fecha?:Date;
    descArr?:string;
    chechArrendar:boolean = false;
    precio?:number;
    amueblado:boolean = false;
    garage : boolean = false;
    mascota:boolean = false;
    detalleImagenes? : FotoI[]; 

    
}