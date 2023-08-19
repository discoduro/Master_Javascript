import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';
import { Global } from 'src/app/services/global';



@Component({
  selector: 'app-projects',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [
    MessageService

  ]
})

export class notificationsComponent implements OnInit {
  public message: Message[];
  public url: string;
  public contador: number;

  constructor(
    private _messageService: MessageService


  ) {
    this.message = [];
    this.url = Global.url;
    this.contador = 1;
  }

  getMessage() {
    this._messageService.getMessage().subscribe(
      response => {
        console.log(response);
        if (response.message) {
          this.message = response.message;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  ngOnInit(): void {
    this.getMessage();
  }
}
