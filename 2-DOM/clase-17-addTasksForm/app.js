const taskForm = document.getElementById("task-form");

const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();// esto previene los eventos por default de los formularios cuando se presiona submit, es decir, se envia la informacion, en este caso se evita que se actualice la pagina
    const taskInput = document.getElementById("task-input");

    const task = taskInput.value.trim();// trim elimina los espacios en blanco
    console.log(task);
})