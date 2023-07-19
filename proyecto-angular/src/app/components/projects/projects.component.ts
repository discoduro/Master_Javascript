import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [
    ProjectService

  ]
})

export class ProjectsComponent implements OnInit{
  public proyects: Project[];
  public url: string;

  constructor(
    private _projectService: ProjectService
    
    ){
      this.proyects = [];
      this.url = Global.url;
    }
   
  getProjects(){
    this._projectService.getProjects().subscribe(
      response =>{
        console.log(response);
        if(response.proyects){
          this.proyects = response.proyects;
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  ngOnInit(): void {
    this.getProjects();   
  }
}
