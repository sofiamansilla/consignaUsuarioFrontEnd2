/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  // Borrar luego: Pedir y validad nombre

  let nombre = "null";
  let msjErrorNombre = "";

  do {
    nombre = prompt(msjErrorNombre + "\nIngrese su nombre: ");
    msjErrorNombre = "Ingrese un nombre valido";
  } while (!isNaN(nombre) || nombre.length < 3);

  datosPersona.nombre = nombre;


  let edad = null;
  let inputAnioNacimiento = null;
  let msjErrorEdad = "";

  // Solicitar Año de nacimiento y calcular la edad
  do {
    inputAnioNacimiento = prompt(msjErrorEdad + "Ingrese su año de nacimiento: ");
    edad = parseInt(inputAnioNacimiento);
    msjErrorEdad = "Error, Ingresa un año valido\n";
  } while (isNaN(inputAnioNacimiento) || inputAnioNacimiento.length !== 4);

  datosPersona.edad = new Date().getFullYear() - inputAnioNacimiento;

  // Solicitar ciudad
  let ciudad = "null";
  let msjErrorCiudad = "";

  do {
    ciudad = prompt(msjErrorCiudad + "\nIngrese su ciudad: ");
    msjErrorCiudad = "Ingrese una ciudad valida";
  } while (!isNaN(ciudad) || ciudad.length < 4);

  datosPersona.ciudad = ciudad;

// Interes por js

let interesJs = confirm("¿Le interesa Javascript?")
datosPersona.interesPorJs = interesJs;


  console.log(datosPersona);
}
obtenerDatosDelUsuario();

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
