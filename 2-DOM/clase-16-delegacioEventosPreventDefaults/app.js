const btn = document.querySelector(".btn-MF");

const btnclicked = (event) => {
  //event.target.hidden= true
  //si presiono desaparece el boton
  //event.target.style.display = "none";
  console.log(event)
  console.log(event.target)
  //console.log(event.target.autofocus(true))
  console.log(event.target.classList)
  //event.target.classList.add("btn-class")//agrago una clase nueva al boton
  console.log(event.target.textContent)
};

btn.addEventListener("click", btnclicked)



const form = document.getElementById("myForm");
//console.log(form)

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = form.elements["name"];
  console.log(nombre);// imprimo el input que tiene name "name"
  console.log(nombre.value);
})

/*const listItems = document.querySelectorAll("li");
console.log(listItems)

listItems.forEach((item)=>{
  item.addEventListener("click", (event) =>{
    console.log(event.target)
    event.target.classList.toggle("highlight");
  })//agrega a cada li del document la clase highlight, no es la mejor practica
})*/

const lists = document.querySelectorAll("ul");
console.log(lists);

lists.forEach(list => {//se hace una iteracion sobre cada ul que exista y se agrega la clase
  list.addEventListener("click", (event) => {
    event.target.closest("li").classList.toggle("highlight");
  });
});


/*const list = document.querySelectorAll("ul");
console.log(list);
  list.addEventListener("click", (event)=>{
  event.target.closest("li").classList.toggle("highlight");
});*/
//El error ocurre porque querySelectorAll() devuelve una NodeList (una colección de elementos), no un único elemento. No puedes añadir un event listener directamente a una NodeList.
