<template>
  <div>
    <Header bg-class="bg-secondary" />
    <h1>Default layout</h1>
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
  components: {
    Header,
    Footer,
  },
}
</script>
