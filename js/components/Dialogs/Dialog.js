app.component('Dialog', {
    props: {
        dialogID: {},
        title: {},
        formSubmit: {
            type: Function,
            default: () => {},
        },
    },
    data() {
        return {}
    },
    computed: {},
    methods: {},
    template: `
    <q-dialog v-model="addBookAutomagically">
        <q-card>
            <q-card-section>
                <div class="dialog-header text-h6">
                    <slot name="header">
                        <span>{{ title }}</span>
                    </slot>
                </div>
            </q-card-section>
            
            <q-card-section class="q-pt-none">
            Sorry! This feature is not available yet...
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Close" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>
    `
})