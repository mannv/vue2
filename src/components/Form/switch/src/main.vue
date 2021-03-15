<template>
  <input
    type="checkbox"
    :checked="el.$model === 1"
    data-bootstrap-switch
    :data-off-color="switchColor[0]"
    :data-on-color="switchColor[1]"
    :data-on-text="switchText[0]"
    :data-off-text="switchText[1]"
  />
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'lte-switch',
  props: {
    el: {
      type: Object,
      default: () => {
        return {}
      },
    },
    switchColor: {
      type: Array,
      default: () => {
        return ['danger', 'success']
      },
    },
    switchText: {
      type: Array,
      default: () => {
        return ['On', 'Off']
      },
    },
  },
  mounted() {
    let self = this
    $(this.$el).bootstrapSwitch({
      onSwitchChange: function (event, state) {
        event.preventDefault()
        self.changeValue(state)
      },
    })
  },
  methods: {
    changeValue(state) {
      this.el.$model = state === true ? 1 : 0
    },
  },
}
</script>
