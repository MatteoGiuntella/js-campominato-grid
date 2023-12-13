// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// 1- creo un bottone che all'evento click farà apparire la tavola di gioco

// 2- la tavola di gioco sarà composta da 10 caselle su 10 righe

// 3- quando l'utente clicca sulla cella cambia colore e stampa il numero in console

let start = false;

let newGame = document.getElementById('newgame');
newGame .addEventListener('click', function(){

    let difficult = document.getElementById('select').value;
    console.log('difficult',difficult, typeof difficult)
    let option = 49;
    let classe = 'easy';

    if ( difficult == 'hard'){
        option = 100
        classe = 'hard';
    }

    else if ( difficult == 'normal'){
        option = 81
        classe = 'normal';
    }

    if ( start == false ){
        start = true; 
        for (let i = 1; i <= option; i++) {

            let cell = document.createElement('div');
            cell.append(i);
            cell.classList.add('cell', classe)
            document.getElementById("my-container-cell").append(cell); 
    
            cell.addEventListener('click', function(){
                cell.classList.add('cell-active')    
            })  
        }
    }
    else{
        start = false;
        document.getElementById("my-container-cell").innerHTML = '';
    }  
})

function numberCell(min, max){
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

// se il livello di difficoltà selezionato sarà medium le celle sarrano 81

// se il livello di difficoltà selezionato sarà easy le celle saranno 49

// se il livelli di diffcoltà selezionato sarà easy le celle saranno 100 _____



























