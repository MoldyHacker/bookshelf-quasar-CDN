app.component('ButtonElement', {
    props: ['icon', 'label'],
    template: `
    <q-btn flat label="Close" icon="delete" @click="resetBook" v-close-popup />
    `

})