app.component('BookList', {
    props: {
        books: {
            type: Array,
            required: true,
        },
        search: {
            type: Object,
            required: true,
            default: {
                sortCategory: 'title',
                searchTerm: '',
                bookmark: false
            }
        },
    },

    computed: {
        // Return all the books filtered by the selected methods
        returnFiltered() {
            return this.filterByTitle(this.filterByAuthor(this.filterByBookmarked(this.books)))
        },

        sortedByTitle() {
            console.log(this.sortText);
            return this.books.sort((a,b) => {
                return a.title - b.title;
            });
        },
    },

    methods: {
        // Book Manipulations
        // Bookmark the book
        bookmarkIt(book){
            this.$emit('bookmark-book', book);
            // console.log('bookmark b', book)
        },

        // Delete the book
        deleteIt(book){
            this.$emit('delete-book', book);
            // console.log('delete b', book)
        },

        // Edit the book
        editIt(book){
            this.$emit('edit-book', book);
            // console.log('edit b', book);
        },

        // If bookmark toggle is selected from searchbar, filter to only bookmarked books
        filterByBookmarked(books) {return this.search.bookmark ? books.filter((book) => book.bookmark) : books},

        filterByTitle(books) {
            return this.search.sortCategory === 'title' ?
            this.search.searchTerm ? books.filter(book =>
                book.title.toLowerCase().includes(this.search.searchTerm.toLowerCase()))
                : books
                :books
        },

        filterByAuthor(books) {
            return this.search.sortCategory === 'author' ?
            this.search.searchTerm ? books.filter(book =>
                book.author.toLowerCase().includes(this.search.searchTerm.toLowerCase()))
                : books
                :books
        },

        sortByTitle() {this.books.sort((a,b) => a.title - b.title)},
        sortByAuthor() {this.books.sort((a,b) => a.author - b.author)},
        sortByBookmark() {this.books.sort((a,b) => a.bookmark - b.bookmark)},
    },

    template: `    
    <q-page class="row items-baseline justify-evenly constrain">
        <div class="q-pa-md row items-start q-gutter-md constrain justify-center">
            <BookListItem
                v-for="book in returnFiltered"
                :book="book"
                :key="book.id"
                @bookmark-book="bookmarkIt"
                @delete-book="deleteIt"
                @edit-book="editIt"
            />
            <h3 class="animate__animated animate__headShake noBooks" v-if="!returnFiltered.length">
                Sorry! No {{ this.search.bookmark ? 'bookmarks' : 'books' }} available.
            </h3>
        </div>
    </q-page>
    `
})