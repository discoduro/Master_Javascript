import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // defino las propiedades
  public title: string | any;
  public subtitle: string | any;
  public web: string | any;


  constructor(){
    this.title = 'David Alejandro Diaz';
    this.subtitle = 'Desarrollador Web y analista de datos';
    this.web = 'AlejandroQuimbayaweb.es';
  }




  ngOnInit(): void {
    console.log("About component initialized");
  }
}
