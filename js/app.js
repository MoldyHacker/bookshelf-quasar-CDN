const app = Vue.createApp({
    data(){
        return {
            books: [
                { id: 1, title: 'Harry Potter and the Sorcerers Stone', author: 'J.K. Rowling', bookmark: true, tags: ['#fantasy', '#magic', '#wonder', '#dark'] },
                { id: 2, title: 'Paper Towns', author: 'John Green', bookmark: true, tags: []},
                { id: 3, title: 'Best airlines', author:'N/A', bookmark: false, tags: []},
            ],
            searchObj: {
                sortCategory: 'title',
                searchTerm: '',
                bookmark: false,
            },
            addBookAutomagically: false,
            addBookManually: false,
            editDialog: false,
            editData: 'book',
            sortText: 'title',
            filterText: 'bookmark',
        }
    },

    methods: {
        searchUpdate(searchO) {
            this.searchObj = searchO;
            console.log('working', this.searchObj)
        },
        addBook(book) {
            book.id = Date.now();
            this.books.push(book);
        },
        editIt(book) {
            console.log('edit book', book);
            this.$emit('editTheBook', book);
            this.editDialog = true;
        },
        editBook(book) {

        },
        removeBook(book) {
            console.log('removing book')
            this.books.splice(this.books.indexOf(book),1);
        },
        bookmarkBook(book) {
            this.books[this.books.indexOf(book)].bookmark = !book.bookmark;
        }
    }
})


