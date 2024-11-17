interface Persona{
    nombre: string,
    edad: number,
    leeComics: boolean
}

let persona: Persona = {
    nombre: "Matias",
    edad: 24,
    leeComics: true
}

let persona2: Persona = {
    nombre: "Rafael",
    edad: 28,
    leeComics: false
}

function comiquero(persona: Persona): String{
    return `${persona.nombre} ${persona.leeComics? "":"no"} lee comics `
}

var interfaceDiv = document.getElementById("type")
if (interfaceDiv) {
    interfaceDiv.innerHTML += "<h3>Persona:</h3>"
    interfaceDiv.innerHTML += `<p>nombre:${persona.nombre}</p>`
    interfaceDiv.innerHTML += `<p>edad:${persona.edad}</p>`
    interfaceDiv.innerHTML += `<p>lee comics:${persona.leeComics? "Si":"No"}</p>`
    interfaceDiv.innerHTML += `<p>${comiquero(persona)}</p>`
    interfaceDiv.innerHTML += "<h3>Persona:</h3>"
    interfaceDiv.innerHTML += `<p>nombre:${persona2.nombre}</p>`
    interfaceDiv.innerHTML += `<p>edad:${persona2.edad}</p>`
    interfaceDiv.innerHTML += `<p>lee comics:${persona2.leeComics? "Si":"No"}</p>`
    interfaceDiv.innerHTML += `<p>${comiquero(persona2)}</p>`
}
else {
    console.error("No se encontró el elemento con id 'type'.")
}