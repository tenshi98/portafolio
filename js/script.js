const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

// se levanta ventana modal
const modals = document.querySelectorAll("[data-modal]");

modals.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add("open");
    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("open");
      });
    });
  });
});

/***************************************/
//Contadores
let countExperiencia  = 0;
let countCursos       = 0;
let countProyectos    = 0;
let countTecnologias  = 0;

let dataTecnologias  = '';
let dataEstudios     = '';
let dataExperiencia  = '';
let dataCursos       = '';
let dataProyectos    = '';

/***************************************/
//se agregan los estudios
tecnologiasUsadas.forEach((item, i) => {
  dataTecnologias += '<span class="stooltip" data-tooltip="'+item.Titulo+'"><img class="icon-box" src="'+item.IMG+'" alt="'+item.Titulo+'"/></span>';
  countTecnologias++;
  if(countTecnologias==10){dataTecnologias += '<br/>';}
});

/***************************************/
//se agregan los estudios
estudios.forEach((item, i) => {
  dataEstudios += '<li class="timeline-item"><div class="timeline-info"><span>'+item.Fechas+'</span></div><div class="timeline-marker"></div><div class="timeline-content"><h3 class="timeline-title">'+item.Colegio+'</h3><p>'+item.Titulo+'.</p></div></li>';
});
dataEstudios += '<li class="timeline-item"><div class="timeline-info"></div></li>';

/***************************************/
//se agrega la experiencia
experiencia.forEach((item, i) => {
  if(countExperiencia<4){
    dataExperiencia += '<li class="timeline-item"><div class="timeline-info"><span>'+item.Fechas+'</span></div><div class="timeline-marker"></div><div class="timeline-content"><h3 class="timeline-title">'+item.Empresa+'</h3><p><strong>'+item.Puesto+'</strong></p></div></li>';
    countExperiencia++;
  }
});
dataExperiencia += '<li class="timeline-item"><div class="timeline-info"></div></li>';

/***************************************/
//se agregan los cursos
cursos.forEach((item, i) => {
  if(countCursos<10){
    dataCursos += '<li class="timeline-item"><div class="timeline-marker"></div><div class="timeline-content"><h3 class="timeline-title">'+item.Ano+'</h3><p>';
    item.Cursos.forEach((curso, j) => {
      if(countCursos<10){
        dataCursos += '•	'+curso.Nombre+'.<br/>';
        countCursos++;
      }
    });
    dataCursos += '</p></div></li>';
  }
});
dataCursos += '<li class="timeline-item"><div class="timeline-info"></div></li>';

/***************************************/
//se agregan los proyectos
proyectos.forEach((item, i) => {
  if(countProyectos<3){
    dataProyectos += '<li><div class="inner"><div class="li-img"><img class="animatedBox" src="'+item.IMG+'" alt="'+item.Titulo+'" /></div><div class="li-text"><h3 class="li-head">'+item.Titulo+'</h3><div class="li-sub"><p>'+item.DescCorta+'</p></div><div class="li-icon-tech">';
    item.Tecnologias.forEach((tecnologia, j) => {
      dataProyectos += '<span data-tooltip="'+tecnologia.Text+'"><img class="icon-tech" src="'+tecnologia.Img+'" alt="'+tecnologia.Text+'"/></span>';
    });
    dataProyectos += '</div><div class="li-social">';
    item.Links.forEach((enlaces, j) => {
        dataProyectos += '<a class="btn btn-primary" target="_blank" href="'+enlaces.Link+'" ><i class="'+enlaces.Icon+'"></i> '+enlaces.Text+'</a> ';
    });
    dataProyectos += '</div></div></div></li>';
    countProyectos++;
  }
});


/***************************************/
//imprimo
document.getElementById('IDTecnologias').innerHTML = dataTecnologias;
document.getElementById('IDEstudios').innerHTML += dataEstudios;
document.getElementById('IDExperiencia').innerHTML += dataExperiencia;
document.getElementById('IDCursos').innerHTML += dataCursos;
document.getElementById('IDProjects').innerHTML += dataProyectos;


/***************************************/
//cargo los datos
async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}

// this is your `load_home() function`
async function load_proyectos() {
  const contentDiv = document.getElementById("modal-display");
  contentDiv.innerHTML = '';//se vacia el modal
  /***************************************/
  //Variable
  let dataProyectosModal = '<section id="projects" class="project-container container container_proyectos">';
  dataProyectosModal += '<div class="content-text">';
  dataProyectosModal += '<h2><i class="fas fa-code"></i> Proyectos</h2>';
  dataProyectosModal += '<h3>Revisa todos mis Proyectos Realizados.</h3>';
  dataProyectosModal += '</div>';
  dataProyectosModal += '<div id="myBtnContainer">';
  dataProyectosModal += '<a class="btn btn-primary" onclick="filterSelection(\'all\')"> Mostrar Todos</a> ';
  dataProyectosModal += '<a class="btn btn-primary" onclick="filterSelection(\'Plataforma\')"> Plataformas</a> ';
  dataProyectosModal += '<a class="btn btn-primary" onclick="filterSelection(\'SitioWeb\')"> Sitio Web</a> ';
  dataProyectosModal += '<a class="btn btn-primary" onclick="filterSelection(\'APP\')"> APP</a> ';
  dataProyectosModal += '<a class="btn btn-primary" onclick="filterSelection(\'Excel\')"> Excel</a> ';
  dataProyectosModal += '<a class="btn btn-primary" onclick="filterSelection(\'Otros\')"> Otros</a> ';
  dataProyectosModal += '</div>';
  dataProyectosModal += '<article class="content-box">';
  dataProyectosModal += '<ul class="list img-list">';

  //se agregan los proyectos
  proyectos.forEach((item, i) => {
    dataProyectosModal += '<li class="column '+item.Tipo+'"><div class="inner"><div class="li-img"><img class="animatedBox" src="'+item.IMG+'" alt="'+item.Titulo+'" /></div><div class="li-text"><h3 class="li-head">'+item.Titulo+'</h3><div class="li-sub"><p>'+item.Descripcion+'</p></div>';
    //verificar si existe
    if(item.DatosTec!=''){
      dataProyectosModal += '<h3 class="li-head">Datos Técnicos</h3><div class="li-sub"><p>'+item.DatosTec+'</p></div>';
    }
    dataProyectosModal += '<div class="li-icon-tech"><h3 class="li-head">Stack Tecnológico</h3>';
    //verificar si existe
    if(item.Tecnologias && item.Tecnologias.length > 0){
      item.Tecnologias.forEach((tecnologia, j) => {
        dataProyectosModal += '<span data-tooltip="'+tecnologia.Text+'"><img class="icon-tech" src="'+tecnologia.Img+'" alt="'+tecnologia.Text+'"/></span>';
      });
    }
    dataProyectosModal += '</div><div class="li-social">';
    //verificar si existe
    if(item.Links && item.Links.length > 0){
      item.Links.forEach((enlaces, j) => {
        dataProyectosModal += '<a class="btn btn-primary" target="_blank" href="'+enlaces.Link+'" ><i class="'+enlaces.Icon+'"></i> '+enlaces.Text+'</a> ';
      });
    }
    dataProyectosModal += '</div></div></div></li>';
  });
  dataProyectosModal += '</ul></article></section>';
  /***************************************/
  //imprimo
  contentDiv.innerHTML = dataProyectosModal;
  contentDiv.scrollTop = 0;

  filterSelection("all");
}
async function load_experiencia() {
  const contentDiv = document.getElementById("modal-display");
  contentDiv.innerHTML = '';//se vacia el modal
  /***************************************/
  //Variable
  let dataExperienciaModal = '<section id="experiencia" class="project-container container"><div class="content-text"><h2><i class="fas fa-book"></i> Experiencia Laboral</h2><h3>Revisa mi experiencia laboral</h3></div><article class=""><div class="row example-basic"><ul class="timeline">';
  //se agregan los proyectos
  experiencia.forEach((item, i) => {
    dataExperienciaModal += '<li class="timeline-item"><div class="timeline-info"><span>'+item.Fechas+'</span></div><div class="timeline-marker"></div><div class="timeline-content"><h3 class="timeline-title">'+item.Empresa+'</h3><p><strong>'+item.Puesto+':</strong><br/>'+item.Descripcion+'<br/>';
    //verificar si existe
    if(item.proyectos && item.proyectos.length > 0){
      dataExperienciaModal += '<strong>Proyectos:</strong>';
      item.proyectos.forEach((proyecto, j) => {
        if(proyecto.Link!=''){
          dataExperienciaModal += '<br/><a href="'+proyecto.Link+'" target="_blank" rel="noopener noreferrer">•	'+proyecto.Nombre+'.</a>';
        }else{
          dataExperienciaModal += '<br/>•	'+proyecto.Nombre+'.';
        }
      });
    }
    dataExperienciaModal += '</p></div></li>';
  });
  dataExperienciaModal += '<li class="timeline-item"><div class="timeline-info"></div></li>';
  dataExperienciaModal += '</ul></div></article></section>';
  /***************************************/
  //imprimo
  contentDiv.innerHTML = dataExperienciaModal;
  contentDiv.scrollTop = 0;
}
async function load_cursos() {
  const contentDiv = document.getElementById("modal-display");
  contentDiv.innerHTML = '';//se vacia el modal
  /***************************************/
  //Variable
  let dataCursosModal = '<section id="estudios" class="project-container container"><div class="content-text"><h2><i class="fas fa-school"></i> Cursos y Capacitaciones</h2><h3>Revisa los últimos cursos y capacitaciones que he realizado.</h3></div><article class=""><div class="row example-basic"><ul class="timeline" id="IDCursosModal">';
  //se agregan los proyectos
  cursos.forEach((item, i) => {
    dataCursosModal += '<li class="timeline-item"><div class="timeline-marker"></div><div class="timeline-content"><h3 class="timeline-title">'+item.Ano+'</h3>';
    item.Cursos.forEach((curso, j) => {
      if(curso.Contenido!=''){
        dataCursosModal += '<details><summary>'+curso.Nombre+'. ';
        if(curso.Link!=''){       dataCursosModal += '<a href="'+curso.Link+'" target="_blank" rel="noopener noreferrer" >';}
        if(curso.TextLink!=''){   dataCursosModal += '<strong>'+curso.TextLink+'</strong>';}
        if(curso.Link!=''){       dataCursosModal += '</a>';}
        dataCursosModal += '.</summary><p>'+curso.Contenido+'</p><br/></details>';
      }else{
        dataCursosModal += '<p>•	'+curso.Nombre+'. ';
        if(curso.Link!=''){       dataCursosModal += '<a href="'+curso.Link+'" target="_blank" rel="noopener noreferrer" >';}
        if(curso.TextLink!=''){   dataCursosModal += '<strong>'+curso.TextLink+'</strong>';}
        if(curso.Link!=''){       dataCursosModal += '</a>';}
        dataCursosModal += '.</p>';
      }
      //dataCursosModal += '<br/>';
      countCursos++;
    });
    dataCursosModal += '</div></li>';
  });
  dataCursosModal += '<li class="timeline-item"><div class="timeline-info"></div></li>';
  dataCursosModal += '</ul></div></article></section>';
  /***************************************/
  //imprimo
  contentDiv.innerHTML = dataCursosModal;
  contentDiv.scrollTop = 0;
}



function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


