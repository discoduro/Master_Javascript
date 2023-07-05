// para crear una pipes personalisado se importa el componente o modulo
import { Pipe, PipeTransform } from '@angular/core'

// crear el decorador 
@Pipe({
    name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform{
    transform(value: any, args: any) {
        let operaciones = `
        suma: ${value+args} -
        resta: ${value-args} -
        multiplicacion: ${value*args} -
        divicion: ${value/args} -
        `;

        return operaciones;
    }
}
// para poder usar nuestras pipes hay que que utilizar el app-module y cargarlo