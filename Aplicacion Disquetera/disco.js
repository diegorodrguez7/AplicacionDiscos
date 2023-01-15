//=============CLASE DISCOS============//
export default class Discos {
  
    //Constructor general.
    constructor(nombre, cantante, anio, tipomusica, localizacion = 0, prestado = false) {
      this.nombre = nombre;
      this.cantante = cantante;
      this.anio = anio;
      this.tipomusica = tipomusica;
      this.localizacion = localizacion;
      this.prestado = prestado;
    }

    //Método cambiar estantería
    estanteria(posicion) {
      this.localizacion = posicion;
    }
   
    switchPrestado() {
      // Intercambiar valor !true resulta en false y !false resulta en true
      this.prestado = !this.prestado;
    }
7

    toString(){
      return "Nombre " + this.nombre + "<br>" + 
      "Cantante: " + this.cantante + "<br>" +
      "Año: " + this.anio + "<br>" +
      "Género: " + this.tipomusica + "<br>" +
      "Número estantería: " + this.localizacion + "<br>" +
      "Disponibilidad: " + this.prestado + "<br>----------------------------<br>"; 
    }

  }

  
  