import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'repositorio',
    loadChildren: ()=> import('../../modules/repository/repository.module').then(m=> m.RepositoryModule)
  },
  {
    path: '**',
    redirectTo: 'repositorio'
  }
];

 @NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })
 export class HomeRoutingModule { }
