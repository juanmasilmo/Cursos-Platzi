//todo lo que este despues de aca, se ejecuto en la consola del navegador
//el get element by id, es unico, es decir, no pueden haber 2 elementos con el mismo id
document.getElementById("app-tittle")
//queryselector hay queponer # para que el document sepa que estamos buscando algo con un id
document.querySelector("#app-tittle")
//en el caso de abajo trae el primer elemento que encuentre con la etiqueta p
document.querySelector("p")
//traemos una coleccion de elementos que tengan esa clase "menu-items"
document.getElementsByClassName("menu-items")
// traemos una coleccion de elementos con el mismo tagname
document.getElementsByTagName("p")
// traemos con querySelectorAll trae una lista de nodos( elementos html), con los nodos puede trae por clases como es el ejemplo de abajo que la clase es ".menu-items", puede traer por texto
document.querySelectorAll(".menu-items");


