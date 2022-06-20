/*class SamError{
    constructor(message){
        this.message = 'Sam a dit : ' +message;
    }
}*/

function checkSquare(number) {
    if(number.constructor != Number().constructor) throw new TypeError(`number '${number}' n'est pas de type Number.`)
    if(isNaN(number)) throw new Error(`number n'est pas un Number. (NaN)`)
    
    //return Number.isInteger(Math.sqrt(number));
    
    let isSquare = false;
    for (let i = 1; i <= 10 && !isSquare; i++) {
        if(i*i == number) isSquare = true;
    }
    return isSquare;
}

try {
    let number = parseInt(prompt('Veuillez indiquer un nombre compris entre 1 et 100'));
    if(number < 1 || number > 100) throw new RangeError(`Number ${number} est en dehors du range de 1 à 100.`);
    //if(number == 27) throw new SamError('27 est pas top...');
    console.log(`${number} est un carré : ${checkSquare(number)}`);
} catch (error){
    if (error instanceof TypeError) {
        console.warn(error);
    }
    if (error instanceof RangeError){
        alert('On a dit entre 1 et 100...\n'+error.message);
    } 
    else {
        console.log(error);
    }
}
