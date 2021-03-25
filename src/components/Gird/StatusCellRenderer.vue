<template>
  <span>
    <button
      class="btn btn-sm"
      :class="{
        'btn-success': cellValue % 2 === 0,
        'btn-danger': cellValue % 2 !== 0,
      }"
      @click="buttonClicked()"
    >
      <span v-if="cellValue % 2 === 0">
        <i class="fa fa-lock-open"></i> Active
      </span>
      <span v-else><i class="fa fa-lock"></i> Deactive</span>
    </button>
  </span>
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
      this.params.context.componentParent.changeStatus(this.cellValue)
    },

    getValueToDisplay(params) {
      return params.valueFormatted ? params.valueFormatted : params.value
    },
  },
}
</script>

<style scoped></style>
