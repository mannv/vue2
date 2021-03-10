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
    /* eslint-disable */
    let self = this
    $(this.$el).bootstrapSwitch({
      onSwitchChange: function(event, state) {
        event.preventDefault()
        self.changeValue(state)
      },
    })
    /* eslint-enable */
  },
  methods: {
    changeValue(state) {
      this.el.$model = state === true ? 1 : 0
    },
  },
}
</script>
