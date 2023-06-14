import { NgModule } from '@angular/core'; // importamos el decorador @NgModule de angular/core de angular/core
import { BrowserModule } from '@angular/platform-browser'; //  importamos el decorador @NgModule de angular/platform-browser
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component'; // importamos el componente AppComponent  de app.component.ts
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { ZapatosComponent } from './zapatos/zapatos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ // declaramos los componentes que vamos a utilizar
    AppComponent,
    VideojuegoComponent,
    CursosComponent,
    ZapatosComponent,
    HomeComponent,
  ],
  imports: [ // declaramos los modulos que vamos a utilizar
    BrowserModule,
    FormsModule,
    routing

  ],
  providers: [
    appRoutingProviders
  ], // declaramos los servicios que vamos a utilizar
  bootstrap: [AppComponent] // declaramos el componente principal
})
export class AppModule { }
