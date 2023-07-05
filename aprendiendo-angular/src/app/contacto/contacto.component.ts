import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.Usuario';  

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

// trabajar con formularios en angular



export class ContactoComponent implements OnInit {
  public usuario:  ContactoUsuario;

  constructor(){
    this.usuario = new ContactoUsuario('','','','')
  }

  ngOnInit(): void {
    console.log(this);
  }

  // para baciar un formulario le pasamos la bariable form y llamamos a la siguenite metodo form.reset()
  // De esta forma el formulario se guardara y se reseteara sin borrar el formulario anteriormente enviado.
  // devuleve un objeto bacio porque se esta formatiando el formulario antes de guardarlo
  onSubmit(form:any){
    form.reset(); 
    console.log('evento submit de formulario capturado');
    console.log(this.usuario)
  }
}
