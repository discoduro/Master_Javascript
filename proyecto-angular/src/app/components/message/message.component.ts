import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Global } from 'src/app/services/global';
import { Message } from 'src/app/models/message';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [
    MessageService
  ]
})
export class MessageComponent {

  public title: string;
  public message: Message;
  public save_message: any;
  public url: string;
  public status: string;

  constructor(
    private _messageService: MessageService
  ) {
    this.title = 'Crear mensaje';
    this.message = new Message('', '', '', '', '', '');
    this.status = '';
    this.url = Global.url;
  }

  onSubmit(form: any) {
    console.log(this.message);

    this._messageService.saveMessage(this.message).subscribe(
      (response: any) => {
        if (response.message) {
          this.save_message = response.message;
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
