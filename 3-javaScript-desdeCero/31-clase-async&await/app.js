//promises async y await
/*function fetchData(){
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error=>console.log(error))
}
fetchData()//se puede llamar desde la consola del navegador, es buena idea probar cada tanto, para saber que nuestros datos se estan guardando, etc*/

async function fetchData(){
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character")
        let data = await response.json()
        console.log(data) 
    } catch (error) {
        console.log(error)
    }
}
//fetchData()//se puede llamar desde la consola del navegador, es buena idea probar