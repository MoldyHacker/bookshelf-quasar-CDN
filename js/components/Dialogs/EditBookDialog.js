app.component('EditBookDialog', {
    props: ['modelValue', 'book'],
    emits: ['update:modelValue'],
    data() {
        return {
            newBook: {
                title: '',
                author: '',
                bookmark: '',
                tags: '',
            }
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
        editBook() {
            this.$emit('edit-item', this.newBook);
            console.log(this.newBook);
            this.resetBook();

        },
        resetBook() {
            console.log('edit the book',this.book)
        }
    },
    template: `
    <q-dialog persistent v-model="value">
        <q-card>
          <q-card-section>
            <div class="text-h6">Edit Book</div>
          </q-card-section>

          <q-card-section class="q-pt-none q-gutter-sm">
            <q-input autofocus filled v-model="book" label="Title">
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
            <q-btn flat label="Save" icon="save" @click="addBook" v-close-popup />
            <q-btn flat label="Close" icon="delete" @click="resetBook" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    `
})