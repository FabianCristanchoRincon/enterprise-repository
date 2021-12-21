import { IndividualDocumentComponent } from './pages/individual-document/individual-document.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryPageComponent } from './pages/repository-page/repository-page.component';

const routes: Routes = [
  {
    path: '',
    component: RepositoryPageComponent
  },
  {
    path: ':year/:id',
    component: IndividualDocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryRoutingModule { }
