const h1 = document.querySelector("#app-tittle")
console.dir(h1)

h1.textContent = "H1 modificado dinamicamente"


const elemento = document.getElementById('miElemento');

// Con textContent:
console.log("aca visualizamos el texto con textContent: ", elemento.textContent); // Salida: "Este es un párrafo. Texto oculto."

// Con innerText:
console.log("aca visualizamos el texto con innerText: ", elemento.innerText); // Salida: "Este es un párrafo."