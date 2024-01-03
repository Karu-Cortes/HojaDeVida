console.log("Hoja de Vida Interactiva Cargada");

document.getElementById('addSkill').addEventListener('click', function() {
  let newSkill = prompt("Introduce una nueva habilidad:");
  if (newSkill) {
      let ul = document.getElementById('skillsList'); // Suponiendo que tienes un <ul id="skillsList"> para tus habilidades
      let li = document.createElement('li');
      li.textContent = newSkill;
      ul.appendChild(li);
  }
});

document.getElementById('contactButton').addEventListener('click', function() {
  var userEmail = prompt('Introduce tu correo electrónico:');
  if (userEmail) {
    alert('Gracias ' + userEmail + ', me pondré en contacto contigo pronto!');
  }
});

let certificaciones = [
  "Certificación 1",
  "Certificación 2",
  "Certificación 3"
];


let proyectosAnteriores = [
  "Proyecto Anterior 1",
  "Proyecto Anterior 2",
  "Proyecto Anterior 3",
  "Proyecto Anterior 4",
  "Proyecto Anterior 5"
];


/**function mostrarCertificaciones() {
  let ulCertificaciones = document.getElementById('listaCertificaciones');
  
  for (let i = 0; i < certificaciones.length; i++) {
      let li = document.createElement('li');
      li.textContent = certificaciones[i];
      ulCertificaciones.appendChild(li);
  }
}


window.onload = mostrarCertificaciones;


function mostrarProyectosAnteriores() {
  let cantidadProyectos = prompt("¿Cuántos proyectos deseas ver?");
  cantidadProyectos = parseInt(cantidadProyectos);

  if (isNaN(cantidadProyectos)) {
      alert("Por favor, ingresa un número válido.");
      return;
  }

  let ulProyectos = document.getElementById('listaProyectosAnteriores'); 

 
  ulProyectos.innerHTML = "";

  
  for (let i = 0; i < cantidadProyectos && i < proyectosAnteriores.length; i++) {
      let li = document.createElement('li');
      li.textContent = proyectosAnteriores[i];
      ulProyectos.appendChild(li);
  }
}


let verProyectosButton = document.getElementById('verProyectosButton');
verProyectosButton.addEventListener('click', mostrarProyectosAnteriores);**/

function mostrarCertificaciones() {
  let ulCertificaciones = document.getElementById('listaCertificaciones');

  for (let i = 0; i < certificaciones.length; i++) {
    let li = document.createElement('li');
    li.textContent = certificaciones[i];
    ulCertificaciones.appendChild(li);
  }
}

window.onload = mostrarCertificaciones;

function mostrarProyectosAnteriores() {
  let cantidadProyectos = prompt("¿Cuántos proyectos deseas ver?");
  cantidadProyectos = parseInt(cantidadProyectos);

  if (isNaN(cantidadProyectos)) {
    alert("Por favor, ingresa un número válido.");
    return;
  }

  let ulProyectos = document.getElementById('listaProyectosAnteriores');

  ulProyectos.innerHTML = "";

  for (let i = 0; i < cantidadProyectos && i < proyectosAnteriores.length; i++) {
    let li = document.createElement('li');
    li.textContent = proyectosAnteriores[i];
    ulProyectos.appendChild(li);
  }
}

let verProyectosButton = document.getElementById('verProyectosButton');
verProyectosButton.addEventListener('click', mostrarProyectosAnteriores);

const calificarHojaDeVida = () => {
  let calificacion = prompt("Del 1 al 10, ¿cómo calificarías mi hoja de vida?");
  alert(`¡Gracias por calificar con un ${calificacion}!`);
}

const saludoPersonalizado = () => {
  alert("¡Gracias por visitar mi sección de experiencia laboral!");
}
