<template>
  <div>
    <Header bg-class="bg-success" />
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
  name: 'HomeLayout',
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss">
$primary: green;
@import '~@/assets/themes/custom.scss';
</style>
