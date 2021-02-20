<template>
  <div>
    <h1>Product</h1>
    <button class="btn btn-default" @click="demo">Call Demo</button>
    <pre>{{ user }}</pre>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$auth.user()
    },
  },
  methods: {
    demo() {
      console.log('this.$auth', this.$auth)
      this.$auth.demo('vl')
    },
  },
}
</script>

<style scoped></style>
