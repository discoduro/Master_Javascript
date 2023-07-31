import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service'; 
import { Global } from 'src/app/services/global';



@Component({
  selector: 'app-projects',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [
    ContactService

  ]
})

export class notificationsComponent implements OnInit{
  public contacts: Contact[];
  public url: string;

  constructor(
    private _contactService: ContactService
    
    ){
      this.contacts = [];
      this.url = Global.url;
    }
   
  getContacts(){
    this._contactService.getContacts().subscribe(
      response =>{
        console.log(response);
        if(response.contacts){
          this.contacts = response.contacts;
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  ngOnInit(): void {
    this.getContacts();   
  }
}
