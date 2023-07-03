export class Persona extends Object{
  constructor(nombre, apellido, password, email) {
    super();
    this.nombre = nombre;
    this.apellido = apellido;
    this.password = password;
    this.email = email;
  }

  toString (){
    return `${this.nombre} ${this.apellido} ${this.password} ${this.email}`;
  }

}

