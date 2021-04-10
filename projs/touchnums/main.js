'use strict'

var GAME_SIZE = 16
var gGameStart = false;
var gcurrnum = 1
var gtartTime = 0
var gMyTimer = 0
var gGameInterval;
var currTime = 0

function levels(num) {
    console.log(num)
    GAME_SIZE = num;
    init()
}

function init() {
    gGameStart = false
    currTime = 0
    createTable(GAME_SIZE)
    myStopFunction(gMyTimer)
    gcurrnum = 1
    updateTime()
    var elNextNum = document.querySelector('.next-num');
    var strHTML = `${gcurrnum}`
    elNextNum.innerHTML = 'Next Number: ' + strHTML

}

createTable(GAME_SIZE);

function createTable(gameSize) {
    var orderedNums = [];
    var randomNums = [];

    for (var i = 1; i <= gameSize; i++) {
        orderedNums.push(i)
    }

    while (randomNums.length < gameSize) {

        var randomIdx = getRandomIntInclusive(0, orderedNums.length - 1);
        var randomNum = orderedNums.splice(randomIdx, 1)[0]
        randomNums.push(randomNum)
    }

    var strHTML = '';
    var splitCount = 1

    strHTML += '<tr>'
    for (var i = 1; i <= gameSize; i++) {
        var tableNum = randomNums.pop()
        strHTML += `<td> <button  id="${tableNum}" class = "num-buttons" onclick="cellClicked(${tableNum})">${tableNum}</button>   </td>`;
        var splitNum = Math.sqrt(gameSize)

        if (i === splitNum * splitCount) {
            strHTML += '</br>'
            splitCount++
        }

    }

    strHTML += '</tr>\n'
    console.log(strHTML);

    var elTable = document.querySelector('.table');
    elTable.innerHTML = strHTML
}

function cellClicked(clickedNum) {
    if (clickedNum === 1) {
        gGameStart = true;
        gtartTime = Date.now()
        gMyTimer = setInterval(function () {
            updateTime();
        }, 300);
    }



    var elNextNum = document.querySelector('.next-num');
    var elButtom = document.getElementById(clickedNum);

    if (clickedNum === gcurrnum) {
        var strHTML = `${gcurrnum+1}`
        elNextNum.innerHTML = 'Next Number: ' + strHTML
        gcurrnum++
        elButtom.classList.add("on")
    }
    if (clickedNum === GAME_SIZE) {
        myStopFunction(gMyTimer)
    }
}

function myStopFunction() {
    clearInterval(gMyTimer);
}

function updateTime() {
    if (gGameStart) {
        currTime = (Date.now() - gtartTime) /
            1000
    }
    var elTime = document.querySelector('.time')
    elTime.innerHTML = 'Game time: ' +  currTime
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}