<template>
  <div class="form-group">
    <label :class="{ 'text-danger': el.$error }">
      {{ label }}
    </label>
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': el.$error }"
      v-model.trim="el.$model"
    />
    <span v-if="el.$error && !el.required" class="error invalid-feedback">
      Field is required.
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    el: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped></style>
