import { RepositoryService } from './../../services/repository.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-repository-page',
  templateUrl: './repository-page.component.html',
  styleUrls: ['./repository-page.component.css']
})
export class RepositoryPageComponent implements OnInit {

  calibration: Array<any> = [];

  constructor(private repositoryService:RepositoryService, private router:Router) { }

  ngOnInit(): void {
    this.calibration = this.repositoryService.getCalibration();
  }

  filterByYear(year:number):any {
    return this.calibration.filter( item => {
      return item.year === year;
    })
  }

  seeDocument(year:number, id:number){
    this.router.navigate([`repositorio/${year}/${id}`]);
  }

}
