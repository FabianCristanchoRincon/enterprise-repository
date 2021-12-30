import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'calibracion',
    loadChildren: ()=> import('../../modules/repository/repository.module').then(m=> m.RepositoryModule)
  },
  {
    path: '',
    loadChildren: ()=> import('../../modules/generic-repo/generic-repo.module').then(m=> m.GenericRepoModule)
  },
  // {
  //   path: '**',
  //   redirectTo: 'calibracion'
  // }
];

 @NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })
 export class HomeRoutingModule { }
