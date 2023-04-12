app.component('BookListItem', {
    props: {
        book: {
            type: Object,
            required: true,
        },
    },
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
    <q-card class="book-card" @mouseenter="visible = true" @mouseleave="visible = false" >
    
    <!--Header-->
        <q-card-section horizontal class="card-header book-card-header">
            <q-btn flat rounded @click="book.bookmarkToggle()" :icon="book.book.bookmark ? 'bookmark' : 'bookmark_outline' "/>
            <span class="text-h6">{{ trunc(book.book.title, 38) }}</span>
        </q-card-section>

        <q-separator inset />

    <!--author-->
        <q-card-section class="q-pt-none q-pb-none">
            <q-icon color="black" name="person"  size="24px" />
            <span class="text-subtitle2 q-pl-md">{{ trunc(book.book.author, 18) }}</span>
        </q-card-section>

    <!--mouseover buttons-->
        <div class="card-actions book-card-actions">
            <q-card-actions align="right" v-show="visible">
                
                <q-btn flat icon="delete" @click="$emit('delete-book', book)">
                    <q-tooltip anchor="top middle" self="bottom middle">
                    Delete
                    </q-tooltip>
                </q-btn>
                
                <q-btn flat icon="edit" @click="editBook(book)">
                    <q-tooltip anchor="top middle" self="bottom middle">
                    Edit
                    </q-tooltip>
                </q-btn>
                
<!--                <tool-tip-button />-->
                
            </q-card-actions>
        </div>
        
        <edit-book-dialog v-model:model-value="editDialog" :book="book"></edit-book-dialog>
    </q-card>
    `
});

//TODO add BookListItemBook?
app.component('BookListItemBook',{
    props: ['book'],
    methods: {},
    template: `
    
    `
});