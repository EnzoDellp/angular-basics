import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    
    
    PersonajesComponent,
    AgregarComponent,
   
  ],
  exports:[
    PersonajesComponent,
    AgregarComponent,
    FormsModule
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    DbzService
  ]
})
export class DbzModule { }
