let cells = document.querySelectorAll(".cell");
let restartBtn = document.querySelector(".restartBtn");
let statusText = document.querySelector(".status");

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let running = false;
let currentPlayer = "X";

initilizeGame()
function initilizeGame() {
    cells.forEach(cell => { cell.addEventListener("click", cellClicked) })
    restartBtn.addEventListener("click", restartGame)
    statusText.textContent = `${currentPlayer}'s turn`
    running = true;

}
function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex")
    console.log(cellIndex);
    if (options[cellIndex] != "" || !running) {
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, cellIndex) {
    
    options[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
    
}
function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`
}
function checkWinner() {
    let won = false;
    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        else if (cellA == cellB && cellB == cellC) {
            won = true;
            break;
        }


    }
    if (won) {
        statusText.textContent = `${currentPlayer}'s win!`;
        running = false;
    }
    else if(!options.includes("")) {
        statusText.textContent = "Draw!";
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame() {
    options = ["", "", "", "", "", "", "", "", ""];
    running = false;
    currentPlayer = "X";
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell=>cell.textContent = "")
}