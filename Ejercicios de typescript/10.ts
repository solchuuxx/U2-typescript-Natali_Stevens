//10. Herencia de clases
//Crea una clase ElectricCar que extienda de Car e incluya una propiedad adicional batteryLife (vida de la batería) de tipo número. Añade un método charge() que imprima un mensaje diciendo que el coche se está cargando.

class Car {
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

class ElectricCar extends Car {
    batteryLife: number;

    constructor(make: string, batteryLife: number) {
        super(make);
        this.batteryLife = batteryLife;
    }

    charge(): void {
        console.log(`Charging the ${this.getMake()}`);
    }
}

const myElectricCar = new ElectricCar("Tesla", 100);
myElectricCar.drive(); 
myElectricCar.charge(); 
