type Persona = {
    nombre: string,
    edad: number,
    leeComics?: boolean
}

let persona: Persona = {
    nombre: "Matias",
    edad: 24,
    leeComics: true
}

var typeDiv = document.getElementById("type");
if (typeDiv) {
    typeDiv.innerHTML += "<h3>Persona:</h3>";
    typeDiv.innerHTML += `<p>nombre:${persona.nombre}</p>`;
    typeDiv.innerHTML += `<p>edad:${persona.edad}</p>`;
    typeDiv.innerHTML += `<p>lee comics:${persona.leeComics? "Si":"No"}</p>`;
 
}
else {
    console.error("No se encontró el elemento con id 'type'.");
}


let persona2: Persona = {
    nombre: "Rafael",
    edad: 28
}

var typeDiv = document.getElementById("type");
if (typeDiv) {
    typeDiv.innerHTML += "<h3>Persona:</h3>";
    typeDiv.innerHTML += `<p>nombre:${persona2.nombre}</p>`;
    typeDiv.innerHTML += `<p>edad:${persona2.edad}</p>`;
    //Si en persona no hay definido un leeComics, automaticamente se dice No
    typeDiv.innerHTML += `<p>lee comics:${persona2.leeComics? "Si":"No"}</p>`;
 
}
else {
    console.error("No se encontró el elemento con id 'type'.");
}

