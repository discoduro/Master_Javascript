import {Injectable} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaServices{

    public zapatos: Array<Zapatilla>
    
    constructor(){
        this.zapatos = [
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
            new Zapatilla('addidas', 'clasic', 'Blanco', 120, true),
            new Zapatilla('luis vouton', 'luis vouton', 'grins', 230, false),
          ];
    }

    getTexto(){
        return 'Hola mundo desde un servicio'; 
    }

    getZapatos(){
        return this.zapatos;
    }
}