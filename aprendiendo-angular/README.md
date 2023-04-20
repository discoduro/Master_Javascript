# AprendiendoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Instalacion de angular cli

Si tenemos una version de angular cli y se requiere actualizar la version de los paquetes se ejecutan el siguiente comando para desistalar desde la raiz e intalar la version actual



## 1. desistalar.

    npm unistall -g @angular/cli

## 2. borrar cache de npm para volver a instalar angular en la ultima version

    npm cache verify

## 3. borrar la cache y los paquetes antiguos

    npm cache clear --force


## Instalar ultima version de angular cli 


## 1. Instalar angular cli

    npm install -g @angular/cli

## 2. Crear un nuevo proyecto dentro de la carpeta del proyecto a crear

    ng new (name-proyect)

## 3. lanzar el proyecto en un servidor local

    ng server --open

###

## elementos que conforman una aplicacion de angular.

Una aplicacion de angular esta formada por componentes, plantillas, decoradores, metadatos, servicios, provider, direcitivas y por modulos.


## 1. Componentes

Un componente al final va a controlar un trozo de pantalla o de la vista.

todo lo que se ve por pantalla es controlado y gestionado por este tipo de elementos.

la logica de un componente dentro de un clase en angular es dar soporte a una vista interactuanbdo con ella a tarves de una API con Propiedades y metodos

El componente hace de mediador entre la vista a traves de la plantilla y la logica de la app donde se incluira el modelo de datos, es decir una especie de controlador.

## 2. Plantillas

Las plantillas van a definir la vista de los componente.

Son htmls y tiene sintaxis especial de angular. Trabajando con el databinding y las directivas.

## 3. Decoradores y Metadatos

Con los decoradores (Patron de diseño) vamos a configurar dina,micamente atributos de las clases y componentes.

Los metadatos van a describen a la clases pero tambien describen relaciones, Por ejemplo si tenemos un componente y una plantilla el metadato se va a encargar de decirle a angular que ese componentey esa plantilla van juntos, entre otras muchas cosas. 

## 4. Servicios

Son clases con un objetivo claro, Facilitar la reutilizacion, son un tipo de elemeto dentro de la  arquitectura de angular y mediante la inyeccion de dependencias los podemos usar en otros componente y en al app en general

## 5. Providers

Son elementos que nos proveen de datos o funcionalidades mediante sus metodos. Existen providers/servicios propios de angular o creados por nosotros mismos

## 6. Directivas

Son funcionalidades aplicables al DOM y a los elementos HTML en las plantillas de un componente. Por ejemplo una directiva sirve para controlar que un div se muestre o no, o recorrer un array en la vista (directivas estructurales, estructuras condicionales y de control)

o incluso tambine puede servir para dar un estilo u otro a una elemento del HTML o tambine para interactuar con el modelo de datos del componente

## 7. Modulos 

Angular es modular, lo que quiere decir que puedo tener un modulo para la aplicacion principal y dentro de ese modulo puedo tener muchos otros modulos que se encargen de diferentes cosas como hacer un modulo para el panel principal, para la seccion de publicar de la web, para hacer una tienda. 
Estos son modulos separados que podemos reutilizar en otros proyectos.

Esta es una buena manera de organizar la arquitectura de al aplicacion web

Estos son los elemtos que forman parte de un proyecto de angular y consectos que van a verse dentro de angular