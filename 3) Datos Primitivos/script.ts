//Boolean

let estudiasteJavascript: boolean = true;
const booleanDiv = document.getElementById("boolean");

if (booleanDiv) {
    if (estudiasteJavascript) {
        booleanDiv.innerHTML += "<p>Puedes aprender Typescript</p>";
    } else {
        booleanDiv.innerHTML += "<p>Deberías aprender Javascript antes de empezar a aprender Typescript</p>";
    }
} else {
    console.error("No se encontró el elemento con id 'boolean'.");
}


// Number

let interMiami: number = 10;
let fcDallas: number = 11;
let messi: number = 2;
const numberDiv = document.getElementById("number");

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void {
    if (numberDiv) {
        numberDiv.innerHTML += `<p>Inter Miami: ${equipo1}</p>`;
        numberDiv.innerHTML += `<p>FC Dallas: ${equipo2}</p>`;
        numberDiv.innerHTML += `<p>¿Juega Messi?: ${juegaMessi ? "Sí" : "No"}</p>`;
    } else {
        console.error("No se encontró el elemento con id 'number'.");
        return;
    }



    let motivo: string = " porque tenia mas jugadores"
    if (juegaMessi){
        equipo1 += messi
        motivo = " porque jugó Messi"
    } 
    
    if (equipo1 > equipo2) numberDiv.innerHTML += `<p>Gana Inter Miami${motivo}</p>`;
    else if (equipo1 < equipo2) numberDiv.innerHTML += `<p>Gana FC Dallas${motivo}</p>`;
    else numberDiv.innerHTML += "<p>Hay empate</p>";

}

jugar(interMiami, fcDallas, false);
