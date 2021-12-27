import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFilesComponent } from './pages/list-files/list-files.component';

const routes: Routes = [
  {
    path: '',
    component: ListFilesComponent
  },
  {
    path: ':code',
    component: ListFilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericRepoRoutingModule { }
