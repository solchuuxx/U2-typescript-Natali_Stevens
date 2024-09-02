//3. Interfaz básica
//Crea una interfaz Person con las propiedades firstName (string) y lastName (string). Declara una variable person de tipo Person y asígnale un objeto con tu nombre y apellido.

interface Person1 {
    firstName: string;
    lastName: string;
}

let person1: Person1 = {
    firstName: "Natali",
    lastName: "Stevens"
};

console.log(person1);
