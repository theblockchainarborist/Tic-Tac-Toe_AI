
/** Winning Moves */
const WIN_1 = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0]
];

const WIN_2 = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
];

const WIN_3 = [
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1]
];

const WIN_4 = [
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0]
];

const WIN_5 = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
];

const WIN_6 = [
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 1]
];

const WIN_7 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];

const WIN_8 = [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0]
];


const WINNING_BOARDS = [WIN_1, WIN_2, WIN_3, WIN_4, WIN_5, WIN_6, WIN_7, WIN_8];
let currentBoard;


function newGame() {
    // Define our current game board to be used for each game.
    currentBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
}


// Here we manage all the needed actions each time a move is made in the game.
function manageMove(clickedSquare, currentPlayer) {

    recordMove(clickedSquare, currentPlayer);
    checkForWinner(currentPlayer);

}


// This function records the players move in memory.
function recordMove(clickedSquare, currentPlayer) {
    let move = parseInt(clickedSquare.id) - 1;

    if (move < 3) {
        currentBoard[0][move] = currentPlayer.className;
    }

    if (move >= 3 && move < 6) {
        let num = move - 3;
        currentBoard[1][num] = currentPlayer.className;
    }

    if (move >= 6 && move < 9) {
        let num = move - 6;
        currentBoard[2][num] = currentPlayer.className;
    }
}


// This function checks if the last move turned you into a winner!
// For each possible winning combo we need to check to see if the player holds
//  the same positions on the board in memory.
function checkForWinner(currentPlayer) {
    // We enter each possible winning board
    for (let i = 0; i < WINNING_BOARDS.length; i++) {
        let testBoard = WINNING_BOARDS[i];
        let threeForSuccess = 0;
        // Here we enter each array in the test board.
        for (let j = 0; j < testBoard.length; j++) {
            let board = testBoard[j]
            let currentBoardSnapshot = currentBoard[j]
            // We loop through each single array and check for match's
            for (let k = 0; k < board.length; k++) {
                let boardVal = board[k];
                let currentBoardVal = currentBoardSnapshot[k];

                if (currentBoardVal === currentPlayer.className && boardVal !== 0) {
                    threeForSuccess++;
                }
            }
            // We check to see if we have a winner
            if (threeForSuccess === 3) {
                alert("WINNER! " + currentPlayer.name)
                clearBoard();
                break;
            }
        }
    }
}




