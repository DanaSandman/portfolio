var WALL = 'WALL';
var FLOOR = 'FLOOR';
var BALL = 'BALL';
var GAMER = 'GAMER';

var GAMER_IMG = '<img src="img/gamer.png" />';
var BALL_IMG = '<img src="img/ball.png" />';

var gBoard;
var gGamerPos;
var gBallCount = 0
var gBallsOnBoard;

function initGame() {
	gGamerPos = {
		i: 2,
		j: 9
	};
	gBoard = buildBoard();
	renderBoard(gBoard);
	setInterval(function () {
		addBall();
	}, 4000);
	renderScore(0)
	gBallsOnBoard = 2
	gBallCount = 0
}


function buildBoard() {
	// Create the Matrix
	var board = createMat(10, 12)


	// Put FLOOR everywhere and WALL at edges
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[0].length; j++) {
			// Put FLOOR in a regular cell
			var cell = {
				type: FLOOR,
				gameElement: null
			};

			// Place Walls at edges
			if (i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1) {
				cell.type = WALL;
			}

			// Add created cell to The game board
			board[i][j] = cell;
		}
	}

	// Place the gamer at selected position
	board[gGamerPos.i][gGamerPos.j].gameElement = GAMER;

	// Place the Balls (currently randomly chosen positions)
	board[3][8].gameElement = BALL;
	board[7][4].gameElement = BALL;

	return board;
}

// Render the board to an HTML table
function renderBoard(board) {

	var strHTML = '';
	for (var i = 0; i < board.length; i++) {
		strHTML += '<tr>\n';
		for (var j = 0; j < board[0].length; j++) {
			var currCell = board[i][j];

			var cellClass = getClassName({
				i: i,
				j: j
			})

			// TODO - change to short if statement
			if (currCell.type === FLOOR) cellClass += ' floor';
			else if (currCell.type === WALL) cellClass += ' wall';

			//TODO - Change To template string
			strHTML += '\t<td class="cell ' + cellClass +
				'"  onclick="moveTo(' + i + ',' + j + ')" >\n';

			switch (currCell.gameElement) {
				case GAMER:
					strHTML += GAMER_IMG;
					break;
				case BALL:
					strHTML += BALL_IMG;
					break;
			}

			strHTML += '\t</td>\n';
		}
		strHTML += '</tr>\n';
	}

	// console.log('strHTML is:');
	// console.log(strHTML);
	var elBoard = document.querySelector('.board');
	elBoard.innerHTML = strHTML;
}

// Move the player to a specific location
function moveTo(i, j) {

	var targetCell = gBoard[i][j]; // מקבל בעצם סל במיקום הספציפי
	if (targetCell.type === WALL) return;

	// Calculate distance to make sure we are moving to a neighbor cell
	var iAbsDiff = Math.abs(i - gGamerPos.i); // בודק את המרחק בין המיקום הנוחכי למיקום היעד
	var jAbsDiff = Math.abs(j - gGamerPos.j);

	// If the clicked Cell is one of the four allowed
	if ((iAbsDiff === 1 && jAbsDiff === 0) || (jAbsDiff === 1 && iAbsDiff === 0)) {

		if (targetCell.gameElement === BALL) {
			gBallCount++
			gBallsOnBoard--
			console.log('Collecting!');
		}

		renderScore(gBallCount)

		// MOVING from current position
		// Model:
		gBoard[gGamerPos.i][gGamerPos.j].gameElement = null;
		// Dom:
		renderCell(gGamerPos, '');

		// MOVING to selected position
		// Model:
		gGamerPos.i = i;
		gGamerPos.j = j;


		gBoard[gGamerPos.i][gGamerPos.j].gameElement = GAMER;
		// DOM:
		renderCell(gGamerPos, GAMER_IMG);

	} //else console.log('TOO FAR', iAbsDiff, jAbsDiff);

}

// Convert a location object {i, j} to a selector and render a value in that element
function renderCell(location, value) {
	var cellSelector = '.' + getClassName(location)
	var elCell = document.querySelector(cellSelector);
	elCell.innerHTML = value;
}

// Move the player by keyboard arrows
function handleKey(event) {

	var i = gGamerPos.i;
	var j = gGamerPos.j;


	switch (event.key) {
		case 'ArrowLeft':
			moveTo(i, j - 1);
			break;
		case 'ArrowRight':
			moveTo(i, j + 1);
			break;
		case 'ArrowUp':
			moveTo(i - 1, j);
			break;
		case 'ArrowDown':
			moveTo(i + 1, j);
			break;

	}

}

// Returns the class name for a specific cell
function getClassName(location) {
	var cellClass = 'cell-' + location.i + '-' + location.j;
	return cellClass;
}
// Check if is empty cell
function isEmptyCell(i, j) {
	if (gBoard[i][j].gameElement === null) {
		return true
	} else {
		return false
	}
}

function renderScore(score) {
	var elScore = document.querySelector('.score')
	var strHTML = ''
	strHTML = `<h3>Score: ${score}</h3>`
	elScore.innerHTML = strHTML

}

function addBall() {
	if (gBallsOnBoard === 0) {
		renderScore("GAME-OVER")
	} else {
		var i = getRandomIntInclusive(0, 10)
		var j = getRandomIntInclusive(0, 12)
		var loc = {
			i: i,
			j: j
		}
		if (isEmptyCell(i, j)) {
			if (gBoard[i][j].type !== WALL) {
				gBoard[i][j].gameElement = BALL;
				renderCell(loc, BALL_IMG)
				gBallsOnBoard++
			}
		}
	}

}


// if (isEmptyCell(gBoard)){
// getRandomIntInclusive(ggBoard[i][j], gBoard.length)
// }


// Get Random num 
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}