import Discos from "./disco.js";

//==============Array de discos==============//
var coleccion_Discos = [];

//===============FUNCIONES===================//
//===============Funcion crear disco.========//
function crearDisco() {
  var nombre = window.prompt("Dame el nombre: ");
  var cantante = window.prompt("Dame el cantante: ");
  var anio = window.prompt("Dame el año: ");
  var tipo = window.prompt("Dame el tipo de género: ");
  var estante = 0;
  var prestado = false;
  var disco_nuevo = new Discos(nombre, cantante, anio, tipo, estante, prestado);
  return disco_nuevo;
}

//=============Contar cuantos discos hay creados.==============//
function contarDiscos() {
  var tamanio_array = coleccion_Discos.length;
  document.getElementById("1").innerHTML =
    "En la casa hay: " + tamanio_array + " discos.";
}

//=============Listar discos normal.==============//
function informacionDiscos() {
  document.getElementById("2").innerHTML = coleccion_Discos.toString();
}

//=============Listar discos inverso.==============//
function informacionDiscosInverso(discos) {
  var auxiliar = [];
  discos.forEach(element => {
    auxiliar.unshift(element);
  });
  document.getElementById("2").innerHTML = auxiliar.toString();
}

//=============Listar discos alfabeticamente.==============//
function informacionDiscosAlfabeto(discos) {
  var auxiliar = [];
  discos.forEach(element => {
    auxiliar.push(element);
  });
  auxiliar.sort(function(a1,b2) {
    if(a1.nombre > b2.nombre){
      return 1;
    }
    if(a1.nombre < b2.nombre){
      return -1;
    }
    return 0;
  });
  document.getElementById("2").innerHTML = auxiliar.toString();
}

//=============Insertar al principio del array.==============//
function insertar_principio() {
  coleccion_Discos.unshift(crearDisco());
  informacionDiscos();
}

//=============Insertar al final del array.==================//
function insertar_final() {
  coleccion_Discos.push(crearDisco());
  informacionDiscos();
}

//=============Borrar al principio.==================//
function borrar_principio() {
  coleccion_Discos.shift();
  informacionDiscos();
}

//=============Borrar al final.==================//
function borrar_final() {
  coleccion_Discos.pop();
  informacionDiscos();
}

//=======Insertar 10 discos========//
function insertar10Discos() {
  var disco1 = new Discos("AAAA", "AAAA", 1991, "Heavy", 1, false);
  var disco2 = new Discos("BBBB", "BBBB", 1992, "Rock", 2, true);
  var disco3 = new Discos("CCCC", "CCCC", 1993, "Pop", 3, false);
  var disco4 = new Discos("DDDD", "DDDD", 1994, "Rap", 4, true);
  var disco5 = new Discos("HHHH", "HHHH", 1995, "Pop", 5, false);
  var disco6 = new Discos("EEEE", "EEEE", 1996, "Electro", 6, false);
  var disco7 = new Discos("FFFF", "FFFF", 1997, "Reggae", 7, false);
  var disco8 = new Discos("IIII", "IIII", 1999, "Latino", 8, false);
  var disco9 = new Discos("GGGG", "GGGG", 1999, "Clasica", 9, true);
  var disco10 = new Discos("JJJJ", "JJJJ", 2000, "House", 10, false);
  coleccion_Discos.unshift(disco1, disco2, disco3, disco4, disco5, disco6, disco7, disco8, disco9, disco10);
  informacionDiscos();
}

//========Buscar por nombre=========//
function buscarDiscoNombre() {
  var nombre = window.prompt("Introduce el nombre del disco: ");
  var auxiliar_existe = false;
  for (var i = 0; i < coleccion_Discos.length; i++) {
    if (nombre == coleccion_Discos[i].nombre){
      document.getElementById("3").innerHTML = "El disco " + nombre +" se encuentra en la posicion: " + i;
      auxiliar_existe = true;
      break;
    }
  }
  if (auxiliar_existe == false) {
    document.getElementById("3").innerHTML = "El disco " + nombre +" no se encuentra entre todos.";
  }
}

//========Buscar por posicion=========//
function buscarDiscoPosicion() {
  var posicion = window.prompt("Introduce la posicion del disco: ") - 1;
  var existe = false;
  for (let index = 0; index < coleccion_Discos.length; index++) {
    if (index == posicion) {
      document.getElementById("3").innerHTML = "El disco " + coleccion_Discos[index].nombre +" se encuentra en la posición: " + posicion;
      existe = true;
      break;     
    }
  }
  if(!existe){
    document.getElementById("3").innerHTML = "El disco " + nombre +" no se encuentra entre todos.";
  }
  
}

//=============Extraer intervalo de posiciones=========================//
function intervalo(){
  var x = window.prompt("📀Intervalo de elementos (incio) ejemplo --> (1,...)");
  var y = window.prompt("📀Intervalo de elementos (fin) ejemplo --> (...,1)");
  var array_nuevo = coleccion_Discos.slice(x, y);
  document.getElementById("4").innerHTML = array_nuevo;
}


//=============FIN FUNCIONES==============//
//==============CASOS SWITCH==============//
function casoUno() {
  var opcion = window.prompt("📀INSERTAR DISCOS📀\n1==>AL PRINCIPIO.\n0==>AL FINAL.");
  if (opcion == "1") {
    insertar_principio();
  } else if (opcion == "0") {
    insertar_final();
  }
}

function casoDos() {
  var opcion = window.prompt("📀LISTAR DISCOS📀\n1==>NORMAL.\n2==>ORDENADO ALFABETO.\n3==>INVERSA.");
  if (opcion == "1") {
    informacionDiscos();
  } else if (opcion == "2") {
    informacionDiscosAlfabeto(coleccion_Discos);
  } else if (opcion == "3") {
    informacionDiscosInverso(coleccion_Discos);
  }
}

function casoTres() {
  var opcion = window.prompt("📀BORRAR DISCOS📀\n1==>AL PRINCIPIO.\n0==>AL FINAL.");
  if (opcion == "1") {
    borrar_principio();
  } else if (opcion == "0") {
    borrar_final();
  }
}

function casoCuatro() {
  var opcion = window.prompt("📀BUSCAR DISCOS📀\n1==>POR NOMBRE.\n0==>POR POSICION.");
  if (opcion == "1") {
    buscarDiscoNombre();
  } else if (opcion == "0") {
    buscarDiscoPosicion();
  }
}

//=============MENU PROGRAMA===================//
window.menu = function menu() {
  var opciones = window.prompt(
    "1.Nuevo disco.\n2.Listar discos.\n3.Borrar disco\n4.Numero de discos.\n5.Intervalo de discos.\n6.Buscar disco.\n7.Insertar 10 discos.\n"
  );
  switch (opciones) {
    case "1":
      casoUno();
      break;
    case "2":
      casoDos();
      break;
    case "3":
      casoTres()
      break;
    case "4":
      contarDiscos();
      break;
    case "5":
      intervalo();
      break;
    case "6":
      casoCuatro();
      break;
    case "7":
      insertar10Discos();
      break;
    default:
      alert("No has introducido ninguna opción.");
      break;
  }
};




