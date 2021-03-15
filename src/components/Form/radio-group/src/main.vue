<template>
  <div :class="{ 'is-invalid': el.$error }">
    <div
      v-for="(opt, optIndex) in options"
      :key="optIndex"
      :class="`icheck-${type} d-inline`"
    >
      <input
        :id="`checkout_${name}_${optIndex}`"
        :name="name"
        type="radio"
        :checked="setCheckedRadio(opt)"
        @click="clickRadio(opt)"
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
  name: 'LteRadioGroup',
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
    //radio
    setCheckedRadio(opt) {
      return this.el.$model === opt.id
    },
    clickRadio(opt) {
      this.el.$model = opt.id
    },
  },
}
</script>

<style scoped></style>
