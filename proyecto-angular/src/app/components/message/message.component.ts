import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Global } from 'src/app/services/global';
import { Contact } from 'src/app/models/contact';
import { NgForm } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [
    ContactService
  ]
})
export class MessageComponent {

  public title: string;
  public contact: Contact;
  public save_contact: any;
  public url: string;
  public status: string;

  constructor(
    private _contactServices: ContactService
  ) {
    this.title = 'Crear mensaje';
    this.contact = new Contact('', '', '', '', '', '');
    this.status = '';
    this.url = Global.url;
  }

  onSubmit(form: any) {
    console.log(this.contact);

    this._contactServices.saveContact(this.contact).subscribe(
      (response: any) => {
        if (response.contact) {
          this.save_contact = response.contact;
          this.status = 'success';
          form.reset()
        } else {
          this.status = 'failed';
        }
      },
      (error: any) => {
        alert("Error al guardar el mensaje");
        console.error(<any>error)
      }
    )
  }

  ngOnInit(): void {

  }

}
