import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericRepoRoutingModule } from './generic-repo-routing.module';
import { ListFilesComponent } from './pages/list-files/list-files.component';


@NgModule({
  declarations: [
    ListFilesComponent
  ],
  imports: [
    CommonModule,
    GenericRepoRoutingModule
  ]
})
export class GenericRepoModule { }
