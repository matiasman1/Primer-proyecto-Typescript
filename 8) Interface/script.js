var persona = {
    nombre: "Matias",
    edad: 24,
    leeComics: true
};
var persona2 = {
    nombre: "Rafael",
    edad: 28,
    leeComics: false
};
function comiquero(persona) {
    return "".concat(persona.nombre, " ").concat(persona.leeComics ? "" : "no", " lee comics ");
}
var interfaceDiv = document.getElementById("interface");
if (interfaceDiv) {
    interfaceDiv.innerHTML += "<h3>Persona:</h3>";
    interfaceDiv.innerHTML += "<p>nombre:".concat(persona.nombre, "</p>");
    interfaceDiv.innerHTML += "<p>edad:".concat(persona.edad, "</p>");
    interfaceDiv.innerHTML += "<p>lee comics:".concat(persona.leeComics ? "Si" : "No", "</p>");
    interfaceDiv.innerHTML += "<p>".concat(comiquero(persona), "</p>");
    interfaceDiv.innerHTML += "<h3>Persona:</h3>";
    interfaceDiv.innerHTML += "<p>nombre:".concat(persona2.nombre, "</p>");
    interfaceDiv.innerHTML += "<p>edad:".concat(persona2.edad, "</p>");
    interfaceDiv.innerHTML += "<p>lee comics:".concat(persona2.leeComics ? "Si" : "No", "</p>");
    interfaceDiv.innerHTML += "<p>".concat(comiquero(persona2), "</p>");
}
else {
    console.error("No se encontró el elemento con id 'type'.");
}
