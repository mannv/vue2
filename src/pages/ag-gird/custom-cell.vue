<template>
  <div>
    <h1>Custom Cell</h1>

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
import StatusCellRenderer from '@/components/Gird/StatusCellRenderer'
export default {
  // eslint-disable-next-line
  components: { StatusCellRenderer },
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
        // { headerName: 'CONTENT', field: 'content' },
        {
          headerName: 'STATUS',
          field: 'id',
          cellRendererFramework: 'StatusCellRenderer',
        },
      ]
    },
  },
}
</script>

<style scoped></style>
