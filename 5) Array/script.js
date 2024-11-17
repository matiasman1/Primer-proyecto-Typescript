console.log("Números:");
var numeros = [1, 2, 3, 4, 5];
numeros.push(6);
var numberDiv = document.getElementById("number");
if (numberDiv) {
    var numerosString = "[" + numeros.join(", ") + "]";
    numberDiv.innerHTML += "<p>".concat(numerosString, "</p>");
}
else {
    console.error("No se encontró el elemento con id 'number'.");
}
console.log("Cadenas:");
var strings = ["uno", "dos", "tres", "cuatro", "cinco"];
strings.pop();
var stringDiv = document.getElementById("string");
if (stringDiv) {
    var stringsString = "[" + strings.join(", ") + "]";
    stringDiv.innerHTML += "<p>".concat(stringsString, "</p>");
}
else {
    console.error("No se encontró el elemento con id 'string'.");
}
