import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


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
  public confirm: boolean;





  constructor(
    private _messageService: MessageService,
    private _router: Router,
    private _route: ActivatedRoute

  ) {
    this.message = [];
    this.url = Global.url;
    this.contador = 1;
    this.confirm = false;
  }

  ngOnInit(): void {
    // this.getMessage();
    this._route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.getMessage(id);
    });
  }

  getMessage(id: any) {
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

  deleteMessage(id: any) {
    if (window.confirm('¿Estás seguro de que deseas eliminar este mensaje?')) {
      this._messageService.deleteMessage(id).subscribe(
        response => {
          this.confirm = false; // Reset the confirmation flag
          this.getMessage(id); // Refresh the messages after deletion
        },
        error => {
          console.log(error);
        }
      );
    } else {
      // El usuario canceló la eliminación
    }
  }

}
