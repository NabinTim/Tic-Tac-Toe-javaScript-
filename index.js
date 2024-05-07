//Javascript for Tic-Tac-Toe
const cells = document.querySelectorAll('.cell');
const blueButton = document.getElementById('blueButton');
const redButton = document.getElementById('redButton');
const resetButton = document.getElementById('resetButton');
const title = document.getElementById('title');

let teamSign = '〇'; 


function resetGame() {
    title.textContent = 'You are on a Blue Team';
    teamSign = '〇';
    cells.forEach(cell => {
        cell.textContent = '';
    });
}

blueButton.onclick = function() {
    title.textContent = 'You are on a Blue Team';
     teamSign = '〇';
};


function cellClickHandler(event) {
    const cell = event.target;
    if (!cell.textContent) { 
        cell.textContent = teamSign; 
    }
}


cells.forEach(cell => {
    cell.onclick = cellClickHandler;
});

redButton.onclick = function() {
    teamSign = '✗'; 
    title.textContent = 'You are on a Red Team';
};
resetButton.onclick = resetGame;
