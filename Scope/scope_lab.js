// Ámbito global
var globalVar = "Soy una variable global";
let globalLet = "También soy global, pero con ámbito de let";
const globalConst = "Soy una constante global";


{
// Ámbito de bloque
var blockVar = "Soy un var con ámbito de bloque";
let blockLet = "Soy un let con ámbito de bloque";
const blockConst = "Soy un const con ámbito de bloque";
}


// Alcance global
console.log(globalVar); // Salida: "Soy una variable global"
console.log(globalLet); // Salida: "También soy global, pero con alcance de let"
console.log(globalConst); // Salida: "Soy una constante global"

//Block Scope, Nota: Un ReferenceError ocurre cuando el código intenta usar una variable que no ha sido declarada o está fuera de su ámbito, lo que impide el acceso o la ejecución adecuada.
// console.log(blockVar);
// console.log(blockLet);

function show(){
var functionVar = "Soy una var con alcance de bloque";
let functionLet = "Soy un let con alcance de bloque";
const functionConst = "Soy un const con alcance de bloque";
}
show();

console.log(functionVar); // Lanza ReferenceError
console.log(functionLet); // Lanza ReferenceError
console.log(functionConst); // Lanza ReferenceError
