import { Component } from '@angular/core';

import * as dataJson  from './validaciones.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  info:boolean = true;
  title = 'operacionesmat';

  // cantidadone: number;
    gustamas11 = 0;
    gustamenos11 = 0;
    mas11=0;
    menos11=0;

    gustamas12 = 0;
    gustamenos12 = 0;
    mas12=0;
    menos12=0;

    gustamas13 = 0;
    gustamenos13 = 0;
    mas13=0;
    menos13=0;

    gustamas14 = 0;
    gustamenos14 = 0;
    mas14=0;
    menos14=0;

    gustamas15 = 0;
    gustamenos15 = 0;
    mas15=0;
    menos15=0;
   
    meGusta(nombre: string, gusta: number) {
      if ((gusta === 2) || (gusta ===3) ){
        console.log("variable  gusta", gusta);
      }
      const {data} =  dataJson
      console.log(nombre,gusta,data) //[`${nombre}`])
      //if (data)

    }








    validador = {
      "gustamas11":[2,3],
      "gustamenos11":[1],
      "gustamas12":[],
      "gustamenos12":[],
      "gustamas13":[3],
      "gustamenos13":[1,2],
  }

  }




 