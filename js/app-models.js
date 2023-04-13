function BookItem(book, bookmark) {
    this.book = book;
    this.bookmark = bookmark ?? false;

    this.bookmarkToggle = function () {
        this.bookmark = !this.bookmark;
    };
}

function Book(title, author) {
    this.id = generateId();
    this.title = title ?? 'N/A';
    this.author = author ?? 'N/A';
}

function generateId() {
    generateId.counter = generateId.counter ?? 1;
    return generateId.counter++;
}