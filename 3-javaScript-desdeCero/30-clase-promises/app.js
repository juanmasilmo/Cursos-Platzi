const usersDB = [
    {
        user: "juancho",
        pass: "123",
    },
    {
        user: "lolo",
        pass: "159",
    },
    {
        user: "pepe",
        pass: "987",
    },
    {
        user: "fulano",
        pass: "123",
    },
]

const usersTimeline = [
    {
        username: "juancho",
        date: "2022-01-01",
        post: "Aprendiendo javaScript"
    },
    {
        username: "fulano",
        date: "2022-01-01",
        post: "Aprendiendo Objetos en Javascript"
    },
    {
        username: "pepe",
        date: "2022-01-01",
        post: "Entendiendo javaScript"
    }
]

const user = prompt("Ingresa Usuario")
const pass = prompt("Ingresa Password")

signIn(user,pass);

function signIn(user, pass){
    if(login(user,pass)){
       alert("Bienvenido");
        verTimeLine()
    }else{
        alert("Usuario incorrecto");
    }
}

function login(user, pass) {
    for (let i = 0; i < usersDB.length; i++) {
        if (usersDB[i].user === user && usersDB[i].pass === pass) {    
            return true;
        }
    }
    return false; // Si termina de revisar todos los usuarios y no encuentra coincidencia, retorna false.
}

function verTimeLine() {
    for (let i = 0; i < usersTimeline.length; i++) {
        console.log(usersTimeline[i])
    }
}





