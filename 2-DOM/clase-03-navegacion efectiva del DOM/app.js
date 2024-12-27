document;
//guardamos en una constante lo que se obtiene mediante el getElementById se guarda lo que contiene el UL y los hijos LI como una coleccion de elementos html
const parent = document.getElementById("parent");
console.log(parent);
//aca guardamos lo que se obtiene de parent.children en la constante children
const children = parent.children;
//para saber que trae, hacemos el console.log y mostramos los hijos, trae una coleccion de elementos html, trae todos los hijos
console.log(children);
// si queremos traer solo el primer hijo hacemos lo siguiente
const firstChild = parent.firstElementChild;
console.log(firstChild);
//con el metodo children[] puedo elegir especificamente a que hijo quiero llegar
const nChild = parent.children[1];
console.log(nChild);
//ultimo hijo
const lastChild = parent.lastElementChild;
console.log(lastChild);
// este metodo trae el ultimo item del array de children -1, porque menos 1, porque los hijos son 4 pero empiezan en cero, por lo que el largo del array es 4, pero el ultimo es el length -1 o sea 3
const NChild = parent.children[parent.children.length - 1];
console.log(parent.children.length - 1);
console.log(NChild);
// previousElementSibling es el hno, es decir, el que esta al mismo nivel jerarquico, en este caso despues del tag menu, esta el tag p y el tag ul en el mismo nivel de indentacion, pero aunque este indentado igualmente no estan anidados o bien estan anidados al mismo nivel
const prevSibling = parent.previousElementSibling;
console.log(prevSibling);
// nextElementSibling es el hno, es decir, el que esta al mismo nivel jerarquico, en este caso despues del tag menu, esta el tag p y el tag ul en el mismo nivel de indentacion, pero aunque este indentado igualmente no estan anidados o bien estan anidados al mismo nivel
const nextSibling = parent.nextElementSibling;
console.log(nextSibling);

/*----------- 
para probar
-----------
/* La navegación entre nodos recibe el nombre de 
traversing  DOM, y consiste en recorrer los nodos 
basandonos en la jerárquia de padre, hijos, hermanos. */

//* Navegación del elemento padre a hijo

//const menu = document.querySelector('.menu')
// console.log(menu.children)
/*
 children → nos retorna un HTMLCollection con los nodos hijos del nodo padre.
*/

//? Acceder al primer nodo → firstElementChild
//console.log(menu.firstElementChild.innerHTML)

//? Acceder a un node específico → []
//console.log(menu.children[1].innerHTML);

//? Acceder al último elemento → lastElementChild
//console.log(menu.lastElementChild.innerHTML);

//* Navegación de un nodo hijo a padre
//const link = document.querySelector('.link')
/*parentElement → nos retorna su nodo padre */
//console.log(link.parentElement)
// Para conocer el abuelo de ese nodo podemos usar nuevamente parentElement y asi sucesivamente .
//console.log(link.parentElement.parentElement)

//* Navegación entre nodos hermanos
/*
previousSiblind → Hermano anterior
nextSibling → Hermano siguiente

console.log(link)
console.log(link.previousElementSibling.textContent)
console.log(link.nextElementSibling.textContent)
```![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/519099cb-ab4b-4ace-83bd-688d8f9ee34e/b08c5ecb-a8f5-45e2-966d-970640b5d4ab/Untitled.png)

document.addEventListener('DOMContentLoaded', () => {
    const parent = document.getElementById("parent");
    console.log(parent);

    const parentChildren = parent.children;
    console.log(parentChildren);

    const secondChild = parent.children[1];  // Cambiado a `children[1]` ya que `secondElementChild` no es válido
    console.log(secondChild);

    const lastChild = parent.lastElementChild;
    console.log(lastChild);

    const previousSibling = parent.previousElementSibling;
    console.log(previousSibling);

    const nextSibling = parent.nextElementSibling;
    console.log(nextSibling);
});

LISTA DE METODOS PARA NAVEGAR EL DOM:
// children; // live HTMLCollection // childNodes; // live NodeList // firstChild; // live NodeList // firstElementChild; // non-live HTMLCollection // lastChild; // live NodeList // lastElementChild; // non-live HTMLCollection // previousSibling; // live NodeList // previousElementSibling; // non-live HTMLCollection // nextSibling; // live NodeList // nextElementSibling; // non-live HTMLCollection

LISTA PARA NAVEGAR EL DOM PERO DESDE LOS PARENTS:

// parentNode; // live NodeList // parentElement; // non-live HTMLCollection // closest(selector); // este último es el más utilizado


// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElementSibling; // non-live HTMLCollection

//7- SELECCIONAR PRIMER LI
const children2 = document.querySelector("li");
console.log("PRIMER LI")
console.log(children2);

//8- SELECCIONAR PADRE DE LA POSICION DONDE ESTOY (li)
const parent2 = children2.parentNode;
console.log("PADRE")
console.log(parent2);

//8- SELECCIONAR ELEMENTO PADRE
const grandParent = children2.parentElement;
console.log("PADRE")
console.log(grandParent);

//9- ELEMENTO MAS CERCANO QUE SE PARESCA O SEA MENU
const grandGrandParent = children2.closest("menu"); // este último es el más utilizado
console.log("ELEMENTO MAS CERCANO QUE SE PAREZCA O SEA MENU")
console.log(grandGrandParent);

// parentNode; // live NodeList
// parentElement; // non-live HTMLCollection
// closest(selector); // este último es el más utilizado

*/

const child2 = document.querySelector("li");
console.log("primer li", child2)

const parent3 = child2.parentNode;
console.log("este es el parent 3", parent3)
//console.log("padre", child2.parentNode)//son alternativas sin crear constantes
const grandParent = child2.parentElement
console.log("este es el grandparent", grandParent)
//console.log("padre", child2.parentElement)//son alternativas sin crear constantes

const grandGrandParent2 = child2.closest("menu")
console.log("este es el grandgrandparent2", grandGrandParent2)
//console.log("padre", child2.closest("menu"))//son alternativas sin crear constantes

