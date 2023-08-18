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

  let confirmacionAcceso = confirm("¿Desea continuar para acceder a su portal?")
  if (confirmacionAcceso) {

  let nombre = null;
  let msjErrorNombre = "";

  do {
    nombre = prompt(
    msjErrorNombre + "Ingrese su nombre: ");
    msjErrorNombre = "Ingrese un nombre valido\n";
  } while (
    !isNaN(nombre) || 
    nombre.length < 4 || 
    nombre == null
    );

  datosPersona.nombre = nombre;


  let edad = null;
  let inputAnioNacimiento = null;
  let msjErrorEdad = "";

  do {
    inputAnioNacimiento = prompt(
      msjErrorEdad + "Ingrese su año de nacimiento: ");
    edad = parseInt(inputAnioNacimiento);
    msjErrorEdad = "Error, Ingresa un año valido\n";
  } while (
    isNaN(inputAnioNacimiento) || 
    inputAnioNacimiento.length !== 4 ||
    inputAnioNacimiento === null
    );

  datosPersona.edad = new Date().getFullYear() - inputAnioNacimiento;


  let ciudad = null;
  let msjErrorCiudad = "";

  do {
    ciudad = prompt(
    msjErrorCiudad + "\nIngrese su ciudad: ");
    msjErrorCiudad = "Ingrese una ciudad valida";
  } while (
    !isNaN(ciudad) || 
    ciudad.length < 4 ||
    ciudad === null
    );

  datosPersona.ciudad = ciudad;



  let interesJs = confirm("¿Tienes interés en Javascript?");
  datosPersona.interesPorJs = interesJs ? "Si" : "No";

} else{
  return alert("Hasta la próxima!");
}


};


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  const cardHeader = document.querySelector(".card-header");
  cardHeader.innerHTML = `
  <h3>Nombre: <span id="nombre">${datosPersona.nombre}</span></h3>
  <h3>Edad: <span id="edad">${datosPersona.edad}</span></h3>
  <h3>Ciudad: <span id="ciudad">${datosPersona.ciudad}</span></h3>
  <h3>Interes en Javascript: <span id="javascript">${datosPersona.interesPorJs}</span></h3>`;


};
renderizarDatosUsuario();
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  const contenedorMaterias = document.getElementById('fila');
  contenedorMaterias.textContent = null;
  listado.forEach((materia) =>{

    const caja = document.createElement('div');
    caja.classList.add('caja');

    const imagen = document.createElement('img');
    imagen.setAttribute('src', materia.imgUrl);
    imagen.setAttribute('alt', materia.lenguajes);

    caja.appendChild(imagen);

    const pLenguajes = document.createElement('p');
    pLenguajes.classList.add('lenguajes');
    pLenguajes.textContent = materia.lenguajes;

    caja.appendChild(pLenguajes);

    const pBimestre = document.createElement('p');
    pBimestre.classList.add('bimestre');
    pBimestre.textContent = `Materias del ${materia.bimestre}`;
 
    caja.appendChild(pBimestre);

    contenedorMaterias.appendChild(caja);
    console.log(contenedorMaterias);

    
  });



};

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  document.querySelector("#sitio").classList.toggle("dark");
  
};

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
