// los type assertion permite al desarrollador indicarle al compilador de typescript que tipo de dato es una variable en un momento dado.
const data: any = 'todalainfo';

//forma 1
const longitud: number = (data as string).length;

//forma 2
const longitud2: number = (<string>data).length;

console.log(`forma 1: ${longitud}`);
console.log(`forma 2: ${longitud2}`);

