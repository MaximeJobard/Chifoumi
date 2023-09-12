// let pierre = document.getElementById("pierre");
// let feuille = document.getElementById("feuille");
// let ciseaux = document.getElementById("ciseaux");

function victoire(joueur, robot){
    let resultat = document.getElementById("resultat");
    let jou = document.getElementById("jou");
    let adv = document.getElementById("adv");

    jou.textContent = "Vous avez choisi " + joueur;
    adv.textContent = "Le bot a choisi " + robot;

    if(joueur === robot){
        resultat.textContent = "Égalité";
    }
    else if(joueur == "Pierre" && robot == "Ciseaux"){
        resultat.textContent = "Victoire !!!";
    }
    else if(joueur == "Pierre" && robot == "Feuille"){
        resultat.textContent = "Défaite.";
    }
    else if(joueur == "Feuille" && robot == "Pierre"){
        resultat.textContent = "Victoire !!!";
    }
    else if(joueur == "Feuille" && robot == "Ciseaux"){
        resultat.textContent = "Défaite.";
    }
    else if(joueur == "Ciseaux" && robot == "Feuille"){
        resultat.textContent = "Victoire !!!";
    }
    else if(joueur == "Ciseaux" && robot == "Pierre"){
        resultat.textContent = "Défaite.";
    }
}

// feuille.addEventListener("click", partie());
// pierre.addEventListener("click", partie());
// ciseaux.addEventListener("click", partie());

const buttons = document.querySelectorAll('button')
// console.table (buttons)
for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        let joueur = buttons[i].textContent
        let robot = buttons[Math.round(Math.random()*3)].textContent
        victoire(joueur, robot)
    })
}