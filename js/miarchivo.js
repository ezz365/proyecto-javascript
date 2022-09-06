let choices;
const hamburguesas = [
    {
        id: 1,
        name: "Cheeseburger",
        contenido: "Carne de res",
        adicional: "Queso cheddar"
    },
    {
        id: 2,
        name: "Crispy Chicken",
        contenido: "Carne de pollo",
        adicional: "Tomate"
    },
    {
        id: 3,
        name: "Vegan Burger",
        contenido: "Carne de soja",
        adicional: "Lechuga"
    }

]


do{
    console.log('1. Cheeseburger + Papas y Bebida \n 2. Chicken Crispy + Papas y Bebida \n 3. Nuggets + Papas y Bebida \n 0. Cancelar');
    choices = prompt(
        "Elige el tipo de carne (si quieres dejar de pedir apreta 0): "
    );
    switch(choices){
        case '0':
            alert('Muchas gracias');
            console.log('Muchas gracias');
        break;
        case '1':
            alert('Elegiste agregarle carne de res');
            console.log('Elegiste la opción carne de res');
        break;
        case '2':
            alert('Elegiste agregarle paty de soja');
            console.log('Elegiste la opción vegana');
        break;
        case '3':
            alert('Elegiste agregarle pollo crispy');
            console.log('Elegiste la opción carne de pollo');
        break;
        default:
            alert("Opción incorrecta. Por favor ingrese un número del 0 al 3");
            console.log('Opción incorrecta');
    }

}while(choices !== '0');

function addToBurgers(id, name, contenido, adicional){

    hamburguesas.push({
        id,
        name,
        contenido,
        adicional,
    })

    return "Elegiste tu adicionales"
}



/*IF
ADICIONAL
*/
let adicional = 0;

if(adicional == 0){
    console.log("No tiene adicionales");
}else{
    console.log("Tiene adicionales");
}

function añadir(){
for(let adicional = 2; adicional < 10; adicional++){
    console.log("Se le agrega " + adicional + " adicionales");
}}
añadir();


function agregarAdicionales(){

}
