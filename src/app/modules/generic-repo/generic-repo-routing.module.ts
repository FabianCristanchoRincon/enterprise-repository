import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileDetailsComponent } from './pages/file-details/file-details.component';
import { ListFilesComponent } from './pages/list-files/list-files.component';

const routes: Routes = [
  {
    path: '',
    component: ListFilesComponent
  },
  {
    path: ':code',
    component: ListFilesComponent
  },
  {
    path: ':code/:idSection/:idFile',
    component: FileDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericRepoRoutingModule { }
