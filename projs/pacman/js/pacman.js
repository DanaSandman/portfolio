'use strict'
const PACMAN = '😷';

var gPacman;

function createPacman(board) {
    gPacman = {
        location: {
            i: 3,
            j: 5
        },
        isSuper: false
    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN
}

function movePacman(ev) {
 gGame.isOn= true

    if (!gGame.isOn) return

    var nextLocation = getNextLocation(ev)
    if (!nextLocation) return

    var nextCell = gBoard[nextLocation.i][nextLocation.j]

    if (nextCell === WALL) return
    if (nextCell === FOOD) updateScore(1)
    if(nextCell === POWER_FOOD) eatsPowerFood()
    else if (nextCell === GHOST) {
        gameOver()
        renderCell(gPacman.location, EMPTY)
        return
    }
/// מעדכן במודל בלוח שהפקמן מת ורייק
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
/// מעדכן במסך בדום שאין פקמן בתצוגה    
    renderCell(gPacman.location, EMPTY)

/// משנה את מיקום הלוקיישן של הפקמן לצעד הבא
    gPacman.location = nextLocation

/// מעדכן במודל בלוח את האימוגי של הפקמן שהוא כבר חיי במקום חדש
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN
/// מעדכן במסך  בדום את האימוגי של פקמן במקום החדש 
    renderCell(gPacman.location, PACMAN)

    // TODO: return if cannot move
    // TODO: hitting a ghost?  call gameOver
    // TODO: update the model
    // TODO: update the DOM
    // TODO: Move the pacman
    // TODO: update the model
    // TODO: update the DOM
}

function getNextLocation(eventKeyboard) {
    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }
    switch (eventKeyboard.code) {
        case 'ArrowUp':
            nextLocation.i--
            break;
        case 'ArrowDown':
            nextLocation.i++
            break;
        case 'ArrowLeft':
            nextLocation.j--
            break;
        case 'ArrowRight':
            nextLocation.j++
            break;
        default:
            return null
    }

    return nextLocation;
}