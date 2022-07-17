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
    fecha:Date|string;
    descArr:string;
    chechArrendar:boolean;
    precio:number;
    amueblado:boolean;
    garage : boolean;
    mascota:boolean;
    idPro:number;

    detalleImagenes : FotoI[]; 
    compartido : boolean;

    nomCiu:string;
    nomPro:string;
    nomTipArr:string;

}