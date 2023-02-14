import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { contadorModule } from './contadores/contadores.module';
import { MainPageComponent } from './dbz/main-page/main-page.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadorModule,
    DbzModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
