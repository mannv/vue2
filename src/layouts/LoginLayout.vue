<template>
  <div class="text-center login-page">
    <slot />
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.login-page {
  height: 100vh;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
</style>
