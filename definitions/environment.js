let greet = 'hola';

console.log(greet)

let name = process.env.NAME || 'sin nombre'
let web = process.env.WEB || 'no tengo web'
console.log( 'hola ' + name)
console.log( 'mi web es ' + web)