<template>
  <div>
    <h1>Demo AG Gird</h1>

    <ag-grid-vue
      style="width: 100%; height: 500px"
      class="ag-theme-alpine"
      :column-defs="columnDefs"
      :row-data="rowData"
      :pagination="true"
      :pagination-page-size="10"
    >
    </ag-grid-vue>

    <pre>{{ rowData }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rowData: [],
      columnDefs: null,
    }
  },
  beforeMount() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const { data } = await this.axios.get(
        'https://mockend.com/mannv/vue2/posts'
      )
      this.rowData = data

      this.columnDefs = [
        { headerName: 'ID', field: 'id' },
        { headerName: 'TITLE', field: 'title' },
        { headerName: 'VIEWS', field: 'views' },
      ]
    },
  },
}
</script>

<style scoped></style>
