'use strict'

var gCurrQuestIdx = 0

var gQuests = [{
    id: 0,
    opts: createQuests(0),
    correctOptIndex: 1
},
{
    id: 1,
    opts: createQuests(1),
    correctOptIndex: 0
},
{
    id: 2,
    opts: createQuests(2),
    correctOptIndex: 1
},
{
    id: 3,
    opts: createQuests(3),
    correctOptIndex: 0
},
]




function initGame() {
    changeTxt('normal')
    gCurrQuestIdx = 0
    renderQuest()

}

function renderQuest() {
    var strHTML = '';
    var currQuest = gQuests[gCurrQuestIdx]

    for (var i = 0; i < currQuest.opts.length; i++) {
        var currOpt = currQuest.opts[i]
        strHTML += `<button class="button" onclick="checkAnswer(${i})" > ${currOpt} </button>`;
    }
    var elImg = document.querySelector('img');
    var elBtnContainer = document.querySelector('.answers');
    elBtnContainer.innerHTML = strHTML
    elImg.src = `./img/${gCurrQuestIdx}.png`
}

function createQuests(id) {
    if (id === 0) {
        return [
            'Muki Ben David',
            'Muki The Dog'
        ]
    } else if (id === 1) {
        return [
            'Male',
            'Female'

        ]
    } else if (id === 2) {
        return [
            'Back-End',
            'Front-End'
        ]
    } else if (id === 3) {
        return [
            '5 Years Old',
            '2 Years Old'
        ]
    }

}
function renderVictory() {
    var elImg = document.querySelector('img');
    var elBtnContainer = document.querySelector('.answers');
    elImg.src = `./${gCurrQuestIdx}.png`
    strHTML += `<button class="button" onclick="initGame()" > Reset </button>`;
    elBtnContainer.innerHTML = strHTML
    changeTxt('victory')
}
function checkAnswer(optIdx) {
    changeTxt('normal')
    if (optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
        gCurrQuestIdx++
        if (gCurrQuestIdx === gQuests.length) return renderVictory()
        renderQuest()
    } else {
        changeTxt('wrong')
    }
}

function changeTxt(state) {
    var h1Txt = ''
    var h2Txt = ''
    if (state === 'wrong') {
        h1Txt = 'Oops..'
        h2Txt = 'please try again'
    } else if (state === 'normal') {
        h1Txt = 'Let\'s Play'
        h2Txt = 'What\'s In the Picture'
    } else if (state === 'victory') {
        h1Txt = 'wowww'
        h2Txt = 'you know a lot about Muki'
    }
    var elh1 = document.querySelector('h1')
    var elh2 = document.querySelector('h2')
    elh1.innerText = h1Txt
    elh2.innerText = h2Txt
}