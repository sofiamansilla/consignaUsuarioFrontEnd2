/** Función que solicita vía prompt datos al usuario, muestra información en pantalla y renderiza tarjetas, simulando un entorno de portal estudiantil, incluye cambio a tema oscurp */

/**Objeto con los datos del usuario */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

/**Listado de materias del objeto */
const listado = [{
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
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

/**Querys y eventListener */
const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);



/**Función que solicita datos al usuario: nombre, año de nacimiento (calcula la edad), ciudad y si tiene interés en JavaScript */
function obtenerDatosDelUsuario() {

    /**Solicitud y validación de nombre */
    let nombre = null;
    let msjErrorNombre = "";

    do {
      nombre = prompt(
        msjErrorNombre + "Ingrese su nombre: "
        );
        msjErrorNombre = "Ingrese un nombre valido\n";
    } while (
      !isNaN(nombre) || 
      nombre.length < 4 || 
      nombre == null);

    datosPersona.nombre = nombre;


    /**Solicitud y validación de anio de nacimiento */
    let edad = null;
    let inputAnioNacimiento = null;
    let msjErrorEdad = "";

    do {
      inputAnioNacimiento = prompt(
      msjErrorEdad + "Ingrese su año de nacimiento: "
      );
      edad = parseInt(inputAnioNacimiento);
      msjErrorEdad = "Error, Ingresa un año valido\n";
    } while (
      isNaN(inputAnioNacimiento) ||
      inputAnioNacimiento.length !== 4 ||
      inputAnioNacimiento === null
    );

    datosPersona.edad = new Date().getFullYear() - inputAnioNacimiento;

    /**Solicitud y validación de ciudad */

    let ciudad = null;
    let msjErrorCiudad = "";

    do {
      ciudad = prompt(
      msjErrorCiudad + "\nIngrese su ciudad: ");
      msjErrorCiudad = "Ingrese una ciudad valida";
    } while (!isNaN(ciudad) || 
    ciudad.length < 4 || 
    ciudad === null
    );

    datosPersona.ciudad = ciudad;

    /**Solicitud y validación de interés por JS */

    let interesJs = confirm(
      "¿Tienes interés en Javascript?");
    
      datosPersona.interesPorJs = interesJs ? "Si" : "No";
}; 


/**Función para renderizar los datos de usuario y sean agregados a la card de pantalla */
function renderizarDatosUsuario() {

  /**Llamando a los datos de usuario */
  obtenerDatosDelUsuario();

  /**Se incluye al card de HTML los datos obtenidos del usuario */
  const cardHeader = document.querySelector(".card-header");
  cardHeader.innerHTML = `
  <h3>Nombre: <span id="nombre">${datosPersona.nombre}</span></h3>
  <h3>Edad: <span id="edad">${datosPersona.edad}</span></h3>
  <h3>Ciudad: <span id="ciudad">${datosPersona.ciudad}</span></h3>
  <h3>Interes en Javascript: <span id="javascript">${datosPersona.interesPorJs}</span></h3>`;

};

/**Función que crea tarjetas para mostrar las materias del objeto y renderización. Se asigna variable para btnMateria, asi el renderizado solo se ejecuta una vez */
let btnMateria = false;
function recorrerListadoYRenderizarTarjetas() {

  
  /**Condicional para renderizar solo una vez */
  if(btnMateria == true){
    return;
  };

    /**Contenedor general para crear las cards, se asignan textos e imagenes */
    const contenedorMaterias = document.getElementById("fila");
    contenedorMaterias.textContent = null;
    listado.forEach((materia) => {
  
      const caja = document.createElement("div");
      caja.classList.add("caja");
  
      const imagen = document.createElement("img");
      imagen.setAttribute("src", materia.imgUrl);
      imagen.setAttribute("alt", materia.lenguajes);
  
      caja.appendChild(imagen);
  
      const pLenguajes = document.createElement("p");
      pLenguajes.classList.add("lenguajes");
      pLenguajes.textContent = materia.lenguajes;
  
      caja.appendChild(pLenguajes);
  
      const pBimestre = document.createElement("p");
      pBimestre.classList.add("bimestre");
      pBimestre.textContent = `Materias del ${materia.bimestre}`;
  
      caja.appendChild(pBimestre);
  
      contenedorMaterias.appendChild(caja);
      console.log(contenedorMaterias);
  
    });

};

/**Función para cambiar tema claro-oscuro a través de un botón */
function alternarColorTema() {
 
  document.querySelector("#sitio").classList.toggle("dark");

};

/**Se crea un listener con keydown para que, al momento de presional la tecla F, se despliegue el texto "sobre mi", además, se modifica el lorem ipsum por un textcontent */
const sobreMi = document.getElementById("sobre-mi");

document.addEventListener("keydown", function (e) {
  if (e.code == "KeyF") {
    sobreMi.classList.remove("oculto");
  };
});

const textSobreMi = document.querySelector('#sobre-mi');

textSobreMi.textContent = `
Soy 
${datosPersona.nombre}
, estudiante de Digital House y 
${datosPersona.interesPorJs} 
tengo interés en Javascript}`;