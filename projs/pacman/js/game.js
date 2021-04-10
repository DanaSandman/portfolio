'use strict'
const WALL = '#'
const FOOD = '.'
const EMPTY = ' ';

var gBoard;
var gfoodOnBoardCount = 0
var gGame = {
    score: 1,
    isOn: false
}

function init() {
    gGhosts= []
    gBoard = buildBoard()
    createPacman(gBoard);
    createPowerFood(gBoard)
    createGhosts(gBoard);
    printMat(gBoard, '.board-container')
    gGame.isOn = false
    var elPlayAginBotton = document.querySelector('.play-again')
    elPlayAginBotton.hidden = true
    gGame.score = 1
    updateScore(0)
    
}

function buildBoard() {
    var SIZE = 10;
    var board = [];

    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD;
            gfoodOnBoardCount++
            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL;
                gfoodOnBoardCount--

            }
        }
    }
    return board;
}

function updateScore(diff) {

    gGame.score += diff
    document.querySelector('h2 span').innerText = gGame.score
    // TODO: update model and dom
    victorious()

}

function gameOver() {
    console.log('Game Over');
    gGame.isOn = false
    clearInterval(gIntervalGhosts)
    var elPlayAginBotton = document.querySelector('.play-again')
    elPlayAginBotton.hidden = false
}

function victorious() {
    console.log('Game' + gfoodOnBoardCount);
    console.log('score' + gGame.score)
    var strHtml = ''
    if (gGame.isOn === true && gGame.score === gfoodOnBoardCount) {

        clearInterval(gIntervalGhosts)
        var elvictorious = document.querySelector('.victorious')
        elvictorious.hidden = false
        gfoodOnBoardCount = 0

    }

}