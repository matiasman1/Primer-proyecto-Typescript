var Videojuego = /** @class */ (function () {
    function Videojuego(titulo, studio, plataformas, precio) {
        this.titulo = titulo;
        this.studio = studio;
        this.plataformas = plataformas;
        this.precio = precio;
    }
    Videojuego.prototype.verPrecio = function () {
        if (this.precio !== undefined) {
            return "El precio de \"".concat(this.titulo, "\" es de $").concat(this.precio);
        }
        else {
            return "El juego todavia no tiene precio";
        }
    };
    Videojuego.prototype.stringPlataformas = function () {
        if (this.plataformas !== undefined) {
            return this.plataformas.join(", ");
        }
        else {
            return "Todavia no es lanzado en ninguna plataforma";
        }
    };
    return Videojuego;
}());
var Hades = new Videojuego("HADES", "Supergiant Games", ["PS4", "PS5", "XBOX ONE", "XBOX Series S/X", "Nintendo Switch", "Steam"], 24.99);
var HalfLife3 = new Videojuego("Half-Life 3", "Valve");
var classDiv = document.getElementById("class");
if (classDiv) {
    classDiv.innerHTML += "<h3>Juego:</h3>";
    classDiv.innerHTML += "<p>titulo:".concat(Hades.titulo, "</p>");
    classDiv.innerHTML += "<p>Studio:".concat(Hades.studio, "</p>");
    classDiv.innerHTML += "<p>Plataformas:".concat(Hades.stringPlataformas(), "</p>");
    classDiv.innerHTML += "<p>Precio:".concat(Hades.precio, "</p>");
    classDiv.innerHTML += "<p>".concat(Hades.verPrecio(), "</p>");
    classDiv.innerHTML += "<h3>Juego:</h3>";
    classDiv.innerHTML += "<p>titulo:".concat(HalfLife3.titulo, "</p>");
    classDiv.innerHTML += "<p>Studio:".concat(HalfLife3.studio, "</p>");
    classDiv.innerHTML += "<p>Plataformas:".concat(HalfLife3.stringPlataformas(), "</p>");
    classDiv.innerHTML += "<p>Precio:".concat(HalfLife3.precio, "</p>");
    classDiv.innerHTML += "<p>".concat(HalfLife3.verPrecio(), "</p>");
}
else {
    console.error("No se encontró el elemento con id 'class'.");
}
Hades.verPrecio();
