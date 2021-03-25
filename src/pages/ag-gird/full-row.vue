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
      :is-full-width-cell="isFullWidthCell"
      :default-col-def="defaultColDef"
      :full-width-cell-renderer-framework="fullWidthCellRendererFramework"
    >
    </ag-grid-vue>

    <div style="max-height: 300px; overflow-y: auto; background: #ebffd3">
      <pre>{{ rowData }}</pre>
    </div>
  </div>
</template>

<script>
import FullRow from '@/components/Gird/FullRow'
export default {
  components: {
    // eslint-disable-next-line
    FullRow,
  },
  data() {
    return {
      rowData: [],
      columnDefs: null,
      frameworkComponents: null,
      isFullWidthCell: null,
      fullWidthCellRendererFramework: null,
      defaultColDef: {
        flex: 1,
        sortable: true,
        resizable: true,
        filter: true,
      },
    }
  },
  beforeMount() {
    this.loadData()
    // eslint-disable-next-line
    this.isFullWidthCell = (rowNode) => {
      return rowNode.data.id === 2
    }
    this.frameworkComponents = { fullRow: FullRow }
    this.fullWidthCellRendererFramework = 'FullRow'
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
