app.component('ToolTipButton',{
  props: {
    toolTip: {
      type: String,
      default: 'N/A',
    },
    icon: {
      type: String,
      default: 'warning'
    },
    label: {
      type: String,
      default: '',
    },
    click: function (){},
  },
  methods: {

  },
  template: `
  <q-btn flat :icon="icon" :label="label" @click="click">
    <q-tooltip anchor="top middle" self="bottom middle">
    {{ toolTip }}
    </q-tooltip>
  </q-btn>
  `
})