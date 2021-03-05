<script>
export default {
  created() {
    if (typeof this.setupHeader === 'function') {
      this.$log.info('---> setupHeader')
      this.setupHeader()
    } else {
      this.$log.info('---> clearHeader')
      this.clearHeader()
    }
  },
  methods: {
    clearHeader() {
      this.$store.dispatch('header/setTitle', '')
      this.$store.dispatch('header/setBreadcrumb', [])
    },
  },
}
</script>
