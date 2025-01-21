
const owner = 'Juan';
const address = 'Calle Falsa 123';


function dogGreetings(owner, address) {
    console.log(`Hola este es mi perro ${this.dogName}, yo me llamo ${owner} y vivo en ${address}`);
}

const dog = {
    dogName: 'Tommy'
};

dogGreetings.call(dog, owner, address);
dogGreetings.apply(dog, [owner, address]);
dogGreetings.bind(dog)(owner, address);