// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// 1- creo un bottone che all'evento click farà apparire la tavola di gioco

// 2- la tavola di gioco sarà composta da 10 caselle su 10 righe

// 3- quando l'utente clicca sulla cella cambia colore e stampa il numero in console

let newGame = document.getElementById('newgame');
newGame .addEventListener('click', function(){

    for (let i = 1; i <= 100; i++) {

        let cell = document.createElement('div');
        cell.append(i);
        cell.classList.add('cell')
        document.getElementById("my-container-cell").append(cell); 

        cell.addEventListener('click', function(){
        
            cell.classList.add('cell-active')

        })  
    }
})

function numberCell(min, max){
    return Math.floor(Math.random() * (max - min + 1) + 1);
}