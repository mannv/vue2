<template>
  <div>
    <h1>Custom Cell - AG Gird Pro</h1>

    <div class="mb-3">
      <router-link
        target="_blank"
        :to="{ name: 'ag-gird-custom-cell' }"
        class="btn btn-primary"
      >
        AG Gird FREE
      </router-link>
    </div>

    <ag-grid-vue
      style="width: 100%; height: 500px"
      class="ag-theme-alpine"
      :context="context"
      :column-defs="columnDefs"
      :row-data="rowData"
      :default-col-def="defaultColDef"
      :grid-options="gridOptions"
      :pagination="true"
      :pagination-page-size="10"
    >
    </ag-grid-vue>

    <div style="max-height: 300px; overflow-y: auto; background: #ebffd3">
      <pre>{{ rowData }}</pre>
    </div>
  </div>
</template>

<script>
import StatusCellRenderer from '@/components/Gird/StatusCellRenderer'
import 'ag-grid-enterprise'
export default {
  // eslint-disable-next-line
  components: { StatusCellRenderer },
  data() {
    return {
      context: null,
      rowData: [],
      columnDefs: null,
      defaultColDef: null,
      gridOptions: null,
    }
  },
  beforeMount() {
    this.gridOptions = {}
    this.context = {
      componentParent: this,
    }
    this.loadData()
  },
  mounted() {
    this.gridApi = this.gridOptions.api
    this.gridColumnApi = this.gridOptions.columnApi
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

      this.defaultColDef = {
        flex: 1,
        minWidth: 150,
        filter: true,
      }

      this.columnDefs = [
        { headerName: 'ID', field: 'id', pinned: 'left', maxWidth: 50 },
        {
          headerName: 'TITLE',
          field: 'title',
          filter: 'agSetColumnFilter',
          // filter: 'agTextColumnFilter',
          // filterParams: {
          //   buttons: ['clear', 'apply'],
          // },
        },
        {
          headerName: 'VIEWS',
          field: 'views',
          filter: 'agNumberColumnFilter',
          // filter: 'agSetColumnFilter',
          // filterParams: {
          //   buttons: ['clear', 'apply'],
          // },
        },
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
