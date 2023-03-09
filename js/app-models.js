function Book(title, author, bookmark) {
    this.id = generateId();
    this.title = title ?? 'N/A';
    this.author = author ?? 'N/A';
    this.bookmark = bookmark ?? false;
}

function generateId() {
    generateId.counter = generateId.counter ?? 1;
    return generateId.counter++;
}