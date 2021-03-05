<template>
  <h1>Profile</h1>
</template>

<script>
import BasePage from '@/components/BasePage'

export default {
  extends: BasePage,
  methods: {
    setupHeader() {
      this.$store.dispatch('header/setTitle', 'Profile')
      this.$store.dispatch('header/setBreadcrumb', [
        { name: 'Home', route: 'index' },
        { name: 'Profile' },
      ])
    },
  },
}
</script>

<style scoped></style>
