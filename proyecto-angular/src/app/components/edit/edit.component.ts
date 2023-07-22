import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from 'src/app/services/project.service';
import { NgForm } from '@angular/forms';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService,
    UploadService]

})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public save_project: any;
  public url: string;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _proyectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute

  ) {
    this.title = "Editar proyecto";
    this.project = new Project('', '', '', '', 0, '', '');
    this.status = '';
    this.filesToUpload = [];
    this.url = Global.url;
    this.save_project = '';
  };


  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.getProject(id);
    });
  }

  getProject(id: any) {
    this._proyectService.getProject(id).subscribe(
      (response: any) => {
        this.project = response.proyect;
      },
      (error: any) => {
        console.log(<any>error)
      }
    );
  }

  onSubmit(form: any) {
    this._proyectService.updateProject(this.project).subscribe(
      (response: any) => {
        if (response.project) {
          // console.log(response.proyect);
          // subir imagen  
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(this.url + "upload-image/" + response.project._id, [], this.filesToUpload, 'imagen')
            .then((result: any) => {

              this.save_project = response.project;
              this.status = 'success';
              // console.log(result); 
              // form.reset();
            });
          }  else{
              this.save_project = response.proyect;
              this.status = 'success';
          }
        } else {
          this.status = 'failed';
        }
      },
      (error: any) => {

      }
    );
  }

  fileChangeEvent(fileInput: any) {
    console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
