//la herencia es una característica de la programación orientada a objetos que permite a una clase heredar los atributos y métodos de otra clase.

class Animal {
    patas: number;
    raza: string
    constructor(patas: number, raza: string) {
        this.patas = patas;
        this.raza = raza;
    }
    caminar(): void {
        console.log('Caminando');
    }
}

class Gato extends Animal {
    nombre: string;

    constructor(patas: number, raza: string, nombre: string) {
        super(patas, raza);
        this.nombre = nombre;
        this.miNombre();
    }

    maullar(): void {
        console.log('Miau');
    }

    miNombre(): void {
        console.log(`Mi nombre es ${this.nombre}`);
    }


}

const gatitoMichi = new Gato(3, 'raza', 'Michi');

// gatitoMichi.caminar();