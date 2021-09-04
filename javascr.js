let free = false;

const result = Math.random()*100
result

// let nombre = prompt("nombre")

// document.write(nombre +"</br>")

let opcion = 0;

function decidir1(){
    if (opcion == 0) {
        document.write("Es 0");
    } else {
        document.write("Es 1");
    }
}

const decidir2 = function(){
    if (opcion == 0) {
        document.write("Es 0");
    } else {
        document.write("Es 1");
    }
    document.write("</br>");
}
decidir2();

const saludo = (nombre)=>{
    frase = `El nombre es = ${nombre}`;
    document.write(frase + "</br>");
}
saludo("Renzo")

function suma(n1, n2){
    let r = n1 + n2;
    document.write(`res = ${r}`);
}

suma(5, 7);

const validarCliente = (time)=>{
    let edad = prompt("Edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false){
            alert("pasa");
            free = true;
        } else {
            alert("paga");
        }
    } else {
        alert("no");
    }
}

validarCliente(6);