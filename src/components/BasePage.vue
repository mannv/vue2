<script>
export default {
  created() {
    if (typeof this.setupHeader === 'function') {
      this.setupHeader()
    } else {
      this.clearHeader()
    }
  },
  methods: {
    clearHeader() {
      console.log('---> clearHeader')
      this.$store.dispatch('header/setTitle', '')
      this.$store.dispatch('header/setBreadcrumb', [])
    },
  },
}
</script>
