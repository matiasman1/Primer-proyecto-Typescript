let persona = {
    nombre: "Matias",
    edad: 24,
    leeComics: true
}

var objectDiv = document.getElementById("object");
if (objectDiv) {
    objectDiv.innerHTML += "<p>Persona:</p>";
    objectDiv.innerHTML += `<p>nombre:${persona.nombre}</p>`;
    objectDiv.innerHTML += `<p>edad:${persona.edad}</p>`;
    objectDiv.innerHTML += `<p>lee comics:${persona.leeComics? "Si":"No"}</p>`;
 
}
else {
    console.error("No se encontró el elemento con id 'object'.");
}
