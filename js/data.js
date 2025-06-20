/***********************************************/
var tecnologiasUsadas = [
    {IMG: "assets/icons/node-js.svg",            Titulo: "Node.js"},
    {IMG: "assets/icons/react.svg",              Titulo: "React.js"},
    {IMG: "assets/icons/angular.svg",            Titulo: "Angular"},
    {IMG: "assets/icons/vue.svg",                Titulo: "Vue"},
    {IMG: "assets/icons/nestjs.svg",             Titulo: "Nest.js"},
    {IMG: "assets/icons/java.svg",               Titulo: "Java"},
    {IMG: "assets/icons/php.svg",                Titulo: "PHP"},
    {IMG: "assets/icons/python.svg",             Titulo: "Python"},
    {IMG: "assets/icons/typescript.svg",         Titulo: "Typescript"},
    {IMG: "assets/icons/codeigniter.svg",        Titulo: "Codeigniter"},
    {IMG: "assets/icons/laravel.svg",            Titulo: "Laravel"},
    {IMG: "assets/icons/cakephp.svg",            Titulo: "Cakephp"},
    {IMG: "assets/icons/github.svg",             Titulo: "Github"},
    {IMG: "assets/icons/docker.svg",             Titulo: "Docker"},
    {IMG: "assets/icons/jenkins.svg",            Titulo: "Jenkins"},
    {IMG: "assets/icons/sqlserver.svg",          Titulo: "Microsoft SQL Server"},
    {IMG: "assets/icons/mongodb.svg",            Titulo: "Mongo DB"},
    {IMG: "assets/icons/mysql.svg",              Titulo: "MySQL"},
    {IMG: "assets/icons/mariadb.svg",            Titulo: "Maria DB"},
    {IMG: "assets/icons/firebase.svg",           Titulo: "Firebase"},
];

/***********************************************/
var cursos = [
    {
        Ano: "2025",
        Cursos : [
            {Nombre: "Curso de Machine Learning con ScikitLearn",                                         Link: "https://codigofacilito.com/certificates/d7b26cbd-b897-4b5d-863a-4c2fdc826afc",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción a Scikit Learn<br> - Módulo  2 - Ingeniería de Características<br> - Módulo  3 - Utilidades para la Creación de Modelos<br> - Módulo  4 - Aprendizaje Supervisado<br> - Módulo  5 - Aprendizaje No Supervisado<br> - Módulo  6 - Otros Temas"},
            {Nombre: "Curso Apps de Inteligencia Artificial con C# y Azure",                              Link: "https://codigofacilito.com/certificates/29413256-d435-485d-b20a-6ea5464f1db1",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción<br> - Módulo  2 - Conceptos fundamentales de Inteligencia Artificial<br> - Módulo  3 - IA Generativa en Azure Open AI<br> - Módulo  4 - Desarrollo de aplicaciones de IA generativa con .NET<br> - Módulo  5 - Conversando con tus propios datos<br> - Módulo  6 - Automatización Inteligente con Azure Open AI y Kernel Semántico<br> - Módulo  7 - Despedida y Cierre<br> - Módulo  8 - Generación de imágenes con Azure OpenAI - DALL-E 3"},
            {Nombre: "Curso de Anotaciones y type hints con Python",                                      Link: "https://codigofacilito.com/certificates/8422eb43-9fce-43f5-a941-9fa0fe00fe50",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción<br> - Módulo  2 - Clases"},
            {Nombre: "Curso: Las Herramientas Digitales clave para tu Negocio",                           Link: "https://cursos.desafiolatam.com/certificates/vrkta64rky",                       TextLink: "(Ver certificado en Desafio Latam)",    Contenido: ""},
            {Nombre: "Curso de Introducción a Redis",                                                     Link: "https://codigofacilito.com/certificates/0c07fbac-0506-40ca-89c4-dcc9cede41b2",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción<br> - Módulo 2 - Comandos básicos<br> - Módulo 3 - Casos de uso"},
            {Nombre: "10 Proyectos de Javascript para tu portafolio y entrevistas",                       Link: "https://ude.my/UC-ab5199f9-fff9-4b65-99f5-5f52d915fbea/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Sobre el curso<br> - Sección 2: Calculadora del Amor<br> - Sección 3: Calculadora BMI<br> - Sección 4: Todo List<br> - Sección 5: Generador de Colores<br> - Sección 6: Editor de Código<br> - Sección 7: Formulario de Netflix<br> - Sección 8: Reproductor de Musica<br> - Sección 9: Agenda de Contactos<br> - Sección 10: Juego de Adivinanzas<br> - Sección 11: Profile"},
            {Nombre: "Curso Avanzado de Excel, Análisis y Visualización de Datos",                        Link: "https://codigofacilito.com/certificates/88e236d0-a567-40f8-a904-0e4308ec42d2",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Funciones avanzadas en Excel<br> - Módulo 2 - Visualización de datos en Excel<br> - Módulo 3 - Usos de Tablas Dinámicas<br> - Módulo 4 - Adquisición y transformación de datos<br> - Módulo 5 - Herramientas externas y complementos<br> - Módulo 6 - Track Power Pivot"},
            {Nombre: "HTML Masterclass: Fundamentos esenciales para desarrollo web",                      Link: "https://ude.my/UC-161fe74d-2e49-4d7c-9fb0-3db82ea634f6/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Primeros pasos en la Web<br> - Sección 2: Introducción HTML<br> - Sección 3: Estructura de una página<br> - Sección 4: Multimedias<br> - Sección 5: Formularios<br> - Sección 6: Gráficos con HTML"},
            {Nombre: "Curso profesional de JavaScript",                                                   Link: "https://codigofacilito.com/certificates/112f6d80-8432-4e3b-b8f8-6a1f787d9d72",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción<br> - Módulo 2 - Conceptos básicos<br> - Módulo 3 - Fundamentos de funciones<br> - Módulo 4 - Arreglos<br> - Módulo 5 - Objetos y JSON<br> - Módulo 6 - El contexto<br> - Módulo 7 - Clases<br> - Módulo 8 - Prototipos<br> - Módulo 9 - Programación asíncrona<br> - Módulo 10 - Funciones asíncronas (async | await)<br> - Módulo 11 - Módulos<br> - Módulo 12 - Generadores e iteradores<br> - Módulo 13 - Cadenas a fondo<br> - Módulo 14 - Expresiones regulares"},
            {Nombre: "Curso: Diseño accesible e inclusivo",                                               Link: "https://cursos.desafiolatam.com/certificates/fxfoj8hhqi",                       TextLink: "(Ver certificado en Desafio Latam)",    Contenido: ""},
            {Nombre: "Curso: DOMINA EL ANÁLISIS CON SQL: Extracción, transformación y optimización",      Link: "https://cursos.desafiolatam.com/certificates/iagcp29els",                       TextLink: "(Ver certificado en Desafio Latam)",    Contenido: ""},
            {Nombre: "Curso: Cómo armar tu 1er página web acompañado con IA",                             Link: "https://cursos.desafiolatam.com/certificates/od4i2kcrsw",                       TextLink: "(Ver certificado en Desafio Latam)",    Contenido: ""},
            {Nombre: "Curso: CSS Avanzado",                                                               Link: "https://cursos.desafiolatam.com/certificates/8ldmtuhk9n",                       TextLink: "(Ver certificado en Desafio Latam)",    Contenido: ""},
            {Nombre: "Curso: GIT Y GITHUB PARA PRINCIPIANTES: Controla tu código como un profesional",    Link: "https://cursos.desafiolatam.com/certificates/jxazeanrff",                       TextLink: "(Ver certificado en Desafio Latam)",    Contenido: ""},
            {Nombre: "Curso de Kotlin básico",                                                            Link: "https://codigofacilito.com/certificates/20398235-09d4-4451-8286-5014ff669786",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción<br> - Módulo 2 - Variables, constantes y tipos de datos<br> - Módulo 3 - Colecciones<br> - Módulo 4 - Operadores<br> - Módulo 5 - Estructuras de control<br> - Módulo 6 - Funciones<br> - Módulo 7 - POO<br> - Módulo 8 - Despedida"},
            {Nombre: "Curso de procesos de ETL Modernos con Python",                                      Link: "https://codigofacilito.com/certificates/7c0d3161-efc6-4c61-8e81-fcf96ad9dbf4",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción<br> - Módulo 2 - Fundamentos de ETL<br> - Módulo 3 - Extracción de datos<br> - Módulo 4 - Transformación de datos<br> - Módulo 5 - Carga de datos<br> - Módulo 6 - ETL con herramientas avanzadas<br> - Módulo 7 - Proyecto final"},
            {Nombre: "Curso: Claves para un CV exitoso en Tecnología",                                    Link: "https://cursos.desafiolatam.com/certificates/xver4ofanm",                       TextLink: "(Ver certificado en Desafio Latam)",    Contenido: ""},
            {Nombre: "Universidad Desarrollo Web - FrontEnd Web Developer!",                              Link: "https://ude.my/UC-2b3a4286-c7ac-4fd3-bdb7-424eb62da809/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Bienvenidos a la Universidad Desarrollo Web<br> - Sección 2: Introducción Universidad Desarrollo Web<br> - Sección 3: Elementos Básicos de HTML<br> - Sección 4: Introducción a HTML con CSS<br> - Sección 5: Links en HTML y CSS<br> - Sección 6: Tablas en HTML<br> - Sección 7: Listas en HTML<br> - Sección 8: Elementos inline y block en HTML y más temas!<br> - Sección 9: Formularios en HTML<br> - Sección 10: Elementos Semánticos en HTML<br> - Sección 11: Introducción a CSS<br> - Sección 12: Colores, Bordes y más en CSS<br> - Sección 13: Box Model en CSS<br> - Sección 14: Manejo de Colores en CSS<br> - Sección 15: Manejo de Fondos (Background) en CSS<br> - Sección 16: Formato de Texto en CSS<br> - Sección 17: Fuentes en CSS<br> - Sección 18: Íconos en CSS<br> - Sección 19: Display en CSS<br> - Sección 20: Posicionamiento de Elementos con CSS<br> - Sección 21: Selectores en CSS<br> - Sección 22: Gradientes en CSS<br> - Sección 23: Flexbox en CSS<br> - Sección 24: Introducción a JavaScript<br> - Sección 25: Tipos de Datos en JavaScript<br> - Sección 26: Operadores en JavaScript<br> - Sección 27: Sentencias de Control en JavaScript<br> - Sección 28: Ciclos en JavaScript<br> - Sección 29: Arreglos en JavaScript<br> - Sección 30: Funciones en JavaScript<br> - Sección 31: Objetos en JavaScript<br> - Sección 32: Clases en JavaScript<br> - Sección 33: Palabra Static en JavaScript<br> - Sección 34: Ejercicio de Herencia en JavaScript<br> - Sección 35: Sistema de Ventas con JavaScript<br> - Sección 36: Proyecto Mundo PC con JavaScript<br> - Sección 37: Modo Strict en JavaScript<br> - Sección 38: Programación Orientada a Objetos (POO) en JavaScript<br> - Sección 39: Manejo de Errores en JavaScript<br> - Sección 40: Funciones Flecha (Arrow Functions) en JavaScript<br> - Sección 41: Funciones Callback en JavaScript<br> - Sección 42: Promesas en JavaScript<br> - Sección 43: Manejo del DOM HTML con JavaScript<br> - Sección 44: Manejo de Eventos con DOM HTML y JavaScript<br> - Sección 45: Aplicación Calculadora con JavaScript y Bootstrap<br> - Sección 46: Aplicación Listado de Personas con JavaScript<br> - Sección 47: Aplicación Reloj Digital con JavaScript<br> - Sección 48: Aplicación Presupuesto con JavaScript<br> - Sección 49: Clase Final"},
            {Nombre: "Git Para Principiantes",                                                            Link: "https://ude.my/UC-8a0f51be-3127-4e59-aee5-99884623d641/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Primeros pasos con Git"},
            {Nombre: "Fundamentos de Programación: Aprende a programar desde cero",                       Link: "https://ude.my/UC-b84bdb04-990b-4b06-a33e-0a1b58092574/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Un poco de historia<br> - Sección 3: Identificar el problema a resolver<br> - Sección 4: Elementos de programación<br> - Sección 5: Estándares y buenas prácticas de programación.<br> - Sección 6: A un paso de construir programas<br> - Sección 7: Entendiendo los paradigmas de programación<br> - Sección 8: Elegir un lenguaje de programación<br> - Sección 9: Aplicando lo aprendido - VBA<br> - Sección 10: Recomendaciones para programadores<br> - Sección 11: Introducción a las bases de datos<br> - Sección 12: Construir aplicaciones<br> - Sección 13: Examen final"},
            {Nombre: "Curso de testing estático",                                                         Link: "https://codigofacilito.com/certificates/e1b5ab86-de69-4d50-af17-80a4ca8a8566",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción<br> - Módulo 2 - Estadísticas<br> - Módulo 3 - Proceso de Revisión<br> - Módulo 4 - Tipos de Revisión<br> - Módulo 5 - Llevando a cabo la Revisión"},
            {Nombre: "Curso Profesional de PHP 8",                                                        Link: "https://codigofacilito.com/certificates/5d11136d-24e7-471a-91ed-e52286c2658f",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción<br> - Módulo 2 - Configuración<br> - Módulo 3 - Variables, Constantes y Tipos de Datos<br> - Módulo 4 - Operadores<br> - Módulo 5 - Estructuras de Control<br> - Módulo 6 - Arreglos<br> - Módulo 7 - Funciones<br> - Módulo 8 - POO<br> - Módulo 9 - Base de Datos<br> - Módulo 10 - MVC"},
            {Nombre: "Curso profesional de React",                                                        Link: "https://codigofacilito.com/certificates/24510cd4-6783-48d7-a3c4-08f8e0a715f9",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción<br> - Módulo 2 - Esenciales I<br> - Módulo 3 - Vite<br> - Módulo 4 - Presentación del Proyecto<br> - Módulo 5 - Esenciales II<br> - Módulo 6 - Estilos<br> - Módulo 7 - Routing<br> - Módulo 8 - Fetching<br> - Módulo 9 - State Management<br> - Módulo 10 - Completando Proyecto<br> - Módulo 11 - Mejorando tu Código<br> - Módulo 12 - React Concurrente<br> - Módulo 13 - React 19"},
            {Nombre: "Curso de fundamentos de arquitectura de software",                                  Link: "https://codigofacilito.com/certificates/e02ba46b-1a1d-4317-bf8a-75419f8b564a",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Mindset de arquitectura<br> - Módulo 2 - Características de los sistemas<br> - Módulo 3 - Estilos de arquitectura<br> - Módulo 4 - Documentación de Arquitectura"},
            {Nombre: "Curso de Spring Framework y Spring Boot",                                           Link: "https://codigofacilito.com/certificates/e845e4b9-f3a1-448f-9105-1cb98ca9a3a7",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción<br> - Módulo 2 - Spring MVC<br> - Módulo 3 - Inyección de Dependencias<br> - Módulo 4 - CRUD Películas<br> - Módulo 5 - Despedida"},
            {Nombre: "Curso de Laravel 11 Profesional",                                                   Link: "https://codigofacilito.com/certificates/c13ec09c-7328-492a-8947-7a71df81517b",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción<br> - Módulo 2 - Estructura de Datos<br> - Módulo 3 - Estructura Web<br> - Módulo 4 - Lógica<br> - Módulo 5 - Revisión"},
            {Nombre: "Curso profesional de Flutter",                                                      Link: "https://codigofacilito.com/certificates/2eac137b-0dcd-45da-ae8e-9dc8dc975fb3",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción<br> - Módulo 2 - Widgets Básicos<br> - Módulo 3 - Navegación<br> - Módulo 4 - Multi-child<br> - Módulo 5 - Listview, gridview, ítems y utilidades<br> - Módulo 6 - Formulario<br> - Módulo 7 - Menús<br> - Módulo 8 - Diseño"},
            {Nombre: "Curso Profesional de Docker",                                                       Link: "https://codigofacilito.com/certificates/fba830c2-6111-435d-9065-4bf6d666d79b",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción<br> - Módulo 2 - Contenedores<br> - Módulo 3 - Redes y Volúmenes<br> - Módulo 4 - Imágenes<br> - Módulo 5 - Docker Compose<br> - Módulo 6 - Introducción Kubernetes<br> - Módulo 7 - Extras"},
            {Nombre: "Curso profesional de Git",                                                          Link: "https://codigofacilito.com/certificates/01f8512d-5bcd-4ac5-9fc3-cea7bc473441",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción<br> - Módulo 2 - Conceptos Iniciales<br> - Módulo 3 - Configuración<br> - Módulo 4 - Comandos Esenciales<br> - Módulo 5 - Ramas<br> - Módulo 6 - Comandos Útiles<br> - Módulo 7 - Ignorando Archivos<br> - Módulo 8 - Conflictos<br> - Módulo 9 - Deshaciendo Cambios<br> - Módulo 10 - Manipulando la Historia<br> - Módulo 11 - Git Workflow"},
            {Nombre: "Curso de ingeniería de prompts",                                                    Link: "https://codigofacilito.com/certificates/193b1e0d-441b-4635-b221-f051ddefd1ff",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción a los LLMs y el arte del prompting<br> - Módulo 2 - Modelos multimodales<br> - Módulo 3 - Generación de código con LLMs<br> - Módulo 4 - Fine-tuning y RAG para personalización de modelos<br> - Módulo 5 - Agentes y ética en los LLMs"},
            {Nombre: "Curso de Visual Studio Code y GitHub Copilot",                                      Link: "https://codigofacilito.com/certificates/a77e987b-91c3-46b5-bd17-da1548b3801b",  TextLink: "(Ver certificado en Código Facilito)",  Contenido: "<strong>Temario: </strong><br> - Módulo 1 - Introducción<br> - Módulo 2 - Características principales de Visual Studio Code<br> - Módulo 3 - Ejecución de código, debugging y formato de código<br> - Módulo 4 - La IA en VS Code con GitHub Copilot<br> - Módulo 5 - Ejercicio práctico y Cierre"},
            {Nombre: "Maestría en JavaScript: Desde Principiante Hasta Experto",                          Link: "https://ude.my/UC-ff04e9dc-2aa4-4fe5-b7e1-35a0accdb251/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: tipos de datos<br> - Sección 3: operadores en javascript<br> - Sección 4: sentencias de control<br> - Sección 5: ciclos en javascript<br> - Sección 6: arreglos y matrices en javascript<br> - Sección 7: funciones en javascript<br> - Sección 8: objetos en javascript<br> - Sección 9: clases y palabra reservada static<br> - Sección 10: manipulacion del dom<br> - Sección 11: manejo de eventos con DOM HTML<br> - Sección 12: Crea tus propios juegos con HTML Y CANVAS JAVASCRIPT"},
            {Nombre: "El curso más Básico de JavaScript, desde cero",                                     Link: "https://ude.my/UC-afb38561-6de2-4546-8a7e-87a37c54b517/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: 0. Algo de HTML y CSS<br> - Sección 3: 1. Comprender los Fundamentos del Lenguaje<br> - Sección 4: 2. Dominar el Manejo del DOM (Document Object Model)<br> - Sección 5: 7. Proyecto Final<br> - Sección 6: Despedida"},
            {Nombre: "Desarrollo Web Responsivo: Proyectos Prácticos",                                    Link: "https://ude.my/UC-d333544e-71a6-4862-9ebc-d177d944b508/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción al Curso<br> - Sección 2: Fundamentos de HTML 5<br> - Sección 3: Fundamentos de CSS 3<br> - Sección 4: Proyecto 1 - Formulario Responsive<br> - Sección 5: Proyecto 2 - Menú Responsive<br> - Sección 6: Proyecto 3 - Sitio Web Consultoría Responsive<br> - Sección 7: Proyecto 4 - Sitio Frontend<br> - Sección 8: Configurar Visual Studio Code<br> - Sección 9: Proyecto Final 5: Sitio Web Con HTML 5, CSS 3 - SPA<br> - Sección 10: Flexbox<br> - Sección 11: Resumen y Despedida"},
            {Nombre: "10 Proyectos Completos para tu Portafolio de Programador",                          Link: "https://ude.my/UC-1d7fb2bf-6aca-4b0f-87ea-5e1ed5c09f5f/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Sobre el Curso<br> - Sección 2: Preparar las Herramientas de Trabajo<br> - Sección 3: PROYECTO BÁSICO: Landing Page con HTML y CSS<br> - Sección 4: Proyecto Base: Estructura Flexbox y bootstrap en una pagina web<br> - Sección 5: PROYECTO BÁSICO: Creación de pagina web (HTML y CSS)<br> - Sección 6: PROYECTO BASICO: Creación de una pagina utilizando Flex box<br> - Sección 7: PROYECTO BASICO: Pagina antigua de facebook<br> - Sección 8: PROYECTO INTERMEDIO: Login funcional con PHP, HTML, CSS Y MYSQL<br> - Sección 9: PROYECTO INTERMEDIO: Registro funcional con PHP, HTML, CSS Y MYSQL<br> - Sección 10: PROYECTO INTERMEDIO: Sistema de inventario<br> - Sección 11: PROYECTO AVANZADO: formulario con javascript<br> - Sección 12: PROYECTO AVANZADO: API con Go<br> - Sección 13: PROYECTO AVANZANDO: ENRUTAMIENTO DE PAGINAS UTILIZANDO Go<br> - Sección 14: Uso de Git para Gestionar Proyectos<br> - Sección 15: Crea tu Portafolio con Github<br> - Sección 16: Despedida<br> - Sección 17: Bonus extra"},
            {Nombre: "Inteligencia Artificial y Gobierno de Datos para Empresas",                         Link: "https://ude.my/UC-658c1c1b-4776-4714-b95a-a9ed747e6753/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Fundamentos de IA y Gobierno de Datos<br> - Sección 2: Infraestructura Empresarial para la IA<br> - Sección 3: Software Empresarial para la IA<br> - Sección 4: Convergencia con Estrategia Digital en IA<br> - Sección 5: Gestión y Ética de Datos Inteligentes<br> - Sección 6: Implementación Empresarial y Mejores Prácticas"},
            {Nombre: "La Web desde Cero. Aprende Diseño Web con HTML5 y CSS3",                            Link: "https://ude.my/UC-8ff67f92-29d8-4e08-b4e3-c321da753214/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Preparar el Entorno de Desarrollo<br> - Sección 3: La Web desde Cero: HTML<br> - Sección 4: La Web Moderna: HTML5<br> - Sección 5: HTML5: La Nueva Estructura<br> - Sección 6: HTML5: Viñetas para Texto<br> - Sección 7: HTML5: Atributos<br> - Sección 8: HTML5: Multimedia<br> - Sección 9: HTML5: Novedades en los Inputs<br> - Sección 10: HTML5: La API Canvas<br> - Sección 11: HTML5: La API de Geolocalización<br> - Sección 12: CSS3: Introducción<br> - Sección 13: CSS3: Selectores<br> - Sección 14: CSS3: Unidades de Medida y Colores<br> - Sección 15: CSS3: Box Model<br> - Sección 16: CSS3: Posicionamiento de Contenedores<br> - Sección 17: CSS3: Visualización de Contenedores<br> - Sección 18: CSS3: Más estilos para viñetas HTML<br> - Sección 19: Ejercicios<br> - Sección 20: Proyecto Final<br> - Sección 21: Despedida del curso<br> - Sección 22: BonusExtra"},
            {Nombre: "Wordpress Security",                                                                Link: "https://ude.my/UC-d5ee3d75-dbe0-4b95-a7b9-85cf7d66e95e/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introduction<br> - Sección 2: Hackers Perspective"},
            {Nombre: "Aprende a Programar desde Cero: Fundamentos de la Web",                             Link: "https://ude.my/UC-40d1e5b7-5f9b-43ce-bc1a-dcf18bf89a81/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción al Curso<br> - Sección 2: Introducción a la programación<br> - Sección 3: Introducción a HTML<br> - Sección 4: Introducción a CSS<br> - Sección 5: Fundamentos de programación con JavaScript"},
            {Nombre: "Crea tu propio Blog profesional MVC con PHP POO MySQL",                             Link: "https://ude.my/UC-ad6e55fa-75ca-4ee2-8982-6efd4bfe9c0a/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Creación de un blog"},
            {Nombre: "Funnel Marketing: Escala tu Proyecto con embudos de ventas",                        Link: "https://ude.my/UC-8b992891-8908-41f2-ab0e-2b8c29c65412/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Tu Primer Funnel<br> - Sección 3: Taller de Clickfunnels (Inglés)<br> - Sección 4: Lo que nadie te comparte... Claves que aprendí trabajando en Clickfunnels<br> - Sección 5: Taller de Clickfunnels traducido al Español<br> - Sección 6: Email Funnels Worlshop (Inglés)<br> - Sección 7: Plantillas y Recursos<br> - Sección 8: Complementos para tu Funnel<br> - Sección 9: Mini Taller de Linkedin<br> - Sección 10: Workshops sobre Funnels"},
            {Nombre: "Email Marketing Efectivo - Automatiza, entrega y vende",                            Link: "https://ude.my/UC-0b7bf270-11c9-4ca7-a229-8b139e03ea79/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: ¿Cómo hacer que tus emails llegan a bandeja de entrada principal?<br> - Sección 3: Workshop Automatización de Email<br> - Sección 4: Workshop Mailchimp"},
            {Nombre: "Cómo Crear una Página Web Para Amazon Afiliados 2025",                              Link: "https://ude.my/UC-6710376d-3dab-4da1-a7e2-5a42c2de02a3/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso?<br> - Sección 2: Pasos para crear tu página web para Amazon Afiliados<br> - Sección 3: Paso 1: Obtener un dominio y hosting<br> - Sección 4: Paso 2: Instalar WordPress y el certificado SSL<br> - Sección 5: Crea un logotipo para tu página web<br> - Sección 6: Paso 3: Personalizar el diseño de tu página web<br> - Sección 7: Paso 4: Crear artículos con Inteligencia Artificial"},
            {Nombre: "Amazon Afiliados: Cómo Crear una Página Web de Nicho 2025",                         Link: "https://ude.my/UC-7b17e4a9-d7c3-4539-8467-90167f06f8ad/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso?<br> - Sección 2: Pasos para crear tu página web de nicho para Amazon Afiliados<br> - Sección 3: Paso 1: Obtener un dominio y hosting<br> - Sección 4: Paso 2: Instalar WordPress y el certificado SSL<br> - Sección 5: Paso 3: Crear artículos con Inteligencia Artificial<br> - Sección 6: Paso 4: Mostrar productos de Amazon en tu página web"},
            {Nombre: "Cómo Crear una Página Web Para una Agencia de Viajes",                              Link: "https://ude.my/UC-a9bbc787-5fe2-41dc-9e19-3c14e6b7e23b/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso?<br> - Sección 2: Obtener un dominio y hosting<br> - Sección 3: Instalar una plantilla para tu página web de agencia de viajes<br> - Sección 4: Funcionalidades del plugin WP Travel Engine<br> - Sección 5: Personalizar el diseño de tu página web"},
            {Nombre: "Curso de Blocksy: El Mejor Tema Gratis Para WordPress",                             Link: "https://ude.my/UC-f89bcb5f-b018-4f82-9a22-58b6d3e72997/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso?<br> - Sección 2: Obtener un dominio y hosting<br> - Sección 3: Instalar el Tema Blocksy<br> - Sección 4: Opciones de personalización del Tema Blocksy en su versión gratuita<br> - Sección 5: Opciones de personalización del Tema Blocksy en su versión premium"},
            {Nombre: "Cómo Crear una Página Web con WordPress y Cloudways",                               Link: "https://ude.my/UC-53a8965e-770a-4328-a9e6-b500b1cd28f2/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso?<br> - Sección 2: Crear una cuenta gratis en Cloudways<br> - Sección 3: Crear un servidor e instalar WordPress en Cloudways<br> - Sección 4: Personalizar el diseño de tu página web<br> - Sección 5: Configuraciones de dominio en Cloudways<br> - Sección 6: Configuraciones SEO para tu página web"},
            {Nombre: "Crea Correos Corporativos con Dominio Propio en Gmail 2025",                        Link: "https://ude.my/UC-dcae6e5a-2b52-42aa-8747-6eddea8bcc2f/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿QUÉ APRENDERÁS EN EL CURSO?<br> - Sección 2: PASOS PARA CREAR CORREOS CORPORATIVOS CON DOMINIO PROPIO En GMAIL<br> - Sección 3: PASO 1: OBTENER UN DOMINIO Y HOSTING<br> - Sección 4: PASO 2: CONECTAR EL DOMINIO AL PLAN DE HOSTING<br> - Sección 5: PASO 3: CREAR UNA CUENTA DE CORREO CORPORATIVA<br> - Sección 6: PASO 4: CONFIGURAR EL CORREO CORPORATIVO EN GMAIL"},
            {Nombre: "Optimiza tu perfil de Linkedin para el éxito",                                      Link: "https://ude.my/UC-50f20d7e-9414-4e2a-996a-6b6919787c47/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Optimizar perfil de Linkedin<br> - Sección 3: Aumentar audiencia con conexiones adecuadas<br> - Sección 4: Contenido de valor en LinkedIn<br> - Sección 5: Creación de contenido"},
            {Nombre: "Salud Digital : Avances y desafíos en un mundo con IA",                             Link: "https://ude.my/UC-dd84ec83-0feb-40a1-bac8-51cfa7aaf7c4/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Módulo 1: Introducción a la Salud Digital<br> - Sección 3: Módulo 2: El Rol de la Tecnología en la Salud<br> - Sección 4: Módulo 3: Inteligencia Artificial en la Salud: Lo Que Necesitas Saber<br> - Sección 5: Módulo 4: Ciberseguridad: Protegiendo Nuestra Información de Salud<br> - Sección 6: Módulo 5: La Inclusión en la Salud Digital<br> - Sección 7: Módulo 6: Beneficios y Desafíos de la Salud Digital para Todos<br> - Sección 8: Módulo 7: Cómo Involucrarse en la Salud Digital<br> - Sección 9: Módulo 8: El Futuro de la Salud con la Inteligencia Artificial<br> - Sección 10: Módulo 9: Empoderamiento a Través de la Salud Digital<br> - Sección 11: Módulo Extra"},
            {Nombre: "Computación Básica para MacOS y Windows",                                           Link: "https://ude.my/UC-1f5cca49-3b23-4b84-8b68-899fa1a2954e/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Fundamentos de la Computación<br> - Sección 2: Introducción a Microsoft Windows<br> - Sección 3: Introducción a MacOS<br> - Sección 4: Gestión de Archivos y Organización<br> - Sección 5: Internet y Navegación Web"},
            {Nombre: "Bootcamp de Agentes de IA: Crea Chatbots Inteligentes (AI)",                        Link: "https://ude.my/UC-2a9a5dc3-e525-4b96-b8e4-0e05f1195ce3/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Día 1: Introducción a Agentes de IA - Curso Práctico<br> - Sección 2: Día 2: Creación de un Asistente Personal de IA - Curso Práctico de Agentes IA<br> - Sección 3: Día 3: Agente de Web Scraping Potenciado por IA- Curso Práctico de Agentes IA<br> - Sección 4: Día 4: Lector de Documentos y Bot de Preguntas y Respuestas Potenciado por IA"},
            {Nombre: "Curso de Base de Datos Firebird",                                                   Link: "https://ude.my/UC-e8a608f2-7295-4983-8fdd-faa6d9d4fc9f/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Descarga e Instalación<br> - Sección 2: Creación de Usuario<br> - Sección 3: Gestión de Base de Datos y Tablas<br> - Sección 4: Proceso CRUD<br> - Sección 5: Operadores<br> - Sección 6: Funciones<br> - Sección 7: Creación de Vistas<br> - Sección 8: Relaciones de datos de Tablas"},
            {Nombre: "Entrenamiento de Base de Datos Microsoft SQL Server",                               Link: "https://ude.my/UC-c6d0330e-20ca-424a-ab88-0c98d2f2e924/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Entrenamiento de Base de Datos Microsoft SQL Server"},
            {Nombre: "Curso de Base de Datos Oracle Database",                                            Link: "https://ude.my/UC-d128054f-44b0-487a-85f3-2a9c8b98e82a/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Descarga e Instalación de Oracle Database<br> - Sección 2: Crear Usuario para Sesión en Oracle Database<br> - Sección 3: Tablas de Datos<br> - Sección 4: Registros en Tablas<br> - Sección 5: Operadores en Oracle Database<br> - Sección 6: Guardar Cambios en Oracle<br> - Sección 7: Tipos de Funciones<br> - Sección 8: Generando cambios a las Tablas<br> - Sección 9: Relaciones de Datos de Tablas<br> - Sección 10: Procesos Order By y Cláusula WHERE<br> - Sección 11: Crear Vistas<br> - Sección 12: Agrupamiento de datos de Tablas<br> - Sección 13: Procedimientos Almacenados<br> - Sección 14: Funciones definidas por el usuario<br> - Sección 15: Final del Curso"},
            {Nombre: "Curso SQL: De Principiante a Avanzado",                                             Link: "https://ude.my/UC-c067c969-f488-45db-98e1-d39dddf861e8/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Cómo está formado el curso?<br> - Sección 2: Parte 1: Introducción a SQL y Bases de Datos Relacionales<br> - Sección 3: Parte 1: Operaciones Básicas con SQL<br> - Sección 4: Parte 1: Operadores y Filtrado Avanzado<br> - Sección 5: Parte 1: Ordenamiento y Limitación de Resultados<br> - Sección 6: Parte 1: Funciones Agregadas y Agrupación de Datos<br> - Sección 7: Parte 1: Relaciones entre Tablas<br> - Sección 8: Parte 1: Trabajo con Fechas<br> - Sección 9: Parte 1: Funciones de Texto<br> - Sección 10: Parte 1: Funciones Matemáticas<br> - Sección 11: Parte 1: Buenas Prácticas y Optimización<br> - Sección 12: Parte 2: Introducción y Instalación<br> - Sección 13: Parte 2: JOINS Avanzados<br> - Sección 14: Parte 2: Subconsultas y CTEs<br> - Sección 15: Parte 2: Funciones Avanzadas<br> - Sección 16: Parte 2: Consultas de Ventana<br> - Sección 17: Parte 2: Manejo Avanzado de Fechas<br> - Sección 18: Parte 2: Optimización de Consultas<br> - Sección 19: Parte 2: Conclusiones<br> - Sección 20: Terminaste"},
            {Nombre: "Domina el Poder de ChatGPT y la inteligencia artificial",                           Link: "https://ude.my/UC-6014b376-ec1b-448c-98fa-51c9322f7cf4/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Presentacion<br> - Sección 2: chat GPT<br> - Sección 3: Que mas podemos hacer con IA<br> - Sección 4: Practica<br> - Sección 5: Otras opciones<br> - Sección 6: Extra<br> - Sección 7: Despedida"},
            {Nombre: "Curso IA Generativa + Prompt Engineering con ChatGPT-4",                            Link: "https://ude.my/UC-ec0f2369-1b4a-4bc0-8316-492cc7cbfa44/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción a ChatGPT<br> - Sección 2: Prompt Engineering<br> - Sección 3: IA Generativa con ChatGPT: Marketing<br> - Sección 4: Bard: La IA de Google<br> - Sección 5: Adobe Firefly: Generación y edición de imágenes con IA<br> - Sección 6: Generación de video con IA<br> - Sección 7: IA Generativa con ChatGPT: Funciones y Macros (Microsoft Excel)<br> - Sección 8: IA Generativa con ChatGPT: Programación (SQL)<br> - Sección 9: IA Generativa con ChatGPT: Análisis de datos (Power BI)<br> - Sección 10: Conclusiones"},
            {Nombre: "ChatGPT e IA Generativa guía de IA y prompt engineering",                           Link: "https://ude.my/UC-f6fe6baf-a827-4b81-95ab-994712fb2f6c/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Aplicaciones prácticas de ChatGPT<br> - Sección 3: Fundamentos del prompt engineering<br> - Sección 4: Prompt engineering avanzado<br> - Sección 5: Dall-E y la creación de imágenes<br> - Sección 6: Soluciones a las limitaciones de ChatGPT<br> - Sección 7: Funcionalidades útiles<br> - Sección 8: Copilot y Bing<br> - Sección 9: Gemini, Claude, Mistral y otros<br> - Sección 10: Personalización de ChatGPT<br> - Sección 11: Los GPTs<br> - Sección 12: Gestión de API y Playground<br> - Sección 13: Conclusión"},
            {Nombre: "Inteligencia Artificial  Empodera tu Futuro Laboral",                               Link: "https://ude.my/UC-0e65fd69-629b-4abe-b8cb-e52871e45126/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Módulo 1. Fundamentos de la Inteligencia Artificial<br> - Sección 3: Módulo 2. Impacto de la IA en el empleo<br> - Sección 4: Módulo 3. Trabajos emergentes impulsados por la IA<br> - Sección 5: Módulo 4. Desarrollo de Habilidades Complementarias a la IA<br> - Sección 6: Módulo 5. Adaptación Profesional y Reconversión en la Era de la IA<br> - Sección 7: Módulo 6. - Ética, responsabilidad y ciberseguridad en la Era de la IA<br> - Sección 8: Módulo Extra. - Recursos Adicionales"},
            {Nombre: "ChatBot de IA para Wordpress: Para Principiantes y Avanzados",                      Link: "https://ude.my/UC-6d60377d-539a-4535-a274-a87a1e801718/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Instalando el Chatbot de IA en Wordpress<br> - Sección 3: Configurando el Chatbot de IA<br> - Sección 4: Creando una cuenta y API Key en OpenAI<br> - Sección 5: Entrenando un modelo de IA personalizado<br> - Sección 6: Creando una base de datos de conocimiento para Chatbots<br> - Sección 7: Estadísticas y límites de uso (Funciones Avanzada)<br> - Sección 8: Clase Extra"},
            {Nombre: "Guía ChatGPT: Cómo ganar dinero en línea usando ChatGPT",                           Link: "https://ude.my/UC-b491e969-922d-42df-bfcc-aa89010f6ef2/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción al curso y conceptos básicos de ChatGPT<br> - Sección 2: Generación de ideas de negocio con ChatGPT<br> - Sección 3: Creación de contenido con ChatGPT para blogs y redes sociales<br> - Sección 4: Ofreciendo servicios de redacción y edición<br> - Sección 5: Monetización de contenido digital<br> - Sección 6: Creación de productos digitales con ChatGPT<br> - Sección 7: Ofrecer consultorías y asesorías en línea<br> - Sección 8: Marketing de afiliación con ayuda de ChatGPT<br> - Sección 9: Generación de leads y ventas en línea<br> - Sección 10: Gestión de redes sociales con ChatGPT<br> - Sección 11: Automatización de tareas con ChatGPT<br> - Sección 12: Consejos avanzados y cierre del curso"},
            {Nombre: "Desarrolla la Lógica de Programación con FlujoGramas",                              Link: "https://ude.my/UC-33d3e7c3-071a-43d8-8183-961a702b696e/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Introducción al curso<br> - Sección 3: Aprendiendo de los Flujogramas<br> - Sección 4: Ejercicios<br> - Sección 5: Despedida del curso<br> - Sección 6: Bonus extra"},
            {Nombre: "Jira: Gestiona proyectos Corporativos de forma Ágil",                               Link: "https://ude.my/UC-85f308d3-db14-4d22-b60f-7fcc911350f5/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Sobre el curso<br> - Sección 2: Introducción<br> - Sección 3: Primeros pasos en Jira<br> - Sección 4: Profundizamos en la Gestión de Proyectos con Jira<br> - Sección 5: Realizamos búsquedas en Jira<br> - Sección 6: Config avanzadas: Paneles (Dashboards), Tarjetas, Gráficos y Hojas de ruta<br> - Sección 7: Despedida<br> - Sección 8: Bonus extra"},
            {Nombre: "PHP MVC: Aprende Como Funcionan los Sitios Web Modernos",                           Link: "https://ude.my/UC-23214581-d05c-4606-bd11-faa0d62f98f4/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción: Conceptos de POO y Herramientas a utilizar<br> - Sección 2: Programación Orientada a Objetos con PHP<br> - Sección 3: Configuraciones previas necesarias<br> - Sección 4: MVC: Entendiendo el Patrón Modelo Vista Controlador<br> - Sección 5: MVC: Conceptos más avanzados<br> - Sección 6: Mejorando el manejo de Rutas<br> - Sección 7: Frameworks en PHP con Patrón MVC."},
            {Nombre: "Ecommerce Fullstack con PHP y MySQL - Tienda Online",                               Link: "https://ude.my/UC-616c5aa6-3102-4b16-8d60-4c97510e29c4/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción a la pagina de la tienda<br> - Sección 2: Creando un slide de ofertas<br> - Sección 3: Pagina de inicio<br> - Sección 4: Pagina de productos y busquedas<br> - Sección 5: Pagina detalles producto<br> - Sección 6: Administración de los usuarios<br> - Sección 7: Carrito de compra y pasarela de pago<br> - Sección 8: Creando el backend de la tienda<br> - Sección 9: Backend parte 1<br> - Sección 10: Backend parte 2<br> - Sección 11: Backend parte 3"},
            {Nombre: "Programación Web desde 0 con PHP 8, Mysql, Laravel y Symfony",                      Link: "https://ude.my/UC-ad525bb6-735b-4eaf-acb2-7d262a5f6d99/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Sobre el Curso<br> - Sección 2: Día 1: Preparamos el entorno de trabajo. (30 Minutos)<br> - Sección 3: Día 1: Iniciamos con HTML (30 minutos)<br> - Sección 4: Día 2: Etiquetas y cierre de tema HTML<br> - Sección 5: Dia 3: Introducción HTML5<br> - Sección 6: Día 3: HTML5, la Nueva Estructura<br> - Sección 7: Día 4: HTML5. Etiquetas para Texto<br> - Sección 8: Día 4: Atributos de HTML<br> - Sección 9: Día 5: HTML5. Novedades en los Inputs<br> - Sección 10: Día 5: La API de Geolocalización<br> - Sección 11: Día 6: Multimedia de HTML5<br> - Sección 12: Día 6: La API Canvas<br> - Sección 13: Día 7: CSS<br> - Sección 14: Día 8: Selectores CSS<br> - Sección 15: Día 9: CSS3. Unidades de Medida y Colores<br> - Sección 16: Día 10: CSS3. Box Model<br> - Sección 17: Día 11: CSS3. Posicionamiento de Contenedores<br> - Sección 18: Día 11: CSS3. Visualización de Contenedores<br> - Sección 19: Día 12: CSS3. Más Estilos para viñetas HTML5 (Parte 1)<br> - Sección 20: Día 13: Más Estilos para Viñetas HTML5 (Parte 2)<br> - Sección 21: Día 14: Ejercicios para Prácticar HTML5 y CSS3 (Parte 1)<br> - Sección 22: Día 15: Ejercicios para Prácticar HTML5 y CSS3 (Parte 2)<br> - Sección 23: Día 16: Proyecto HTML y CSS<br> - Sección 24: Día 17: Proyecto HTML y CSS<br> - Sección 25: Día 18: Proyecto HTML y CSS<br> - Sección 26: Proyecto Boostrap + HTML Y CSS3<br> - Sección 27: Día 19: Iniciamos PHP8<br> - Sección 28: Día 20: Primeros Pasos en PHP8<br> - Sección 29: Día 21: PHP8, Sentencias y Ciclos<br> - Sección 30: Día 22: Bucles en PHP8<br> - Sección 31: Día 23: Continue y Strings<br> - Sección 32: Día 24: Arrays en PHP8<br> - Sección 33: Día 25: Funciones en PHP8<br> - Sección 34: Día 26: POO (Programación orientada a objetos) de PHP8<br> - Sección 35: Día 27: Herencia y Polimorfismo en PHP8<br> - Sección 36: Día 28: Elementos extra de POO<br> - Sección 37: Día 29: Proyecto con HTML5, CSS3 y PHP8<br> - Sección 38: Día 30: Fundamentos Básicos de MySQL<br> - Sección 39: Día 31: Fundamentos Básicos de MySQL (Parte 2)<br> - Sección 40: Primer Proyecto!!!Proyecto Muestra de datos en una tabla HTML<br> - Sección 41: Día 32: Proyecto PHP y MySQL. Creando una web desde cero<br> - Sección 42: Día 33: Proyecto PHP y MySQL. Creando una web desde cero<br> - Sección 43: Día 34: Proyecto PHP y MySQL. Creando una web desde cero<br> - Sección 44: Día 35: Proyecto PHP y MySQL. Creando una web desde cero<br> - Sección 45: Día 36: Proyecto PHP y MySQL. Creando una web desde cero<br> - Sección 46: Día 37: Proyecto PHP y MySQL. Creando una web desde cero<br> - Sección 47: Día 38: Proyecto Extra (Roles en una pagina web)<br> - Sección 48: Día 39: Laravel (Introducción + Instalación)<br> - Sección 49: Día 39: Rutas Laravel<br> - Sección 50: Día 39: Controladores en Laravel<br> - Sección 51: Día 40: Vistas en Laravel<br> - Sección 52: Día 41: Base de datos y migraciones en Laravel8<br> - Sección 53: Día 42: Eloquent<br> - Sección 54: Día 43: Editando datos en tablas en Laravel8<br> - Sección 55: Día 44: Editando Datos en Tablas de Laravel8 (Parte 2)<br> - Sección 56: Día 45: Proyecto CRUD Laravel 8<br> - Sección 57: Día 46: Proyecto CRUD Laravel 8<br> - Sección 58: Día 47: Proyecto CRUD Laravel 8<br> - Sección 59: Día 48: Symfony 5 Introducción + instalación<br> - Sección 60: Día 48: Symfony<br> - Sección 61: Proyecto web symfony<br> - Sección 62: Despedida<br> - Sección 63: Bonus Extra"},
            {Nombre: "Aprende a crear un Sistema Punto de Venta con PHP, MVC, POO",                       Link: "https://ude.my/UC-f589e835-1a87-42ac-9d92-c8d0e78f1bb9/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: modelo vista controlador<br> - Sección 3: módulo usuarios<br> - Sección 4: módulo categorías<br> - Sección 5: módulo productos<br> - Sección 6: módulo clientes<br> - Sección 7: módulo ventas<br> - Sección 8: módulo reporte y estadistica"},
            {Nombre: "Desarrolla Sistemas POS en PHP 8 de Inventarios y Ventas",                          Link: "https://ude.my/UC-f1b64d3f-05a7-4669-baef-da06ddb42009/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Gestor usuarios<br> - Sección 3: Gestor de categorías<br> - Sección 4: Gestor de los productos<br> - Sección 5: Gestor clientes<br> - Sección 6: Gestor de las ventas<br> - Sección 7: Gestor de reportes estadisticos"},
            {Nombre: "Crea un Sistema de Compra y Venta con PHP, JS y MYSQL",                             Link: "https://ude.my/UC-b7cc4916-ba6a-48d8-9f4d-e5ebca246326/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción"},
            {Nombre: "Curso de PHP y MVC : Construye proyectos web desde cero",                           Link: "https://ude.my/UC-baa07b1b-feed-4a25-a5a1-45f2b513f108/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Desarrollo del Frontend CMS<br> - Sección 3: Desarrollo del Backend Admin<br> - Sección 4: Gestor Grupos<br> - Sección 5: Gestor Perfiles<br> - Sección 6: Gestor Categorías<br> - Sección 7: Gestor Anuncios<br> - Sección 8: Login y Sessiones de Usuario"},
            {Nombre: "Master en PHP Desde 0 hasta Desarrollar Sistemas Completos",                        Link: "https://ude.my/UC-57684260-1f10-46d9-b5ed-58a530beee7f/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Convertidor de Longitud<br> - Sección 3: Crea una Api REST FULL completa<br> - Sección 4: Creación de un Blog<br> - Sección 5: Framework Laravel"},
            {Nombre: "PHP Masterclass Desarrollo de Proyectos Avanzados y Completo",                      Link: "https://ude.my/UC-a352f86c-4080-4824-8fef-749ee2a7d045/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: PROYECTO 1 : Crea una Api REST FULL completa con PHP NATIVO<br> - Sección 2: PROYECTO 2: Curso PHP Proyecto web usuarios y roles Patrón<br> - Sección 3: Desarrolla en PHP un Poderoso CMS para enlaces de WSP<br> - Sección 4: Desarrolla un sistema web POS desde cero con PHP NATIVO"},
            {Nombre: "Desarrollo Web con PHP y MariaDB: Desde los Fundamentos",                           Link: "https://ude.my/UC-4a4bfa79-6cf5-4182-903e-f0adcfac9211/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Comenzamos<br> - Sección 3: Avanzamos<br> - Sección 4: Ejercicios"},
            {Nombre: "Curso PHP Proyecto web usuarios y roles Patrón mvc",                                Link: "https://ude.my/UC-1684be43-bae1-4e31-b979-2afa7a558f9d/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: gestor usuarios<br> - Sección 3: gestor roles<br> - Sección 4: sessiones y variables de session"},
            {Nombre: "Desarrollo de Sistemas Ganaderos bajo el Paradigma MVC",                            Link: "https://ude.my/UC-9047a7c4-85a0-4319-a727-23dee48838ac/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Bonus curso de JQUERY"},
            {Nombre: "Desarrollo de un Sistema tipo Instagram con Laravel 9",                             Link: "https://ude.my/UC-ff83f5b7-c814-41ba-aca6-29ce40bb8760/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: registro y login de usuario<br> - Sección 3: Cerrar sesión y directivas para utilizarse en templates<br> - Sección 4: Creando el Muro<br> - Sección 5: Creando publicaciones"},
            {Nombre: "Desarrolla un sistema web POS desde cero con PHP NATIVO",                           Link: "https://ude.my/UC-cbb6e1ed-49ae-4a68-b5e2-b5bbe0e6aa3b/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Gestor Categorías<br> - Sección 2: Gestor Artículos<br> - Sección 3: Gestor Personas<br> - Sección 3: Gestor Usuarios<br> - Sección 5: Gestor Ingresos"},
            {Nombre: "JavaScript + Php + Fuentes de POS gratis",                                          Link: "https://ude.my/UC-80cd5e36-3fec-4f1e-ae37-0068d70e9194/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Ventajas de tomar este curso y las herramientas a utilizar<br> - Sección 3: Instalación y configuración del software AppServ<br> - Sección 4: Servidor Web<br> - Sección 5: JavaScript<br> - Sección 6: Estructura de sitio web, carpetas y archivos; Primer programa de JavaScript<br> - Sección 7: Sintaxis de JavaScript<br> - Sección 8: Funciones<br> - Sección 9: Acceder a los valores de los elementos<br> - Sección 10: Presentación de taller de fin de curso<br> - Sección 11: Desarrollo del proyecto de fin de curso"},
            {Nombre: "Curso básico de PHP",                                                               Link: "https://ude.my/UC-f5309172-12af-49b3-b7ee-4c96ec431bd6/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Entorno de desarrollo<br> - Sección 3: Introducción a PHP<br> - Sección 4: Variables y tipos de datos<br> - Sección 5: Operadores<br> - Sección 6: Sentencias condicionales<br> - Sección 7: Ciclos o Bucles<br> - Sección 8: Arrays<br> - Sección 9: Funciones<br> - Sección 10: Cookies<br> - Sección 11: Formularios<br> - Sección 12: Sesiones<br> - Sección 13: Conexión con MYSQL"},
            {Nombre: "Curso de Base de Datos PostgreSQL Server",                                          Link: "https://ude.my/UC-45774881-1be3-487a-9207-5a308210acae/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción"},
            {Nombre: "Curso de SQLite con Python",                                                        Link: "https://ude.my/UC-0cef04d7-11a2-4bc5-8cd1-b43068301cd9/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Entrando en materia <br> - Sección 3: Practica"},
            {Nombre: "SQL: Desde cero para principiantes (Linux)",                                        Link: "https://ude.my/UC-81a85e3c-e893-4d54-97e5-975686f44813/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Conceptos básicos de SQL <br> - Sección 3: Diseño de base de datos <br> - Sección 4: Consultas Avanzadas <br> - Sección 5: Termino del curso"},
            {Nombre: "Curso SQL - Consultas en SQL para principiantes + ChatGPT",                         Link: "https://ude.my/UC-867086af-e299-48e1-b056-d88759beda78/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción a MySQL y la sintaxis básica de consultas <br> - Sección 2: Consultas básicas <br> - Sección 3: Filtrando resultados de la consulta <br> - Sección 4: Limitando y ordenando resultados <br> - Sección 5: Trabajando con funciones de agregación <br> - Sección 6: Unión de tablas <br> - Sección 7: Consultas avanzadas <br> - Sección 8: Ejercicios de codificación <br> - Sección 9: Optimización de consultas <br> - Sección 10: Creación y consulta de bases de datos con ChatGPT <br> - Sección 11: Terminaste"},
            {Nombre: "Curso de Base de Datos MySQL Server",                                               Link: "https://ude.my/UC-2a0e5fb6-3aa4-4f0f-a00b-0a8873e68514/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Descarga e Instalación de MySQL Server <br> - Sección 3: Desarrollo del Entorno de trabajo en MySQL Workbench <br> - Sección 4: Desarrollo de nuestra Base de Datos, Tablas, Vistas, Procedimientos Almacenados <br> - Sección 5: Mantenimiento de datos a las tablas de MySQL <br> - Sección 6: Operadores y Funciones <br> - Sección 7: Creación de Vistas <br> - Sección 8: Trabajaremos con mayor detalle la Sentencia SQL SELECT <br> - Sección 9: Procedimientoa Almacenados <br> - Sección 10: Funciones <br> - Sección 11: Triggers"},
            {Nombre: "Curso Intensivo de MySQL: Aprende SQL desde Cero a Experto",                        Link: "https://ude.my/UC-ec84eb8f-41da-481d-a4e6-990e981aec9c/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Creando nuestra base de datos SQL <br> - Sección 3: Práctica Número 1 <br> - Sección 4: Práctica Número 2 <br> - Sección 5: Práctica Número 3 Red Social <br> - Sección 6: Práctica Número 4 bdparking"},
            {Nombre: "SQLite - Aprende bases de datos SQL en tiempo record",                              Link: "https://ude.my/UC-4a3a5126-a0d0-4471-90fa-55cf63401ed1/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Lenguaje SQL parte 1 <br> - Sección 3: Lenguaje SQL parte 2 <br> - Sección 4: Lenguaje SQL parte 3 <br> - Sección 5: Lenguaje SQL parte 4 <br> - Sección 6: Funciones <br> - Sección 7: Retos"},
            {Nombre: "Curso de Base de Datos MariaDB Server",                                             Link: "https://ude.my/UC-4b74f306-08c1-4d15-9528-0aa7886f331b/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Desarrollo del Entorno de trabajo en Heidi SQL <br> - Sección 3: Desarrollo de nuestra Base de Datos, Tablas y Vistas <br> - Sección 4: Operadores <br> - Sección 5: Funciones <br> - Sección 6: Vistas <br> - Sección 7: Cláusula WHERE en sentencia SQL <br> - Sección 8: Sentencia SQL SELECT aplicando más detalles <br> - Sección 9: Procedimientos Almacenados <br> - Sección 10: Crear Funciones <br> - Sección 11: Crear Disparadores o Triggers"},
            {Nombre: "SQL: Consultas básicas a complejas",                                                Link: "https://ude.my/UC-c067c969-f488-45db-98e1-d39dddf861e8/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: SELECT, DISTINCT, ORDER BY <br> - Sección 3: WHERE <br> - Sección 4: AND, OR, NOT <br> - Sección 5: IN <br> - Sección 6: BETWEEN <br> - Sección 7: LIKE <br> - Sección 8: INNER JOIN, LEFT JOIN, RIGHT JOIN <br> - Sección 9: COUNT, AVG, SUM, MAX, MIN <br> - Sección 10: GROUP BY <br> - Sección 11: HAVING <br> - Sección 12: Funciones útiles <br> - Sección 13: CASE <br> - Sección 14: SUBQUERIES <br> - Sección 15: VIEWS <br> - Sección 16: Consultas Multitablas <br> - Sección 17: INSERT INTO <br> - Sección 18: UPDATE <br> - Sección 19: ALTER TABLE <br> - Sección 20: Ejercicios Complementarios <br> - Sección 21: Terminaste"},
            {Nombre: "SQL: Creación de Bases de Datos (De cero a profesional)",                           Link: "https://ude.my/UC-2c20bbd0-2f57-4d21-9f08-d5eecaf383fe/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Lenguaje de definición de los datos <br> - Sección 3: Alter Table <br> - Sección 4: Lenguaje de manipulación de los datos <br> - Sección 5: Diseño de una base de datos <br> - Sección 6: Caso Practico: Base de datos de un cine <br> - Sección 7: Terminaste"},
            {Nombre: "Curso de Base de Datos SQLite",                                                     Link: "https://ude.my/UC-cbb62c00-9625-4188-a589-6e7ed86ebf74/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción"},
            {Nombre: "API REST con PHP y MYSQL",                                                          Link: "https://ude.my/UC-2e482ea0-050a-41a6-b83e-74165ce7ca76/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: creando nuestra api"},
            {Nombre: "Aprende SQL desde cero: ¡Curso con mas de 50 ejercicios! 2",                        Link: "https://ude.my/UC-2add6f57-7190-4bc8-8ea5-b1f085a86ec4/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Funciones útiles <br> - Sección 3: INSERT INTO <br> - Sección 4: UPDATE <br> - Sección 5: ALTER TABLE <br> - Sección 6: CASE <br> - Sección 7: Consultas Multitablas <br> - Sección 8: SUBQUERIES <br> - Sección 9: VIEWS <br> - Sección 10: Codigos del curso <br> - Sección 11: Terminaste"},
            {Nombre: "Curso SQL: Desde cero para principiantes",                                          Link: "https://ude.my/UC-42c39277-cdc9-4f47-b3ee-03eb9d606e06/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Introducción a SQL y Bases de Datos Relacionales <br> - Sección 3: Operaciones Básicas con SQL <br> - Sección 4: Operadores y Filtrado Avanzado <br> - Sección 5: Ordenamiento y Limitación de Resultados <br> - Sección 6: Funciones Agregadas y Agrupación de Datos <br> - Sección 7: Relaciones entre Tablas <br> - Sección 8: Trabajo con Fechas <br> - Sección 9: Funciones de Texto <br> - Sección 10: Funciones Matemáticas <br> - Sección 11: Buenas Prácticas y Optimización <br> - Sección 12: Terminaste"},
            {Nombre: "Arquitectura Web Profesional: PHP y MySQL con MVC",                                 Link: "https://ude.my/UC-fe0bf452-dce8-4387-9e41-652e36483b79/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: MVC Parte 1 <br> - Sección 3: MVC Parte 2"},
            {Nombre: "Crea una Api REST FULL completa con PHP NATIVO",                                    Link: "https://ude.my/UC-7cdd1dec-cb66-486c-b97e-752b64af7868/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: creando nuestra api rest con php nativo"},
            {Nombre: "Aprende Laravel paso a paso desde cero - De 0 a 100",                               Link: "https://ude.my/UC-ddc69e2a-2b89-4e9f-b473-3452eff4f622/",                       TextLink: "(Ver certificado en Udemy)",            Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Las Rutas <br> - Sección 3: Todo sobre Controladores <br> - Sección 4: Entendiendo los Middleware <br> - Sección 5: Vistas"},
        ]
    },
    {
        Ano: "2024",
        Cursos : [
            {Nombre: "Especialista en MS Excel",                                                          Link: "https://ude.my/UC-ad44ae35-6ae2-4165-bece-58c84f7b1221/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: TEMA 00 - INTRODUCCIÓN AL CURSO <br> - Sección 2: TEMA 01 - INTERFAZ Y CONCEPTOS <br> - Sección 3: TEMA 02 - FUNCIONES DEL MOUSE Y EL CURSOR <br> - Sección 4: TEMA 03 - FORMATOS <br> - Sección 5: TEMA 04 - TRABAJAR CON MÚLTIPLES HOJAS EN SIMULTÁNEO <br> - Sección 6: TEMA 05 - TIPOS DE DATOS <br> - Sección 7: TEMA 06 - GRUPO PORTAPAPELES <br> - Sección 8: TEMA 07 - ORDENAR <br> - Sección 9: TEMA 08 - FILTROS <br> - Sección 10: TEMA 09 - OPERADORES <br> - Sección 11: TEMA 10 - ERRORES EN MS EXCEL <br> - Sección 12: TEMA 11 - OPERACIONES MATEMÁTICAS <br> - Sección 13: TEMA 12 - INTRODUCCIÓN A LAS FUNCIONES <br> - Sección 14: TEMA 13 - FUNCIONES AGREGADORAS <br> - Sección 15: TEMA 14 - FUNCIONES MATEMÁTICAS Y ESTADÍSTICAS <br> - Sección 16: TEMA 15 - FUNCIONES DE FECHA Y HORA <br> - Sección 17: TEMA 16 - FUNCIONES DE TEXTO <br> - Sección 18: TEMA 17 - GRÁFICOS <br> - Sección 19: TEMA 18 - HERRAMIENTAS DEL GRUPO ESQUEMA <br> - Sección 20: TEMA 19 - AGREGACIONES ACUMULADAS <br> - Sección 21: TEMA 20 - OPERACIONES LÓGICAS <br> - Sección 22: TEMA 21 - FUNCIÓN SI <br> - Sección 23: TEMA 22 - FUNCIONES BUSCARV Y BUSCARH <br> - Sección 24: TEMA 23 - NOMBRES DEFINIDOS Y TABLAS <br> - Sección 25: TEMA 24 - SIGUIENTES PASOS"},
            {Nombre: "Excel Intermedio",                                                                  Link: "https://ude.my/UC-a277a4b7-292d-4ea8-8338-10b1aba15453/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Creación de gráficas básicas <br> - Sección 2: Editar Gráficos <br> - Sección 3: Insertar elementos gráficos <br> - Sección 4: Creación y manejo de las Tablas dinámicas <br> - Sección 5: Protección de las hojas de trabajo <br> - Sección 6: Funciones matemáticas y estadísticas <br> - Sección 7: A manera de conclusión"},
            {Nombre: "Curso Taller De Excel Desde Cero Hasta Avanzado",                                   Link: "https://ude.my/UC-df524b9f-9efb-48e9-99d0-942d03749e5f/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Introducción<br> - Capitulo 1<br> - Capitulo 2<br> - Capitulo 3<br> - Capitulo 4<br> - Capitulo 5<br> - Capitulo 6<br> - Capitulo 7<br> - Capitulo 8<br> - Capitulo 9"},
            {Nombre: "Megacurso de Bootstrap de Cero a Maestro",                                          Link: "https://ude.my/UC-3cfe2fba-853e-460d-938a-86ca06acc107/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Fundamentos <br> - Sección 3: Sistema de Rejilla <br> - Sección 4: Flexbox en Bootstrap <br> - Sección 5: Tipografía <br> - Sección 6: Utilidades <br> - Sección 7: Componentes CSS <br> - Sección 8: Widgets Javascript <br> - Sección 9: Proyecto 1 - Agencia Digital <br> - Sección 10: Proyecto 2 - Admin App <br> - Sección 11: Proyecto 3 - Mi Portafolio <br> - Sección 12: Siguiente Paso"},
            {Nombre: "Curso completo de HTML y CSS: Aprende Flexbox, Grid y BEM",                         Link: "https://ude.my/UC-d34c39a4-3e79-44b6-a1c7-452bf79ee864/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Primeros pasos en la Web <br> - Sección 3: Introducción a HTML <br> - Sección 4: Estructura de una página <br> - Sección 5: Etiquetas multimedia <br> - Sección 6: Introducción a CSS <br> - Sección 7: Posicionamiento de elementos - Clon de Google <br> - Sección 8: CSS Flexbox - Clon de Yahoo! <br> - Sección 9: Portafolio Perosonal - Proyecto completo desde cero con Flexbox <br> - Sección 10: CSS Grid <br> - Sección 11: CAFETERIA - Proyecto completo desde cero con Grid <br> - Sección 12: Responsive Web Design <br> - Sección 13: Desktop First para proyectos de Portafolio y Cafetería <br> - Sección 14: Landing Page LogiProX - Proyecto completo desde cero con Mobile Firts <br> - Sección 15: Fundamentos de BEM - Proyecto completo usando BEM <br> - Sección 16: Despliegue de Aplicaciones en Netlify"},
            {Nombre: "Máster en Diseño Web Para No Programadores 2024",                                   Link: "https://ude.my/UC-b3ae075c-8126-4e27-820a-2df4e06188e8/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Crea un sitio web con WordPress y ChatGPT <br> - Sección 2: Crea una tienda online con WordPress y ChatGPT <br> - Sección 3: Crea una blog con WordPress y ChatGPT <br> - Sección 4: Crea tu landing page con WordPress <br> - Sección 5: Crea tu tarjeta de presentación digital con WordPress"},
            {Nombre: "Máster en WordPress 2024, ¡Desde Cero Hasta Experto!",                              Link: "https://ude.my/UC-c1dc9333-805c-4059-a96b-a6defe206213/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Crea un sitio web con WordPress y ChatGPT <br> - Sección 2: Crea una tienda online con WordPress y ChatGPT <br> - Sección 3: Crea una blog con WordPress y ChatGPT <br> - Sección 4: Crea tu landing page con WordPress <br> - Sección 5: Crea tu tarjeta de presentación digital con WordPress"},
            {Nombre: "Máster en Elementor 2024, ¡Desde Cero Hasta Experto!",                              Link: "https://ude.my/UC-1e8a60b3-54d0-4445-9a52-576d5295e7ed/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Crea un sitio web con WordPress y Elementor en su versión gratuita <br> - Sección 2: Crea un sitio web con WordPress y Elementor en su versión PRO"},
            {Nombre: "Universidad de Elementor Pro, ¡Desde Cero Hasta Experto!",                          Link: "https://ude.my/UC-b28760cd-3e69-4b09-9f9b-581cf2584a58/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Crea un sitio web con WordPress y Elementor Hosting <br> - Sección 2: Crea un sitio web con WordPress y Elementor Pro"},
            {Nombre: "Máster en Comercio Electrónico con WordPress 2024",                                 Link: "https://ude.my/UC-aaedab27-2fb6-40c2-b89f-424d03dcd17c/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Crea tu tienda online con WordPress <br> - Sección 2: Crea tu página de ventas con WordPress"},
            {Nombre: "Cómo Crear un Embudo de Ventas con WordPress Desde Cero 2024",                      Link: "https://ude.my/UC-ee6f7568-a011-41aa-989f-7cb06d35b655/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Crea tu embudo de ventas con WordPress <br> - Sección 2: Crea una página de ventas con WordPress"},
            {Nombre: "Cómo Crear una Página web con WordPress y Elementor 2024",                          Link: "https://ude.my/UC-27c63f62-747d-4c36-986b-993b94e397f0/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿QUÉ APRENDERÁS EN ESTE CURSO? <br> - Sección 2: PASO 1: OBTENER UN DOMINIO Y HOSTING <br> - Sección 3: PASO 2: INSTALAR WORDPRESS Y EL CERTIFICADO SSL <br> - Sección 4: CREAR UN LOGOTIPO PARA TU SITIO WEB <br> - Sección 5: PASO 3: PERSONALIZAR EL DISEÑO DE TU SITIO WEB <br> - Sección 6: PASO 4: ADAPTAR TU SITIO WEB A DISPOSITIVOS MÓVILES <br> - Sección 7: PASO 5: MEJORAR EL DISEÑO DE TU SITIO WEB CON ELEMENTOR PRO"},
            {Nombre: "Cómo Crear una Landing Page con WordPress Desde Cero 2024",                         Link: "https://ude.my/UC-fa4dba1f-d8c8-4865-8b41-a4dd7a211f8d/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿QUÉ APRENDERÁS EN ESTE CURSO? <br> - Sección 2: PASOS PARA CREAR UNA LANDING PAGE CON WORDPRESS <br> - Sección 3: PASO 1: OBTENER UN DOMINIO Y HOSTING <br> - Sección 4: PASO 2: INSTALAR WORDPRESS Y EL CERTIFICADO SSL <br> - Sección 5: CREA UN LOGOTIPO PARA TU LANDING PAGE DE WORDPRESS <br> - Sección 6: PASO 3: PERSONALIZAR EL DISEÑO DE TU LANDING PAGE <br> - Sección 7: PASO 4: INTEGRAR TU LANDING PAGE DE WORDPRESS CON MAILERLITE <br> - Sección 8: PASO 5: MEJORAR EL DISEÑO DE TU LANDING PAGE CON ELEMENTOR PRO"},
            {Nombre: "Cómo Crear una Página Web con WordPress y Elementor PRO 2024",                      Link: "https://ude.my/UC-2b996ab7-2037-4061-bd59-456c9dd2fe66/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso? <br> - Sección 2: Pasos para crear tu sitio web con WordPress y Elementor PRO <br> - Sección 3: Paso 1: Obtener un dominio y hosting <br> - Sección 4: Paso 2: Instalar WordPress y el certificado SSL <br> - Sección 5: Paso 3: Obtener e instalar Elementor PRO <br> - Sección 6: Crea un logotipo para tu sitio web <br> - Sección 7: Paso 4: Crear el sitio web desde cero"},
            {Nombre: "Elementor Hosting: Cómo Crear una Página Web con WordPress",                        Link: "https://ude.my/UC-72255a3a-6228-468d-863b-803b6b6289a4/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso? <br> - Sección 2: Pasos para crear tu sitio web con WordPress y Elementor Hosting <br> - Sección 3: Paso 1: Contratar un plan de hosting en Elementor <br> - Sección 4: Paso 2: Configurar los ajustes necesarios para tu sitio web <br> - Sección 5: Crea un logotipo para tu sitio web <br> - Sección 6: Paso 3: Personalizar el diseño de tu sitio web con Elementor <br> - Sección 7: Paso 4: Configurar los formularios de tu sitio web"},
            {Nombre: "Elementor IA: Crea una Web con WordPress y Elementor 2024",                         Link: "https://ude.my/UC-03a37fff-71e5-4682-9a8a-a8d6960d4210/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso? <br> - Sección 2: Pasos para crear tu sitio web con WordPress, Elementor IA y Elementor Pro <br> - Sección 3: Paso 1: Contratar un plan de hosting en Elementor <br> - Sección 4: Crea un logotipo para tu sitio web <br> - Sección 5: Paso 2: Personalizar el diseño de tu sitio web <br> - Sección 6: Paso 3: Generar textos y contenidos con Elementor IA <br> - Sección 7: Paso 4: Configurar los formularios de tu sitio web"},
            {Nombre: "Elementor Kits: Crea una Página Web con Elementor Pro 2024",                        Link: "https://ude.my/UC-6b6c33cc-49e3-4fd7-be30-d194831f34c9/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso? <br> - Sección 2: Pasos para crear tu sitio web con WordPress, Elementor Kits y Elementor Pro <br> - Sección 3: Paso 1: Contratar un plan de hosting en Elementor <br> - Sección 4: Paso 2: Instalar una Plantilla de Elementor Kits <br> - Sección 5: Crea un logotipo para tu sitio web <br> - Sección 6: Paso 3: Personalizar el Diseño de tu Sitio Web <br> - Sección 7: Paso 4: Configurar los formularios de tu sitio web"},
            {Nombre: "Crea una Página Web con Elementor Pro y el Tema Hello 2024",                        Link: "https://ude.my/UC-b8ce9b08-b007-4812-9acf-7b69ecbb1eb5/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso? <br> - Sección 2: Pasos para crear tu sitio web con Elementor Pro y el Tema Hello <br> - Sección 3: Paso 1: Contratar un plan de hosting en Elementor <br> - Sección 4: Paso 2: Configurar los ajustes necesarios para tu sitio web <br> - Sección 5: Crea un logotipo para tu sitio web <br> - Sección 6: Paso 3: Personalizar el diseño de tu sitio web con Elementor <br> - Sección 7: Paso 4: Configurar los formularios de tu sitio web"},
            {Nombre: "Professional Certificate in Agile and SCRUM",                                       Link: "https://ude.my/UC-c8937e80-ed99-4b9f-a9e7-81a13cc25e25/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Introduction <br> - Sección 2: Waterfall vs Agile <br> - Sección 3: Agile Manifesto <br> - Sección 4: SCRUM Introduction <br> - Sección 5: SCRUM Theory <br> - Sección 6: SCRUM Values <br> - Sección 7: The SCRUM Team <br> - Sección 8: Scrum Artifacts and Commitments <br> - Sección 9: The Sprint <br> - Sección 10: Scaled Agile Framework (SAFe) <br> - Sección 11: Interactive Part, Next Steps and Answers to Questions"},
            {Nombre: "Cómo Usar el Creador de Sitios Web con IA de Hostinger 2024",                       Link: "https://ude.my/UC-a9d85819-41be-472b-8b02-a86a972faacb/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Crea una página web con el Creador de Sitios Web con IA de Hostinger <br> - Sección 2: Crea una tienda online con el Creador de Sitios Web con IA de Hostinger"},
            {Nombre: "Máster en Diseño Web con Inteligencia Artificial 2024",                             Link: "https://ude.my/UC-548491ba-6d70-4a37-a350-3d6e3f1ba968/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Crea tu página web con Inteligencia Artificial <br> - Sección 2: Crea tu blog con Inteligencia Artificial"},
            {Nombre: "Cómo Crear una Tienda Online con Inteligencia Artificial",                          Link: "https://ude.my/UC-79674aa4-326e-4822-a401-9bb169a898ca/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso? <br> - Sección 2: Pasos para crear una tienda online con Inteligencia Artificial <br> - Sección 3: Paso 1: Obtener un dominio y hosting en Hostinger <br> - Sección 4: Paso 2: Crear tu tienda online con Inteligencia Artificial <br> - Sección 5: Paso 3: Añadir Productos y Configurar los Métodos de Pago <br> - Sección 6: Paso 4: Adaptar la tienda online a dispositivos móviles"},
            {Nombre: "Cómo Crear una Página Web con Inteligencia Artificial 2024",                        Link: "https://ude.my/UC-f7543dbc-2b1f-487c-a973-62f563313d2e/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso? <br> - Sección 2: Pasos para crear tu sitio web con Inteligencia Artificial <br> - Sección 3: Paso 1: Obtener un dominio y hosting en Hostinger <br> - Sección 4: Paso 2: Crear tu sitio web con Inteligencia Artificial <br> - Sección 5: Paso 3: Personalizar tu sitio web desde cero <br> - Sección 6: Paso 4: Adaptar el sitio web a dispositivos móviles"},
            {Nombre: "Cómo Crear un Blog con Inteligencia Artificial 2024",                               Link: "https://ude.my/UC-bab64970-897a-4bdb-a2e9-c1aa2a4a6dab/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso? <br> - Sección 2: Pasos para crear tu blog con Inteligencia Artificial <br> - Sección 3: Paso 1: Obtener un dominio y hosting en Hostinger <br> - Sección 4: Paso 2: Crear tu blog con Inteligencia Artificial <br> - Sección 5: Crea un logotipo para tu blog <br> - Sección 6: Paso 3: Crear artículos con Inteligencia Artificial <br> - Sección 7: Paso 4: Personalizar el blog desde cero"},
            {Nombre: "Curso de Laravel 9 desde cero + APIs RESTFULL",                                     Link: "https://ude.my/UC-49096c66-ec03-4d1e-bed6-ac07f202f837/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción"},
            {Nombre: "Cómo Crear una Tienda Online con WordPress y WooCommerce",                          Link: "https://ude.my/UC-fdf9a7b2-486b-4133-989c-31d68ef3add5/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿QUÉ APRENDERÁS EN ESTE CURSO? <br> - Sección 2: PASOS PARA CREAR UNA TIENDA ONLINE CON WORDPRESS Y WooCommerce <br> - Sección 3: PASO 1: OBTENER UN DOMINIO Y HOSTING <br> - Sección 4: PASO 2: INSTALAR WORDPRESS Y EL CERTIFICADO SSL <br> - Sección 5: CREA UN LOGOTIPO PARA TU TIENDA ONLINE <br> - Sección 6: PASO 3: PERSONALIZAR EL DISEÑO DE TU TIENDA ONLINE <br> - Sección 7: PASO 4: AÑADIR PRODUCTOS Y CONFIGURAR LOS MÉTODOS DE PAGO <br> - Sección 8: PASO 5: MEJORAR EL DISEÑO DE TU TIENDA ONLINE CON ELEMENTOR PRO"},
            {Nombre: "Crea un MarketPlace Multi Vendedor con WordPress y Dokan",                          Link: "https://ude.my/UC-bfc72391-b93c-4719-8511-af66fd205d47/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso? <br> - Sección 2: Obtener un dominio y hosting <br> - Sección 3: Instalar una plantilla para tu Marketplace Multi Vendedor <br> - Sección 4: Instalar Dokan para crear tu Marketplace Multi Vendedor <br> - Sección 5: Crear las tiendas y los productos de tu Marketplace Multi Vendedor <br> - Sección 6: Instalar Dokan Pro para obtener funciones más avanzadas"},
            {Nombre: "Cómo Crear una Tienda Online con WordPress Desde Cero 2024",                        Link: "https://ude.my/UC-fe981e2a-2979-4ec4-8947-2bff4931891d/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿QUÉ APRENDERÁS EN ESTE CURSO? <br> - Sección 2: PASOS PARA CREAR TU TIENDA ONLINE CON WORDPRESS <br> - Sección 3: PASO 1: OBTENER UN DOMINIO Y HOSTING <br> - Sección 4: PASO 2: INSTALAR WORDPRESS Y EL CERTIFICADO SSL <br> - Sección 5: CREA UN LOGOTIPO PARA TU TIENDA ONLINE DE WORDPRESS <br> - Sección 6: PASO 3: PERSONALIZAR EL DISEÑO DE TU TIENDA ONLINE <br> - Sección 7: PASO 4: AÑADIR PRODUCTOS Y CONFIGURAR LOS MÉTODOS DE PAGO <br> - Sección 8: PASO 5: MEJORAR EL DISEÑO DE TU TIENDA ONLINE CON ELEMENTOR PRO"},
            {Nombre: "Construye una tienda en Shopify desde cero",                                        Link: "https://ude.my/UC-94345aed-6a80-45c7-8f45-11f904cffd80/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción a Shopify <br> - Sección 2: Panel de control y Configuración <br> - Sección 3: Otros ajustes <br> - Sección 4: Producto e Inventario <br> - Sección 5: Personalización del Tema <br> - Sección 6: Para terminar <br> - Sección 7: BONUS Section - Don't Miss Out"},
            {Nombre: "Cómo Crear una Página de Ventas Para Hotmart 2024",                                 Link: "https://ude.my/UC-e76f34f6-1b77-466f-9e14-66e3aeb399f4/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso? <br> - Sección 2: Pasos para crear una página de ventas para Hotmart <br> - Sección 3: Paso 1: Obtener un dominio y hosting <br> - Sección 4: Paso 2: Instalar WordPress y el certificado SSL <br> - Sección 5: Paso 3: Importar una página de ventas para tu dominio <br> - Sección 6: Paso 4: Personalizar la Página de Ventas Desde Cero <br> - Sección 7: Paso 5: Mejorar el diseño de tu página de ventas con Elementor PRO"},
            {Nombre: "Curso Básico de MailerLite: Crea Automatizaciones de Correo",                       Link: "https://ude.my/UC-1c015985-7f5f-4d44-9958-c2ab71089e40/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en este curso? <br> - Sección 2: Crea una cuenta de correo corporativa para registrarte en MailerLite <br> - Sección 3: ¿Qué es el Email Marketing y cómo funciona? <br> - Sección 4: Crea una automatización de correo con MailerLite"},
            {Nombre: "Cómo Crear una Campaña de Email Marketing Efectiva 2024",                           Link: "https://ude.my/UC-c2ccb2ff-d7db-4e5b-8352-f0534ea445fe/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Crea campañas de email marketing con Omnisend <br> - Sección 2: Crea campañas de email marketing con MailerLite"},
            {Nombre: "Cómo Crear una Tarjeta de Presentación Digital con WordPress",                      Link: "https://ude.my/UC-e586ec47-c465-49be-bc5c-8c887cc969f0/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿QUÉ APRENDERÁS EN ESTE CURSO? <br> - Sección 2: PASOS PARA CREAR TU TARJETA DE PRESENTACIÓN DIGITAL <br> - Sección 3: PASO 1: OBTENER UN DOMINIO Y HOSTING <br> - Sección 4: PASO 2: INSTALAR WORDPRESS Y EL CERTIFICADO SSL <br> - Sección 5: PASO 3: PERSONALIZAR EL DISEÑO DE TU TARJETA DE PRESENTACIÓN DIGITAL <br> - Sección 6: PASO 4: OPTIMIZAR LA TARJETA DE PRESENTACIÓN DIGITAL <br> - Sección 7: PASO 5: MEJORAR EL DISEÑO DE TU TARJETA DE PRESENTACIÓN CON ELEMENTOR PRO"},
            {Nombre: "Curso de HostGator 2024: El Hosting Ideal Para WordPress",                          Link: "https://ude.my/UC-aeec6a63-6a12-458e-a6da-a7b59449ca1d/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿QUÉ APRENDERÁS EN ESTE CURSO? <br> - Sección 2: OBTÉN UN DOMINIO Y HOSTING EN HOSTGATOR PARA CREAR TU SITIO WEB <br> - Sección 3: INSTALA APLICACIONES PARA TU SITIO WEB EN HOSTGATOR <br> - Sección 4: GESTIONA CUENTAS DE CORREO CORPORATIVAS EN HOSTGATOR <br> - Sección 5: PRINCIPALES FUNCIONES DEL ÁREA DE ADMINISTRACIÓN DE HOSTGATOR"},
            {Nombre: "Migra un Sitio Web de WordPress a otro Dominio o Hosting",                          Link: "https://ude.my/UC-ff3a2a15-856a-4c28-82cb-5ee042becc04/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: OBTÉN UN DOMINIO Y HOSTING PARA MIGRAR TU SITIO WEB DE HOSTING <br> - Sección 2: OPCIÓN 1: MIGRAR TU SITIO WEB CON EL PLUGIN ALL IN ONE WP MIGRATION <br> - Sección 3: OPCIÓN 2: MIGRAR TU SITIO WEB CON EL PLUGIN SITEGROUND MIGRATOR"},
            {Nombre: "WP Rocket 2024: Mejora la Velocidad de Carga en WordPress",                         Link: "https://ude.my/UC-c38654e3-8d8e-41c2-acad-20f21c280253/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en este curso? <br> - Sección 2: Pasos para mejorar la velocidad de tu sitio web con WP Rocket <br> - Sección 3: Paso 1: Obtener e instalar WP Rocket <br> - Sección 4: Paso 2: Configurar el plugin WP Rocket <br> - Sección 5: Paso 3: Realizar un test de velocidad de tu sitio web <br> - Sección 6: Obtén un hosting y dominio para crear tu sitio web"},
            {Nombre: "Excel VBA para principiantes: Aprenda Excel VBA paso a paso",                       Link: "https://ude.my/UC-2f98fc14-095c-40ab-bc9c-f9524e961e07/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Para comenzar <br> - Sección 2: Variables de programación de VBA <br> - Sección 3: Lógica condicional <br> - Sección 4: Cadenas y funciones de cadena <br> - Sección 5: Bucles de programación <br> - Sección 6: Programación de matrices <br> - Sección 7: Subs y funciones <br> - Sección 8: BONUS Section - Don't Miss Out"},
            {Nombre: "Los secretos de los líderes más exitosos del mundo",                                Link: "https://ude.my/UC-e3f13a70-345f-4a32-b455-7f180677714f/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Cómo hacer el entrenamiento <br> - Sección 3: Herramientas, estrategias y técnicas de liderazgo <br> - Sección 4: Habilidades de liderazgo <br> - Sección 5: Reflexiones finales sobre el liderazgo"},
            {Nombre: "Liderazgo efectivo: Acelera tu crecimiento laboral",                                Link: "https://ude.my/UC-28ee84c3-3e66-429f-ac20-623314fb22b0/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Módulo 1 - Pensamiento Crítico <br> - Sección 3: Módulo 2 - Gestión Efectiva de Reuniones de Trabajo <br> - Sección 4: Módulo 3 - Reporte ejecutivo de avance de trabajo <br> - Sección 5: Módulo 4 - Toma de decisiones estratégicas <br> - Sección 6: Módulo 5 - Etiqueta de Correo Electrónico y Comunicación Efectiva <br> - Sección 7: Módulo 6 - Delegación efectiva de tareas <br> - Sección 8: Módulo 7 - Comunicación clara y oportuna <br> - Sección 9: Módulo Extra"},
            {Nombre: "Modela Datos en MS EXCEL con POWER PIVOT!",                                         Link: "https://ude.my/UC-a1529ab0-4c22-45ac-902f-7779943b4001/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Bienvenido a Power Pivot <br> - Sección 3: Fuentes de Datos <br> - Sección 4: Modelo de Datos <br> - Sección 5: Cálculos con Power pivot <br> - Sección 6: Análisis de Datos <br> - Sección 7: Clase Extra!"},
            {Nombre: "Máster en WordPress y ChatGPT, ¡Desde Cero Hasta Experto!",                         Link: "https://ude.my/UC-74797228-0213-49c6-b39a-a8332dfe517c/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Crea un sitio web con WordPress y ChatGPT <br> - Sección 2: Crea una tienda online con WordPress y ChatGPT <br> - Sección 3: Crea una blog con WordPress y ChatGPT"},
            {Nombre: "Cómo Crear una Tienda Online con WordPress y ChatGPT 2024",                         Link: "https://ude.my/UC-8e993ef0-0134-478b-a1aa-7998c05e1418/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso? <br> - Sección 2: Pasos para crear tu tienda online con WordPress y ChatGPT <br> - Sección 3: Paso 1: Obtener un dominio y hosting <br> - Sección 4: Paso 2: Instalar WordPress y el certificado SSL <br> - Sección 5: Crea un logotipo para tu tienda online <br> - Sección 6: Paso 3: Personalizar el diseño de tu tienda online con la ayuda de ChatGPT <br> - Sección 7: Paso 4: Añadir productos y configurar los métodos de pago <br> - Sección 8: Paso 5: Mejorar el diseño de tu tienda online con Elementor PRO"},
            {Nombre: "Cómo Crear un Blog con WordPress y ChatGPT Desde Cero 2024",                        Link: "https://ude.my/UC-37294a8f-c0a5-44cf-a9b4-51970b181257/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso? <br> - Sección 2: Pasos para crear tu blog con WordPress y ChatGPT <br> - Sección 3: Paso 1: Obtener un dominio y hosting <br> - Sección 4: Paso 2: Instalar WordPress y el certificado SSL <br> - Sección 5: Crea un logotipo para tu blog <br> - Sección 6: Paso 3: Personalizar el diseño de tu blog con la ayuda de ChatGPT <br> - Sección 7: Paso 4: Adaptar el blog a dispositivos móviles <br> - Sección 8: Paso 5: Mejorar el diseño de tu blog con Elementor PRO"},
            {Nombre: "Cómo Crear una Academia Online con WordPress y Tutor LMS",                          Link: "https://ude.my/UC-473f63cd-65ad-47fc-b298-9e012fc5d8d4/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso? <br> - Sección 2: Pasos para crear tu academia online con WordPress y Tutor LMS <br> - Sección 3: Paso 1: Obtener un dominio y hosting <br> - Sección 4: Paso 2: Instalar WordPress y el certificado SSL <br> - Sección 5: Crea un logotipo para tu academia online <br> - Sección 6: Paso 3: Personalizar el diseño de tu academia online <br> - Sección 7: Paso 4: Añadir cursos y configurar los métodos de pago <br> - Sección 8: Paso 5: Mejorar el diseño de tu escuela online con Elementor PRO"},
            {Nombre: "Directorio de Plugins para WordPress 2024",                                         Link: "https://ude.my/UC-c1b60385-eaba-4fe9-9eb1-407772fabb4d/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso? <br> - Sección 2: Obtén un dominio y hosting para crear tu sitio web <br> - Sección 3: Plugins para migrar tu sitio web a otro dominio o hosting <br> - Sección 4: Plugins para mejorar la velocidad de carga de tu sitio web <br> - Sección 5: Plugins para mejorar la seguridad de tu sitio web <br> - Sección 6: Plugins para traducir temas y plugins de WordPress <br> - Sección 7: Plugins para optimizar el contenido de tu blog <br> - Sección 8: Plugins para mejorar el diseño de tu sitio web con Elementor <br> - Sección 9: Plugins para crear formularios de contacto en tu sitio web <br> - Sección 10: Plugins para mejorar el posicionamiento SEO de tu sitio web <br> - Sección 11: Plugins para integrar tu sitio web con una plataforma de Email <br> - Sección 12: Plugins para agregar funciones adicionales a tu tienda online <br> - Sección 13: Plugins para agregar funciones adicionales a tu sitio de membresía"},
            {Nombre: "Security Optimizer: Protege tu Sitio Web en WordPress 2024",                        Link: "https://ude.my/UC-e5311fa9-a762-4e86-827c-a74ee0a2fb24/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en este curso? <br> - Sección 2: Obtén un hosting y dominio para crear tu sitio web <br> - Sección 3: ¿Qué es Security Optimizer? <br> - Sección 4: Configuración del Plugin Security Optimizer"},
            {Nombre: "SiteGround Migrator: Migra tu Web con WordPress a SiteGround",                      Link: "https://ude.my/UC-380eb61a-5f1c-465c-8d3b-d5bbc6cc30bf/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en este curso? <br> - Sección 2: ¿Qué es SiteGround Migrator? <br> - Sección 3: Pasos para migrar tu sitio web de WordPress con SiteGround Migrator <br> - Sección 4: Paso 1: Obtener un dominio y hosting <br> - Sección 5: Paso 2: Añadir un nuevo sitio web al plan de hosting <br> - Sección 6: Paso 3: Realizar la migración del sitio web a SiteGround <br> - Sección 7: Paso 4: Instalar el certificado SSL al sitio web migrado <br> - Sección 8: Obtén un hosting y dominio para crear tu sitio web"},
            {Nombre: "Plugins de WordPress Para SiteGround",                                              Link: "https://ude.my/UC-978754a6-98d8-402b-bc09-30dccb9b78c4/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en este curso? <br> - Sección 2: Obtén un hosting y dominio para crear tu sitio web <br> - Sección 3: Migra tu sitio web de WordPress con el plugin SiteGround Migrator <br> - Sección 4: Protege tu sitio web de WordPress con el plugin Security Optimizer <br> - Sección 5: Mejora la velocidad de carga de tu sitio web con el plugin Speed Optimizer"},
            {Nombre: "All in One WP Migration: Migra tu Sitio Web de WordPress",                          Link: "https://ude.my/UC-dac37e9f-45c3-4699-bb29-a61a6fabb1a7/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: ¿Qué aprenderás en el curso? <br> - Sección 2: Obtén un dominio y hosting para migrar tu sitio web de WordPress <br> - Sección 3: ¿Qué es All in One WP Migration? <br> - Sección 4: Pasos para migrar tu sitio web de WordPress con All in One WP Migration <br> - Sección 5: Paso 1: Exportar tu sitio web de WordPress <br> - Sección 6: Paso 2: Importar tu sitio web de WordPress <br> - Sección 7: Paso 3: Actualizar las URLS de la Base de Datos"},
            {Nombre: "Cómo Crear un Blog con WordPress Para Principiantes 2024",                          Link: "https://ude.my/UC-1e2af1be-92e8-484c-a2c9-c72a1918ef0b/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Crea tu Primer Blog con WordPress <br> - Sección 2: Crea un Blog Completo con WordPress y ChatGPT"},
            {Nombre: "Cómo Crear Una Página Web Desde Cero Para Principiantes 2024",                      Link: "https://ude.my/UC-cae10a09-c15b-40dc-a1c9-aed627c27c0c/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Crea una página web con Wordpress y ChatGPT <br> - Sección 2: Crea una página web con el creador de sitios web de Hostinger <br> - Sección 3: Crea una página web con Wordpress y Elementor 1 <br> - Sección 4: Crea una página web con Wordpress y Elementor 2"},
            {Nombre: "El curso completo WordPress para debutar",                                          Link: "https://ude.my/UC-0b9046a8-e078-4d69-823c-2facf122f3e6/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción a WordPress <br> - Sección 2: Instalación de XAMPP & WordPress <br> - Sección 3: Sistema de gestión de contenido <br> - Sección 4: Personalización con plugins y temas <br> - Sección 5: Instalación de Elementor y Gestion des outils <br> - Sección 6: Conclusión"},
            {Nombre: "Curso de Android 14 con Kotlin: Intensivo y práctico",                              Link: "https://ude.my/UC-66f46ac4-cccd-4a95-9b26-b82eebd82b34/",TextLink: "(Ver certificado en Udemy)",          Contenido: "<strong>Temario: </strong><br> - Sección 1: Introducción<br> - Sección 2: Actualizaciones generales <br> - Sección 3: Primera app: Hola Kotlin <br> - Sección 4: Fundamentos de Kotlin <br> - Sección 5: POO en Kotlin <br> - Sección 6: Layouts <br> - Sección 7: Material Design Components <br> - Sección 8: Ciclo de vida en Android <br> - Sección 9: 1º Proyecto: Users SP <br> - Sección 10: 2º Proyecto: Stores <br> - Sección 11: 3º proyecto: Snapshots <br> - Sección 12: MVVM: Patrón de diseño <br> - Sección 13: API REST con Volley <br> - Sección 14: Coroutines <br> - Sección 15: Play Store <br> - Sección 16: 4º Proyecto: Coupons. Arquitectura recomendada <br> - Sección 17: Pruebas unitarias e instrumentadas para Android. <br> - Sección 18: Retrofit <br> - Sección 19: 5º Proyecto: Weather <br> - Sección 20: Jetpack Compose <br> - Sección 21: Extras <br> - Sección 22: Fin del curso, más material de android"},
            {Nombre: "Curso: Bases de GIT, GITHUB",                                                       Link: "https://cursos.desafiolatam.com/certificates/foip25war1",TextLink: "(Ver certificado en Desafio Latam)",  Contenido: ""},
            {Nombre: "Curso: Introducción al Desarrollo Web",                                             Link: "https://cursos.desafiolatam.com/certificates/9nncbxoeqs",TextLink: "(Ver certificado en Desafio Latam)",  Contenido: ""},
            {Nombre: "Curso: Introducción a los Algoritmos",                                              Link: "",                                                       TextLink: "(Curso gratuito en TodoCode)",        Contenido: ""},
            {Nombre: "Eloquent - ORM de Laravel",                                                         Link: "",                                                       TextLink: "(Curso gratuito en Udemy)",           Contenido: ""},
            {Nombre: "Livewire 3 desde Cero",                                                             Link: "",                                                       TextLink: "(Curso gratuito en Udemy)",           Contenido: ""},
            {Nombre: "Laravel avanzado",                                                                  Link: "",                                                       TextLink: "(Curso gratuito en Udemy)",           Contenido: ""},
            {Nombre: "Laravel intermedio",                                                                Link: "",                                                       TextLink: "(Curso gratuito en Udemy)",           Contenido: ""},
            {Nombre: "Curso Definitivo de JavaScript",                                                    Link: "",                                                       TextLink: "(Curso gratuito en Platzi)",          Contenido: ""},
            {Nombre: "Bases de datos en PHP 2023",                                                        Link: "",                                                       TextLink: "(Curso gratuito en EdTeam)",          Contenido: ""},
            {Nombre: "Desarrollo Web PHP POO, PDO, MySQL, JQuery Ajax",                                   Link: "",                                                       TextLink: "(Curso gratuito en WebTraining)",     Contenido: ""},
            {Nombre: "Curso Completo de PHP 8",                                                           Link: "",                                                       TextLink: "(Curso gratuito en EdTeam)",          Contenido: ""},
            {Nombre: "PHP Desde Cero",                                                                    Link: "",                                                       TextLink: "(Curso gratuito en EdTeam)",          Contenido: ""},
            {Nombre: "SQL Injection (SQLI) - Explicado desde Cero",                                       Link: "",                                                       TextLink: "(Curso gratuito en PortSwigger)",     Contenido: ""},
            {Nombre: "Curso MySQL, Curso Intensivo y Práctico",                                           Link: "",                                                       TextLink: "(Curso gratuito en EdTeam)",          Contenido: ""},
            {Nombre: "Estructuras de datos",                                                              Link: "",                                                       TextLink: "(Curso gratuito en Midulive)",        Contenido: ""},
            {Nombre: "Fundamentos esenciales de la programación",                                         Link: "",                                                       TextLink: "(Curso gratuito en Udemy)",           Contenido: ""},
            {Nombre: "Fundamentos de la POO",                                                             Link: "",                                                       TextLink: "(Curso gratuito en Udemy)",           Contenido: ""},
            {Nombre: "Fundamentos de la programación",                                                    Link: "",                                                       TextLink: "(Curso gratuito en Udemy)",           Contenido: ""},
        ]
    },
    {
        Ano: "2022",
        Cursos : [
            {Nombre: "Android y Kotlin desde cero a profesional",Link: "https://ude.my/UC-3a6ab591-fea2-415a-bea7-02fb2064c694/",TextLink: "(Ver certificado en Udemy)",Contenido: "<strong>Temario: </strong><br> - Manejo de lenguaje de programación Kotlin, diseño, creación y desarrollo de aplicaciones Android.<br> - Manejo del IDE Android Studio.<br> - Crear Aplicaciones para Android y entender como funcionan.<br> - Petición y administración de datos a servidores remotos.<br> - Base de datos SQLite<br> - Uso Firebase<br> - Creación de APIs<br> - Administración y ordenamiento de datos con listas y GridViews.<br> - Autenticación con Facebook<br> - Ubicación GPS y Google Maps.<br> - Autenticación Oauth.<br> - Encontrar errores y corregirlos."},
        ]
    },
    {
        Ano: "2021",
        Cursos : [
            {Nombre: "Arduino con Simulink",                                       Link: "https://roboticoss.com/producto/arduino-con-simulink/",  TextLink: "(Curso gratuito en Roboticoss)",  Contenido: "<strong>Temario: </strong><br> - Control PID<br> - Filtros<br> - Control de motores<br> - Entradas y digitales<br> - Entradas y analógicas."},
            {Nombre: "Introducción a Arduino, Sensores y Robótica",                Link: "",                                                       TextLink: "(Curso gratuito en Roboticoss)",  Contenido: "<strong>Temario: </strong><br> - Introducción Arduino<br> - Software de Trabajo y Materiales Básicos<br> - Introducción a Programación<br> - PWM: Modulación de ancho de Pulso/ AnalogWrite()/ Contadores FOR.<br> - Comunicación serial con otros programas (Puredata)<br> - Potenciómetros / Comunicación con Processing.<br> - Motores DC. Aplicación PWM<br> - Motores Servo. Aplicación PWM y Librerías #include<br> - Relés.<br> - Interacción entre Arduino y el mundo del sonido. Librerías locales, Función Tone"},
            {Nombre: "Arduino desde cero",                                         Link: "https://roboticoss.com/producto/arduino-desde-cero/",    TextLink: "(Curso gratuito en Roboticoss)",  Contenido: "<strong>Temario: </strong><br> - Conceptos básicos<br> - Entradas digitales<br> - Salidas digitales<br> - Entradas analógicas<br> - Escalamiento de señales analógicas<br> - Salidas digitales.<br> - Funciones de tiempo<br> - Tiempo de ejecución<br> - Múltiples tareas a la vez"},
            {Nombre: "Aprende Python desde cero",                                  Link: "https://ude.my/UC-4eedd131-2c5b-4de9-84e7-5fd009634a68/",TextLink: "(Ver certificado en Udemy)",      Contenido: "<strong>Temario: </strong><br> - Como empezar con Python<br> - Crear aplicaciones sencillas usando Python<br> - Entender la sintaxis de Python<br> - Reconocer las listas, tuplas y diccionarios en Python<br> - Como funciona la librería de interfaz gráfica llamada tkinter<br> - Flask, uno de los framework web realizados en python<br> - Tu primera aplicación de escritorio y tu primera aplicación web con python"},
            {Nombre: "Flutter, tu guía completa de desarrollo para IOS y Android", Link: "https://ude.my/UC-2d205455-96a4-4943-a6c4-61d35041add2/",TextLink: "(Ver certificado en Udemy)",      Contenido: "<strong>Temario: </strong><br> - Componentes básicos y avanzados de Flutter<br> - Firebase<br> - UX y UI<br> - Git y GitHub<br> - Google Auth<br> - Conocimientos básicos y avanzados del lenguaje Dart<br> - Como desarrollar una aplicación profesional en Flutter.<br> - Metodología profesional de trabajo."},
            {Nombre: "Programación de Android desde Cero con Java",                Link: "https://ude.my/UC-7a3ecca8-4c1f-4711-96f9-73ee8a06085c/",TextLink: "(Ver certificado en Udemy)",      Contenido: "<strong>Temario: </strong><br> - Programar y publicar sus Aplicaciones para Android<br> - Desarrollar y publicar sus Juegos para Android<br> - Crear apps con Material Design y Responsive Design<br> - Administración de Base de Datos para las apps<br> - Administrar el hardware de los dispositivos (cámara, memoria, sensores...)<br> - Administración de GPS, Google Maps, etc<br> - Corregir y debuggear problemas<br> - Control de Versiones con Git y GitHub para proyectos en equipos de trabajo<br> - Crear Aplicaciones con soporte Multilenguage"},
            {Nombre: "Taller seguridad informática- El lado oscuro de la red",     Link: "",                                                       TextLink: "(Curso gratuito en Udemy)",       Contenido: ""},
        ]
    },
    {
        Ano: "2020",
        Cursos : [
            {Nombre: "Hacking Wifi profesional",                                  Link: "",                                                                                       TextLink: "(Curso gratuito en Aprende64)",          Contenido: ""},
            {Nombre: "Seguridad Informática",                                     Link: "",                                                                                       TextLink: "(Curso gratuito en Udemy)",              Contenido: ""},
            {Nombre: "Hacking con Google",                                        Link: "",                                                                                       TextLink: "(Curso gratuito en Backtrack Academy)",  Contenido: ""},
            {Nombre: "Hacking 0 a 100",                                           Link: "",                                                                                       TextLink: "(Curso gratuito en Udemy)",              Contenido: ""},
            {Nombre: "SQL injection",                                             Link: "",                                                                                       TextLink: "(Curso gratuito en Backtrack Academy)",  Contenido: ""},
            {Nombre: "Kali Linux Pruebas de Penetración y Hacking Ético Básico",  Link: "https://www.udemy.com/course/kali-linux-pruebas-de-penetracion-y-hacking-etico-basico/", TextLink: "(Curso gratuito en Udemy)",              Contenido: "<strong>Temario: </strong><br> - Introducción<br> - Preparando un Entorno de Pruebas<br> - Introducción a Kali Linux<br> - Uso de Herramientas Básicas<br> - Conclusión"},
            {Nombre: "Análisis vulnerabilidades",                                 Link: "",                                                                                       TextLink: "(Curso gratuito en Backtrack Academy)",  Contenido: ""},
            {Nombre: "Manejo de Servidores Linux",                                Link: "",                                                                                       TextLink: "(Curso gratuito en DevCode)",            Contenido: ""},
            {Nombre: "Armado y Reparación de PC",                                 Link: "",                                                                                       TextLink: "(Curso gratuito en Udemy)",              Contenido: ""},
        ]
    },
    {
        Ano: "2019",
        Cursos : [
            {Nombre: "Seguridad Informática - Ciberseguridad", Link: "",TextLink: "(Curso gratuito en Udemy)",  Contenido: ""},
            {Nombre: "Hacking Ético Profesional",              Link: "",TextLink: "(Curso gratuito en Udemy)",  Contenido: ""},
        ]
    },
    {
        Ano: "2014",
        Cursos : [
            {Nombre: "Consultor Funcional Sap MM",                                  Link: "",                           TextLink: "(Cvosoft it academy)",                 Contenido: "<strong>Temario: </strong><br> - I.- Inducción a SAP<br> - Esta etapa incluye un análisis, del ERP SAP, con el objeto de nivelar los conocimientos de los participantes. (Duración 5 horas).<br> - II.- Contenido del Módulo<br> - A.- Centros de costos (Duración 20 Horas)<br> - A.1. Contabilidad de gestión de compra<br> - A.1.1. Proceso de compra<br> - A.1.2. Registro individual de materiales<br> - A.1.3. Datos Maestros de MM<br> - A.1.4. Documentos Logísticos<br> - A.1.5. Operaciones periódicas de MM<br> - A.1.6. Factura Logística<br> - A.1.7. Estrategias de liberación<br> - A.2. Gestión de Stock (Duración 5 Horas)<br> - A.2.1. Aprovisionamientos de Mercaderías<br> - A.2.2. Creación de centros logísticos<br> - A.2.3. Verificación de facturas Logísticas<br> - A.2.4. Disponibilidad<br> - A.2.5. Elementos de materiales<br> - B.- Comercio Exterior (Duración 5 Horas)<br> - B.1. Estrategia de cálculo para importaciones<br> - B.2. Cálculos aduaneros<br> - B.3. Contabilización factura de importación<br> - B.4. Liberación de pedidos<br> - B.5. Sistema de información<br> - C.- Proveedores (Duración 5 Horas)<br> - C.1. Evaluación de proveedores<br> - C.2. Devoluciones<br> - C.3. Compras de contrato Marco<br> - D.- MRP (Duración 5 Horas)<br> - D.1. Modelo de planificación de necesidades<br> - D.2.. Planificación v/s real en MM<br> - D.3.. Planificación en bodega y stock"},
            {Nombre: "Logística, Vamos a lo Real",                                  Link: "https://ude.my/UC-CVBD156Q/",TextLink: "(Ver certificado en Udemy)",           Contenido: "<strong>Temario: </strong><br> - Definiciones y conceptos de almacén y control de inventarios<br> - Proyecciones en las capacidades de bodegas a 5 años o mas<br> - Entender el LIS (Logistic Information System)<br> - Aplicar la reposición de inventarios con la combinación de los diferentes sistemas ya existentes<br> - Clasificación de los artículosde acuerdo con su margen de ganancia, variabilidad y volumen de venta<br> - Conocer las tecnologías de manipulación en almacen mas conocidas"},
            {Nombre: "How to install your own Sap Trial System",                    Link: "https://ude.my/UC-LV2AJFEN/",TextLink: "(Ver certificado en Udemy)",           Contenido: "<strong>Temario: </strong><br> - Give you your very own SAP development system<br> - Show you how to install SAP Systems"},
            {Nombre: "Como crear aplicaciones para Android",                        Link: "https://ude.my/UC-T6EYVY84/",TextLink: "(Ver certificado en Udemy)",           Contenido: "<strong>Temario: </strong><br> - Aprender como se diseñan las pantallas para los diferentes tipos de dispositivos ANDROID<br> - Programar aplicaciones para ANDROID"},
            {Nombre: "Cómo Programar para Emprendedores - JavaScript",              Link: "https://ude.my/UC-L5H3LZDC/",TextLink: "(Ver certificado en Udemy)",           Contenido: "<strong>Temario: </strong><br> - Aprende conceptos de Javascript que te permitirán crear pequeñas aplicaciones, programas y algoritmos empleando Javascript!<br> - Desarrolla algoritmos en Javascript que te permitirán trabajar tu capacidad de resolución de problemas en Javascript.<br> - Entiende cómo utilizar Javascript a través de la creación de programas y aplicaciones reales!"},
            {Nombre: "Visual Basic para oficinas",                                  Link: "https://ude.my/UC-CXYUZWH8/",TextLink: "(Ver certificado en Udemy)",           Contenido: "<strong>Temario: </strong><br> - Aprender a usar el entorno visual para crear pantallas de ingreso y presentación de datos<br> - Aprender de manera intuitiva como funciona el Modelo de Objetos del VBA<br> - Aprender a automatizar el Word creando cartas tipo y formularios<br> - Entender conceptos fundamentales como las variables, propiedades y eventos"},
            {Nombre: "Dominando Wordpress sin programación",                        Link: "https://ude.my/UC-R74FXYVC/",TextLink: "(Ver certificado en Udemy)",           Contenido: "<strong>Temario: </strong><br> - Utilización de la plataforma Wordpress al 100%.<br> - Construir un proyecto web propio desde cero.<br> - Administrar cualquier negocio digital o proyecto montado en WordPress.<br> - Creación de tus propias webs con estructura profesional.<br> - Dominar la instalación profesional de WordPress.<br> - Entender como generar y organizar el contenido web en WordPress.<br> - Trabajar con Temas en WordPress.<br> - Trabajar con Plugins en WordPress."},
            {Nombre: "Brackets & Edge Code - Fundamentos",                          Link: "https://ude.my/UC-E991Z25J/",TextLink: "(Ver certificado en Udemy)",           Contenido: "<strong>Temario: </strong><br> - Utilizar el editor de código de corchetes<br> - Agregar extensiones, editar código de manera más eficiente<br> - Mostrar vista previa en vivo del código mientras trabaja en él"},
            {Nombre: "Adobe Photoshop CS6 - Fundamentos",                           Link: "https://ude.my/UC-L8TWA1VC/",TextLink: "(Ver certificado en Udemy)",           Contenido: "<strong>Temario: </strong><br> - Diagnostica y mejora tus fotografías<br> - Dibuja y pinta sobre ellas<br> - Incluye texto y efectos<br> - Crea composiciones con varias imágenes<br> - Imprime o exporta tus imágenes para su utilización final"},
            {Nombre: "Instalación de symfony2",                                     Link: "https://ude.my/UC-4865WP7R/",TextLink: "(Ver certificado en Udemy)",           Contenido: "<strong>Temario: </strong><br> - Conocer cómo se compone y funciona este framework<br> - Descubrir cómo crear tu primera aplicación web<br> - Conocer los componentes esenciales que ofrece Symfony<br> - Conocimientos básicos de arquitectura de software por capas<br> - Crear un entorno de desarrollo local con Docker y Docker Compose<br> - Usar un archivo Makefile para lanzar tus servicios de forma fácil y rápida<br> - Crear tests unitarios y funcionales de tus aplicaciones"},
            {Nombre: "Introducción a CodeIgniter",                                  Link: "https://ude.my/UC-XUP23AH6/",TextLink: "(Ver certificado en Udemy)",           Contenido: "<strong>Temario: </strong><br> - CodeIgniter 3<br> - Manejo de Forms<br> - Query Builder, Manejo de consultas SQL y MySQL"},
            {Nombre: "Crea, Promociona y optimiza tu página web sin programación",  Link: "https://ude.my/UC-X3IDLUYV/",TextLink: "(Ver certificado en Udemy)",           Contenido: "<strong>Temario: </strong><br> - Cómo obtener un dominio y hosting para crear tu sitio web.<br> - Cómo instalar WordPress y un certificado SSL para tu dominio.<br> - Cómo crear sitios web profesionales con WordPress y Elementor.<br> - Cómo personalizar el diseño de tu sitio web de forma profesional.<br> - Cómo crear una página de blog para tu sitio web.<br> - Cómo crear un formulario de contacto para tu sitio web.<br> - Cómo agregar el chat de Facebook Messenger en tu sitio web."},
            {Nombre: "Analítica web con Google Analytics",                          Link: "",                           TextLink: "(Curso gratuito en Floqq)",            Contenido: "<strong>Temario: </strong><br> - 1. Definir los conceptos de analítica web y su vinculación con Google analytics.<br> - 1.1. Introducción a la analítica web.<br> - 1.1.1.La importancia de la analítica web.<br> - 1.1.2.Conceptos fundamentales.<br> - 1.1.3.Plan de analítica de datos.<br> - 1.1.4.Flujos de navegación.<br> - 1.1.5.Dimensiones y métricas.<br> - 1.1.6.Herramientas de analítica.<br> - 1.1.7.Google y la analítica digital.<br> - 2. Manejar la plataforma y herramientas de Google Analytics 4.<br> - 2.1. Creación y configuración de Google Analytics 4.<br> - 2.1.1.Creación de una cuenta.<br> - 2.1.2.Implementación del código de seguimiento (ver todas las formas).<br> - 2.1.3.Jerarquización de una cuenta.<br> - 2.1.4.Flujo de datos.<br> - 2.1.5.Datos demográficos y Google Signals.<br> - 2.1.6.Configuraciones relevantes.<br> - 2.1.7.Interfaz y página principal.<br> - 2.1.8.Comparaciones por fecha.<br> - 2.1.9.Comparaciones por condiciones.<br> - 3. Identificar los distintos tipos de informes que pone a disposición Google Analytics 4.<br> - 3.1. Informes de Google Analytics 4.<br> - 3.1.1.Informes predefinidos y personalizados.<br> - 3.1.2.Informes.<br> - 3.1.3.Resumen.<br> - 3.1.4.Tiempo Real.<br> - 3.1.5.Ciclo de vida.<br> - 3.1.6.Adquisición.<br> - 3.1.7.Interacción.<br> - 3.1.8.Monetización.<br> - 3.1.9.Retención.<br> - 3.1.10. Usuario.<br> - 3.1.11. Grupos demográficos.<br> - 3.1.12. Tecnología.<br> - 3.1.13. Biblioteca de informes.<br> - 3.1.14. Creación de nuevos informes.<br> - 3.1.15. Publicidad.<br> - 4. Emplear configuraciones avanzadas y herramientas complementarias en Google Analytics 4.<br> - 4.1. Configuraciones y herramientas complementarias.<br> - 4.1.1.Configuración de eventos.<br> - 4.1.2.Conversiones.<br> - 4.1.3.Creación de audiencias.<br> - 4.1.4.Definiciones personalizadas.<br> - 4.1.5.Debug View.<br> - 4.1.6.Administración avanzada de Analytics 4.<br> - 4.1.7.Gestión de usuarios.<br> - 4.1.8.Integraciones con Google Ads y Google Search Console.<br> - 4.1.9.Crear informes dinámicos con Data Studio.<br> - 4.1.10. Configurar Google Analytics con Google Tag Manager."},
            {Nombre: "Geolocalización con HTML5 y Google Maps",                     Link: "https://ude.my/UC-TXGSB6Y1/",TextLink: "(Ver certificado en Udemy)",           Contenido: "<strong>Temario: </strong><br> - Podrás implementar mapas interactivos de Google Maps<br> - Sabrás utilizar las funciones de geolocalización de HTML5"},
            {Nombre: "Bases de HTML5",                                              Link: "https://ude.my/UC-1DT9NHJG/",TextLink: "(Ver certificado en Udemy)",           Contenido: "<strong>Temario: </strong><br> - Crear plantillas Html desde cero<br> - Crear textos,encabezados en html<br> - Crear comentarios, listas, tablas<br> - Crear anclas e imágenes<br> - Crear formularios con html<br> - Crear videos y audios para plantillas html<br> - Crear plantillas con los estándares de html5"},
            {Nombre: "Cómo Programar para Emprendedores - HTML y CSS",              Link: "https://ude.my/UC-8VQFBNF7/",TextLink: "(Ver certificado en Udemy)",           Contenido: "<strong>Temario: </strong><br> - Al final del curso, serás capaz de crear páginas web completas utilizando HTML y CSS, los lenguajes base de la programación web<br> - Tendrás un montón de ejemplos útiles para repasar lo estudiado.<br> - Asentarás las bases para iniciar una carrera como desarrollador web.<br> - Puedes empezar a ganar dinero con sólo unas horas de aprendizaje."},
            {Nombre: "Desarrollo de WebApps en HTML5, CSS y Javascript",            Link: "",                           TextLink: "(Universidad Politécnica de Madrid)",  Contenido: ""},
            {Nombre: "Aprende MySQL sin dolor",                                     Link: "https://ude.my/UC-LC7CYM8K/",TextLink: "(Ver certificado en Udemy)",           Contenido: "<strong>Temario: </strong><br> - Comandos de SQL<br> - Términos básicos de bases de datos, tipos de columnas y conceptos generales<br> - Crear base de datos, una tabla, insertar un registro, importar datos desde un archivo, importar datos desde Excel, actualizar y borrar registros.<br> - Estructura de sentencias SELECT, WHERE, ORDER BY, GROUP BY, HAVING, LIMIT, etc.<br> - Manejo de fechas con las funciones básicas de MySQL<br> - Concatenar tablas con JOIN<br> - Modificar tablas con ALTER TABLE"},
        ]
    },
    {
        Ano: "2013",
        Cursos : [
            {Nombre: "Primeros auxilios",                    Link: "https://raw.githubusercontent.com/tenshi98/tenshi98/refs/heads/main/Certificados%20de%20estudios/Taller%20de%20Primeros%20auxilios.png", TextLink: "(Inacap)",                     Contenido: ""},
            {Nombre: "Prevención de Incendios",              Link: "https://raw.githubusercontent.com/tenshi98/tenshi98/refs/heads/main/Certificados%20de%20estudios/Prevenci%C3%B3n%20de%20Incendios.png",  TextLink: "(Inacap)",                     Contenido: ""},
            {Nombre: "Especialista en Microsoft Excel 2010", Link: "",                                                                                                                                       TextLink: "(Diplomados en Tecnologías)",  Contenido: "<strong>Temario: </strong><br> - Matrices y referencias externas<br> - Listas<br> - Filtros y tablas<br> - Subtotales<br> - Trabajo con fórmulas<br> - Temas avanzados sobre gráficos<br> - Acceso a datos externos (I)<br> - Acceso a datos externos (II)<br> - Tablas y gráficos dinámicos<br> - Análisis de datos y macros<br> - Plantillas y vistas<br> - Colaborar con otros usuarios"},
            {Nombre: "Autocad",                              Link: "https://raw.githubusercontent.com/tenshi98/tenshi98/refs/heads/main/Certificados%20de%20estudios/Autocad.png",                           TextLink: "(AulaFormadores)",             Contenido: "<strong>Temario: </strong><br> - 1. ¿QUE ES AUTOCAD?<br> - 2. LA INTERFAZ DE PANTALLA DE AUTOCAD<br> - 3. UNIDADES Y COORDENADAS<br> - 4. PARAMETROS BASICOS DE DIBUJO<br> - 5. GEOMETRIA DE LOS OBJETOS BASICOS<br> - 6. OBJETOS COMPUESTOS<br> - 7. PROPIEDADES DE LOS OBJETOS<br> - 8. TEXTO<br> - 9. REFERENCIA A OBJETOS<br> - 10. RASTREO DE REFERENCIA A OBJETOS<br> - 11. RASTREO POLAR<br> - 12. RESTRICCIONES PARAMETRICAS<br> - 13. NAVEGACION 2D<br> - 14. ADMINISTRACION DE VISTAS<br> - 15. EL SISTEMA DE COORDENADAS PERSONALES<br> - 16. METODOS DE SELECCION<br> - 17. EDICION SIMPLE<br> - 18. EDICION AVANZADA<br> - 19. PINZAMIENTOS<br> - 20. SOMBREADOS, DEGRADADOS Y CONTORNOS<br> - 21. LA PALETA PROPIEDADES<br> - 22. CAPAS<br> - 23. BLOQUES<br> - 24. REFERENCIAS EXTERNAS<br> - 25. RECURSOS EN DIBUJOS<br> - 26. CONSULTAS<br> - 27. ACOTACION<br> - 28. NORMAS CAD<br> - 29. DISEÑO DE IMPRESION<br> - 30. CONFIGURACION DE LA IMPRESION<br> - 31. AUTOCAD E INTERNET<br> - 32. CONJUNTO DE PLANOS<br> - 33. EL ESPACIO MODELADO EN 3D<br> - 34. SCP EN 3D<br> - 35. VISUALIZACION EN 3D<br> - 36. OBJETOS 3D<br> - 37. SOLIDOS<br> - 38. SUPERFICIES<br> - 39. MALLAS<br> - 40. MODELIZADO<br> - 41. ¿QUE SIGUE?"},
            {Nombre: "3D Studio Max",                        Link: "https://raw.githubusercontent.com/tenshi98/tenshi98/refs/heads/main/Certificados%20de%20estudios/3D%20Studio%20Max.png",                 TextLink: "(AulaFormadores)",             Contenido: "<strong>Temario: </strong><br> - Curso para Diseño y Perspectivas Arquitectónicas."},
        ]
    },
    {
        Ano: "2012",
        Cursos : [
            {Nombre: "Visual Studio.Net",                     Link: "",                                                                                                                                                              TextLink: "(Universidad Cibernética de México)",  Contenido: "<strong>Temario: </strong><br> -  Parte 1 <br> -  Parte 2 - Variables y tipos de datos <br> -  Parte 3 <br> -  Parte 4 <br> -  Parte 5 <br> -  Parte 6 <br> -  Parte 7 <br> -  Parte 8 <br> -  Parte 9 <br> -  Parte 10 <br> -  Parte 11 <br> -  Parte 12 - Ciclo For<br> -  Parte 13 - Ciclos Do While<br> -  Parte 14 <br> -  Parte 15 - Menustrip <br> -  Parte 16 - TabControl<br> -  Parte 17 - Funciones sin parámetros <br> -  Parte 18 - Funciones con parámetros <br> -  Parte 19 - Evento clic del mouse <br> -  Parte 20 - Evento KeyPress de Textbox <br> -  Parte 21 - Función para recibir solo números <br> -  Parte 22 - Función para recibir solo caracteres <br> -  Parte 23 - Función de comparación de textos <br> -  Parte 24 - <br> -  Parte 25 - Conexión a bases de datos <br> -  Parte 26 - DataReader <br> -  Parte 27 - DataGridView <br> -  Parte 28 - Insertar Registros <br> -  Parte 29 - Actualizar registros <br> -  Parte 30 - Eliminar Registros <br> -  Parte 31 - Verificar para actualizar <br> -  Parte 32 - Validación para eliminar <br> -  Visual Basic .NET: Despedida del curso y ComboBox con Base de Datos"},
            {Nombre: "Programación PHP",                      Link: "https://raw.githubusercontent.com/tenshi98/tenshi98/refs/heads/main/Certificados%20de%20estudios/Programaci%C3%B3n%20PHP.png",                                  TextLink: "(AulaFormadores)",                     Contenido: "<strong>Temario: </strong><br> - Objetivo 1: Comprender la importancia de PHP en la programación.<br> - Objetivo 2: Utilizar las variables y operadores.<br> - Objetivo 3: Utilizar los condicionales y ciclos.<br> - Objetivo 4: Utilizar las estructuras de datos.<br> - Objetivo 5: Trabajar con la programación orientada a objetos."},
            {Nombre: "Diseño y administración de sitios Web", Link: "https://raw.githubusercontent.com/tenshi98/tenshi98/refs/heads/main/Certificados%20de%20estudios/Dise%C3%B1o%20y%20administraci%C3%B3n%20de%20sitios%20Web.png",TextLink: "(Digitever)",                          Contenido: "<strong>Temario: </strong><br> - Diseño y administración de sitios web<br> - Edición de fotografía<br> - Animaciones<br> - Blogs<br> - Incorporación a redes sociales<br> - Comercio electrónico<br> - Optimización en buscadores"},
            {Nombre: "Ingles Intermedio",                     Link: "",                                                                                                                                                              TextLink: "(World Training Center Santiago)",     Contenido: ""},
            {Nombre: "SQL Server 2005",                       Link: "",                                                                                                                                                              TextLink: "(Instituto Profesional La Araucana)",  Contenido: "<strong>Temario: </strong><br> - 1. Diseño y programación.<br> - 1.1. Instalación.<br> - 1.2. Configurar la instalación.<br> - 1.3. Crear bases de datos.<br> - 1.4. Tablas.<br> - 1.5. Relaciones.<br> - 1.6. Propiedades de tabla.<br> - 1.7. Índices.<br> - 1.8. El lenguaje SQL (I).<br> - 1.9. El lenguaje SQL (II).<br> - 1.10. El lenguaje SQL (III).<br> - 1.11. Vistas.<br> - 1.12. Procedimientos almacenados (I).<br> - 1.13. Procedimientos almacenados (II).<br> - 1.14. Procedimientos almacenados (III).<br> - 1.15. Funciones definidas por el usuario.<br> - 1.16. Desencadenadores (triggers).<br> - 1.17. Integración CLR.<br> - 2. Administración.<br> - 2.1. Propiedades de servidor y de base de datos.<br> - 2.2. Esquemas.<br> - 2.3. Seguridad (I).<br> - 2.4. Seguridad (II).<br> - 2.5. Copias de seguridad."},
        ]
    },
    {
        Ano: "2011",
        Cursos : [
            {Nombre: "Desarrollo ABAP con Sap Netweaver",                                 Link: "https://raw.githubusercontent.com/tenshi98/tenshi98/refs/heads/main/Certificados%20de%20estudios/Desarrollo%20ABAP%20con%20SapNetweaver.png",                                            TextLink: "(DuocUC)",        Contenido: "<strong>Temario: </strong><br> - Introducción a SAP y Fundamentos ABAP<br>¿Qué es un sistema ERP?<br>¿Qué es SAP?<br>¿Qué es ABAP?<br>Login al sistema SAP, Transacciones Principales ABAP.<br>Navegación en el entorno de desarrollo ABAP.<br>El editor de ABAP y sus módulos.<br>Estructura de un programa.<br>Tipos de datos.<br>Declaración y proceso de datos.<br>Pantalla de selección.<br>Expresiones lógicas.<br>Instrucciones de Control de proceso.<br> - Diccionario de Datos y Open SQL<br>Tablas.<br>Elementos de datos.<br>Dominios.<br>Estructuras.<br>Vistas.<br>Índices.<br>Ayudas para búsqueda.<br>Programación SQL avanzada.<br>Instrucciones de modificación de BB.DD.<br> - Procesamiento de datos, modularización, reporting<br>Proceso de volúmenes grandes de datos: tablas internas.<br>Sentencias de salidas de reports.<br>Modularización.<br>Biblioteca de funciones.<br>Funciones RFC.<br>ALVs.<br>Debugging.<br> - Fundamentos de Workbench ABAP<br>Introducción a SAP y al Workbench de ABAP.<br>Elementos básicos del lenguaje SAP - ABAP.<br>Aprende a trabajar con el debugger de SAP - ABAP.<br>Modularización en ABAP.<br>Objetos de datos complejos.<br>Business Application Programming Interfaces (BAPI´s).<br>Modelado y obtención de datos.<br>Informe ABAP clásico.<br>Visor de listas ABAP (ALV).<br>Herramientas de análisis de programa.<br>Llamadas de programa y la gestión de memoria.<br>ABAP Open SQL.<br>Tablas en SAP - ABAP.<br>Diccionario de datos ABAP.<br>Rendimiento de tablas.<br>Dependencias de objectos del diccionario de datos ABAP.<br>Vistas y vistas de actualización.<br>Ayudas para la búsqueda.<br>Pantallas de selección.<br>La interfaz del programa.<br>Gestión de pantallas de error.<br>Subscreens.<br>Smartforms.<br> - Programación avanzada en ABAP<br>Introducción a la programación orientada a objetos.<br>Herencias y casting.<br>Eventos orientados a objetos.<br>Objetos de Repository orientados a objetos.<br>Patrónes de diseño orientados a objetos.<br>Tratamiento de excepciones orientadas a objetos.<br>Llamadas de programa y gestión de memoria.<br>Programación dinámica.<br> - Conceptos de Workbench de ABAP<br>Ajuste del estándar<br>Exits de cliente<br>Ampliaciones: Exits y BADIS.<br>WebDynpro<br>Implicaciones de SAP HANA en la programación ABAP."},
            {Nombre: "Normativas sanitarias y ambientales en la industria de alimentos",  Link: "https://raw.githubusercontent.com/tenshi98/tenshi98/refs/heads/main/Certificados%20de%20estudios/Normativas%20sanitarias%20y%20ambientales%20en%20la%20industria%20de%20alimentos.png",  TextLink: "(GCL Capacita)",  Contenido: "<strong>Temario: </strong><br> - De acuerdo con este escenario, GCL-Fundación Chile, entrega las herramientas para lograr la mejora continua de las personas y por ende de las empresas. Para ello, dicha empresa realizará diversas capacitaciones durante el año, las cuales se enfocan principalmente a la industria alimentaria."},
        ]
    },
    {
        Ano: "2010",
        Cursos : [
            {Nombre: "Herramientas computacionales para la administración y planificación de la producción", Link: "",                                                                                                                                            TextLink: "(Usach)",                             Contenido: ""},
            {Nombre: "Herramientas de producción limpia",                                                    Link: "https://raw.githubusercontent.com/tenshi98/tenshi98/refs/heads/main/Certificados%20de%20estudios/Herramientas%20de%20Produccion%20Limpia.png",TextLink: "(GCL Capacita)",                      Contenido: "<strong>Temario: </strong><br> - La actividad está dirigida a profesionales y técnicos de la industria de alimentos, y tiene por objetivo que los participantes puedan establecer las implicancias de la producción más limpia y distinguir los mecanismos existentes para la implementación de acuerdo con las necesidades de la empresa.<br> - Entre los contenidos que se abordarán, destacan las herramientas de gestión ambiental, los utensilios para realizar producción limpia y los mecanismos que apoyan el fomento de este tipo de producción."},
            {Nombre: "Excel 2007 intermedio",                                                                Link: "https://raw.githubusercontent.com/tenshi98/tenshi98/refs/heads/main/Certificados%20de%20estudios/excel%202007%20intermedio.png",              TextLink: "(Deluxe Frances Capacitación Ltda)",  Contenido: "<strong>Temario: </strong><br> - Funciones y herramientas esenciales para manejar datos.<br> - Usar Excel creando tablas, gráficos y reportes.<br> - Fórmulas y funciones de Excel.<br> - Funciones financieras y estadísticas de Excel.<br> - Crear Macros, para automatizar procesos complejos y reducir el tiempo y esfuerzo invertido en tareas repetitivas.<br> - Crear Dashboards interactivos y personalizados para visualizar información en tiempo real"},
            {Nombre: "Access 2007 intermedio",                                                               Link: "https://raw.githubusercontent.com/tenshi98/tenshi98/refs/heads/main/Certificados%20de%20estudios/access%202007%20intermedio.png",             TextLink: "(Deluxe Frances Capacitación Ltda)",  Contenido: "<strong>Temario: </strong><br> - Serás capaz de crear una Base de Datos completamente funcional desde cero.<br> - Podrás crear, diseñar los distintos objetos: Tablas, Consultas (Básicas y Avanzadas), Formularios<br> - Sabrás diseñar Tablas, Subtablas, Consultas de Selección y de Acción.<br> - Sabrás cómo Importar hojas de cálculo de Excel en Access"},
        ]
    },
    {
        Ano: "2009",
        Cursos : [
            {Nombre: "Control y Planificación de la Producción",Link: "",TextLink: "(Usach)",  Contenido: "<strong>Temario: </strong><br> - Aplicar los parámetros y variables del programa de producción a casos de estudio y situaciones cotidianas observadas en producción.<br> - Aplicar el herramientas de estandarización a la medición del trabajo, operaciones productivas, tasas de producción y variables relacionadas.<br> - Elaborar un programa de producción discriminando entre un conjunto de reglas de priorización.<br> - Comprender los principios que rigen la Planificación del Requerimiento de Materiales para la Producción (MRP) como motor de los Sistemas MPC.<br> - Relacionar modelos de programación de producción con sus correspondientes sistemas de producción<br> - Evaluar la caracterización de un sistema de producción analizando la calidad de los resultados obtenidos."},
        ]
    },
    {
        Ano: "2006",
        Cursos : [
            {Nombre: "Armado y Configuración de PC",Link: "",TextLink: "(Instituto Ralum)",  Contenido: ""},
        ]
    },
    {
        Ano: "2005",
        Cursos : [
            {Nombre: "Access y Excel 2003 avanzado",                   Link: "",TextLink: "(Instituto Ralum, Puente Alto)",  Contenido: ""},
            {Nombre: "Multiplicador TPM - Gestión de mejora enfocada", Link: "",TextLink: "(Viña Concha y Toro)",            Contenido: ""},
        ]
    },
];

/***********************************************/
var estudios = [
    {Fechas: "2012 - 2014", Colegio: "Uniacc",                                                               Titulo: "Ingeniería en Informática"},
    {Fechas: "1999 - 2002", Colegio: "Colegio Politécnico Particular Eyzaguirre<br/>Egresado como Contador", Titulo: "Enseñanza Media"},
    {Fechas: "1991 - 1998", Colegio: "Escuela Domingo Matte Mesías",                                         Titulo: "Enseñanza Básica"},
];

/***********************************************/
var experiencia = [
    {
        Fechas:      "Junio 2016 - Presente",
        Empresa:     "Exilon 360 SPA - Crosstech - Simplytech",
        Puesto:      "FullStack Developer",
        Descripcion:
                    "•	Creación de plataforma de administración de equipos, clientes y contratos."
                    + "<br/>•	Implementación de sistema telemetría y geolocalización GPS en tiempo real basado en tecnología propia (placas Arduino y sensores GPS)."
                    + "<br/>•	Implementación de sistema mediciones en tiempo real basado en tecnología propia (placas Arduino y sensores de temperatura, niveles de flujo, tensión eléctrica, etc.)."
                    + "<br/>•	Implementación de sistema de notificaciones masivas a través de la API de WhatsApp Business."
                    + "<br/>•	Implementación de sistema de notificaciones de correo masivas a través del servicio de correos del servidor."
                    + "<br/>•	Implementación de gráficos simples utilizando la librería charts.js."
                    + "<br/>•	Implementación de gráficos de mayor complejidad utilizando la librería plotly.js."
                    + "<br/>•	Implementación de Crones para el envío de informes personalizados a los distintos usuarios de cada cliente basado en los permisos de los equipos asignados."
                    + "<br/>•	Implementación de mapas dinámicos a través de la API de Google Maps, para la visualización de datos de medición y/o telemetría (delimitación de campos de arado, niveles de áreas fumigadas, ruta de tractores u otros vehículos, etc.)."
                    + "<br/>•	Implementación de la librería PHP ML para la previsión de datos (principalmente meteorológicos, para dar aviso mediante correo y/o WhatsApp antes de una helada)."
                    + "<br/>•	Implementación exportación de datos (PDF, Excel, Word, Xml)."
                    + "<br/>•	Implementación importación de datos masivos (CVS o XML)."
                    + "<br/>•	Implementación de facturación electrónica a través de la API de LibreDTE."
                    + "<br/>•	Creación de APP para Android utilizando Android Studio."
                    + "<br/>•	Creación de Aplicaciones para Windows utilizando Visual Studio."
                    ,
        proyectos : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma Gesti%C3%B3n Modular",  Nombre: "Creación plataforma Gestión Modular"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma Agropraxis",            Nombre: "Creación plataforma Agropraxis"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma Aguas EAPEC",           Nombre: "Creación plataforma Aguas EAPEC"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP Busafe",                       Nombre: "Creación APP Busafe"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP appCargo",                     Nombre: "Creación APP appCargo"},
            {Link: "https://github.com/tenshi98/proyectos_visual_studio/tree/main/CrossCrane",                Nombre: "Creación APP CrossCrane"},
            {Link: "https://www.simplytech.cl/",                                                              Nombre: "Creación sitio web Simplytech"},
        ]
    },
    {
        Fechas:      "Noviembre 2024 - Presente",
        Empresa:     "Servicios Electrónicos S.A. (Freelance)",
        Puesto:      "FullStack Developer",
        Descripcion:
                    "•	Creación y desarrollo de la plataforma de Bienestar Inacap enfocada en la administración de socios, sus préstamos y bonificaciones."
                    + "<br/>•	Implementación de sistema de notificaciones masivas."
                    + "<br/>•	Implementación exportación de datos (PDF, Excel, Word)."
                    ,
        proyectos : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma Bienestar Inacap",Nombre: "Creación plataforma Bienestar Inacap"},
        ]
    },
    {
        Fechas:      "Noviembre 2024 - Presente",
        Empresa:     "Deimos Corp. (Freelance)",
        Puesto:      "FullStack Developer",
        Descripcion:
                    "•	Diseño, maquetación y programación de sitios web."
                    + "<br/>•	Diseño y retoque de imágenes, portadas y otras artes."
                    + "<br/>•	Implementación de SEO y SEM en los sitios.",
        proyectos : [
            {Link: "https://web.deimoscorp.cl/",  Nombre: "Creación sitio web Deimos Corp"},
        ]
    },
    {
        Fechas:      "Noviembre 2022 - Presente",
        Empresa:     "Polz Asociados. (Freelance)",
        Puesto:      "FullStack Developer",
        Descripcion:
                    "•	Creación de plataforma Terranía (plataformas de administración, compradores, vendedores, ejecutivos, corredores)."
                    + "<br/>•	Creación plataforma Somos Teatro (plataformas de administración, compañías de teatro y compradores)."
                    + "<br/>•	Implementación de sistema de notificaciones masivas a través de la API de WhatsApp Business."
                    + "<br/>•	Implementación de sistema de notificaciones de correo masivas a través de la API de Brevo."
                    + "<br/>•	Implementación de gráficos simples utilizando la librería charts.js."
                    + "<br/>•	Implementación exportación de datos (PDF, Excel, Word)."
                    + "<br/>•	Implementación importación de datos masivos (CVS o XML)."
                    + "<br/>•	Implementación de mapas dinámicos a través de la API de Google Maps, para la visualización de la ubicación de los terrenos."
                    ,
        proyectos : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma Terrania",        Nombre: "Creación plataforma Terrania"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma Somos Teatro",    Nombre: "Creación plataforma Somos Teatro"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma Vendo mi Campo",  Nombre: "Creación Plataforma Vendo mi Campo"},
            {Link: "https://casascolmena.cl/",                                                          Nombre: "Creación sitio web Casas Colmena"},
            {Link: "https://web.lomasdelambert.cl/",                                                    Nombre: "Creación sitio web Lomas de Lambert"},
            {Link: "https://web.terrania.cl/",                                                          Nombre: "Creación sitio web Terrania"},
            {Link: "https://web.somosteatro.cl/",                                                       Nombre: "Creación sitio web Somos Teatro"},
        ]
    },
    {
        Fechas:      "Noviembre 2013 - Junio 2023",
        Empresa:     "Simyl S.A. (Freelance)",
        Puesto:      "FullStack Developer",
        Descripcion: "Actualización y mantención de las Plataformas Mantenlubric y Enap-Metro, implementando diversas mejoras y nuevas transacciones a estas plataformas.",
        proyectos : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma Mantenlubric",Nombre: "Mantención Plataforma Mantenlubric"},
        ]
    },
    {
        Fechas:      "Junio 2020 - Noviembre 2023",
        Empresa:     "Aktion. (Freelance)",
        Puesto:      "Diseñador Web",
        Descripcion: "Desarrollo del nuevo sitio web, mantenimiento de las redes sociales y soporte en la gestion de los correos.",
        proyectos : [
            {Link: "https://web.aktion.cl/",  Nombre: "Creación sitio web Aktion"},
        ]
    },
    {
        Fechas:      "Mayo 2014 - Mayo 2016",
        Empresa:     "Natural Phone S.A.",
        Puesto:      "Jefe Departamento de Desarrollo de Aplicaciones",
        Descripcion:
                    "•	Planificación, coordinación y desarrollo de proyectos en distintas áreas tecnológicas, principalmente en proyectos realizados fuera de Chile."
                    + "<br/>•	Implementación las últimas tecnologías para tareas tales como chat en vivo, videoconferencias, comunicaciones web-teléfono a través de servidores Asterisk."
                    + "<br/>•	Desarrollo de aplicaciones para las plataformas IOS y Android enfocadas a temas de seguridad y redes sociales."
                    + "<br/>•	Asesorías en instalación de redes."
                    + "<br/>•	Asesorías en adquisición de equipamientos."
                    + "<br/>•	Instalación, mantención y soporte de computadores."
                    + "<br/>•	Coordinación de proyectos en Perú, Colombia y Venezuela."
                    ,
        proyectos : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma TodosComunicados",    Nombre: "Creación Plataforma TodosComunicados"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma ubica tu colectivo",  Nombre: "Creación Plataforma ubica tu colectivo"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Click2Call",                     Nombre: "Mantención Plataforma Click2Call"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/edukAmerica",                    Nombre: "Creación Plataforma EdukAmerica"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/edukclick",                      Nombre: "Creación Plataforma EdukClick"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/MisionEduca",                    Nombre: "Creación Plataforma MisionEduca"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/OIRS San Miguel",                Nombre: "Creación Plataforma OIRS San Miguel"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP Aaazu",                      Nombre: "Creación APP Aaazu"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP AppBuss",                    Nombre: "Creación APP AppBus"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP Approbar",                   Nombre: "Creación APP Approbar"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP AppSeguridad",               Nombre: "Creación APP AppSeguridad"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP Bussan",                     Nombre: "Creación APP Bussan"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP ClickFarma",                 Nombre: "Creación APP Click Farma"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP ClubAmerica",                Nombre: "Creación APP ClubAmerica"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP EasyPago",                   Nombre: "Creación APP Easy Pago"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP Jootes",                     Nombre: "Creación APP Jootes"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP JuntosSomosMas",             Nombre: "Creación APP Juntos Somos Mas"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP Llappa",                     Nombre: "Creación APP Llappa"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP PSVirtual",                  Nombre: "Creación APP PSVirtual"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP RPMClick",                   Nombre: "Creación APP RPMClick"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP SOSAmerica",                 Nombre: "Creación APP SOSAmérica"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP SOSBuin",                    Nombre: "Creación APP SOSBuin"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP SOSClick",                   Nombre: "Creación APP SOSClick"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP SOSLaFlorida",               Nombre: "Creación APP SOSLaFlorida"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP SOSTaxi",                    Nombre: "Creación APP SOSTaxi"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP Supega",                     Nombre: "Creación APP Supega"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP VinaSomosTodos",             Nombre: "Creación APP ViñaSomosTodos"},
            {Link: "http://www.conatacoch.cl/",                                                             Nombre: "Creación Sitio web Conatacoch"},
        ]
    },
    {
        Fechas:      "Enero 2014 - Febrero 2014",
        Empresa:     "Novafoods S.A.",
        Puesto:      "Programador PHP",
        Descripcion:
                    "•	Análisis y diseño del sistema de gestión interno de la empresa enfocada en compras, ventas, gestión de las bodegas, gestión de producción y la planificación de la misma."
                    + "<br/>•	Creación del sistema Novasystem, el cual es un sistema de administración de la empresa similar a un ERP, el cual permite administrar las compras, ventas y los procesos dentro de la planta de producción, a través de un Flujo de Trabajo predefinido."
                    + "<br/>•	Creación del sistema Mercotactica, el cual es un pequeño sistema orientado a la administración de las bodegas de Novafoods en todo chile, permitiendo el traspaso de productos entre la bodega central y el resto de las bodegas, mostrando en todo momento el stock de las bodegas en tiempo real.",
    },
    {
        Fechas:      "Octubre 2013 - Diciembre 2013",
        Empresa:     "Chile Digital Limitada",
        Puesto:      "Diseñador Web Wordpress",
        Descripcion:
                    "•	Diseño, maquetación y programación de sitios web basados en Wordpress."
                    + "<br/>•	Diseño y retoque de imágenes, portadas y otras artes."
                    + "<br/>•	Implementación de SEO y SEM en los sitios.",
    },
    {
        Fechas:      "Mayo 2013 - Octubre 2013",
        Empresa:     "Simyl S.A.",
        Puesto:      "Programador PHP",
        Descripcion:
                    "•	Creación del sistema Enap-Metro, el cual es un sistema orientado a la administración de los servicios entregados por Simyl a través de las distintas ordenes de trabajos previamente fijadas en el contrato de servicios."
                    + "<br/>•	Creación del sistema Mantenlubric, el cual es un sistema orientado a la gestión de los puntos de lubricación de las maquinas al interior de las empresas, además de gestionar las bodegas, las cotizaciones y las ventas de la empresa Simyl.",
        proyectos : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma Mantenlubric",   Nombre: "Creación y mantención plataforma Enap"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma Mantenlubric",   Nombre: "Creación y mantención plataforma Metro"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma Mantenlubric",   Nombre: "Creación y mantención plataforma Mantenlubric"},
            {Link: "https://gestionmodular.cl/",                                                       Nombre: "Creación sitio web gestionmodular"},
            {Link: "https://www.simyl.cl/",                                                            Nombre: "Creación sitio web simyl"},
        ]
    },
    {
        Fechas:      "Diciembre 2011 - Abril 2013",
        Empresa:     "Acuarela Digital. (Freelance)",
        Puesto:      "Diseñador de Sitios Web",
        Descripcion: "Responsable del diseño de distintas páginas web dependiendo de las solicitudes de los clientes",
        proyectos : [
            {Link: "https://www.pizzeriadelsol.cl/",               Nombre: "Creación sitio web Pizzería del Sol"},
            {Link: "https://toquededulzura.cl/",                   Nombre: "Mantención sitio web Un toque de dulzura"},
            {Link: "https://www.mcmajustadores.cl/presentacion/",  Nombre: "Creación sitio web MCM Ajustadores Ltda"},
            {Link: "https://www.payasitocascabel.cl/",             Nombre: "Creación sitio web Animaciones infantiles Payasito Cascabel"},
            {Link: "https://www.rifoseguros.cl/",                  Nombre: "Creación sitio web Rifo y Compañía Ltda"},
            {Link: "https://www.vluzpvc.cl/",                      Nombre: "Creación sitio web Proyectos en PVC"},
            {Link: "https://www.inesbengoa.com/",                  Nombre: "Mantención del sitio web Inés Bengoa - Narración Infantil"},
            {Link: "https://www.muralismopublico.com/",            Nombre: "Creación sitio web Itinerario muralistico"},
            {Link: "https://tierrasdeiranzu.com/",                 Nombre: "Creación sitio web Turismo Rural en Navarra"},
            {Link: "https://www.mundoraintxe.com/",                Nombre: "Creación sitio web Mundo raintxe"},
            {Link: "https://cosamiweb.com/",                       Nombre: "Creación sitio web Cosami"},
            {Link: "https://fondacarrera.com/",                    Nombre: "Creación sitio web Fonda Carrera"},
        ]
    },
    {
        Fechas:      "Diciembre 2011 - Abril 2013",
        Empresa:     "Nielsoft Informática Ltda",
        Puesto:      "Analista Datos sección Atención de empleadores",
        Descripcion:
                    "•	Revisión y mantención base de datos sistema PU de Provida."
                    + "<br/>•	Implementación del nuevo informe para el control de Moras presuntas, Rezagos Obligatorios y Voluntarias."
                    + "<br/>•	Creación de informe de control de los ingresos de causas de mora y rezagos de empleadores, con validación y cruce de información del sistema SARINA y PU.",
    },
    {
        Fechas:      "Julio 2011 - Noviembre 2011",
        Empresa:     "Automotora Patricio Hidalgo S.A.",
        Puesto:      "Tesorero General",
        Descripcion:
                    "Ejecución de tareas relacionadas al puesto a través de la plataforma SAP."
                    + "<br/><strong>Tareas:</strong>"
                    + "<br/>•	Ingreso de facturas y cheques al sistema SAP."
                    + "<br/>•	Generación de cheques para pago de proveedores vía SAP."
                    + "<br/>•	Generación de reportes varios a Gerencia.",
    },
    {
        Fechas:      "Marzo 2003 - Junio 2011",
        Empresa:     "Viña Concha y Toro",
        Puesto:      "Soporte de Gerencia",
        Descripcion:
                    "•	Responsable de la creación de distintas mejoras para la optimización de la información de los distintos departamentos."
                    + "<br/>•	Responsable de la mantención y optimización de las distintas bases de datos usadas en la planta."
                    + "<br/>•	Relator de cursos de capacitación en relación a las mejoras implementadas."
                    + "<br/>•	Gestión del orden en que las órdenes de fabricación son liberadas en relación a la disponibilidad de materiales y el índice de liberación de las órdenes."
                    + "<br/>•	Responsable de la creación de reportes-informes (KPI) de nivel Táctico y Operativo."
                    + "<br/>•	Creación de sistema para llevar el control de las horas extras informadas por el personal, reduciendo en un 70% el tiempo invertido en esto."
                    + "<br/>•	Creación de un sistema de control de las horas extras, bonos por turnos y costo de las horas extras de las distintas empresas externas dentro de la empresa."
                    ,
        proyectos : [
            {Link: "https://github.com/tenshi98/InfoTurno",                                Nombre: "Mantención del sistema InfoTurno"},
            {Link: "https://github.com/tenshi98/InfoTurno",                                Nombre: "Mantención del informe 5 Minutos"},
            {Link: "https://github.com/tenshi98/Descontinuados-Excel/tree/master/horas",   Nombre: "Creación y mantención del sistema de horas extras personal de planta"},
            {Link: "https://github.com/tenshi98/Descontinuados-Excel/tree/master/horas",   Nombre: "Creación y mantención del sistema de horas extras personal externo"},
            {Link: "https://github.com/tenshi98/Descontinuados-Excel/tree/master/mermas",  Nombre: "Creación y mantención del sistema de merma operativa planta"},
            {Link: "https://github.com/tenshi98/Descontinuados-Excel/tree/master/Setup",   Nombre: "Creación y mantención del sistema de tiempos de setup planta"},
            {Link: "https://github.com/tenshi98/InfoTurno",                                Nombre: "Creación y mantención de informes KPI tácticos y operativos"},
            {Link: "https://github.com/tenshi98/InfoTurno",                                Nombre: "Creación de reportes en base a las distintas solicitudes de Gerencia"},
            {Link: "https://github.com/tenshi98/InfoTurno",                                Nombre: "Creación de informes en base a las solicitudes de los departamentos"},
        ]
    },

];

/***********************************************/
var proyectos = [
    {
        IMG:         "assets/project/img_27.jpg",
        Titulo:      "Plataforma Bienestar Inacap",
        Descripcion:
                    "Plataforma de administración enfocada en la administración de socios, sus préstamos y bonificaciones, se subdivide en 2 plataformas:"
                    +"<br/><strong> - Plataforma Administración:</strong> Plataforma hecha para administrar a los socios, sus préstamos solicitados, las bonificaciones entregadas, los respectivos pagos, etc."
                    +"<br/><strong> - Plataforma Socios:</strong> Plataforma donde los socios pueden ver solo sus datos, sus prestamos, bonificaciones y sus próximos pagos.",
        DatosTec:   "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar."
                    +"<br>La Plataforma tiene un sistema de notificaciones masivas utilizando el servicio correo interno del servidor."
                    +"Tambien permite la exportación de datos (PDF, Excel, Word).",
        DescCorta:  "Plataforma de administración enfocada en la administración de socios, sus préstamos y bonificaciones.",
        Tipo:       "Plataforma",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",        Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",      Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",     Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",      Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",  Text: "Bootstrap 3"},
            {Img: "assets/icons/js.svg",         Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",     Text: "Jquery"},
            {Img: "assets/icons/email.svg",      Text: "Email"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma%20Bienestar%20Inacap", Icon: "fab fa-github", Text: "Documentación"},
            {Link: "https://github.com/tenshi98/Trabajo_Propios_Demos/tree/main/Bienestar_Inacap",           Icon: "fas fa-cogs",   Text: "Demo"},
        ]
    },
    {
        IMG:         "assets/project/img_26.jpg",
        Titulo:      "Sitio Web Deimos Corp",
        Descripcion: "Sitio web de Soluciones de ingeniería y gestión de proyectos para diversas industrias.",
        DatosTec:    "Página web programada en PHP puro, se utiliza Bootstrap 5 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar."
                    +"Utiliza el servicio postmail para el envio de los correos del formulario de contacto.",
        DescCorta:   "Sitio web de Soluciones de ingeniería y gestión de proyectos para diversas industrias.",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/html-5.svg",       Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",        Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",    Text: "Bootstrap 5"},
            {Img: "assets/icons/js.svg",           Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",       Text: "Jquery"},
            {Img: "assets/icons/mailed-mail.svg",  Text: "Postmail"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/sites_deimoscorp", Icon: "fas fa-code", Text: "Código Fuente"},
            {Link: "https://web.deimoscorp.cl/",                   Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_7.jpg",
        Titulo:      "Plataforma SimpliVet",
        Descripcion:
                    "Plataforma de negocios enfocada a ofrecer el servicio de gestión de veterinarias, esta plataforma se subdivide en 3 plataformas:"
                    +"<br/><strong> - Plataforma Administración:</strong> Plataforma hecha para administrar a los clientes, en este caso las veterinarias y hacer las facturaciones mensuales por los servicios."
                    +"<br/><strong> - Plataforma Clientes:</strong> Plataforma de atención de mascotas, llevando el detalle de las vacunas, atenciones, hospitalizaciones y cirugías. También permite administrar los centros, losservicios, los productos a la venta, los empleados y las bodegas, dependiendo de la configuración de la cuenta, puede enviar notificaciones por email y por whatsapp."
                    +"<br/><strong> - Plataforma Tutores:</strong> Plataforma que permite al tutor ver todos sus datos y sus mascotas, el detalle de cada mascota, sus vacunas, sus cirugías, calendario de vacunas, etc.",
        DatosTec:   "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar."
                    +"<br>La Plataforma implementa tecnologías como notificación masiva con whatsapp a través de la API de WhatsApp Business"
                    +", envío de emails masivos a través del servicio de correos del servidor"
                    +", utilización gráficos simples utilizando la librería charts.js"
                    +" y la exportación de los datos a archivos (PDF, Excel, Word, Xml)",
        DescCorta:   "Plataforma de negocios enfocada a ofrecer el servicio de gestión de veterinarias.",
        Tipo:        "Plataforma",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",        Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",      Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",     Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",      Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",  Text: "Bootstrap 3"},
            {Img: "assets/icons/js.svg",         Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",     Text: "Jquery"},
            {Img: "assets/icons/whatsapp.svg",   Text: "Whatsapp"},
            {Img: "assets/icons/email.svg",      Text: "Email"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma%20SimpliVet", Icon: "fab fa-github", Text: "Documentación"},
            {Link: "https://simplivet.cl/",                                                         Icon: "fas fa-link",   Text: "Sitio web de la empresa"},
            {Link: "https://github.com/tenshi98/Trabajo_Propios_Demos/tree/main/SimpliVet",         Icon: "fas fa-cogs",   Text: "Demo"},
        ]
    },
    {
        IMG:         "assets/project/img_18.jpg",
        Titulo:      "Sitio Web SimpliVet",
        Descripcion: "Sitio web de presentación del software de gestión para centros veterinarios.",
        DatosTec:    "Página web programada en PHP puro, se utiliza Bootstrap 5 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/html-5.svg",    Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",     Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg", Text: "Bootstrap 5"},
            {Img: "assets/icons/js.svg",        Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",    Text: "Jquery"},
        ],
        Links : [
            {Link: "https://simplivet.cl/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_8.jpg",
        Titulo:      "Sitio Web Simplytech",
        Descripcion: "Sitio con información de la empresa, da acceso directo a los clientes a su plataforma, posee funcionamiento estandar de un sitio web de este tipo.",
        DatosTec:    "Página web programada en PHP puro, se utiliza Bootstrap 5 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",        Text: "Sistema programado en PHP"},
            {Img: "assets/icons/html-5.svg",     Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",      Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",  Text: "Bootstrap 5"},
            {Img: "assets/icons/js.svg",         Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",     Text: "Jquery"},
        ],
        Links : [
            {Link: "https://www.simplytech.cl/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_1.jpg",
        Titulo:      "Plataforma Gestión Modular",
        Descripcion: "Plataforma enfocada a gestionar las mediciones de telemetría a través de sus distintas interfaces para cada clientes de la empresa. Ofrece la administración de usuarios, de equipos de telemetría, gestión de mantenciones preventivas y de urgencia a los equipos de telemetría, informes agrupados al tipo de servicio ofrecido (medición temperaturas, GPS y niveles de riego en los campos, voltajes de equipo, etc.), entre otras características.",
        DatosTec:    "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar."
                    +"<br>La Plataforma implementa tecnologías como telemetría y geolocalización GPS en tiempo real basado en tecnología propia (placas Arduino y sensores GPS)"
                    +", notificación masiva con whatsapp a través de la API de WhatsApp Business"
                    +", envío de emails masivos a través del servicio de correos del servidor"
                    +", utilización gráficos simples utilizando la librería charts.js"
                    +", gráficos de mayor complejidad utilizando la librería plotly.js para crear gráficos con unos 10.000 datos a mostrar"
                    +", visualización de los límites de los campos de arado, áreas fumigadas, ruta de los tractores u otros vehículos, etc. gracias a los mapas dinámicos a través de la API de Google Maps"
                    +", previsión meteorológica utilizando la librería PHP ML (Machine Learning)"
                    +", exportación de los datos a archivos (PDF, Excel, Word, Xml)"
                    +", importación de datos masivos a través de archivos CVS o XML"
                    +" y la integración con el SII a través de la API de LibreDTE.",
        DescCorta:   "",
        Tipo:        "Plataforma",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",         Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",       Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",      Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",       Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",   Text: "Bootstrap 3"},
            {Img: "assets/icons/js.svg",          Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",      Text: "Jquery"},
            {Img: "assets/icons/android.svg",     Text: "Android"},
            {Img: "assets/icons/chartjs.svg",     Text: "Chart js"},
            {Img: "assets/icons/plotly.svg",      Text: "Plotly js"},
            {Img: "assets/icons/php-ml.png",      Text: "PHP ML"},
            {Img: "assets/icons/arduino.svg",     Text: "Arduino"},
            {Img: "assets/icons/whatsapp.svg",    Text: "Whatsapp"},
            {Img: "assets/icons/email.svg",       Text: "Email"},
            {Img: "assets/icons/php-office.jpg",  Text: "PHP office"},
            {Img: "assets/icons/cplusplus.svg",   Text: "C++"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma Gesti%C3%B3n Modular", Icon: "fab fa-github", Text: "Documentación"},
            {Link: "https://www.simplytech.cl/",                                                             Icon: "fas fa-link",   Text: "Sitio web de la empresa"},
        ]
    },
    {
        IMG:         "assets/project/img_4.jpg",
        Titulo:      "Plataforma Terranía",
        Descripcion: "Plataforma enfocada en la gestión de venta de los terrenos para cada línea de negocios, gestionando de principio a fin cada negociación con las empresas interesadas de forma separada para cada terreno.",
        DatosTec:    "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar."
                    +"<br>La Plataforma implementa tecnologías como notificación masiva de correo masivas a través de la API de Brevo"
                    +", exportación de los datos a archivos (PDF, Excel, Word)"
                    +", importación de datos masivos a través de archivos CVS o XML"
                    +" y la visualización de terrenos a través de la API de Google Maps.",
        DescCorta:   "",
        Tipo:        "Plataforma",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",        Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",      Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",     Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",      Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",  Text: "Bootstrap 3"},
            {Img: "assets/icons/js.svg",         Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",     Text: "Jquery"},
            {Img: "assets/icons/email.svg",      Text: "Email"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma Terrania", Icon: "fab fa-github", Text: "Documentación"},
            {Link: "https://web.terrania.cl/",                                                   Icon: "fas fa-link",   Text: "Sitio web de la empresa"},
        ]
    },
    {
        IMG:         "assets/project/img_11.jpg",
        Titulo:      "Sitio Web Terranía",
        Descripcion:
                    "Sitio web que muestra un listado de terrenos disponibles para la compra, separandolos por lineas de negocios, por region y comuna.",
        DatosTec:    "Página web programada en PHP puro, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar."
                    +"<br>El sitio web obtiene los datos mostrados a través de un webservice donde se utiliza la direccion IP el usuario que accede al sitio, "
                    +"muestra 4 terrenos destacados cerca de la ubicación entregada por dicha IP, para el caso en que no encuentre terrenos cerca, "
                    +"mostrará 4 terrenos de Chile seleccionados de forma aleatoria.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",       Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",          Text: "Sistema programado en PHP"},
            {Img: "assets/icons/html-5.svg",       Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",        Text: "CSS-3"},
            {Img: "assets/icons/js.svg",           Text: "Javascript"},
            {Img: "assets/icons/bootstrap.svg",    Text: "Bootstrap 5"},
            {Img: "assets/icons/jquery.svg",       Text: "Jquery"},
            {Img: "assets/icons/web-transfer.svg", Text: "Web Services"},
        ],
        Links : [
            {Link: "https://web.terrania.cl/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_0.jpg",
        Titulo:      "Plataforma Vendo mi Campo",
        Descripcion: "Plataforma que sirve como base de datos y gestión en la venta o arriendo de los terrenos en la línea de negocios Campos (aquellos que solo permiten el cultivo, no la construcción), esta base de datos es mostrada en el sitio web de la empresa vendomicampo.cl a través de varios webservices.",
        DatosTec:    "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar"
                    +"<br>La plataforma hace el envío de correos masivos a través del servicio de Brevo.",
        DescCorta:   "",
        Tipo:        "Plataforma",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",        Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",      Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",     Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",      Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",  Text: "Bootstrap 3"},
            {Img: "assets/icons/js.svg",         Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",     Text: "Jquery"},
            {Img: "assets/icons/email.svg",      Text: "Email"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma%20Vendo%20mi%20Campo", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_5.jpg",
        Titulo:      "Plataforma Somos Teatro",
        Descripcion: "Plataforma enfocada en la gestión de venta de obras de teatro a las empresas interesadas, gestionando de principio a fin cada negociación con las empresas de forma separada para cada caso.",
        DatosTec:    "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar."
                    +"<br>La plataforma hace el envío de correos masivos a través del servicio de Brevo.",
        DescCorta:   "",
        Tipo:        "Plataforma",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",        Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",      Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",     Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",      Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",  Text: "Bootstrap 5"},
            {Img: "assets/icons/js.svg",         Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",     Text: "Jquery"},
            {Img: "assets/icons/email.svg",      Text: "Email"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma%20Somos%20Teatro", Icon: "fab fa-github", Text: "Documentación"},
            {Link: "https://web.somosteatro.cl/",                                                        Icon: "fas fa-link",   Text: "Sitio web de la empresa"},
        ]
    },
    {
        IMG:         "assets/project/img_12.jpg",
        Titulo:      "Sitio Web Somos Teatro",
        Descripcion: "Sitio web de la empresa, esta se conecta con la plataforma de administración a través de Web Services para obtener las obras y su detalle.",
        DatosTec:    "Página web programada en PHP puro, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar."
                    +"<br>Esta Página web obtiene los datos a mostrar a partir de un webservice programado en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, este webservice esta montado en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",     Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",    Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",     Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg", Text: "Bootstrap 5"},
            {Img: "assets/icons/js.svg",        Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",    Text: "Jquery"},
        ],
        Links : [
            {Link: "https://web.somosteatro.cl/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_9.jpg",
        Titulo:      "Sitio Web Casas Colmena",
        Descripcion: "Sitio web de acceso a los interesados en kit de casas prefabricadas, posee funcionamiento estandar de un sitio web de este tipo.",
        DatosTec:    "Sistema de gestión de contenidos (CMS), montado en un servidor Apache, esta programado utilizando PHP como base, tambien utiliza MYSQL como base de datos.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/wordpress.svg", Text: "CMS WordPress"},
            {Img: "assets/icons/apache.svg",    Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",     Text: "Base de datos MYSQL"},
        ],
        Links : [
            {Link: "https://casascolmena.cl/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_10.jpg",
        Titulo:      "Sitio Web Lomas de Lambert",
        Descripcion: "Sitio web de acceso para los interesados en comprar una parcela en esta zona, muestra todos los datos de las personas que conforman dicha empresa y posee un formulario de contacto para poder solicitar más información.",
        DatosTec:    "Página web programada en PHP puro, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",    Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/html-5.svg",    Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",     Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg", Text: "Bootstrap 5"},
            {Img: "assets/icons/js.svg",        Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",    Text: "Jquery"},
        ],
        Links : [
            {Link: "https://web.lomasdelambert.cl/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_13.jpg",
        Titulo:      "Sitio Web Aktion",
        Descripcion: "Sitio web con información de esta firma de contadores, contiene informacion de la empresa, sus trabajadores y posee un formulario de contacto con el cual se puede solicitar los servicios.",
        DatosTec:    "Página web programada en PHP puro, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",    Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/html-5.svg",    Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",     Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg", Text: "Bootstrap 5"},
            {Img: "assets/icons/js.svg",        Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",    Text: "Jquery"},
        ],
        Links : [
            {Link: "https://web.aktion.cl/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_0.jpg",
        Titulo:      "Plataforma Agropraxis",
        Descripcion: "Servicio de consolidación de la carga Frutícola embarcada en contenedores. Se controla el cumplimiento de las instrucciones de carga (cargas específicas). Control de las condiciones de transporte instruidas a la naviera, estiba, sellado y registro de temperaturas. Terminada la faena se emite informe oficial de la actividad desarrollada, documento que será requerido por el seguro de carga en caso de algún siniestro.",
        DatosTec:    "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar.",
        DescCorta:   "",
        Tipo:        "Plataforma",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",        Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",      Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",     Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",      Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",  Text: "Bootstrap 3"},
            {Img: "assets/icons/js.svg",         Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",     Text: "Jquery"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma%20Agropraxis", Icon: "fab fa-github", Text: "Documentación"},
            {Link: "https://agropraxisgroup.cl/",                                                    Icon: "fas fa-link",   Text: "Sitio web de la empresa"},
        ]
    },
    {
        IMG:         "assets/project/img_3.jpg",
        Titulo:      "Plataforma Aguas EAPEC",
        Descripcion:
                    "Plataforma diseñada para gestionar la facturación de los medidores de aguas, entre sus características se encuentran la gestión de los clientes, la gestión del medidor o los remarcadores instalados en su propiedad, historial de mediciones, facturaciones, pagos, cortes, reposiciones y retiro de medidores, además de los distintos informes."
                    +"<br/> Corre en un servidor con PHP 5.3 y no ha tenido mantención desde el 2019, pero sigue funcionando correctamente y no han reportado ninguna falla.",
        DatosTec:    "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar."
                    +"<br>La plataforma permite importar los datos de las mediciones a través de un archivo CSV ya estructurado, también permite exportar archivos de índole legal en los distintos formatos solicitados por las entidades."
                    +"<br>Facturación directa de las boletas electrónica con el SII a través del servicio LibreDTE."
                    +"<br>Notificación y envío automático de correos a los clientes (entrega de factura y aviso de término del periodo de pago).",
        DescCorta:   "",
        Tipo:        "Plataforma",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",        Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",      Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",     Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",      Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",  Text: "Bootstrap 3"},
            {Img: "assets/icons/js.svg",         Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",     Text: "Jquery"},
            {Img: "assets/icons/email.svg",      Text: "Email"},
            {Img: "assets/icons/php-office.jpg", Text: "PHP office"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma%20Aguas%20EAPEC", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_28.jpg",
        Titulo:      "APP Busafe",
        Descripcion: "Aplicación Android diseñada para la gestión de los pasajeros y conductores de furgones escolares, se encarga de notificar al apoderado del niño cuando el furgón está cerca y de notificarlo cuando llega a su colegio, mientras que para el chofer del furgón se encarga de notificarle los niños que no asistirán dándole nuevas rutas alternativas por el pasajero faltante.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20Busafe", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_29.jpg",
        Titulo:      "APP appCargo",
        Descripcion:
                    "Aplicación Android diseñada para la gestión de los contenedores desocupados en el viaje de vuelta de los camiones, ofreciendo la posibilidad de mover cargas a un costo inferior al arrendamiento de un contenedor completo."
                    +"<br/>Desgraciadamente nunca vio la luz debido a que no se ponían de acuerdo con las tasas de participación del transportista, la empresa que ofrece la APP y los socios del negocio.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20appCargo", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_0.jpg",
        Titulo:      "APP CrossCrane",
        Descripcion: "Aplicación de escritorio diseñada para mostrar el estado de las grúas plumas de la plataforma gestión modular.",
        DatosTec:    "Aplicación nativa Windows hecha con Visual Studio utilizando .NET como lenguaje de programación."
                    +"<br>Esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/dotnet.svg",          Text: ".NET"},
            {Img: "assets/icons/visual-studio.svg",   Text: "Visual Studio"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/proyectos_visual_studio/tree/main/CrossCrane", Icon: "fas fa-code", Text: "Código Fuente"},
        ]
    },
    {
        IMG:         "assets/project/img_14.jpg",
        Titulo:      "Sitio Web Conatacoch",
        Descripcion: "Sitio web del gremio de colectivos, es una fusión de sitio web con un blog y otros servicios. La administra el presidente del gremio.",
        DatosTec:    "Sistema de gestión de contenidos (CMS), montado en un servidor Apache, esta programado utilizando PHP como base, tambien utiliza MYSQL como base de datos.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/wordpress.svg", Text: "CMS WordPress"},
            {Img: "assets/icons/apache.svg",    Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",     Text: "Base de datos MYSQL"},
        ],
        Links : [
            {Link: "http://www.conatacoch.cl/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_0.jpg",
        Titulo:      "Plataforma TodosComunicados",
        Descripcion:
                    "Plataforma que haciendo uso de las tecnologías (HTML5, CS3, Jquery, html sockets, etc.) implementaba la videoconferencia grupal hasta 4 participantes, antes de la llegada de Zoom o Google Meet."
                    +"<br/>Desgraciadamente no dispongo de ninguna captura de pantalla ni tampoco se encuentra en uso actualmente.",
        DatosTec:    "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar.",
        DescCorta:   "",
        Tipo:        "Plataforma",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",        Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",      Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",     Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",      Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",  Text: "Bootstrap 3"},
            {Img: "assets/icons/js.svg",         Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",     Text: "Jquery"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma%20TodosComunicados", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_0.jpg",
        Titulo:      "Plataforma ubica tu colectivo",
        Descripcion:
                    "Plataforma enfocada en indicar el tiempo de espera de llegada a un paradero del próximo colectivo mas cercano a este."
                    +"<br/>Desgraciadamente no dispongo de ninguna captura de pantalla ni tampoco se encuentra en uso actualmente.",
        DatosTec:    "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar.",
        DescCorta:   "",
        Tipo:        "Plataforma",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",        Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",      Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",     Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",      Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",  Text: "Bootstrap 3"},
            {Img: "assets/icons/js.svg",         Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",     Text: "Jquery"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma%20ubica%20tu%20colectivo", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_30.jpg",
        Titulo:      "Click2Call",
        Descripcion: "Plataforma diseñada para conectar una pagina web a un llamado telefónico (teléfono físico) configurado previamente, permitía varias instancias.",
        DatosTec:    "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar.",
        DescCorta:   "",
        Tipo:        "Otros",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",        Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",      Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",     Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",      Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",  Text: "Bootstrap 3"},
            {Img: "assets/icons/js.svg",         Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",     Text: "Jquery"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Descontinuados-PHP/tree/main/click2call_v2", Icon: "fas fa-code",   Text: "Código Fuente v2"},
            {Link: "https://github.com/tenshi98/Descontinuados-PHP/tree/main/click2call_v3", Icon: "fas fa-code",   Text: "Código Fuente v3"},
            {Link: "https://github.com/tenshi98/Descontinuados-PHP/tree/main/click2call_v4", Icon: "fas fa-code",   Text: "Código Fuente v4"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Click2Call",      Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_31.jpg",
        Titulo:      "Plataforma edukAmerica",
        Descripcion: "Plataforma clon de edukclick, donde se ofrecían cursos impartidos por las estrellas del canal América TV.",
        DatosTec:    "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar.",
        DescCorta:   "",
        Tipo:        "Plataforma",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",        Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",      Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",     Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",      Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",  Text: "Bootstrap 3"},
            {Img: "assets/icons/js.svg",         Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",     Text: "Jquery"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/edukAmerica", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_32.jpg",
        Titulo:      "Plataforma edukclick",
        Descripcion: "Plataforma de educación tipo Moddle.",
        DatosTec:    "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar.",
        DescCorta:   "",
        Tipo:        "Plataforma",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",        Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",      Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",     Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",      Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",  Text: "Bootstrap 3"},
            {Img: "assets/icons/js.svg",         Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",     Text: "Jquery"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/edukclick", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_33.jpg",
        Titulo:      "Plataforma MisionEduca",
        Descripcion: "Plataforma clon de edukclick, donde se ofrecían cursos impartidos por los pastores.",
        DatosTec:    "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar.",
        DescCorta:   "",
        Tipo:        "Plataforma",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",        Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",      Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",     Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",      Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",  Text: "Bootstrap 3"},
            {Img: "assets/icons/js.svg",         Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",     Text: "Jquery"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/MisionEduca", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_34.jpg",
        Titulo:      "OIRS San Miguel",
        Descripcion:
                    "Plataforma diseñada para hacer la solicitud de información a la municipalidad, mantenía un registro de las solicitudes y las respuestas a estas."
                    +"<br/>También ofrece toda la información de la persona procesada en la municipalidad.",
        DatosTec:    "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar.",
        DescCorta:   "",
        Tipo:        "Otros",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",     Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",        Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",      Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",     Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",      Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg",  Text: "Bootstrap 2"},
            {Img: "assets/icons/js.svg",         Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",     Text: "Jquery"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Descontinuados-PHP/tree/main/sm_OIRS",           Icon: "fas fa-code",   Text: "Código Fuente"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/OIRS%20San%20Miguel", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_35.jpg",
        Titulo:      "APP Aaazu",
        Descripcion: "Aplicación Android hecha para poder pagar con el celular en los puntos de la red de Pago Efectivo, además tenía una interacción con la app ClubAmerica, en donde se podían hacer apuestas utilizando el saldo de la APP.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local."
                    +"<br>Aplicación nativa IOS hecha con Xcode utilizando C++ como lenguaje de programación y Sqlite como base de datos local."
                    +"<br>Estas aplicaciones obtienen los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/ios.svg",             Text: "IOS"},
            {Img: "assets/icons/xcode.svg",           Text: "Xcode"},
            {Img: "assets/icons/cplusplus.svg",       Text: "Frontend - C++"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20Aaazu", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_36.jpg",
        Titulo:      "APP appBuss",
        Descripcion: "Aplicación Android hecha para que el transporte público pudiera enviarse alertas de emergencia entre ellos creando una red de seguridad, lamentablemente solo conservo los logos de la APP.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20AppBuss", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_37.jpg",
        Titulo:      "APP Approbar",
        Descripcion:
                    "Aplicación Android hecha para poder acceder a la información de cualquier producto de un supermercado adherido solo escaneando su código de barras, una vez escaneado mostraría su aporte energético, si tiene preservantes, etc."
                    +"<br/>El proyecto fracaso porque los supermercados no estaban interesados y porque no se podía implementar el tema de la base de datos en base al código de barras del producto, ya que, para un mismo producto, dependiendo de la zona (hablando de Perú), llevaba un código de barras distinto.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20Approbar", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_0.jpg",
        Titulo:      "APP AppSeguridad",
        Descripcion:
                    "Aplicación Android de seguridad ofrecida para el público en general que se encargaba de registrar eventos en un mapa, con niveles de peligro del evento y un registro de éste, permitía indicar mediante vibraciones del celular si uno estaba entrando a un área conflictiva."
                    +"<br/>Desgraciadamente no dispongo de ninguna captura de pantalla ni tampoco se encuentra en uso actualmente.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Descontinuados-Android/tree/master/AppSeguridad", Icon: "fas fa-code",   Text: "Código Fuente"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20AppSeguridad",   Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_38.jpg",
        Titulo:      "APP Bussan",
        Descripcion:
                    "Aplicación Android que podría ser la evolución de la APP Busafe, mezcla las características de dicha aplicación, mas las características de la aplicación SOSClick y la aplicacion AppBuss para obtener esta aplicación."
                    +"<br/>Además, ofrecía una aplicación para tablets para los choferes, con la idea de que fueran utilizadas en el Transantiago para reemplazar el sistema de seguridad que en ese tiempo lo ofrecía la empresa Sonda."
                    +"<br/>Fracaso porque en ese tiempo, Carlos Valenzuela, le presento la idea completa, más sus flujos y la lógica de funcionamiento y procesos a la persona que unos meses más tarde crearía la APP Sosafe, apoyada por el gobierno de ese entonces, matando por completo esta APP.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20Bussan", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_39.jpg",
        Titulo:      "APP ClickFarma",
        Descripcion:
                    "Aplicación Android que permitía acceder a un vademecum de un determinado remedio solo escaneando su código de barras con la cámara del celular, ver el stock de un determinado remedio de la farmacia mas cercana a tu ubicación y una agenda que te recordaba con una alarma el remedio que te tocaba."
                    +"<br/>La APP fracaso porque todas sus funciones eran irreales, la base de datos con códigos de barras iba a ser enorme, cada farmacia gestiona su stock con programas diferentes entre una y otra, por lo que se debía hacer una implementación nueva para cada una, además de que se tenía que negociar con cada una para ver si permitían el acceso a sus bases de datos, y el tema de las alarmas podía ser fácilmente reemplazado con la alarma del celular.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Descontinuados-Android/tree/master/click_farma", Icon: "fas fa-code",   Text: "Código Fuente"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20ClickFarma",    Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_40.jpg",
        Titulo:      "APP ClubAmerica",
        Descripcion: "Aplicación Android hecha para poder participar en el programa del mismo nombre en el canal peruano América TV.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local."
                    +"<br>Aplicación nativa IOS hecha con Xcode utilizando C++ como lenguaje de programación y Sqlite como base de datos local."
                    +"<br>Estas aplicaciones obtienen los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/ios.svg",             Text: "IOS"},
            {Img: "assets/icons/xcode.svg",           Text: "Xcode"},
            {Img: "assets/icons/cplusplus.svg",       Text: "Frontend - C++"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20ClubAmerica", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_41.jpg",
        Titulo:      "APP EasyPago",
        Descripcion: "Aplicación Android que permitía pagar con el celular en todos los almacenes y bazares del Perú conectados al servicio de Pago Fácil, después se transformó en la APP Aaazu.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local."
                    +"<br>Aplicación nativa IOS hecha con Xcode utilizando C++ como lenguaje de programación y Sqlite como base de datos local."
                    +"<br>Estas aplicaciones obtienen los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/ios.svg",             Text: "IOS"},
            {Img: "assets/icons/xcode.svg",           Text: "Xcode"},
            {Img: "assets/icons/cplusplus.svg",       Text: "Frontend - C++"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Descontinuados-Android/tree/master/EasyPago", Icon: "fas fa-code",   Text: "Código Fuente"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20EasyPago",   Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_42.jpg",
        Titulo:      "APP Jootes",
        Descripcion: "Aplicación Android Chat Roulette para conversar con personas del sexo opuesto durante 30 segundos.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Descontinuados-Android/tree/master/Jootes",     Icon: "fas fa-code",   Text: "Código Fuente v1"},
            {Link: "https://github.com/tenshi98/Descontinuados-Android/tree/master/Jootes%202", Icon: "fas fa-code",   Text: "Código Fuente v2"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20Jootes",       Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_43.jpg",
        Titulo:      "APP Juntos Somos Mas",
        Descripcion: "Aplicación Android de opinión para el partido político PS, funcionaba de forma similar a un foro con algunas ligeras modificaciones.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20JuntosSomosMas", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_44.jpg",
        Titulo:      "APP Llappa",
        Descripcion: "Aplicación Android mutante que mezclaba la opción de tener una sim virtual para poder hacer llamadas a un costo inferior al de las empresas chilenas y una aplicación de concursos, nunca vio la luz debido a que no se definió qué tipo de aplicación era.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local."
                    +"<br>Aplicación nativa IOS hecha con Xcode utilizando C++ como lenguaje de programación y Sqlite como base de datos local."
                    +"<br>Estas aplicaciones obtienen los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/ios.svg",             Text: "IOS"},
            {Img: "assets/icons/xcode.svg",           Text: "Xcode"},
            {Img: "assets/icons/cplusplus.svg",       Text: "Frontend - C++"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20Llappa", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_45.jpg",
        Titulo:      "APP PSVirtual",
        Descripcion: "Aplicación Android clon de la app Juntos Somos Mas, ofrecía exactamente lo mismo.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20PSVirtual", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_46.jpg",
        Titulo:      "APP RPMClick",
        Descripcion: "Aplicación Android clon de la APP SOSClick, tiene mas o menos las mismas características.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20RPMClick", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_47.jpg",
        Titulo:      "APP SOSAmerica",
        Descripcion: "Aplicación Android de seguridad ofrecida por el canal de Perú América TV.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local."
                    +"<br>Aplicación nativa IOS hecha con Xcode utilizando C++ como lenguaje de programación y Sqlite como base de datos local."
                    +"<br>Estas aplicaciones obtienen los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/ios.svg",             Text: "IOS"},
            {Img: "assets/icons/xcode.svg",           Text: "Xcode"},
            {Img: "assets/icons/cplusplus.svg",       Text: "Frontend - C++"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Descontinuados-Android/tree/master/SosAmerica", Icon: "fas fa-code",   Text: "Código Fuente"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20SOSAmerica",   Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_48.jpg",
        Titulo:      "APP SOSBuin",
        Descripcion: "Aplicación Android clon de la APP SOSClick, ofrecida en exclusiva para la comuna de Buin.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20SOSBuin", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_49.jpg",
        Titulo:      "APP SOSClick",
        Descripcion:
                    "Aplicación Android de seguridad ofrecida para el público en general, entre sus características estaban la de crear redes de seguridad, envío de notificaciones de seguridad y encontrar mi dispositivo."
                    +"<br/>Actualmente se le han agregado mas funcionalidades, pero mantiene las definidas en un inicio.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20SOSClick", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_50.jpg",
        Titulo:      "APP SOSLaFlorida",
        Descripcion: "Aplicación Android clon de la APP SOSClick, ofrecida en exclusiva para la comuna de la Florida.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20SOSLaFlorida", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_51.jpg",
        Titulo:      "APP SOSTaxi",
        Descripcion: "Aplicación Android hecha para la seguridad de los taxistas, también existe una aplicación para los pasajeros, su funcionamiento asemeja lo que hace Didi o Uber.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20SOSTaxi", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_52.jpg",
        Titulo:      "APP Supega",
        Descripcion: "Aplicación Android que permite generar y aceptar ofertas de trabajo.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Descontinuados-Android/tree/master/supega_ofertador",  Icon: "fas fa-code",   Text: "Código Fuente Ofertador"},
            {Link: "https://github.com/tenshi98/Descontinuados-Android/tree/master/supega_trabajador", Icon: "fas fa-code",   Text: "Código Fuente Trabajador"},
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20Supega",              Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_53.jpg",
        Titulo:      "APP VinaSomosTodos",
        Descripcion: "Aplicación Android clon de la APP SOSClick, ofrecida en exclusiva para la comuna de Viña del Mar.",
        DatosTec:    "Aplicación nativa android hecha con Android Studio utilizando Java como lenguaje de programación y Sqlite como base de datos local, esta aplicación obtiene los datos a mostrar a partir de una REST Api programada en PHP puro, utilizando una base de datos MYSQL para almacenar los datos utilizados, esta REST Api esta montada en un servidor Apache.",
        DescCorta:   "",
        Tipo:        "APP",
        Tecnologias : [
            {Img: "assets/icons/android.svg",         Text: "Android"},
            {Img: "assets/icons/android-studio.svg",  Text: "Android Studio"},
            {Img: "assets/icons/java.svg",            Text: "Frontend - Java"},
            {Img: "assets/icons/sqlite.svg",          Text: "Frontend - Sqlite"},
            {Img: "assets/icons/apache.svg",          Text: "Backend - Servidor Apache"},
            {Img: "assets/icons/php.svg",             Text: "Backend - PHP"},
            {Img: "assets/icons/mysql.svg",           Text: "Backend - MYSQL"},
            {Img: "assets/icons/rest-api.svg",        Text: "Backend - REST Api"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/APP%20VinaSomosTodos", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_15.jpg",
        Titulo:      "Sitio Web Inés Bengoa - Narración Infantil",
        Descripcion:
                    "En este sitio solo hice una mantención de plugins y correcciones visuales debido a algunas incompatibilidades entre plugins."
                    +"<br/> Actualmente fue rediseñada sobre otra arquitectura.",
        DatosTec:    "Sistema de gestión de contenidos (CMS), montado en un servidor Apache, esta programado utilizando PHP como base, tambien utiliza MYSQL como base de datos.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/wordpress.svg", Text: "CMS WordPress"},
            {Img: "assets/icons/apache.svg",    Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",     Text: "Base de datos MYSQL"},
        ],
        Links : [
            {Link: "https://www.inesbengoa.com/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_16.jpg",
        Titulo:      "Sitio Web Itinerario muralístico",
        Descripcion: "Creación del sitio en wordpress a partir de la versión antigua hecha en html y javascript.",
        DatosTec:    "Sistema de gestión de contenidos (CMS), montado en un servidor Apache, esta programado utilizando PHP como base, tambien utiliza MYSQL como base de datos.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/wordpress.svg", Text: "CMS WordPress"},
            {Img: "assets/icons/apache.svg",    Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",     Text: "Base de datos MYSQL"},
        ],
        Links : [
            {Link: "https://www.muralismopublico.com/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_17.jpg",
        Titulo:      "Sitio Web Turismo Rural en Navarra",
        Descripcion:
                    "Creación del sitio en wordpress a partir de la versión antigua hecha en joomla."
                    +"<br/> Actualmente fue rediseñada sobre otra arquitectura manteniendo casi todas sus caracteristicas.",
        DatosTec:    "Sistema de gestión de contenidos (CMS), montado en un servidor Apache, esta programado utilizando PHP como base, tambien utiliza MYSQL como base de datos.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/wordpress.svg", Text: "CMS WordPress"},
            {Img: "assets/icons/apache.svg",    Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",     Text: "Base de datos MYSQL"},
        ],
        Links : [
            {Link: "https://tierrasdeiranzu.com/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_19.jpg",
        Titulo:      "Sitio Web Pizzeria del Sol",
        Descripcion: "Creación del sitio en wordpress a partir de la versión antigua hecha en HTML.",
        DatosTec:    "Sistema de gestión de contenidos (CMS), montado en un servidor Apache, esta programado utilizando PHP como base, tambien utiliza MYSQL como base de datos.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/wordpress.svg", Text: "CMS WordPress"},
            {Img: "assets/icons/apache.svg",    Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",     Text: "Base de datos MYSQL"},
        ],
        Links : [
            {Link: "https://www.pizzeriadelsol.cl/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_23.jpg",
        Titulo:      "Sitio Web Mundo raintxe",
        Descripcion: "Creación del sitio en wordpress a partir de la versión antigua hecha en wordpress, pero esta versión antigua tenia incompatibilidades con los plugins instalados, por lo que se solicitó una version hecha desde 0.",
        DatosTec:    "Sistema de gestión de contenidos (CMS), montado en un servidor Apache, esta programado utilizando PHP como base, tambien utiliza MYSQL como base de datos.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/wordpress.svg", Text: "CMS WordPress"},
            {Img: "assets/icons/apache.svg",    Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",     Text: "Base de datos MYSQL"},
        ],
        Links : [
            {Link: "https://www.mundoraintxe.com", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_24.jpg",
        Titulo:      "Sitio Web Cosami",
        Descripcion: "Creación del sitio en wordpress a partir de una maqueta y utilizando otros sitios del mismo tipo como referencia.",
        DatosTec:    "Sistema de gestión de contenidos (CMS), montado en un servidor Apache, esta programado utilizando PHP como base, tambien utiliza MYSQL como base de datos.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/wordpress.svg", Text: "CMS WordPress"},
            {Img: "assets/icons/apache.svg",    Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",     Text: "Base de datos MYSQL"},
        ],
        Links : [
            {Link: "https://cosamiweb.com/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_21.jpg",
        Titulo:      "Sitio Web Rifo y Compañía Ltda",
        Descripcion: "Creación del sitio en wordpress clonando lo que ya tenia hecho en HTML.",
        DatosTec:    "Sistema de gestión de contenidos (CMS), montado en un servidor Apache, esta programado utilizando PHP como base, tambien utiliza MYSQL como base de datos.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/wordpress.svg", Text: "CMS WordPress"},
            {Img: "assets/icons/apache.svg",    Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",     Text: "Base de datos MYSQL"},
        ],
        Links : [
            {Link: "https://www.rifoseguros.cl/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_20.jpg",
        Titulo:      "Sitio Web Animaciones infantiles Payasito Cascabel",
        Descripcion: "Creación del sitio en wordpress a partir de una maqueta en jpg.",
        DatosTec:    "Sistema de gestión de contenidos (CMS), montado en un servidor Apache, esta programado utilizando PHP como base, tambien utiliza MYSQL como base de datos.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/wordpress.svg", Text: "CMS WordPress"},
            {Img: "assets/icons/apache.svg",    Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",     Text: "Base de datos MYSQL"},
        ],
        Links : [
            {Link: "https://www.payasitocascabel.cl/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_25.jpg",
        Titulo:      "Sitio Web Fonda Carrera",
        Descripcion: "Creación del sitio en wordpress a partir de reuniones y solicitudes del cliente, se reciben los bosquejos y una especie de maqueta con lo que se había negociado.",
        DatosTec:    "Sistema de gestión de contenidos (CMS), montado en un servidor Apache, esta programado utilizando PHP como base, tambien utiliza MYSQL como base de datos.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/wordpress.svg", Text: "CMS WordPress"},
            {Img: "assets/icons/apache.svg",    Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",     Text: "Base de datos MYSQL"},
        ],
        Links : [
            {Link: "https://fondacarrera.com/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_6.jpg",
        Titulo:      "Plataforma Mantenlubric",
        Descripcion: "Este sistema está enfocado a la gestión de lubricación de las máquinas y sus puntos, todo se gestiona a través de contratos donde se indica el número de lubricaciones dentro del año, además poder programas mantenciones preventivas o de emergencia. Posee transacciones para gestionar a los usuarios (con un control de permisos según sus roles), las máquinas, los trabajadores, las bodegas, las compras y ventas, los vendedores y sus negociaciones, entre otras.",
        DatosTec:    "Plataforma monolítica programada en PHP puro, utiliza una base de datos MYSQL para guardar los datos, se utiliza Bootstrap 3 para el apartado visual, javascript, jquery y otras librerías similares para la parte funcional, el sistema esta montado en un servidor Apache Estandar.",
        DescCorta:   "",
        Tipo:        "Plataforma",
        Tecnologias : [
            {Img: "assets/icons/apache.svg",    Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",     Text: "Base de datos MYSQL"},
            {Img: "assets/icons/html-5.svg",    Text: "HTML-5"},
            {Img: "assets/icons/css-3.svg",     Text: "CSS-3"},
            {Img: "assets/icons/bootstrap.svg", Text: "Bootstrap 3"},
            {Img: "assets/icons/js.svg",        Text: "Javascript"},
            {Img: "assets/icons/jquery.svg",    Text: "Jquery"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Trabajo_Imagenes/tree/main/Plataforma%20Mantenlubric", Icon: "fab fa-github", Text: "Documentación"},
            {Link: "https://www.simyl.cl/",                                                            Icon: "fas fa-link",   Text: "Sitio web de la empresa"},
        ]
    },
    {
        IMG:         "assets/project/img_22.jpg",
        Titulo:      "Sitio Web Simyl",
        Descripcion: "Creación del sitio en wordpress a partir de la versión antigua hecha también en wordpress.",
        DatosTec:    "Sistema de gestión de contenidos (CMS), montado en un servidor Apache, esta programado utilizando PHP como base, tambien utiliza MYSQL como base de datos.",
        DescCorta:   "",
        Tipo:        "SitioWeb",
        Tecnologias : [
            {Img: "assets/icons/wordpress.svg", Text: "CMS WordPress"},
            {Img: "assets/icons/apache.svg",    Text: "Servidor Apache"},
            {Img: "assets/icons/php.svg",       Text: "Sistema programado en PHP"},
            {Img: "assets/icons/mysql.svg",     Text: "Base de datos MYSQL"},
        ],
        Links : [
            {Link: "https://www.simyl.cl/", Icon: "fas fa-link", Text: "Sitio Web"},
        ]
    },
    {
        IMG:         "assets/project/img_54.jpg",
        Titulo:      "Informe 5 Minutos",
        Descripcion: "Informe que permite descargar la información en bruto generada por la plantilla Inforturno, para su posterior uso en la generación de tablas dinámicas y gráficos, este archivo se conecta a una base de datos access a través del servicio de Origenes de bases de Datos (ODBC) del sistema operativo para obtener los datos.",
        DatosTec:    "Planilla que obtiene sus datos desde una base de datos access a través del ODBC de windows, luego organiza los datos, crea graficos, tablas y otras funcionalidades programadas utilizando Visual Basic.",
        DescCorta:   "",
        Tipo:        "Excel",
        Tecnologias : [
            {Img: "assets/icons/excel.svg",   Text: "Excel"},
            {Img: "assets/icons/access.svg",  Text: "Conexion de BD Access"},
            {Img: "assets/icons/macros.svg",  Text: "Uso de Macros"},
            {Img: "assets/icons/vb.svg",      Text: "Funcionalidad programada en Visual Basic"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/InfoTurno", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_55.jpg",
        Titulo:      "Horas extras",
        Descripcion: "Archivo para cotejar las horas extras informadas con las horas extras de la plataforma de marcaje, este archivo se conecta a una base de datos access a través del servicio de Origenes de bases de Datos (ODBC) del sistema operativo para obtener los datos.",
        DatosTec:    "Planilla que obtiene sus datos desde una base de datos access a través del ODBC de windows, luego organiza los datos, crea graficos, tablas y otras funcionalidades programadas utilizando Visual Basic.",
        DescCorta:   "",
        Tipo:        "Excel",
        Tecnologias : [
            {Img: "assets/icons/excel.svg",   Text: "Excel"},
            {Img: "assets/icons/access.svg",  Text: "Conexion de BD Access"},
            {Img: "assets/icons/macros.svg",  Text: "Uso de Macros"},
            {Img: "assets/icons/vb.svg",      Text: "Funcionalidad programada en Visual Basic"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/InfoTurno", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_56.jpg",
        Titulo:      "Info Roquefort",
        Descripcion: "Archivo con el cual la empresa Roquefort le facturaba a Viña Concha y Toro.",
        DatosTec:    "Planilla resumen que entrega resumenes en base de los datos ingresados manualmente.",
        DescCorta:   "",
        Tipo:        "Excel",
        Tecnologias : [
            {Img: "assets/icons/excel.svg",   Text: "Excel"},
            {Img: "assets/icons/macros.svg",  Text: "Uso de Macros"},
            {Img: "assets/icons/vb.svg",      Text: "Funcionalidad programada en Visual Basic"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/InfoTurno", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_57.jpg",
        Titulo:      "Infoturno",
        Descripcion: "Plantilla para hacer el ingreso de las detenciones de las lineas de produccion al interior de la planta, este archivo se conecta a una base de datos access a través del servicio de Origenes de bases de Datos (ODBC) del sistema operativo para obtener y guardar los datos.",
        DatosTec:    "Planilla que obtiene sus datos desde una base de datos access a través del ODBC de windows, luego organiza los datos, crea graficos, tablas y otras funcionalidades programadas utilizando Visual Basic.",
        DescCorta:   "",
        Tipo:        "Excel",
        Tecnologias : [
            {Img: "assets/icons/excel.svg",   Text: "Excel"},
            {Img: "assets/icons/access.svg",  Text: "Conexion de BD Access"},
            {Img: "assets/icons/macros.svg",  Text: "Uso de Macros"},
            {Img: "assets/icons/vb.svg",      Text: "Funcionalidad programada en Visual Basic"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/InfoTurno", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_58.jpg",
        Titulo:      "Resumen",
        Descripcion: "Informe de analisis gerencial con distintas vistas, donde muestra gráficos por tipo de detenciones, por tipos de cambios, producción por tipo de envase, etc. Este archivo se conecta a una base de datos access a través del servicio de Origenes de bases de Datos (ODBC) del sistema operativo para obtener los datos.",
        DatosTec:    "Planilla que obtiene sus datos desde una base de datos access a través del ODBC de windows, luego organiza los datos, crea graficos, tablas y otras funcionalidades programadas utilizando Visual Basic.",
        DescCorta:   "",
        Tipo:        "Excel",
        Tecnologias : [
            {Img: "assets/icons/excel.svg",   Text: "Excel"},
            {Img: "assets/icons/access.svg",  Text: "Conexion de BD Access"},
            {Img: "assets/icons/macros.svg",  Text: "Uso de Macros"},
            {Img: "assets/icons/vb.svg",      Text: "Funcionalidad programada en Visual Basic"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/InfoTurno", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_59.jpg",
        Titulo:      "Resumen Linea",
        Descripcion: "Informe de análisis gerencial, muestra los datos agrupados de distintas formas (tipos de tiempo, tipo de produccion, tipo de enevase, tipo de caja, etc) representado en valores y porcentajes. . Este archivo se conecta a una base de datos access a través del servicio de Origenes de bases de Datos (ODBC) del sistema operativo para obtener los datos.",
        DatosTec:    "Planilla que obtiene sus datos desde una base de datos access a través del ODBC de windows, luego organiza los datos, crea graficos, tablas y otras funcionalidades programadas utilizando Visual Basic.",
        DescCorta:   "",
        Tipo:        "Excel",
        Tecnologias : [
            {Img: "assets/icons/excel.svg",   Text: "Excel"},
            {Img: "assets/icons/access.svg",  Text: "Conexion de BD Access"},
            {Img: "assets/icons/macros.svg",  Text: "Uso de Macros"},
            {Img: "assets/icons/vb.svg",      Text: "Funcionalidad programada en Visual Basic"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/InfoTurno", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_60.jpg",
        Titulo:      "Informe Supervisión",
        Descripcion: "Informe con varios resúmenes orientados a la supervisión, básicamente muestra resúmenes de velocidades, produccion, tiempos de cambios, tiempos muertos y las distintas mermas generadas durante la producción.",
        DatosTec:    "Planilla que obtiene sus datos desde una base de datos access a través del ODBC de windows, luego organiza los datos, crea graficos, tablas y otras funcionalidades programadas utilizando Visual Basic.",
        DescCorta:   "",
        Tipo:        "Excel",
        Tecnologias : [
            {Img: "assets/icons/excel.svg",   Text: "Excel"},
            {Img: "assets/icons/access.svg",  Text: "Conexion de BD Access"},
            {Img: "assets/icons/macros.svg",  Text: "Uso de Macros"},
            {Img: "assets/icons/vb.svg",      Text: "Funcionalidad programada en Visual Basic"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Descontinuados-Excel", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_61.jpg",
        Titulo:      "Informe MTBC",
        Descripcion: "Informe enfocado en los atrasos en la producción respecto a la planificación de programación.",
        DatosTec:    "Planilla que obtiene sus datos desde una base de datos access a través del ODBC de windows, luego organiza los datos, crea graficos, tablas y otras funcionalidades programadas utilizando Visual Basic.",
        DescCorta:   "",
        Tipo:        "Excel",
        Tecnologias : [
            {Img: "assets/icons/excel.svg",   Text: "Excel"},
            {Img: "assets/icons/access.svg",  Text: "Conexion de BD Access"},
            {Img: "assets/icons/macros.svg",  Text: "Uso de Macros"},
            {Img: "assets/icons/vb.svg",      Text: "Funcionalidad programada en Visual Basic"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Descontinuados-Excel", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_62.jpg",
        Titulo:      "Informe IPP",
        Descripcion: "Informe con el indice de pedido perfecto, es un informe enfocado en la gestión de los pedidos completos y los pedidos incompletos, verificando el motivo por el cual no pudieron ser completados, para asi a futuro no volver a cometer ese error (relacionado a la metodologia TPM).",
        DatosTec:    "Planilla que obtiene sus datos desde una base de datos access a través del ODBC de windows, luego organiza los datos, crea graficos, tablas y otras funcionalidades programadas utilizando Visual Basic.",
        DescCorta:   "",
        Tipo:        "Excel",
        Tecnologias : [
            {Img: "assets/icons/excel.svg",   Text: "Excel"},
            {Img: "assets/icons/access.svg",  Text: "Conexion de BD Access"},
            {Img: "assets/icons/macros.svg",  Text: "Uso de Macros"},
            {Img: "assets/icons/vb.svg",      Text: "Funcionalidad programada en Visual Basic"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Descontinuados-Excel", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },
    {
        IMG:         "assets/project/img_63.jpg",
        Titulo:      "Resumen Averias",
        Descripcion: "Informe hecho para el área de taller mecánico y eléctrico, mostrando la cantidad de tiempos por avería, el motivo y su solución.",
        DatosTec:    "Planilla que obtiene sus datos desde una base de datos access a través del ODBC de windows, luego organiza los datos, crea graficos, tablas y otras funcionalidades programadas utilizando Visual Basic.",
        DescCorta:   "",
        Tipo:        "Excel",
        Tecnologias : [
            {Img: "assets/icons/excel.svg",   Text: "Excel"},
            {Img: "assets/icons/access.svg",  Text: "Conexion de BD Access"},
            {Img: "assets/icons/macros.svg",  Text: "Uso de Macros"},
            {Img: "assets/icons/vb.svg",      Text: "Funcionalidad programada en Visual Basic"},
        ],
        Links : [
            {Link: "https://github.com/tenshi98/Descontinuados-Excel", Icon: "fab fa-github", Text: "Documentación"},
        ]
    },



];