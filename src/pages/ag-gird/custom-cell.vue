<template>
  <div>
    <h1>Custom Cell</h1>

    <div class="mb-3">
      <router-link
        target="_blank"
        :to="{ name: 'ag-gird-custom-cell-pro' }"
        class="btn btn-primary"
      >
        AG Gird Pro
      </router-link>
    </div>

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

    <div style="max-height: 300px; overflow-y: auto; background: #ebffd3">
      <pre>{{ rowData }}</pre>
    </div>
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
        { headerName: 'ID', field: 'id', pinned: 'left', maxWidth: 50 },
        {
          headerName: 'TITLE',
          field: 'title',
          // filter: 'agSetColumnFilter',
          filter: 'agTextColumnFilter',
          filterParams: {
            buttons: ['clear', 'apply'],
          },
          sortable: true,
          unSortIcon: true,
        },
        {
          headerName: 'VIEWS',
          field: 'views',
          filter: 'agNumberColumnFilter',
          sortable: true,
          unSortIcon: true,
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
