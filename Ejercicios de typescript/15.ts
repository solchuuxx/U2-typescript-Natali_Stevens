//15. Genericos(basico)
// Escribe una función genérica identity que tome un argumento de tipo T y devuelva el mismo valor. Usa esta función con diferentes tipos de datos.

function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<number>(5));
console.log(identity<string>("Hola"));
