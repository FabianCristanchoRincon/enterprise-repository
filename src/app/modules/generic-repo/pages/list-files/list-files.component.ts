import { GenericService } from './../../services/generic.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GenericModel } from '../../models/generic.model';

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.css']
})
export class ListFilesComponent implements OnInit {

  repo: GenericModel | undefined;

  constructor(
    private activateRoute:ActivatedRoute,
    private genericService:GenericService) {
      this.repo = new GenericModel();
    }

  ngOnInit(): void {
    this.activateRoute.paramMap
    .subscribe(params => {
      let code = params.get('code');
      this.repo = this.genericService.getRepoByCode(code);
    })
  }

}
