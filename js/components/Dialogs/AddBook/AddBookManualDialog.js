app.component('AddBookManualDialog', {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    data() {
        return {
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
    methods: {},
    template: `
    <q-dialog persistent v-model="addBookManually">
        <q-card>
          <q-card-section>
            <div class="text-h6">Add Book Manually</div>
          </q-card-section>

          <q-card-section class="q-pt-none q-gutter-sm">
            <q-input filled v-model="bookItem.title" label="Title">
              <template v-slot:prepend>
                <q-icon name="menu_book" />
              </template>
            </q-input>
            <q-input filled v-model="bookItem.author" label="Author">
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Save" icon="save" @click="saveIt" v-close-popup />
            <q-btn flat label="Close" icon="delete" @click="resetBook" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    `
})