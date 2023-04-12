app.component('EditBookDialog', {
    props: ['modelValue', 'book'],
    emits: ['update:modelValue'],
    data() {
        return {
            newBook: {...this.book.book},
        }
    },
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    },
    methods: {
        saveBook() {
            this.book.book = {...this.newBook};
        },
    },
    template: `
    <q-dialog persistent v-model="value">
        <q-card>
            <q-card-section class="row">
                <span class="col-10 text-h6">Edit Book</span>
                <q-btn class="col" flat rounded @click="newBook.bookmark = !newBook.bookmark" :icon="newBook.bookmark ? 'bookmark' : 'bookmark_outline' "/>
            </q-card-section>

            <q-card-section class="q-pt-none q-gutter-sm">
                <q-input autofocus filled v-model="newBook.title" label="Title">
                    <template v-slot:prepend>
                        <q-icon name="menu_book" />
                    </template>
                </q-input>
                <q-input filled v-model="newBook.author" label="Author">
                    <template v-slot:prepend>
                        <q-icon name="person" />
                    </template>
                </q-input>
            </q-card-section>
            
            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Close" icon="cancel" v-close-popup />
                <q-btn flat label="Save" icon="save" @click="saveBook" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>
    `
})