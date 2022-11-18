//fate in modo che quando l’utente fa click sul bottone “send” del form, il sito vi calcoli l’ammontare del vostro lavoro per le ore di lavoro richieste dall’utente.

//Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50 € l’ora
//Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30 € l’ora
//Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60 € l'ora

/* 
Se poi l’utente inserisce un codice promozionale tra i seguenti YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.
Se il codice inserito non è valido, informate l’utente che il codice è sbagliato e calcolate il prezzo finale senza applicare sconti.
Mostrare il risultato del calcolo del prezzo finale in una “forma umana” in un apposito tag HTML appena sotto il bottone send.
*/
let codiciSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


function submitForm(event){
    event.preventDefault();

    let lavoro = calcoloLavoro();
    let ore = document.getElementById("ore").value;
    let prezzoIntero = calcoloPrezzi(ore, lavoro);
    let scontoUtente = document.getElementById("codiceSconto").value;
    let isSconto = sconto(codiciSconto, scontoUtente);
    let prezzoFinale

    if (isSconto){
        prezzoFinale = prezzoIntero * 0.75
    } else {
        prezzoFinale = prezzoIntero
    }

    document.getElementById("prezzoTotale").innerHTML = "Il prezzo totale è: " + prezzoFinale + "€";

}

function calcoloLavoro (){

    let work = document.getElementById("work").value;
    work = parseInt(work);
    switch (work){
        case 1:
            work = 20.5;
            break;

        case 2:
            work = 15.3;
            break;

        case 3:
            work = 33.6;
            break;
    };

    return work
    
}


function calcoloPrezzi (ore, lavoro){

    prezzo = ore*lavoro;
    return prezzo.toFixed(2)
}

function sconto (codiciSconto, codiceUtente){
    if (document.getElementById("codiceSconto").value != ""){

    

    for (let element of codiciSconto ){

        if (element == codiceUtente){
            document.getElementById("codiceSconto").classList.remove("text-danger");
            let index = codiciSconto.indexOf(element);
            codiciSconto.splice(index,1);
            return true
        }
    }

    document.getElementById("codiceSconto").classList.add("text-danger");

    }

    return false
}
