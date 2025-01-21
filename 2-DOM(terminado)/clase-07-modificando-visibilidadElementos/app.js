//const title = document.querySelector("h1")
//title.textContent = "Hello, World!"
//title.style.color = "green"

//const menu = document.querySelector("menu")

//tener cuidado al aplicar los style desde java script, porque se escriben en linea en HTML y los estilos en linea tienen prioridad sobre las clases o id
//menu.style.backgroundColor = "green"
//menu.style.fontSize = "25px"

//cambiamos la case de menu por main menu y se aplican los esilos de la clase"main-menu" por sobre los estilos que ya tenia, logicamente, estamos cambiando la clase
//const menu = document.querySelector("menu")
//menu.className = "main-menu"

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


