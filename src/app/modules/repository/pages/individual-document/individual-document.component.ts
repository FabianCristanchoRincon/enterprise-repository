import { RepositoryService } from './../../services/repository.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-individual-document',
  templateUrl: './individual-document.component.html',
  styleUrls: ['./individual-document.component.css']
})
export class IndividualDocumentComponent implements OnInit {

  document:any;

  constructor(private activateRoute:ActivatedRoute,
    private repositoryService:RepositoryService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap
    .subscribe(params => {
      let year = params.get('year');
      let id = params.get('id');
      this.document = this.repositoryService.getDocumentByYearAndId(year, id);
    })
  }

}
