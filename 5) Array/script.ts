console.log("Números:");
let numeros: number[] = [1, 2, 3, 4, 5];
numeros.push(6);
const numberDiv = document.getElementById("number");

if (numberDiv) {
    let numerosString = "[" + numeros.join(", ") + "]";
    numberDiv.innerHTML += `<p>${numerosString}</p>`;
} else {
    console.error("No se encontró el elemento con id 'number'.");
}

console.log("Cadenas:");
let strings: string[] = ["uno", "dos", "tres", "cuatro", "cinco"];
strings.pop();
const stringDiv = document.getElementById("string");

if (stringDiv) {
    let stringsString = "[" + strings.join(", ") + "]";
    stringDiv.innerHTML += `<p>${stringsString}</p>`;
} else {
    console.error("No se encontró el elemento con id 'string'.");
}