<template>
  <div>
    <h1>Custom Cell</h1>

    <ag-grid-vue
      style="width: 100%; height: 500px"
      class="ag-theme-alpine"
      :context="context"
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
      context: null,
      rowData: [],
      columnDefs: null,
    }
  },
  beforeMount() {
    this.context = {
      componentParent: this,
    }
    this.loadData()
  },
  methods: {
    changeStatus(id) {
      console.log('changeStatus: %d', id)
      this.$swal.success({ text: `Change status ID: ${id}` })
    },
    async loadData() {
      const { data } = await this.axios.get(
        'https://mockend.com/mannv/vue2/posts'
      )
      this.rowData = data

      this.rowData[2].content = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`

      this.columnDefs = [
        { headerName: 'ID', field: 'id' },
        { headerName: 'TITLE', field: 'title' },
        { headerName: 'VIEWS', field: 'views' },
        { headerName: 'CONTENT', field: 'content' },
        {
          headerName: 'STATUS',
          field: 'id',
          cellRendererFramework: 'StatusCellRenderer',
          onCellClicked: (event) => {
            console.log(event)
          },
        },
      ]
    },
  },
}
</script>

<style>
.ag-theme-alpine
  .ag-ltr
  .ag-has-focus
  .ag-cell-focus:not(.ag-cell-range-selected),
.ag-theme-alpine
  .ag-ltr
  .ag-context-menu-open
  .ag-cell-focus:not(.ag-cell-range-selected),
.ag-theme-alpine
  .ag-ltr
  .ag-has-focus
  .ag-full-width-row.ag-row-focus
  .ag-cell-wrapper.ag-row-group,
.ag-theme-alpine .ag-ltr .ag-cell-range-single-cell,
.ag-theme-alpine .ag-ltr .ag-cell-range-single-cell.ag-cell-range-handle,
.ag-theme-alpine
  .ag-rtl
  .ag-has-focus
  .ag-cell-focus:not(.ag-cell-range-selected),
.ag-theme-alpine
  .ag-rtl
  .ag-context-menu-open
  .ag-cell-focus:not(.ag-cell-range-selected),
.ag-theme-alpine
  .ag-rtl
  .ag-has-focus
  .ag-full-width-row.ag-row-focus
  .ag-cell-wrapper.ag-row-group,
.ag-theme-alpine .ag-rtl .ag-cell-range-single-cell,
.ag-theme-alpine .ag-rtl .ag-cell-range-single-cell.ag-cell-range-handle {
  border: 1px solid;
  border-color: transparent;
  outline: initial;
}
</style>
