import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './pages/cursos/heroes.component';
import { HeroeComponent } from './pages/curso/heroe.component';

const routes: Routes = [
  { path: 'cursos', component: HeroesComponent },
  { path: 'curso/:id', component: HeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'cursos' }
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
