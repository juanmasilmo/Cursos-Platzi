const menu = document.querySelector("menu");
const button = document.querySelector("button");
const btnCrear = document.getElementById("btnCrear");

//por que aparece y desaparece, por toogle, significa alternar si existe la clase "invisible" la saca si no existe la agrega a las clases del menu
button.addEventListener("click", () => {
  menu.classList.toggle("invisible");
  //podemos hacer solamente .add en lugar de .toggle y solo la agregaria a la clase, asimismo con .remove, la eliminaria
  //menu.classList.add("invisible")
  //menu.classList.remove("menu")
  menu.classList.contains("invisible");
  console.log(menu.classList.contains("invisible")); //esto solamente comprueba si existe o no la clase, cuando hablamos de clases, estamos hablando de css. si existe la clase en la consola vamos a ver tru y sino false
});

const container = document.querySelector(".menu");
console.log(container);

const btnMF = container.querySelector("#btn-MF");
console.log(btnMF);

container.addEventListener("mouseover", () => {
  container.style.backgroundColor = "blue";
});

container.addEventListener("mouseout", () => {
  //si dejo el background color vacio vuelve al color original o anterior
  //container.style.backgroundColor = "";
  //como en el mouseover, le agregue un style, con removeAttribute lo elimino
  container.removeAttribute("style");
});

// btnMF.addEventListener("click", () => {
//   alert("boton clickado!");
// });
const btnClkClbk = () => {
  alert("boton clickado!");
}
btnMF.addEventListener("click", btnClkClbk);

setTimeout(() => {
  btnMF.removeEventListener("click", btnClkClbk)
}, 3000)