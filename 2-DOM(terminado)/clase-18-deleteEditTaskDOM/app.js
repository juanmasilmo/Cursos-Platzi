
const taskForm = document.getElementById("task-form");
console.log(taskForm)

const taskList = document.getElementById("task-list");
console.log(taskList)

loadTaskLocalStorage()

taskForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const taskInput = document.getElementById('task-input')

    const task = taskInput.value
    console.log(task)
    if (task) {
        taskList.append(createTaskElement(task))
        saveTasksLocalStorage(task)
        taskInput.value = ''
        taskInput.focus()
    }
})

function createTaskElement(task) {
    const li = document.createElement('li')
    li.textContent = task
    li.append(createButton('❌', 'delete-btn'), createButton('✏️', 'edit-btn'))
    return li
}

function createButton(text, className) {
    const btn = document.createElement('span')
    btn.textContent = text
    btn.className = className
    return btn
}

taskList.addEventListener("click", (event) => {
    console.log(event.target)
    if (event.target.classList.contains("delete-btn")) {
        deleteTask(event.target.parentElement)
        //event.target.parentNode.remove() //elimina directamente sin funcion
    }
    else if (event.target.classList.contains("edit-btn")) {
        editTask(event.target.parentElement)
    }

})

function deleteTask(taskItem) {
    if (confirm("Estas seguro de borrar esta tarea?")) {

        taskItem.remove()//elimina la tarea seleccionada
        updateLocalStorage();
    }
}

function editTask(taskItem) {
    const newTask = prompt("Edita la tarea: ", taskItem.firstChild.textContent);
    if (newTask !== null) {
        taskItem.firstChild.textContent = newTask;
        updateLocalStorage();
    }
}

//guardar en el localstorage
function saveTasksLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]")// se crea la cons tasks y se asigna el valor en formato json o a

    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadTaskLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || "[]";
    tasks.forEach((task) => {
        taskList.appendChild(createTaskElement(task))
    });
}

function updateLocalStorage() {
    const tasks = Array.from(taskList.querySelectorAll("li")).map((li) => li.firstChild.textContent);// cuando se usa el querySelectorAll trae el nodo de lo que pidas, en este caso "li", pero esto no se puede manipular directamente, entonces para poder hacerlo, para poder manipular lo que tenemos usamos array.from y la ubicacion, entonces esto transforma la lista de nodos en un array y el array si podemos manipular, eliminar o editar, etc.
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks)
}

const themeToggleBtn = document.getElementById("toggle-theme-btn");

themeToggleBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme");

    const theme = document.body.classList.contains("dark-theme") ? "dark" : "light"
    console.log(theme)
    localStorage.setItem("theme", theme);
})
const currentTheme = localStorage.getItem("theme")
console.log(currentTheme)
if (currentTheme === "dark"){
    (document.body.classList.add ("dark-theme")
)}