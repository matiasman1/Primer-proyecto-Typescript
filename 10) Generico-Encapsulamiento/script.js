var naveFederacion = /** @class */ (function () {
    function naveFederacion(nombre) {
        this.nombre = nombre;
    }
    naveFederacion.prototype.setDesignation = function (designation) {
        this.designation = designation;
    };
    naveFederacion.prototype.getDesignation = function () {
        return this.designation;
    };
    naveFederacion.prototype.nameAndDesignation = function () {
        return "Nave USS ".concat(this.nombre, " designaci\u00F3n NCC ").concat(this.designation);
    };
    return naveFederacion;
}());
var nave = new naveFederacion("Enterprise");
nave.setDesignation("NX-O1");
var nave2 = new naveFederacion("Voyager");
nave2.setDesignation(74656);
var genericosDiv = document.getElementById("genericos");
if (genericosDiv) {
    genericosDiv.innerHTML += "<h3>Información de Naves:</h3>";
    genericosDiv.innerHTML += "<p>".concat(nave.nameAndDesignation(), "</p>");
    genericosDiv.innerHTML += "<p>".concat(nave2.nameAndDesignation(), "</p>");
}
else {
    console.error("No se encontró el elemento con id 'genericos'.");
}
