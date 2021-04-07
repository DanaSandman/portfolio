'use strict'

var gCurrQuestIdx = 0
var elh1 = ''
var elh2 = ''

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
// console.log(gQuests)
// console.log(gQuests[0].opts)


function initGame() {
    gCurrQuestIdx = 0
    renderQuest()

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

renderQuest()

function renderQuest() {
    var elImg = document.querySelector('img');
    var elButtom = document.querySelector('.answers');
    var quest = ''
    var strHTML = '';

    if (gCurrQuestIdx >= gQuests.length) {
        elImg.src = `./${gCurrQuestIdx}.png`
        strHTML += `<buttom class="button" onclick="initGame()" > Reset </buttom>`;
        elButtom.innerHTML = strHTML
        elh1.innerText = 'wowww'
        elh2.innerText = 'you know a lot about Muki'

    }
    for (var i = 0; i < gQuests[gCurrQuestIdx].opts.length; i++) {
        quest = gQuests[gCurrQuestIdx].opts[i]
        strHTML += `<buttom class="button" onclick="checkAnswer(${i})" > ${quest} </buttom>`;
        console.log(strHTML)
    }
    elButtom.innerHTML = strHTML
    elImg.src = `./${gCurrQuestIdx}.png`
}


function checkAnswer(optIdx) {
    elh1 = document.querySelector('h1')
    elh2 = document.querySelector('h2')
    if (optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
        elh1.innerText = 'Let\'s Play'
        elh2.innerText = 'What\'s In the Picture'
        gCurrQuestIdx++
        renderQuest()
    } else
        elh1.innerText = 'Oops..'
    elh2.innerText = 'pleas try again'
}



// changTxtButton()
// function changTxtButton(){

//     var elButton0 = document.querySelector(".button0");
//     var elButton1 = document.querySelector(".button0");

//     for(var i = 0 ; i < gQuests.length; i++ ){
//         for(var j = 0 ; j <gQuests[i].opts; j++){

//             console.log(gQuests[i].id[j]+'cccc')

//             elButton0.innerText = 'ddd'
//            var d = gQuests[i].opts[j]
//             elButton1.innerText = gQuests[i].opts[j+1]

//             console.log(elButton0)
//             console.log(d)
//         }
//     }
// }