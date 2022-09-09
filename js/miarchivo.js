/*ARRAY*/
let choices;
const hamburguesas = [
    {
        id: 1,
        carne: "Res",
        papas: "Normales",
        gaseosa: "Fanta"
    },
    {
        id: 2,
        carne: "Pollo",
        papas: "Normales",
        gaseosa: "Agua"
    },
    {
        id: 3,
        carne: "Soja",
        papas: "Normales",
        gaseosa: "Coca-cola"
    }

];

/*SWITCH*/
do{
    choices = prompt(
        "Elige la opción: \n1. Agregar adicional \n2. Ver hamburguesas \n0. Salir "
    );
    switch(choices){
        case '1':
                const carne = (prompt("Escribe el nombre de la carne: \n- Res \n- Pollo \n- Soja"));
                const papas = (prompt("Escribe el nombre de las papas fritas: \n- Normales \n- Cheddar \n- Bacon"));
                const gaseosa = (prompt("Escribe el nombre de la bebida: \n- Coca-cola \n- Agua \n- Fanta"));
                const id = ultimoID() + 1;
                addToBurgers(id, carne, papas, gaseosa)
                console.log("Creaste el pedido con exito");
            break;
        case '2':
                listaHamburguesas();
            break;
        case '0':
                alert('Muchas gracias');
                console.log('Muchas gracias');
            break;
        default:
                alert("Opción incorrecta. Por favor ingrese un número del 0 al 2");
                console.log('Opción incorrecta');
            break;   
    }
/*WHILE*/
}while(choices !== '0');

/*FUNCTION */
function addToBurgers(id, carne, papas, gaseosa){

    hamburguesas.push({
        id,
        carne,
        papas,
        gaseosa,
    })

    return "Creaste con exito la orden" + id;  
}

function ultimoID(){
    return hamburguesas.length;
}

function listaHamburguesas(){
    hamburguesas.forEach((hamburguesa) => console.log(hamburguesa.id + " - " + hamburguesa.carne + " - " + hamburguesa.papas + " - " + hamburguesa.gaseosa));
}


/*IF ADICIONAL
let adicional = 0;

if(adicional == 0){
    console.log("No tiene adicionales");
}else{
    console.log("Tiene adicionales");
}

function añadir(){
    for(let adicional = 2; adicional < 10; adicional++){
        console.log("Se le agrega " + adicional + " adicionales");
    }
}
añadir();


function agregarAdicionales(){

}*/
