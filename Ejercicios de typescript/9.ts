//9. Clase con propiedades privadas
///Modifica la clase Car para que la propiedad make sea privada. Añade un método getMake() que devuelva el valor de make. 10. Herencia de clases

class Car3 {
    private make: string;

    constructor(make: string) {
        this.make = make;
    }

    drive(): void {
        console.log(`Driving a ${this.make}`);
    }

    getMake(): string {
        return this.make;
    }
}

const myCar3 = new Car3("Toyota");
console.log(myCar3.getMake()); 
