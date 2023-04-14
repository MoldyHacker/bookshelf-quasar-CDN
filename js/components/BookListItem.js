app.component('BookListItem', {
    props: {
        book: {
            type: Object,
            required: true,
        },
    },
    emits: ['delete-book'],
    data() {
        return {
            visible: false, // mouseover buttons
            editDialog: false
        }
    },
    methods: {
        // truncate title and author names
        trunc(str, cha) { return str?.length > cha ? str.substring(0, cha) + '...' : str ?? 'N/A' },

        editBook(book) {
            this.editDialog = true;
        }
    },

    template: `
    <book-list-item-details :book="book.book">
        <template v-slot:bookmark>
            <q-checkbox
                v-model="book.bookmark"
                checked-icon="bookmark"
                unchecked-icon="bookmark_outline"
                indeterminate-icon="help"
                color="black"
                size="48px"
            />
        </template>
        <template v-slot:buttons>
            <tool-tip-button icon="delete" toolTip="Delete" @click="$emit('delete-book', book)" />
            <tool-tip-button icon="edit" toolTip="Edit" @click="editBook(book)" />
        </template>
    </book-list-item-details>
    
    <edit-book-dialog v-model:model-value="editDialog" :book="book"></edit-book-dialog>
    `
});