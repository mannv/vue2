<template>
  <div class="ag-row">
    <div class="ag-cell">Noi dung</div>
  </div>
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

    getValueToDisplay(params) {
      return params.valueFormatted ? params.valueFormatted : params.value
    },
  },
}
</script>

<style scoped></style>
