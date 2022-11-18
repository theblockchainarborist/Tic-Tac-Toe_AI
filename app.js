const player1 = { name: "First Player", className: "player1" };
const player2 = { name: "Second Player", className: "player2" };
const defaultSquareClasses = "square token";

let currPlayer = player1;

document.addEventListener('DOMContentLoaded', attachListeners);


function attachListeners() {
    document.getElementById('gameBoard').addEventListener('click', (event) => {
        squareClick(event);
    } );

    document.getElementById('btnNewGame').addEventListener('click', clearBoard);
}


function squareClick(event){
    const clickedSquare = event.target;
    
    if (clickedSquare.classList.contains('square') && !clickedSquare.classList.contains(player1.className) 
        && !clickedSquare.classList.contains(player2.className)) {
        clickedSquare.classList.add(currPlayer.className);
        currPlayer === player1 ? currPlayer = player2 : currPlayer = player1;
    }
}


function clearBoard() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        if (square.className.includes('player')) {
            square.className = defaultSquareClasses;
        }
        
    });
}