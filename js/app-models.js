function BookItem(book, bookmark) {
    this.book = book;
    this.bookmark = bookmark ?? false;

    this.bookmarkToggle = function () {
        this.book.bookmark = !this.book.bookmark;
    };
}

function Book(title, author, bookmark) {
    this.id = generateId();
    this.title = title ?? 'N/A';
    this.author = author ?? 'N/A';
    // this.bookmark = bookmark ?? false;
}

function generateId() {
    generateId.counter = generateId.counter ?? 1;
    return generateId.counter++;
}


// let book = [
//     new BookItem(new Book('Harry Potter and the Sorcerers Stone', 'J.K. Rowling', true)),
//     new BookItem(new Book('Paper Towns', 'John Green', true)),
//     new BookItem(new Book('Best airlines', 'N/A', false)),
// ];
//
// console.log(book);