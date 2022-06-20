////VERSION de GUILLAUME
{
// // inverser le texte

// let chaine = prompt('Veuillez introduire votre texte :')

// let temp ;

// let tab = [];

// for (let i = 0; i < chaine.length; i++) {
//     tab[i] = chaine.charAt(i);
// }

// console.table(tab);

// // tab = chaine.split('');

// // console.table(tab);



// /*
// 'Hello'.charAt(0) => 'H'
// 'Hello'.charAt(1) => 'e'
// 'Hello'.charAt(2) => 'l'
// 'Hello'.charAt(3) => 'l'
// 'Hello'.charAt(4) => 'o'
// 'Hello'.charAt(5) => '?'
// 'Hello'.charAt(6) => '?'
// 'Hello'.charAt(7) => '?'
// 'Hello'.charAt(8) => '?'
// 'Hello'.charAt(9) => '?'
// */

// const inverserChaine = function(caractere){
//     for (let i = 0; i < caractere.length/2; i++) {
//         temp = caractere[i];
//         caractere[i] = caractere[caractere.length - 1 -i];
//         caractere[caractere.length -1 -i] = temp;
//     }
//     console.log(`Voici les caractères inversés: ${caractere.join('')}`);
//     alert(`Voici les caractères inversés: ${caractere.join('')}`);
// }

// inverserChaine(tab);

}
////Version Jason
{
// let text = prompt('Veuillez indiquer le texte à inverser :');

// /*return permet de retourner un résultat final...
// ce qui veut dire qu'après le return, plus aucune instruction seront exécutés...
// return est un raccourcis vers l'accolade finale de la fonction*/

// function reverseText(nom){
//     let inverse = nom.split('').reverse().join('');
//     console.log(inverse);
//     alert(inverse);
//     //return inverse;   //return non-obligatoire, si l'objectif de la fonction n'est pas de récupérer la valeur inversée
// }

// //let result = reverseText(text);   //Si le return est présent alors récupérer le résultat dans une variable
// reverseText(text);
}

////Récursivité
{
// let texte = prompt('Veuillez indiquer le texte à inverser:')

// function recursive(texte, index){
//     let result = "";
//     if(index < texte.length-1){
//         result = recursive(texte, index+1);
//     }
//     result += texte[index];
//     return result;
// }

// console.log(recursive(texte,0));
}

////Correctif

let texte = prompt('Veuillez indiquer le texte à inverser:')

const inverser = function (chaine){
    const inverseString = chaine.split('').reverse().join('');
    console.log(inverseString);
    alert(inverseString);
}

inverser(texte);