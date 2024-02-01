
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const boardCells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');

function handleMove(cellIndex) {
    if (board[cellIndex] === '' && gameActive) {
        board[cellIndex] = currentPlayer;
        boardCells[cellIndex].innerText = currentPlayer;
        checkResult();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateStatus();
    for (let i = 0; i < winPatterns.length; i++) {
        const [a, b, c] = winPatterns[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            statusDisplay.innerText = `${currentPlayer} Vencedor!!`;
            return;
        }
    }
    if (!board.includes('')) {
        gameActive = false;
        statusDisplay.innerText = "Empate!!";
    }
}

function checkResult() {
  
}
function updateStatus() {
    statusDisplay.innerText = `${currentPlayer}'s Vez`;
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    statusDisplay.innerText = `${currentPlayer}'s vez`;
    boardCells.forEach(cell => cell.innerText = '');
}

statusDisplay.innerText = `${currentPlayer}'s vez`;
