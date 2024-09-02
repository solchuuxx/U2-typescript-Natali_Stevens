//14. Type assertions
//Declara una variable de tipo any con un valor numérico y usa una aserción de tipo para tratarla como un string. Usa la propiedad “.length” en esta variable.


let value: any = 123;
let valueAsString: string = value as string;

console.log(valueAsString.length); // undefined, porque realmente es un número
