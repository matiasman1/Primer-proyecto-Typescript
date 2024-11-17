class naveFederacion<T>{
    private designation?:T

    constructor(private nombre: string){

    }

    setDesignation(designation: T){
        this.designation=designation
    }

    getDesignation(){
        return this.designation
    }

    public nameAndDesignation():string{
        return `Nave USS ${this.nombre} designación NCC ${this.designation}`
    }

}

let nave = new naveFederacion<string>("Enterprise");
nave.setDesignation("NX-O1");

let nave2 = new naveFederacion<number>( "Voyager");
nave2.setDesignation(74656);

const genericosDiv = document.getElementById("genericos");
if (genericosDiv) {
    genericosDiv.innerHTML += "<h3>Información de Naves:</h3>";
    genericosDiv.innerHTML += `<p>${nave.nameAndDesignation()}</p>`;
    genericosDiv.innerHTML += `<p>${nave2.nameAndDesignation()}</p>`;
} else {
    console.error("No se encontró el elemento con id 'genericos'.");
}