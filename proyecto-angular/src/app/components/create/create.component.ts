import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from 'src/app/services/project.service';
import { NgForm } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';  
import { Global } from '../../services/global'; 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService,
  UploadService]
})
export class CreateComponent implements OnInit{
  public title: string;
  public project: Project;
  public save_project: any;
  public status: string;
  public filesToUpload: Array<File>;
  
  constructor(
    private _proyectService: ProjectService,
    private _uploadService: UploadService
  ){
    this.title = "Crear proyecto";
    this.project = new Project('','','',0,'','');
    this.status = '';
    this.filesToUpload = [];
    this.save_project;
  };

  onSubmit(form: any){

    console.log(this.project);
      this._proyectService.saveProject(this.project).subscribe(
        (response: any) => {
          if(response.project){
            
            // subir imagen    
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.Project._id, [], this.filesToUpload, 'imagen')
            .then((result:any)=>{
              this.status = 'success';
              console.log(result);
              form.reset();
            });
          }else{
            this.status = 'failed';
          }
        }, 
        (error: any) =>{
          alert("Error al guardar el Proyecto");
          console.error(<any>error)
        }
      )
  }

  fileChangeEvent(fileInput: any){
    console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  ngOnInit(): void {
    
  };
}