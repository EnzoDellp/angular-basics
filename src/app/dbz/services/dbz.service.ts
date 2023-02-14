import {Injectable} from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService{
    
    private _personajes:Personaje[]=[
        {
          nombre:"goku",
          poder:15000
        },
        {
          nombre:"vegeta",
          poder:8500
        }
      ];
      get Personajes():Personaje[]{
        return [...this._personajes];
      }

    constructor(){}
        agregarPersonaje(Personaje :Personaje){
            this._personajes.push(Personaje);
        }
    
}