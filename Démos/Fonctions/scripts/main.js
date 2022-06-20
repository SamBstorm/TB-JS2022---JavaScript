//-----------Fonctions : les bases
{
    //fonction de type procédure : effectue une action, on n'attent pas de résultat.
    function direBonjour (nomDeLUtilisateur)
    {
        alert(`Bonjour ${nomDeLUtilisateur}!`);
    };

    //Exécution de la procédure
    direBonjour('Samuel');


    //-----------


    //fonction de type fonction : effectue une opération, on attend un résultat.
    function direBonjourText (nomDeLUtilisateur){
        return `Bonjour ${nomDeLUtilisateur}!`;    //Utilisation du mot clé return devant la valeur attendue
    };

    //Exécution de la fonction, on récupère la valeur dans une variable
    let message = direBonjourText('Samuel');


    //----------------

    //Déclaration d'une fonction de manière sécuritaire
    //on déclare une fonction dite anonyme (on ne lui donne pas de nom lors de la déclaration) et l'affecte dans une constante

    const direBonjourConst = function (nomDeLUtilisateur)
    {
        console.warn(`Bonjour ${nomDeLUtilisateur}!`);
    };

    //On appelle la fonction à l'aide du nom de la constante
    direBonjourConst('Charlie');
}

//------PARAMETRES---------
{
    function testV1(param1, param2, param3){

        console.log(`${param1} ${param2} ${param3}`);
    }

    testV1('Salut','les','amis!','Bienvenu','au','cours','de','JS...')
    //Affiche  : Salut les amis! // Les paramètres en trop sont ignorés...

    testV1('Salut','les amis!')
    //Affiche  : Salut les amis! undefined      //Les paramètres manquant sont remplacé par undefined

    function testV2(param1 = 'Salut', param2 = 'les', param3 = 'amis!'){

        console.log(`${param1} ${param2} ${param3}`);
    }

    testV2('Hello','every','one!')
    //Affiche  : Hello every one!  Tout les paramètres récupèrent une valeur

    testV2()
    //Affiche  : Salut les amis!  Tout les paramètres récupères la valeur par défaut précisé dans la déclaration de la fonction

    testV2('Goeiedag')
    //Affiche  : Goeiedag les amis!  Seul le paramètre entré récupère une nouvelle valeur, les autre une valeur par défaut

    function testV3(...params){
        let result = "";
        for (let param of params) {
            result = result + param + ' ';
        }
        console.log(result);
    }

    testV3('Salut','les','amis!','Bienvenu','au','cours','de','JS...')
    //Affiche  : Salut les amis! Bienvenu au cours de JS...     le spread-operator permet un regrouppement de plusieurs paramètre en un seul sous forme de tableau.

    testV3()
    //Affiche  : ''     Si pas de paramètre, le spread-operator crée un tableau vide...

    function testV4(messageDAccueil, ...params){    //Le spread-operator doit toujours être le dernier paramètre
        let result = messageDAccueil;
        for (let param of params) {
            result = result + param + ' ';
        }
        console.log(result);
    }

    testV4('Voici le reste de mon spread operator: ','Salut','les','amis!','Bienvenu','au','cours','de','JS...');
    //Affiche  : Voici le reste de mon spread operator: Salut les amis! Bienvenu au cours de JS... 

    // Spread-operator super efficace pour des fonctions numériques
    function sum(...ints){
        let sum = 0;
        for (let int of ints) {
            sum += int;
        }
        return sum;
    }

    sum(4,5,6,7,8,1,2,9,3)
    // la somme est de 45
}
//-----------Paramètres valeurs VS Référentiels--
{
    function argsValeur(int, str, bool){
        int = 0;
        str = "";
        bool = false;
        console.log(int);
        console.log(str);
        console.log(bool);
    }

    let i = 5;
    let text = "toto";
    let isOk = true;

    argsValeur (i, text, isOk);
    console.log(i);
    console.log(text);
    console.log(isOk);


    //ArgsValeurs affiche :  0
    //ArgsValeurs affiche :  ''
    //ArgsValeurs affiche :  false
    //Les variables affichent :  5
    //Les variables affichent :  toto
    //Les variables affichent :  true

    //Les paramètres de type valeurs (number, string, boolean, ...) sont des copies et ne sont pas impactés par le changement.

    function argsRef(obj, array){
        obj.nom = 'Legrain';
        obj.prenom = 'Samuel';
        array.push(obj);
        console.log(obj);
        console.log(array);
    }

    let user = {email : 'Samuel.legrain@bstorm.be', mdp:'test1234='};
    let tab = [1,2,3,4];

    argsRef(user, tab);

    console.log(user);
    console.log(tab);

    //ArgsRef affiche :  {email: 'Samuel.legrain@bstorm.be', mdp: 'test1234=', nom: 'Legrain', prenom: 'Samuel'}
    //ArgsRef affiche :  [1, 2, 3, 4, {email: 'Samuel.legrain@bstorm.be', mdp: 'test1234=', nom: 'Legrain', prenom: 'Samuel'}]
    //Les variables affichent :  {email: 'Samuel.legrain@bstorm.be', mdp: 'test1234=', nom: 'Legrain', prenom: 'Samuel'}
    //Les variables affichent :  [1, 2, 3, 4, {email: 'Samuel.legrain@bstorm.be', mdp: 'test1234=', nom: 'Legrain', prenom: 'Samuel'}]

    //Les paramètres de type référenciels (Object, Array, ...) sont des liens vers des adresses mémoire et sont impactés par le changement.
}

//-----------FN Anonyme----------
{
    function filtre(array, fnFiltre){
        let result = [];
        for (let value of array) {
            if(fnFiltre(value)) result.push(value);
        }
        return result;
    }

    let tab = [1,2,3,4,5,6];

    filtre(tab,function(val){return val%2 == 0});
    //Affiche :  [2, 4, 6]
    filtre(tab,function(val){return val%2 != 0});
    //Affiche :  [1, 3, 5]
    filtre(tab,function(val){return val> 4});
    //Affiche :  [5, 6]

    filtre(tab,function(val){return val%2 != 0});
    //Affiche :  [1, 3, 5]
    filtre (tab, val => val%2 != 0 );
    //Affiche :  [1, 3, 5]
}