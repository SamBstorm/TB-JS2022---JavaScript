
//calculatrice

const check_number = function(nb, param_name){
    if(nb.constructor != Number().constructor) throw new TypeError(`${param_name} '${nb}' n'est pas un number`);
    if(isNaN(nb)) throw new Error(`${param_name} '${nb}' est un not a number`);
}

const addition = function(nb1, nb2){
    try {
        check_number(nb1, 'nb1');
        check_number(nb2, 'nb2');
    } catch (error) {
        //error.message = "Addition : "+message;
        throw error;
    }

    return nb1 + nb2;
}
const division = function(nb1, nb2){
    try {
        check_number(nb1, 'nb1');
        check_number(nb2, 'nb2');
        if(nb2 == 0) throw new RangeError('nb2 ne peut être égale à zéro...')
    } catch (error) {
        //error.message = "Division : "+message;
        throw error;
    }

    return nb1 / nb2;
}

const soustraction = function(nb1, nb2){
    try {
        check_number(nb1, 'nb1');
        check_number(nb2, 'nb2');
    } catch (error) {
        //error.message = "Soustraction : "+message;
        throw error;
    }

    return nb1 - nb2;
}

const multiplication = function(nb1, nb2){
    try {
        check_number(nb1, 'nb1');
        check_number(nb2, 'nb2');
    } catch (error) {
        //error.message = "Multiplication : "+message;
        throw error;
    }

    return nb1 * nb2;
}

const calcul = function(operation){
    try {
        let nb1 = parseInt(document.getElementById('nb1').value);
        let nb2 = parseInt(document.getElementById('nb2').value);
        let result = document.getElementById('result');
        result.value = operation(nb1,nb2);
    } catch (error) {
        alert(error);
    }
}