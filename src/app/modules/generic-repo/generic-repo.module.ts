import { RepositoryModule } from './../repository/repository.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericRepoRoutingModule } from './generic-repo-routing.module';
import { ListFilesComponent } from './pages/list-files/list-files.component';
import { FileDetailsComponent } from './pages/file-details/file-details.component';


@NgModule({
  declarations: [
    ListFilesComponent,
    FileDetailsComponent
  ],
  imports: [
    CommonModule,
    GenericRepoRoutingModule,
    RepositoryModule
  ]
})
export class GenericRepoModule { }
