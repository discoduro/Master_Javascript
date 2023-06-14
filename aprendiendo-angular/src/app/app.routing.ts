// en este archivo se configura las rutas y se dan de alta las nuevas rutas que se vayan creando
// #1 importar modulos de routin de angular

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// #2 importar rutas 

import { HomeComponent } from './home/home.component';
import {ZapatosComponent} from './zapatos/zapatos.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';



// #3 configurar array  de rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'zapatos', component: ZapatosComponent},
    {path: 'videojuegos', component: VideojuegoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: '**', component: HomeComponent}
    
];

// #4 exportar el modulo

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);