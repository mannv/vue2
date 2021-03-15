<template>
  <div>
    <input
      v-model.trim="el.$model"
      :type="type"
      class="form-control"
      :class="{ 'is-invalid': el.$error }"
    />
    <lte-error-message
      :el="el"
      :messages="messages"
      :label="label"
    ></lte-error-message>
  </div>
</template>

<script>
export default {
  name: 'LteField',
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
    type: {
      type: String,
      default: 'text', //text, email, password
    },
    messages: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style scoped></style>
