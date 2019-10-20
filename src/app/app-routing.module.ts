import { HomeComponent } from './home/home.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pagina1', component: Pagina1Component},
  {path: 'pagina2', component: Pagina2Component},
  {path: 'pagina3', component: Pagina3Component},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: PaginaNaoEncontradaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//Exportar todos de uma vez e adicionar ao app.module.ts(excluir as importações das paginas lá)
export const routingComponents = [
  HomeComponent,
  Pagina1Component,
  Pagina2Component,
  Pagina3Component,
  PaginaNaoEncontradaComponent
]
