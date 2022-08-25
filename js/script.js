let inputValue;

do{
    console.log('1. Cheeseburger + Papas y Bebida \n 2. Chicken Crispy + Papas y Bebida \n 3. Nuggets + Papas y Bebida \n 0. Cancelar');
    inputValue = prompt('Elige tu comida (si quieres dejar de pedir apreta 0): ');
    switch(inputValue){
        case '0':
            alert('Gracias por su visita');
            console.log('Gracias por su visita');
        break;
        case '1':
            alert('Elegiste el Combo Cheeseburger');
            console.log('Elegiste el Combo Cheeseburger');
        break;
        case '2':
            alert('Elegiste el Combo Chicken Crispy');
            console.log('Elegiste el Combo Chicken Crispy');
        break;
        case '3':
            alert('Elegiste el Combo Nuggets');
            console.log('Elegiste el Combo Nuggets');
        break;
    }
}while(inputValue !== '0');
