<template>
  <div>
    <Header />
    <main role="main">
      <div class="container">
        <slot />
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
$primary: none;
@import '~@/assets/themes/custom.scss';
</style>
