import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryPageComponent } from './pages/repository-page/repository-page.component';
import { RepositoryRoutingModule } from './repository-routing.module';
import { IndividualDocumentComponent } from './pages/individual-document/individual-document.component';
import { SafePipe } from './pipes/safe.pipe';



@NgModule({
  declarations: [
    RepositoryPageComponent,
    IndividualDocumentComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    RepositoryRoutingModule
  ],
  exports: [
    RepositoryPageComponent,
    SafePipe
  ]
})
export class RepositoryModule { }
