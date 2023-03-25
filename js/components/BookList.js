app.component('BookList', {
    props: {
        books: {
            type: Array,
            required: true,
        },
        filterText: String,
        sortText: {
            type: String,
            default: 'author',
        },
        v: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            filterText: '',
            sortCategory: 'title',
            search: '',
            bookmarkToggle: false,

        }
    },
    computed: {
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
        bookmarkIt(book){this.$emit('bookmark-book', book); console.log('bookmark b', book)},
        deleteIt(book){this.$emit('delete-book', book); console.log('delete b', book)},
        editIt(book){this.$emit('edit-book', book); console.log('edit b', {book, v})},

        clear(){this.filterText = ''; this.sortCategory = ''; this.search = '';},

        filterByBookmarked(books) {return this.bookmarkToggle ? books.filter((book) => book.bookmark) : books},

        filterByTitle(books) {
            return this.sortCategory === 'title' ?
            this.search ? books.filter(book =>
                book.title.toLowerCase().includes(this.search.toLowerCase()))
                : books
                :books
        },

        filterByAuthor(books) {
            return this.sortCategory === 'author' ?
            this.search ? books.filter(book =>
                book.author.toLowerCase().includes(this.search.toLowerCase()))
                : books
                :books
        },

        sortByTitle() {this.books.sort((a,b) => a.title - b.title)},
        sortByAuthor() {this.books.sort((a,b) => a.author - b.author)},
        sortByBookmark() {this.books.sort((a,b) => a.bookmark - b.bookmark)},
    },

    template: `
    <div class="constrain">
        <div class="row q-pa-lg">
            <div class="col col-md-4 col-12 q-pa-md">
                <q-btn-toggle
                  class="justify-center"
                  v-model="sortCategory"
                  toggle-color="primary"
                  :options="[
                    {label: 'Title', value: 'title'},
                    {label: 'Author', value: 'author'},
                    {label: 'Tag', value: 'tag'},
                  ]"
                />
            </div>
            <div class="col col-md-8 col-12 align-center">
                <q-input
                v-model="search"
                filled
                label="Search by..."
                :placeholder="sortCategory"
                >
                    <template v-slot:append>
                        <q-icon name="search" />
                    </template>
                </q-input>
            </div>
        </div>
        <div class="row justify-center items-center content-center">
            <div class="q-pl-xl">
                <q-toggle v-model="bookmarkToggle" label="Show Only Bookmarks" />
            </div>
            
        </div>
    </div>
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
          </div>
    </q-page>
    `
})