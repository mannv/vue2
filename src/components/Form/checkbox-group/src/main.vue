<template>
  <div :class="{ 'is-invalid': el.$error }">
    <div
      v-for="(opt, optIndex) in options"
      :key="optIndex"
      :class="`icheck-${type} d-inline`"
    >
      <input
        :id="`checkout_${name}_${optIndex}`"
        type="checkbox"
        :checked="setCheckedCheckbox(opt)"
        @click="clickCheckBox(opt)"
      />
      <label :for="`checkout_${name}_${optIndex}`" class="pr-3">
        {{ opt.text }}
      </label>
    </div>
    <lte-error-message
      :el="el"
      :messages="messages"
      :label="label"
    ></lte-error-message>
  </div>
</template>

<script>
export default {
  name: 'LteCheckboxGroup',
  props: {
    el: {
      type: Object,
      default: () => {
        return {}
      },
    },
    label: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    //https://bantikyan.github.io/icheck-bootstrap/
    type: {
      type: String,
      default: 'primary',
    },
    options: {
      type: Array,
      default: () => {
        return []
      },
    },
    messages: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  methods: {
    //checkbox
    setCheckedCheckbox(opt) {
      return _.includes(this.el.$model, opt.id)
    },
    clickCheckBox(opt) {
      if (!_.includes(this.el.$model, opt.id)) {
        this.el.$model.push(opt.id)
      } else {
        this.el.$model = _.filter(this.el.$model, (vl) => {
          return vl !== opt.id
        })
      }
    },
  },
}
</script>
