<template>
  <div>
    <Header bg-class="bg-warning" />
    <main role="main">
      <div class="container">
        <slot />
        <div class="om-tien"></div>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>
<style lang="scss">
$primary: yellow;
@import '~@/assets/themes/custom.scss';
</style>
