import { Injectable } from "@angular/core";
import { Global } from "./global";

@Injectable()
export class UploadService {
  public url: string;
  
  constructor() {
    this.url = Global.url; // Establece una URL por defecto, obtenida de un objeto Global
  }

  // Método que realiza la solicitud para enviar archivos al servidor
  makeFileRequest(
    url: string, // URL a la que se enviarán los archivos
    params: Array<string>, // Parámetros adicionales para enviar junto a los archivos
    files: Array<File>, // Array de archivos a enviar
    name: string // Nombre que se utilizará para el campo que contendrá los archivos en la solicitud
  ) {
    return new Promise(function(resolve, reject) {
      var formData: any = new FormData(); // Crear un objeto FormData para almacenar los archivos y otros datos
      var xhr = new XMLHttpRequest(); // Crear un objeto XMLHttpRequest para realizar la solicitud

      for (var i = 0; i < files.length; i++) {
        formData.append(name, files[i], files[i].name); // Agregar cada archivo al objeto FormData
      }

      // Configurar el evento "onreadystatechange" para escuchar los cambios en la solicitud
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) { // Si el estado de la solicitud es "200" (OK)
            resolve(JSON.parse(xhr.response)); // Resolver la promesa con la respuesta del servidor (parsing JSON)
          } else { // Si el estado de la solicitud no es "200"
            reject(xhr.response); // Rechazar la promesa con la respuesta del servidor
          }
        }
      };

      xhr.open('POST', url, true); // Abrir la solicitud POST con la URL y configurarla como asíncrona (true)
      xhr.send(formData); // Enviar la solicitud con los datos del FormData (que incluyen los archivos)
    });
  }
}
