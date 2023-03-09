app.component('BookList', {
    props: {
        books: {
            type: Array,
            required: true,
        },
        filter: String,
    },
    computed: {
        sortedByTitle() {
            return this.books.sort((a,b) => {
                return a.title - b.title;
            });
        },
    },
    methods: {
        bookmarkIt(book){this.$emit('bookmark-book', book); console.log('bookmark b', book)},
        deleteIt(book){this.$emit('delete-book', book); console.log('delete b', book)},
        editIt(book){this.$emit('edit-book', book); console.log('edit b', book)},
    },
    template: `
    <q-page class="row items-baseline justify-evenly constrain">
        <div class="q-pa-md row items-start q-gutter-md constrain justify-center">
            <BookListItem
              v-for="book in books"
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