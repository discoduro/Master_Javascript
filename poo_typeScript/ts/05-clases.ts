// programacion orientada a objetos en  javascript con los nuevos estandares de programacion con TypeScript

// una calse es un molde para crear objetos de un mismo tipo, con caracteristicas parecidas pero que pueden variar entre si mismos y que pueden tener metodos o funciones que nos permitan realizar acciones con los objetos que se creen a partir de esta clase o molde de objeto que es la clase en si misma y que se puede crear un numero ilimitado de objetos a partir de esta clase o molde de objeto

// la clase se debe llamar igual que el archivo que la contiene y usar escritura camelCase o sea la primera letra de la clase en mayuscula y las siguientes en minuscula

// clase
class Clases {
  // atributos y marcar la visibilidad de los mismos con public, private o protected y si no se especifica la visibilidad por defecto es public y se puede acceder a los atributos desde cualquier parte del codigo

  // para definir una variable o atributo de una clase se usa la palabra reservada public seguida del nombre de la variable o atributo y el tipo de dato que va a almacenar y si no se especifica el tipo de dato por defecto es any y puede almacenar cualquier tipo de dato

  // cuando se crea la visibilidad de los atributos de una clase privados o protegidos no se puede acceder a ellos desde fuera de la clase y solo se puede acceder a ellos desde dentro de la clase o desde las clases hijas que hereden de esta clase padre

  // para poder acceder a los atributos de una clase desde fuera de la clase se debe crear un metodo o funcion que retorne el valor de los atributos de la clase

  private nombre: string;
  private equipo: string;
  private nombreReal: string;
  private puedePelear: boolean;
  private peleasGanadas: number;

  // metodo o funcion
  public setCambiarNombre(nombre: string): void {// void es para indicar que no retorna nada
    this.nombre = nombre;
  }

  public getCambiarNombre(): string {
    return this.nombre;
  }
}

// instanciar la clase o crear un objeto a partir de la clase

var camisa = new Clases();
camisa.setCambiarNombre("Spiderman");
camisa.getCambiarNombre();

var camisa2 = new Clases();
camisa2.setCambiarNombre("bantman");
camisa2.getCambiarNombre();

// si quisiera sacar un dato especifico de un objeto debo hacerlo de la siguiente manera
console.log(camisa2.getCambiarNombre());

// si quisiera sacar todos los datos de un objeto debo hacerlo de la siguiente manera
console.log(camisa);
