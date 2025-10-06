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
dataTecnologias = tecnologiasUsadas.map((item, i) =>
  `<span class="stooltip" data-tooltip="${item.Titulo}"><img class="icon-box" src="${item.IMG}" alt="${item.Titulo}"/></span>${((i + 1) % 10 === 0 ? "<br/>" : "")}`
).join("");
countTecnologias = tecnologiasUsadas.length;

/***************************************/
//se agregan los estudios
dataEstudios = estudios.map(item =>
  `<li class="timeline-item">
    <div class="timeline-info"><span>${item.Fechas}</span></div>
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h3 class="timeline-title">${item.Colegio}</h3>
      <p>${item.Titulo}.</p>
    </div>
  </li>`
).join("");
dataEstudios += '<li class="timeline-item"><div class="timeline-info"></div></li>';

/***************************************/
// Muestra hasta 3 experiencia destacados
dataExperiencia = experiencia.slice(0, 5).map(item =>
  `<li class="timeline-item">
    <div class="timeline-info"><span>${item.Fechas}</span></div>
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h3 class="timeline-title">${item.Empresa}</h3>
      <p><strong>${item.Puesto}</strong></p>
    </div>
  </li>`
).join("");
dataExperiencia += '<li class="timeline-item"><div class="timeline-info"></div></li>';

/***************************************/
// Agrega hasta 10 cursos en total, agrupados por año
let totalCursos = 0;
for (const item of cursos) {
  if (totalCursos >= 10) break;
  let cursosHtml = "";
  for (const curso of item.Cursos) {
    if (totalCursos >= 10) break;
    cursosHtml += `• ${curso.Nombre}.<br/>`;
    totalCursos++;
  }
  if (cursosHtml) {
    dataCursos += `
      <li class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3 class="timeline-title">${item.Ano}</h3>
          <p>${cursosHtml}</p>
        </div>
      </li>
    `;
  }
}
dataCursos += '<li class="timeline-item"><div class="timeline-info"></div></li>';

/***************************************/
// Muestra hasta 3 proyectos destacados
dataProyectos = proyectos.slice(0, 3).map(item => `
  <li>
    <div class="inner">
      <div class="li-img">
        <img class="animatedBox" src="${item.IMG}" alt="${item.Titulo}" />
      </div>
      <div class="li-text">
        <h3 class="li-head">${item.Titulo}</h3>
        <div class="li-sub"><p>${item.DescCorta}</p></div>
        <div class="li-icon-tech">
          ${item.Tecnologias.map(tecnologia =>
            `<span data-tooltip="${tecnologia.Text}"><img class="icon-tech" src="${tecnologia.Img}" alt="${tecnologia.Text}"/></span>`
          ).join("")}
        </div>
        <div class="li-social">
          ${item.Links.map(enlace =>
            `<a class="btn btn-primary" target="_blank" href="${enlace.Link}" ><i class="${enlace.Icon}"></i> ${enlace.Text}</a>`
          ).join(" ")}
        </div>
      </div>
    </div>
  </li>
`).join("");
countProyectos = Math.min(3, proyectos.length);


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

/***************************************/
//cargo los proyectos
async function load_proyectos() {
  const contentDiv = document.getElementById("modal-display");
  contentDiv.innerHTML = "";

  // Botones de filtro
  const filters = [
    { label: "Mostrar Todos", value: "all" },
    { label: "Plataformas", value: "Plataforma" },
    { label: "Sitio Web", value: "SitioWeb" },
    { label: "APP", value: "APP" },
    { label: "Excel", value: "Excel" },
    { label: "Otros", value: "Otros" }
  ];
  const filterBtns = filters
    .map(
      f =>
        `<a class="btn btn-primary" onclick="filterSelection('${f.value}')"> ${f.label}</a>`
    )
    .join(" ");

  // Proyectos
  const proyectosHtml = proyectos
    .map(item => {
      const datosTecHtml =
        item.DatosTec && item.DatosTec !== ""
          ? `<h3 class="li-head">Datos Técnicos</h3><div class="li-sub"><p>${item.DatosTec}</p></div>`
          : "";

      const tecnologiasHtml =
        item.Tecnologias && item.Tecnologias.length
          ? `<div class="li-icon-tech"><h3 class="li-head">Stack Tecnológico</h3>${item.Tecnologias
              .map(
                tecnologia =>
                  `<span data-tooltip="${tecnologia.Text}"><img class="icon-tech" src="${tecnologia.Img}" alt="${tecnologia.Text}"/></span>`
              )
              .join("")}</div>`
          : "";

      const linksHtml =
        item.Links && item.Links.length
          ? `<div class="li-social">${item.Links.map(
              enlace =>
                `<a class="btn btn-primary" target="_blank" href="${enlace.Link}" ><i class="${enlace.Icon}"></i> ${enlace.Text}</a>`
            ).join(" ")}</div>`
          : "";

      return `<li class="column ${item.Tipo}">
        <div class="inner">
          <div class="li-img"><img class="animatedBox" src="${item.IMG}" alt="${item.Titulo}" /></div>
          <div class="li-text">
            <h3 class="li-head">${item.Titulo}</h3>
            <div class="li-sub"><p>${item.Descripcion}</p></div>
            ${datosTecHtml}
            ${tecnologiasHtml}
            ${linksHtml}
          </div>
        </div>
      </li>`;
    })
    .join("");

  // Renderizado final
  contentDiv.innerHTML = `
    <section id="projects" class="project-container container container_proyectos">
      <div class="content-text">
        <h2><i class="fas fa-code"></i> Proyectos</h2>
        <h3>Revisa todos mis Proyectos Realizados.</h3>
      </div>
      <div id="myBtnContainer">${filterBtns}</div>
      <article class="content-box">
        <ul class="list img-list">
          ${proyectosHtml}
        </ul>
      </article>
    </section>
  `;
  contentDiv.scrollTop = 0;
  filterSelection("all");
}
/***************************************/
//cargo la experiencia
async function load_experiencia() {
  const contentDiv = document.getElementById("modal-display");
  contentDiv.innerHTML = '';

  const timelineItems = experiencia.map(item => {
    const proyectos = (item.proyectos && item.proyectos.length > 0)
      ? `<strong>Proyectos:</strong>${
          item.proyectos.map(proyecto =>
            proyecto.Link
              ? `<br/><a href="${proyecto.Link}" target="_blank" rel="noopener noreferrer">• ${proyecto.Nombre}.</a>`
              : `<br/>• ${proyecto.Nombre}.`
          ).join('')
        }`
      : '';

    return `
      <li class="timeline-item">
        <div class="timeline-info"><span>${item.Fechas}</span></div>
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3 class="timeline-title">${item.Empresa}</h3>
          <p><strong>${item.Puesto}:</strong><br/>${item.Descripcion}<br/>${proyectos}</p>
        </div>
      </li>
    `;
  }).join('');

  const dataExperienciaModal = `
    <section id="experiencia" class="project-container container">
      <div class="content-text">
        <h2><i class="fas fa-book"></i> Experiencia Laboral2</h2>
        <h3>Revisa mi experiencia laboral</h3>
      </div>
      <article>
        <div class="row example-basic">
          <ul class="timeline">
            ${timelineItems}
            <li class="timeline-item"><div class="timeline-info"></div></li>
          </ul>
        </div>
      </article>
    </section>
  `;

  contentDiv.innerHTML = dataExperienciaModal;
  contentDiv.scrollTop = 0;
}
/***************************************/
//cargo los cursos
async function load_cursos() {
  const contentDiv = document.getElementById("modal-display");
  contentDiv.innerHTML = "";

  let dataCursosModal = `
    <section id="estudios" class="project-container container">
      <div class="content-text">
        <h2><i class="fas fa-school"></i> Cursos y Capacitaciones</h2>
        <h3>Revisa los últimos cursos y capacitaciones que he realizado.</h3>
      </div>
      <article>
        <div class="row example-basic">
          <ul class="timeline" id="IDCursosModal">
            ${cursos
              .map(
                item => `
                  <li class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                      <h3 class="timeline-title">${item.Ano}</h3>
                      ${item.Cursos
                        .map(curso => {
                          const link = curso.Link
                            ? `<a href="${curso.Link}" target="_blank" rel="noopener noreferrer">`
                            : "";
                          const textLink = curso.TextLink
                            ? `<strong>${curso.TextLink}</strong>`
                            : "";
                          const linkClose = curso.Link ? "</a>" : "";
                          if (curso.Contenido && curso.Contenido.trim() !== "") {
                            return `
                              <details>
                                <summary>${curso.Nombre}. ${link}${textLink}${linkClose}.</summary>
                                <p>${curso.Contenido}</p><br/>
                              </details>
                            `;
                          } else {
                            return `
                              <p>• ${curso.Nombre}. ${link}${textLink}${linkClose}.</p>
                            `;
                          }
                        })
                        .join("")}
                    </div>
                  </li>
                `
              )
              .join("")}
            <li class="timeline-item"><div class="timeline-info"></div></li>
          </ul>
        </div>
      </article>
    </section>
  `;

  contentDiv.innerHTML = dataCursosModal;
  contentDiv.scrollTop = 0;
}


/***************************************/
//Filtros
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


