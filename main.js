//INTRO 
//ejercicio2
const a=5;
const b=10;
const c=a+b;
console.log("La suma de a y b es:" ,c);
//ejercicio3
const nombre = prompt("Ingresa tu nombre.");
console.log("Hola, ", nombre , "!!!!");

//OPERADORES LOGICOS Y CONDICIONALES
//ejercicio1
const d = 10;
const e=100;
const f=5;
let mayor;
if (d>e && d>f) {
  mayor=d;
} else if (e>d && e>f) {
  mayor=e;
} else if (f>d && f>e) {
  mayor=f;
}
console.log("El mayor de los 3 numeros es: ", mayor);

//ejercicio2
const numero = prompt("Ingresa un numero y te dire si es par o no!.");
if (numero % 2 == 0 ) {
  console.log("El numero ", numero, " es par.");
} else {
  console.log("El numero ", numero, " es impar.");
}

//OPERADORES DE ASIGNACION Y BUCLES
//ejercicio1
console.log("EJERCICIO 3.1")
let variable = 10;
while (variable>0) {  //sin llegar al 0
  console.log(variable);
  variable--;    //le resto 1
}

//ejercicio2
let num;
do {
   num = prompt("Ingrese un numero mayor a 100");

} while (num < 100);
console.log("Ingresaste un numero mayor a 100: ", num);

//FUNCIONES
//ejercicio1
function EsPar (n) {
  if (n % 2 == 0 ) {
    return true;
  } else {
    return false;
  }
}
const numeros = [8, 3];  //arreglo de numeros
//recorro 1 x 1
numeros.forEach(numero => {
  console.log("El numero ", numero, "es par: ", EsPar(numero));
});
//ejercicio2
function convertirCelsiusAFahrenheit (C) {
  const F = C * 1.8 + 32;
  return F;
}
const celsius= 30;
const conversion = convertirCelsiusAFahrenheit(celsius);
console.log(+celsius+"°C son equivalentes a " +conversion+"°F");

//OBJETOS
//ejercicio1
const Persona = {
  nombre: "Dolores", 
  edad: 22,
  ciudad: "Mendoza",

  cambiarCiudad(newciudad) {
    this.ciudad=newciudad;
  }
};

Persona.cambiarCiudad("Corrientes");
console.log("Cambiamos la ciudad");
console.log("Nombre:", Persona.nombre);
console.log("Edad:", Persona.edad);
console.log("Ciudad:", Persona.ciudad);

//ejercicio2
const Libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  anio: 1605,

  esAntiguo () {
    const anioactual = 2024;
    const edadlibro= anioactual - this.anio;
    if (edadlibro>10) {
      return true;
    } else {
      return false;
    }
  }
};
const Antiguo = Libro.esAntiguo(); //llamo al metodo esAntiguo
console.log("El libro", Libro.titulo, "es antiguo: ", Antiguo);

//ARRAYS
//ejercicio1
const numOriginales=[1,2,3,4,5,6,7,8,9,10];
const numMultiplicados=[];
for (let i=0; i<numOriginales.length; i++) {
  numMultiplicados[i]=numOriginales[i] * 2;  //va multiplicando por 2 cada elemento del array
}
console.log("Numeros Originales: ", numOriginales.join(", "));
console.log("Numeros Multiplicados por 2: ", numMultiplicados.join(", "));

//ejercicio2
const pares = [];
for (let i=1; i<=20;i++) {
  if (i % 2 == 0) {
    pares.push(i); //lo agrega al array
  }
}
console.log("Primeros 10 numeros pares: ", pares.join(", "));

//DOM 
//ejercicio1
const bottonColor = document.getElementById('cambiarColor');

bottonColor.addEventListener('click', () => {
  // Seleccionar todos los elementos <p>
  const parrafos = document.querySelectorAll('p');
  // Cambiar el color de cada párrafo a azul
  parrafos.forEach(parrafo => {
      parrafo.style.color = 'blue';
  });
});

//ejercicio2
function mostrarAlerta() {
  const texto = document.getElementById("inputTexto").value;
  alert(`${window.location.host} dice: Has ingresado: ${texto}`);
}

//EVENTOS EN DOM
//ejercicio1
const elementos = document.querySelectorAll("#miLista li");

// Agrega un evento click a cada elemento
elementos.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        console.log(elemento.textContent);
    });
});

//ejercicio2
function deshabilitarCampo() {
  const campoTexto = document.getElementById("miCampoTexto");
  campoTexto.disabled = true;
}

function habilitarCampo() {
  const campoTexto = document.getElementById("miCampoTexto");
  campoTexto.disabled = false;
}
//LOCAL STORAGE
//ejercicio1
// Función para mostrar el correo guardado si existe en localStorage
function mostrarCorreo() {
  const correo = localStorage.getItem("correo");
  const correoGuardadoElement = document.getElementById("correoGuardado");

  if (correo) {
      correoGuardadoElement.textContent = "Correo guardado: " + correo;
  } else {
      correoGuardadoElement.textContent = "";
  }
}

// Función para guardar el correo en localStorage
function guardarCorreo() {
  const correo = document.getElementById("correo").value;

  if (correo) {
      localStorage.setItem("correo", correo);
      mostrarCorreo();
  } else {
      alert("Por favor, ingresa un correo electrónico válido.");
  }
}

// Función para eliminar el correo de localStorage
function eliminarCorreo() {
  localStorage.removeItem("correo");
  mostrarCorreo();
}

// Mostrar el correo guardado al cargar la página
document.addEventListener("DOMContentLoaded", mostrarCorreo);
