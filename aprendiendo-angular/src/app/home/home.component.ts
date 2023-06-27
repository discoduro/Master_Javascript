import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public identificado: boolean | any;



  constructor(){
    this.identificado = false;

  }

  ngOnInit(){

  }

  setIdentificado(){
    this.identificado = true;
  }

  usetIdentificado(){
    this.identificado = false;
  }
}
