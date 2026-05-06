//EXERCICE GUESS THE NUMBER

//role : genere un nombre aléatoire
//besoin : rien
//rendre : un nombre aléatoire


function chiffreAléatoire(x){

//arrondir et choisir un nombre aléatoire

return Math.floor(Math.random(1)* 20);

}




//role : posé une question
//besoin : rien
//rendre : le nombre que le joueur a mis


function reponse(){

prompt("écrivez un nombre entre 1 et 20 s'il vous plaît")

//rendre le nombre choisi

return prompt;

}




//role :il compare le nombre aléatoire avec la réponse
//besoin : de la réponse et de commentaire
//rendre : commentaire



//compare nombre aléatoire avec la réponse de l'utilisateur

function compareNombre(){

    //si le nombre aléatoire est plus grand que la reponse alors cela écrit "plus grand"


    if(nombreOrdi>reponseUser){

        alert("plus grand")

        //si le nombre aléatoire est plus petit que la reponse alors cela écrit "plus petit"

    }else if(nombreOrdi<reponseUser){

alert("plus petit")

//si le nombre aléatoire est égal que la reponse alors cela écrit "bravo"

    }else{

alert("Bravo")

    }
}

//role :exécuter le scenario
//besoin :nombre aléatoire et choisi
//rendre :rien

function scenario(){

    //variable du chiffre aléatoire

    let nombreOrdi = chiffreAléatoire(x);

    //variable de la reponse

let reponse = reponseUser

}

//appeler la fonction scenario

scenario



    