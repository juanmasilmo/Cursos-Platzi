const menu = document.querySelector("menu");
const button = document.querySelector("button");
const btnCrear = document.getElementById("btnCrear")

//por que aparece y desaparece, por toogle, significa alternar si existe la clase "invisible" la saca si no existe la agrega a las clases del menu
button.addEventListener("click", () => {
  menu.classList.toggle("invisible");
  //podemos hacer solamente .add en lugar de .toggle y solo la agregaria a la clase, asimismo con .remove, la eliminaria
  //menu.classList.add("invisible")
  //menu.classList.remove("menu")
  menu.classList.contains("invisible");
  console.log(menu.classList.contains("invisible")); //esto solamente comprueba si existe o no la clase, cuando hablamos de clases, estamos hablando de css. si existe la clase en la consola vamos a ver tru y sino false
});

const contentArea = document.getElementById("contentArea");
console.log(contentArea);
//contentArea.innerHTML= "<div><p>Parrafo dentro de un div, en teoria</p></div>" // en este caso me elimino el contenido dentro de la etiqueta con id ContentArea y agrego el div con el parrafo que le puse

//contentArea.insertAdjacentHTML("beforeend", "<div><p>parrafo dentro del div con insertAdjacentHTML y con beforeend</p></div>")

//contentArea.insertAdjacentHTML("beforebegin", "<div><p>parrafo dentro del div con insertAdjacentHTML y con beforeend</p></div>")
//tambien se usa afterbegin y afterend

const listArea = document.getElementById("listArea");
console.log(listArea);

//agrego al final sin especificar ubicacion un li con item 5 y para agregar un id se hace con comillas simples
//listArea.innerHTML += "<li id='Items'>Item 5</li>"
//esta forma innerHTML renderiza todo el contenedor padre y los hijos antes de agregar un nuevo elemento
//listArea.insertAdjacentHTML("beforeend","<li id='Items'>Item 6</li>" )
//esta forma insertAdjacentHTML agregar el nuevo elemento sin renderizar todo

//createElement es por partes, es mas prolijo pero mas largo

btnCrear.addEventListener("click", () => { //creo la funcion cuandop hace click
  const newLi = document.createElement("li");//creo la constante le asigno lo que necesito hacer, en este caso createElement
  newLi.textContent = "item 7"; //asigno el texto
  newLi.id = "items";//asigno un id, para que se apliquen los estilos css segun el id, en este caso el id es item
  listArea.appendChild(newLi);

  const newP = document.createElement("p")
  newP.textContent = "Parrafo creado con createElement y asignado por append";
  const sectionArea = document.getElementById("sectionArea")
  sectionArea.append(newP) // siempre sin especificar donde agrega al final de la seccion con el append lo mismo con el appendChild

})

const newItem = document.createElement("li")
newItem.textContent = "item creado por create element y agregado con prepend, lo agrega al inicio del elemento con el id listArea"
listArea.prepend(newItem)
const newItem2 = document.createElement("li")
newItem2.textContent = "item creado por create element y agregado con before, lo agrega antes del elemento con el id listArea"
listArea.before(newItem2)
const newItem3 = document.createElement("li")
newItem3.textContent = "item creado por create element y agregado con after, lo crea despues del elemento con id listArea"
newItem3.id = "items"
listArea.after(newItem3)

//listArea.remove()
//listArea.removeChild(listArea.firstElementChild)

//elimina el ultimo elemento hijo del list area
//listArea.removeChild(listArea.lastElementChild)