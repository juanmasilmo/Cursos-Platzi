//patron de diseño singleton
//solo se puede crear una instancia de la clase
//se crea una sola vez
//se puede acceder a la instancia desde cualquier parte del codigo
/*
como implementar un singleton en javascript
1. crear el costructor privado
2. crear un metodo estatico que llame al constructor privado y guarde la instancia en una variable estatica
*/


class Singleton {
    static instance = undefined;
    constructor(version) {
        this.version = this.version;
        
    }
    static getInstance(version){
        if(!Singleton.instance){
            Singleton.instance = new Singleton(version);
        }
        return Singleton.instance;
    }
}

function appSingleton() {
    const singleton1 = Singleton.getInstance("version-1");
    const singleton2 = Singleton.getInstance("version-2");

    console.log(singleton1===singleton2);
}

appSingleton();