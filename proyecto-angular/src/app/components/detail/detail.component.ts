import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})

export class DetailComponent implements OnInit {
  public url: string;
  public project: Project;

  constructor( 
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.project = new Project('', '', '', 0, '', '');
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.getProject(id);
    });
  }

  getProject(_id: any) {
    this._projectService.getProject(_id).subscribe(
      (response: any) => {
        this.project = response.project;
      },
      (error: any) => {
        console.log(<any>error)
      }
    );
  }
}
