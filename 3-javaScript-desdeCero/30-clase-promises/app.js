//que son las promesas?
//una promesa es un objeto que se utiliza para manejar operaciones asíncronas
//que se pueden completar o fallar
//tienen 3 estados: pending
//fulfilled
//rejected

//manejan 2 callbacks: 
//resolve
//reject
//los callbacks se ejecutan en el estado correspondiente
//cuando la promesa esta fullfilled y en el callback resolve se ejecuta el then()
//cuando la promesa esta rejected y en el callback reject se ejecuta el catch()

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = true
        if (!operationSuccessful) {
            resolve('Operación exitosa')
        } else {
            reject('Operación fallida')
        }
    },2000)

})

promise
    .then((successMesage)=>{
        console.log(successMesage)
    })
    .catch((errorMesage)=>{
        console.log(errorMesage)
    })