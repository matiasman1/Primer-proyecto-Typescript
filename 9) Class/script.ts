class Videojuego{
    titulo: string
    studio?: string
    plataformas?: string[]
    precio?: number

    constructor(titulo: string, studio: string, plataformas?: string[], precio?: number){
        this.titulo = titulo
        this.studio = studio
        this.plataformas = plataformas
        this.precio = precio
    }

    public verPrecio():String{
        if (this.precio!==undefined){
            return `El precio de "${this.titulo}" es de $${this.precio}`
        }else{
            return "El juego todavia no tiene precio"
        }
    }

    public stringPlataformas():String{
        if (this.plataformas!==undefined){
            return this.plataformas.join(", ")
        }else{
            return "Todavia no es lanzado en ninguna plataforma"
        }
        
    }
}

let Hades = new Videojuego("HADES", "Supergiant Games", ["PS4", "PS5", "XBOX ONE","XBOX Series S/X","Nintendo Switch", "Steam"],24.99)
let HalfLife3 = new Videojuego("Half-Life 3", "Valve")

var classDiv = document.getElementById("class")
if (classDiv) {
    classDiv.innerHTML += "<h3>Juego:</h3>"
    classDiv.innerHTML += `<p>titulo:${Hades.titulo}</p>`
    classDiv.innerHTML += `<p>Studio:${Hades.studio}</p>`
    classDiv.innerHTML += `<p>Plataformas:${Hades.stringPlataformas()}</p>`
    classDiv.innerHTML += `<p>Precio:${Hades.precio}</p>`
    classDiv.innerHTML += `<p>${Hades.verPrecio()}</p>`
    classDiv.innerHTML += "<h3>Juego:</h3>"
    classDiv.innerHTML += `<p>titulo:${HalfLife3.titulo}</p>`
    classDiv.innerHTML += `<p>Studio:${HalfLife3.studio}</p>`
    classDiv.innerHTML += `<p>Plataformas:${HalfLife3.stringPlataformas()}</p>`
    classDiv.innerHTML += `<p>Precio:${HalfLife3.precio}</p>`
    classDiv.innerHTML += `<p>${HalfLife3.verPrecio()}</p>`
 
}
else {
    console.error("No se encontró el elemento con id 'class'.")
}


Hades.verPrecio()