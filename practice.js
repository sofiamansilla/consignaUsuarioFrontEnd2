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
  // Desarrollar la función para consultar al usuario los siguientes datos:
  // ● nombre
  // ● año de nacimiento
  // ● ciudad
  // ● si le interesa Javascript
  // Los datos obtenidos deberán ser almacenados dentro del objeto datosPersona.
  // ➔ Tips
  // ◆ La propiedad edad debe ser calculada, algo tan simple como restar el
  // año actual menos el año de nacimiento.
  // ◆ No se preocupen si aún no se cumplió el mes exacto. Tampoco es
  // necesario usar el objeto Date.

  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  //   let nombre = "null";
  //   let msjErrorNombre = "";

  //   do {
  //     nombre = prompt(msjErrorNombre + "\nIngrese su nombre: ");
  //     msjErrorNombre = "Ingrese un nombre valido";
  //   } while (!isNaN(nombre) || nombre.length < 4);

  //   datosPersona.nombre = nombre;

  // Intento con query selector, preguntar
  let nombre = null;
  let msjErrorNombre = "";

  do {
    nombre = prompt(msjErrorNombre + "Ingrese su nombre: ");
    msjErrorNombre = "Ingrese un nombre valido\n";
  } while (!isNaN(nombre) || nombre.length < 4 || nombre == null);

  datosPersona.nombre = nombre;

  //   let edad = null;
  //   let inputAnioNacimiento = null;
  //   let msjErrorEdad = "";

  //   // Solicitar Año de nacimiento y calcular la edad
  //   do {
  //     inputAnioNacimiento = prompt(msjErrorEdad + "Ingrese su año de nacimiento: ");
  //     edad = parseInt(inputAnioNacimiento);
  //     msjErrorEdad = "Error, ingresa un año valido\n";
  //   } while (isNaN(inputAnioNacimiento) || inputAnioNacimiento.length !== 4);

  //   datosPersona.edad = new Date().getFullYear() - inputAnioNacimiento;

  // Intento con query selector, preguntar
  let edad = null;
  let inputAnioNacimiento = null;
  let msjErrorEdad = "";

  // Solicitar Año de nacimiento y calcular la edad
  do {
    inputAnioNacimiento = prompt(
      msjErrorEdad + "Ingrese su año de nacimiento: "
    );
    edad = parseInt(inputAnioNacimiento);
    msjErrorEdad = "Error, ingresa un año valido\n";
  } while (
    isNaN(inputAnioNacimiento) ||
    inputAnioNacimiento.length !== 4 ||
    inputAnioNacimiento === null
  );

  datosPersona.edad = new Date().getFullYear() - inputAnioNacimiento;

  //Solicitar ciudad

  //   let ciudad = "null";
  //   let msjErrorCiudad = "";

  //   do {
  //     ciudad = prompt(msjErrorCiudad + "\nIngrese su ciudad: ");
  //     msjErrorCiudad = "Ingrese una ciudad valida";
  //   } while (!isNaN(ciudad) || ciudad.length < 3);

  //   datosPersona.ciudad = ciudad;

  //Intento con queryselector

  let ciudad = null;
  let msjErrorCiudad = "";

  do {
    ciudad = prompt(msjErrorCiudad + "Ingrese su ciudad: ");
    msjErrorCiudad = "Ingrese una ciudad valida\n";
  } while (!isNaN(ciudad) || ciudad.length < 3 || ciudad == null);

  datosPersona.ciudad = ciudad;

  // Interes por JavaScript

  //   let interesJs = confirm("¿Le interesa Javascript?");
  //   datosPersona.interesPorJs = interesJs;

  //   console.log(datosPersona);

  // Intento con query selector
  //const javaScriptInput = document.querySelector("#javascript");
  let interesJs = confirm(
    "¿Le interesa Javascript? \n (OK para Sí, cancel para No)"
  );
  datosPersona.interesPorJs = interesJs;

  //javaScriptInput.textContent = interesJs;
  //console.log(datosPersona);
}

function renderizarDatosUsuario() {
    
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  //    const usuario = obtenerDatosDelUsuario();
  obtenerDatosDelUsuario();
  // Desarrollar la función para renderizar los datos del usuario, a partir de la información
  // recolectada en la función anterior y almacenada en el objeto datosPersona. Para ello,
  // utilizar los elementos HTML que se encuentran en el archivo index.html, modificando
  // los mismos con Javascript.
  // ➔ Tips
  // ◆ No está permitido editar el documento index.html, cualquier cambio
  // debe realizarse utilizando Javascript.
  // ◆ Ubica los datos del objeto en el <span> que corresponda.

  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  const tarjetaPersona = document.querySelector(".card-header");
  tarjetaPersona.innerHTML = `
  <h3>Nombre: <span id="nombre">${datosPersona.nombre}</span></h3>
  <h3>Edad: <span id="edad">${datosPersona.edad}</span></h3>
  <h3>Ciudad: <span id="ciudad">${datosPersona.ciudad}</span></h3>
  <h3>Interes en Javascript: <span id="javascript">${datosPersona.javaScriptInput}</span></h3>`;
}
renderizarDatosUsuario();

function recorrerListadoYRenderizarTarjetas() {


    const contenedorMaterias = document.getElementById('fila');
    contenedorMaterias.textContent = null;
    listado.forEach((materia) =>{

      const caja = document.createElement('div');
      caja.classList.add('caja');

      const imagen = document.createElement('img');
      // imagen.src=materia.imgUrl;
      // imagen.alt=materia.lenguajes;
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



  //     Desarrollar la función que recorra el listado y renderizar una especie de tarjeta con la
  // información de cada materia. Prestar atención, cada una de las clases CSS son
  // necesarias para conservar el diseño:
  // 1. Cada tarjeta contenedora deberá tener la clase 'caja'
  // 2. Dentro de cada contenedor se deberá incluir:
  // a. una imagen con su correspondiente src y un alt que indique los
  // lenguajes.
  // b. un párrafo que tenga las clase ‘lenguajes’ y muestre los mismos.
  // c. un párrafo que tenga las clase ‘bimestre’ y muestre el bimestre.
  // 3. Al volver a clickear el botón “Obtener materias”, no deberían volver a
  // renderizarse las materias.
  // ➔ Tips
  // ◆ Cada ‘caja’ se debe inyectar dentro del contenedor que ya se encuentra
  // en el archivo index.html con el id 'fila'.
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
};

recorrerListadoYRenderizarTarjetas();

function alternarColorTema() {
  // Desarrollar la función que permita al botón de alternar tema funcionar correctamente
  // cada vez que se haga click.
  // 1. Utilizar el elemento con el id ‘sitio’ como nodo de referencia.
  // 2. Implementar en el elemento la clase ‘dark’ ya creada en el CSS.
  // ➔ Tips
  // ◆ El elemento ‘sitio’ es simplemente un contenedor que envuelve todo el
  // resto de los elementos visibles.
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
}

//   Finalmente, agregar un listener en nuestra página que nos permita captar el evento
// de teclado cuando presionamos la tecla F.
// 1. Captar cuando se presiona una tecla.
// 2. Si la tecla presionada es la F, al texto del párrafo ‘sobre-mi’ se le deberá
// eliminar la clase que lo mantiene oculto,
// ➔ Tips
// ◆ En este caso la tecla no debe alternar la visibilidad, solamente desocultar
// por única vez.
/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */