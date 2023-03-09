const app = Vue.createApp({
    data(){
        return {
            books: [
                { id: 1, title: 'Harry Potter and the Sorcerers Stone', author: 'J.K. Rowling', bookmark: true, tags: ['#fantasy', '#magic', '#wonder', '#dark'] },
                { id: 2, title: 'Paper Towns', author: 'John Green', bookmark: true, tags: []},
                { id: 3, title: 'Best airlines', bookmark: false, tags: []},
            ],
            addBookAutomagically: false,
            addBookManually: false,
        }
    },

    methods: {
        addBook(book) {
            this.books.push(book);
        },
        editBook(book) {},
        removeBook(book) {
            console.log('removing book')
            this.books.splice(this.books.indexOf(book),1);
        },
        bookmarkBook(book) {
            this.books[this.books.indexOf(book)].bookmark = !book.bookmark;
        }
    }
})


