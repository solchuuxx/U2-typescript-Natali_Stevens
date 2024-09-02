//4. Interfaz opcional
//Modifica la interfaz Person del ejercicio anterior para que la propiedad lastName sea opcional. Declara un objeto que solo incluya firstName.

interface Person2 {
    firstName: string;
    lastNamee?: string; // opcional
}

let person: Person2 = {
    firstName: "Juan"
};

console.log(person); 