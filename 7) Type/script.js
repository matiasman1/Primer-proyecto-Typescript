var persona = {
    nombre: "Matias",
    edad: 24,
    leeComics: true
};
var typeDiv = document.getElementById("type");
if (typeDiv) {
    typeDiv.innerHTML += "<h3>Persona:</h3>";
    typeDiv.innerHTML += "<p>nombre:".concat(persona.nombre, "</p>");
    typeDiv.innerHTML += "<p>edad:".concat(persona.edad, "</p>");
    typeDiv.innerHTML += "<p>lee comics:".concat(persona.leeComics ? "Si" : "No", "</p>");
}
else {
    console.error("No se encontró el elemento con id 'type'.");
}
var persona2 = {
    nombre: "Rafael",
    edad: 28
};
var typeDiv = document.getElementById("type");
if (typeDiv) {
    typeDiv.innerHTML += "<h3>Persona:</h3>";
    typeDiv.innerHTML += "<p>nombre:".concat(persona2.nombre, "</p>");
    typeDiv.innerHTML += "<p>edad:".concat(persona2.edad, "</p>");
    //Si en persona no hay definido un leeComics, automaticamente se dice No
    typeDiv.innerHTML += "<p>lee comics:".concat(persona2.leeComics ? "Si" : "No", "</p>");
}
else {
    console.error("No se encontró el elemento con id 'type'.");
}
