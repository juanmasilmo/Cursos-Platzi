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

