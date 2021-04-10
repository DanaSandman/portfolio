'use strict'

const KEY = 'Books';
var gBooks;
_creatBooks()

function _creatBook(name, price) {
    var book = {
        id: makeId(),
        name: name,
        price: price + '$',
        imgUrl: getBookImg(name),
        rate: getRandomIntInclusive(0, 10)
    }
    return book
}

function _creatBooks() {
    var books = loadFromStorage(KEY);
    if (!books || !books.length) {
        books = [
            _creatBook('The Little Prince', 10),
            _creatBook('Alice\'s Adventures in Wonderland', 25)
        ];
    }
    gBooks = books;
    _saveBooksToStorage()
}

function getBooksForDisplay() {
    return gBooks
}

function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}

function getBookById(bookId) {
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    return book
}

function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    });
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage();
}

function addBook(name, price) {
    var book = _creatBook(name, price)
    gBooks.unshift(book)
    _saveBooksToStorage()

}

function updateBook(bookId, bookPrice) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookId;
    });
    gBooks[bookIdx].price = bookPrice
    _saveBooksToStorage()
}

function getBookImg(name) {
    var img;
    switch (name) {
        case 'The Little Prince':
            img = `<img src="./img/littlePrince.jpeg">`
            break;
        case 'Alice\'s Adventures in Wonderland':
            img = `<img src="./img/alice.jpeg">`
            break;
        default:
            img = `<img src="./img/newBook.jpeg">`
    }
    return img
}

function changeRate(num, bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookId;
    });

    gBooks[bookIdx].rate += num
    _saveBooksToStorage()
}