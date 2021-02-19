<template>
  <div>
    <Header bg-class="bg-success" />
    <main role="main">
      <div className="container">
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
