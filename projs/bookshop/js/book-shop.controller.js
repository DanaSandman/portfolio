'use strict'

function onInit() {
    doTrans()
    renderBooks()
}

function renderBooks() {
    var books = getBooksForDisplay()
    var strHTML = books.map(function (book) {
        return `
<tr> 
<td> ${book.id}</td>
<td> ${book.name}</td>
<td> ${book.price}</td>
<td> ${book.rate}</td>
<td> 
<button type="button" class="btn btn-outline-secondary" data-trans="read" onclick="onReadBook('${book.id}')" data-toggle="modal" data-target="#exampleModal">
Read
</button>
<button type="button" class="btn btn-outline-secondary" data-trans="update" onclick="onUpdateBook('${book.id}')">update</button>
<button type="button" class="btn btn-outline-secondary" data-trans="delete" onclick="onRemoveBook('${book.id}')">delete</button>
</td>
<tr>
`
    });
    document.querySelector('.table-body').innerHTML = strHTML.join('');
    doTrans();
}

function onUpdateBook(bookId) {
    var price = +prompt('New price plz: ');
    updateBook(bookId, price)
    renderBooks()
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}

function onAddBook() {
    var name = prompt('Title plz: ');
    var price = +prompt('Price plz: ');
    addBook(name, price)
    renderBooks()
}

function onReadBook(bookId) {
    // doTrans();
    var book = getBookById(bookId)
    var elModal = document.querySelector('.modali');
    
    elModal.querySelector('h5').innerText = book.name
    elModal.querySelector('h6').innerText = ` Price ${book.price}`
    elModal.querySelector('.modal-body').innerHTML = book.imgUrl
    elModal.querySelector('.modal-footer').innerHTML =
    `<span trans="change-rate" >Change rate </span>
    <button type="button" class="btn btn-light plus" onclick="onChangeRate(1,'${bookId}')">+</button>
    <div data-trans="change-rate" ><span class="change-rate">${book.rate}</span></div>
    <button type="button" class="btn btn-light minus" onclick="onChangeRate(-1,'${bookId}')">-</button>
    <button  data-trans="close" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`
}

function onChangeRate(num, bookId) {
    changeRate(num, bookId);
    renderBooks()
    onReadBook(bookId)
}

function onSetLang(lang) {
    setLang(lang);
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')
    doTrans();
    renderBooks();
}