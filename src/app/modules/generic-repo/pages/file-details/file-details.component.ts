import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FileGeneric } from '../../models/file.generic.model';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css']
})
export class FileDetailsComponent implements OnInit {

  file:FileGeneric | undefined;

  constructor(private activateRoute:ActivatedRoute, private genericService:GenericService) {
    this.file = new FileGeneric();
   }

  ngOnInit(): void {
    this.activateRoute.paramMap
    .subscribe(params => {
      this.file = this.genericService.getFileByRepoAndId(params.get('code'), params.get('idSection'), params.get('idFile'));
    })
  }

}
