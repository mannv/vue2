<template>
  <a @click="buttonClicked">{{ cellValue }}</a>
</template>

<script>
export default {
  data() {
    return {
      cellValue: null,
    }
  },
  beforeMount() {
    // this.params contains the cell & row information and is made available to this component at creation time
    // see ICellRendererParams below for more details
    this.cellValue = this.getValueToDisplay(this.params)
  },
  methods: {
    // gets called whenever the user gets the cell to refresh
    refresh(params) {
      // set value into cell again
      this.cellValue = this.getValueToDisplay(params)
    },

    buttonClicked() {
      // alert(`${this.cellValue} medals won!`)
      this.params.context.componentParent.clickCellId(this.cellValue)
    },

    getValueToDisplay(params) {
      return params.valueFormatted ? params.valueFormatted : params.value
    },
  },
}
</script>

<style scoped>
a {
  cursor: pointer;
  color: #1976d2 !important;
}
a:hover {
  text-decoration: underline !important;
}
</style>
