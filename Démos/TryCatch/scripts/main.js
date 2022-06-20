//création de la fonction de filtre

const filtre = function (array, fnFilter){
    if(array.constructor != [].constructor) throw new TypeError("Le type de array ne correspond pas à un tableau");
    let result = [];
    for (const value of array) {
        if (fnFilter(value)) {
            result.push(value);
        }
    }
    return result;
}

let tab = "tableau..."; //[1,2,3,4,5,6];

try{
    tab = filtre(tab, val => val%2 !=0);
}
catch(e){
    console.warn(e);
}
console.table(tab);
