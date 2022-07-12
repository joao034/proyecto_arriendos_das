import { FotoI } from "./foto.interface";

export interface ArriendoI{
    
    idArr:number;
    tipoArr:number;
    usuPro:number;
    numHab:number;
    numBanos:number;
    numPisos:number;
    numPersonas:number;
    ciudArr:number;
    dirArr:string;
    publicado:boolean;
    superficie:number;
    fecha:Date;
    descArr:string;
    chechArrendar:boolean;
    precio:number;
    amueblado:boolean;
    garage : boolean;
    mascota:boolean;
    detalleImagenes : FotoI[]; 
    compartido : boolean;
}