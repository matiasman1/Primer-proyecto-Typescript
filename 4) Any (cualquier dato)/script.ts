//Any
let disney:any

//String
disney="Star wars, Marvel"
//Typescript infiere que disney es una cadena, y me permite concatenarle otra
disney=disney.concat(" y Fox")
const stringDiv = document.getElementById("string")

if (stringDiv) {
    stringDiv.innerHTML += `<p>Disney actualmente es ${disney}</p>`
} else {
    console.error("No se encontró el elemento con id 'string'.")
}

// Number

disney=208400000000
//Typescript infiere que disney es un numero, y me permite pasarlo a exponencial
disney=disney.toExponential(3)
const numberDiv= document.getElementById("number")

if (numberDiv) {
    numberDiv.innerHTML += `<p>Disney vale unos ${disney} dolares</p>`
}else{
    console.error("No se encontró el elemento con id 'number'.");
}

//Boolean

disney=true
//Typescript infiere que disney es un booleano, y me permite obtener su valor primitivo
disney.valueOf()
const booleanDiv = document.getElementById("boolean");

if (booleanDiv) {
    booleanDiv.innerHTML += `<p>¿Disney?: ${disney ? "Sí" : "No"}</p>`;
} else {
    console.error("No se encontró el elemento con id 'boolean'.");
}


