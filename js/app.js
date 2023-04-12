const app = Vue.createApp({
    data(){
        return {
            books: [
                new BookItem(new Book('Harry Potter and the Sorcerers Stone', 'J.K. Rowling', true)),
                new BookItem(new Book('Paper Towns', 'John Green', true)),
                new BookItem(new Book('Best airlines', 'N/A', false)),
            ],

            // books: [
            //     { id: 1, title: 'Harry Potter and the Sorcerers Stone', author: 'J.K. Rowling', bookmark: true, tags: ['#fantasy', '#magic', '#wonder', '#dark'] },
            //     { id: 2, title: 'Paper Towns', author: 'John Green', bookmark: true, tags: []},
            //     { id: 3, title: 'Best airlines', author:'N/A', bookmark: false, tags: []},
            // ],

            // Searchbar Object
            searchObj: {
                sortCategory: 'title',
                searchTerm: '',
                bookmark: false,
            },
            // Dialogs / Modals Controls
            addBookAutomagically: false,
            addBookManually: false,
        }
    },

    methods: {
        // update the Search Object from the search bar component
        searchUpdate(searchO) {
            this.searchObj = searchO;
            // console.log('working', this.searchObj)
        },

        // Book manipulation
        // Add Book
        addBook(book) {
            book.id = Date.now();
            this.books.push(new BookItem( new Book(book.title, book.author, book.bookmark)));
            // console.log(this.books);
            // console.log('book added', book);
        },
        
        // Remove a book from the array
        removeBook(book) {
            this.books.splice(this.books.indexOf(book),1);
            // console.log('removed book', book);
        },
    }
})


