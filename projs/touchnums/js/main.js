
var gBoard;
var gGameInterval;

function init() {
    gBoard = createBoard();
    renderBoard(gBoard)
}

function toggleGame(elBtn) {
    if (gGameInterval) {
        clearInterval(gGameInterval)
        gGameInterval = null
        elBtn.innerText = 'Play Game'
    } else {
        gGameInterval = setInterval(play, GAME_FREQ)
        elBtn.innerText = 'Pause Game'
    }
}

function play() {
    gBoard = runGeneration(gBoard);
    renderBoard(gBoard);
}


function createBoard() {
    var board = [];
    for (var i = 0; i < 8; i++) {
        board.push([])
        for (var j = 0; j < 8; j++) {
            board[i][j] = (Math.random() > 0.5) ? LIFE : ''
        }
    }
    return board;
}

function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            
            var cell = board[i][j]
            var className = cell ? 'occupied' : ''
            strHTML += `<td data-i=${i} data-j=${j} onclick="cellClicked(this,${i},${j})" class="${className}">${cell}</td>`
        }
        strHTML += '</tr>\n'
    }

    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}

function cellClicked(elCell, i, j) {
    console.log(elCell.dataset);

    var rowIdx = +elCell.dataset.i
    var colIdx = +elCell.dataset.j

    if (!gBoard[rowIdx][colIdx]) return

    gBoard[rowIdx][colIdx] = SUPER_LIFE

    elCell.innerText = SUPER_LIFE

    blowUpNegs(rowIdx, colIdx)
}

function blowUpNegs(rowIdx, colIdx) {
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {

        if (i < 0 || i >= gBoard.length) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {

            if (j < 0 || j >= gBoard[0].length) continue

            if (i === rowIdx && j === colIdx) continue

            if (gBoard[i][j] === LIFE) {
                gBoard[i][j] = ''
                renderCell({
                    i,
                    j
                }, '')
            }
        }
    }
}

function renderCell(pos, value) {
    var elCell = document.querySelector(`[data-i="${pos.i}"][data-j="${pos.j}"]`)
    elCell.innerText = value
}

function runGeneration(board) {
    var newBoard = copyMat(board);

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var numOfNeighbors = countNeighbors(i, j, board);
            if ((numOfNeighbors > 2) && (numOfNeighbors < 6)) {
                if (board[i][j] === '') newBoard[i][j] = LIFE;
            } else if (board[i][j] === LIFE) newBoard[i][j] = '';
        }
    }
    return newBoard;
}


function countNeighbors(cellI, cellJ, mat) {
    var neighborsSum = 0;

    for (var i = cellI - 1; i <= cellI + 1; i++) {

        if (i < 0 || i >= mat.length) continue;

        for (var j = cellJ - 1; j <= cellJ + 1; j++) {

            if (j < 0 || j >= mat[i].length) continue;

            if (i === cellI && j === cellJ) continue;

            if (mat[i][j] === LIFE || mat[i][j] === SUPER_LIFE) neighborsSum++;
        }
    }
    return neighborsSum;
}