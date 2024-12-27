const menu = document.querySelector("menu")
const button = document.querySelector("button")

//por que aparece y desaparece, por toogle, significa alternar si existe la clase "invisible" la saca si no existe la agrega a las clases del menu
button.addEventListener("click", () => {
    menu.classList.toggle("invisible");
    //podemos hacer solamente .add en lugar de .toggle y solo la agregaria a la clase, asimismo con .remove, la eliminaria
    //menu.classList.add("invisible")
    //menu.classList.remove("menu")
    menu.classList.contains("invisible")
    console.log(menu.classList.contains("invisible")) //esto solamente comprueba si existe o no la clase, cuando hablamos de clases, estamos hablando de css. si existe la clase en la consola vamos a ver tru y sino false
});

const contentArea = document.getElementById("contentArea")
console.log(contentArea)
//contentArea.innerHTML= "<div><p>Parrafo dentro de un div, en teoria</p></div>" // en este caso me elimino el contenido dentro de la etiqueta con id ContentArea y agrego el div con el parrafo que le puse

contentArea.insertAdjacentHTML("beforeend", "<div><p>parrafo dentro del div con insertAdjacentHTML y con beforeend</p></div>")

//contentArea.insertAdjacentHTML("beforebegin", "<div><p>parrafo dentro del div con insertAdjacentHTML y con beforeend</p></div>") 
//tambien se usa afterbegin y afterend

const listArea = document.getElementById("listArea")
console.log(listArea)

//agrego al final sin especificar ubicacion un li con item 5 y para agregar un id se hace con comillas simples
//listArea.innerHTML += "<li id='Items'>Item 5</li>"
//esta forma innerHTML renderiza todo el contenedor padre y los hijos antes de agregar un nuevo elemento

// //esta forma insertAdjacentHTML agregar el nuevo elemento sin renderizar todo
