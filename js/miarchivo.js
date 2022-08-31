let inputValue;

do{
    console.log('1. Cheeseburger + Papas y Bebida \n 2. Chicken Crispy + Papas y Bebida \n 3. Nuggets + Papas y Bebida \n 0. Cancelar');
    inputValue = prompt(
        "Elige el tipo de carne (si quieres dejar de pedir apreta 0): "
    );
    switch(inputValue){
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

}while(inputValue !== '0');

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







