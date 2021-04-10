'use strict'

var gTrans = {
    'id': {
        en: 'Id',
        he: 'מק״ט'
    },
    'title': {
        en: 'Title',
        he: 'שם הספר',
    },
    'price': {
        en: 'Price',
        he: 'מחיר',
    },
    'rate': {
        en: 'Rate',
        he: 'דירוג',
    },
    'actions': {
        en: 'Actions',
        he: 'אפשרויות',
    },
    'read': {
        en: 'Read',
        he: 'מידע נוסף'

    },
    'update': {
        en: 'Update',
        he: 'ערוך',
    },
    'delete': {
        en: 'Delete',
        he: 'הסר',
      },
    'change-rate': {
        en: 'Change-rate',
        he: 'ערוך דירוג',
    },
    'close': {
        en: 'Close',
        he: 'סגור',
    },
    'add-book': {
        en: 'Creat new book',
        he: 'צור ספר חדש',
    }
};

var gCurrLang = 'en';

function getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'UNKNOWN';
    var txt = keyTrans[gCurrLang]
    if (!txt) txt = keyTrans['en']

    return txt;
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')

    els.forEach(function (el) {
        var transKey = el.dataset.trans
        var txt = getTrans(transKey)

        if (el.nodeName === 'INPUT') {
            el.setAttribute('placeholder', txt)
        } else {
            el.innerText = txt
        }
    })
}

function setLang(lang) {
    gCurrLang = lang;
}
