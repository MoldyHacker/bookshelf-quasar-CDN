const app = Vue.createApp({
    data(){
        return {
            books: [
                { id: 1, title: 'Harry Potter and the Sorcerers Stone', author: 'J.K. Rowling', bookmark: true, tags: ['#fantasy', '#magic', '#wonder', '#dark'] },
                { id: 2, title: 'Paper Towns', author: 'John Green', bookmark: true, tags: []},
                { id: 3, title: 'Best airlines', author:'N/A', bookmark: false, tags: []},
            ],
            // Searchbar Object
            searchObj: {
                sortCategory: 'title',
                searchTerm: '',
                bookmark: false,
            },
            // Dialogs / Modals Controls
            addBookAutomagically: false,
            addBookManually: false,
            editDialog: false,

            editData: {},
        }
    },

    methods: {
        searchUpdate(searchO) {
            this.searchObj = searchO;
            // console.log('working', this.searchObj)
        },
        addBook(book) {
            book.id = Date.now();
            this.books.push(book);
            // console.log('book added', book);
        },
        editItem(book) {
            this.editData = book;
            this.editDialog = true;
            console.log('edit book', this.editData);
        },
        saveItem(book) {
            let index = this.books.indexOf(book.id);
            this.books[index] = book;
        },
        removeBook(book) {
            this.books.splice(this.books.indexOf(book),1);
            // console.log('removed book', book);
        },
        bookmarkBook(book) {
            this.books[this.books.indexOf(book)].bookmark = !book.bookmark;
            // console.log('bookmarked book', book);
        }
    }
})


