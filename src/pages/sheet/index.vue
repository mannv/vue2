<template>
  <div>
    <button class="btn btn-info" @click="exportExcel">Export excel</button>
    <div>{{ columnLetters }}</div>
    <pre>{{ rows[0] }}</pre>
  </div>
</template>

<script>
import * as ExcelJS from 'exceljs'
export default {
  data() {
    return {
      columnLetters: [],
      rows: [],
    }
  },
  async beforeMount() {
    this.columnLetters = this.range('A', 'J')
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((response) => response.json())
      .then((data) => {
        this.rows = _.concat(
          {
            athlete: '注ご会謙ネモ',
            age: 23,
            country: '農コ工',
            year: 2008,
            date: '24/08/2008',
            sport: '奪裏毎',
            gold: 8,
            silver: 0,
            bronze: 0,
            total: 8,
          },
          data
        )
      })
  },
  methods: {
    range(start, stop) {
      var result = []
      for (
        var idx = start.charCodeAt(0), end = stop.charCodeAt(0);
        idx <= end;
        ++idx
      ) {
        result.push(String.fromCharCode(idx))
      }
      return result
    },
    async exportExcel() {
      const startExport = Date.now()
      console.log('Start export data', startExport)
      const workbook = new ExcelJS.Workbook()
      // Create worksheets with headers and footers
      const worksheet = workbook.addWorksheet('Demo Export Data')

      worksheet.columns = [
        { header: 'Athlete', key: 'athlete', width: 20 },
        { header: 'Age', key: 'age' },
        { header: 'Country', key: 'country', width: 20 },
        { header: 'Year', key: 'year' },
        { header: 'Date', key: 'date', width: 20 },
        { header: 'Sport', key: 'sport' },
        { header: 'Gold', key: 'gold' },
        { header: 'Silver', key: 'silver' },
        { header: 'Bronze', key: 'bronze' },
        { header: 'Total', key: 'total' },
      ]

      worksheet.addRows(this.rows)

      const headingStyle = {
        fill: {
          type: 'pattern',
          pattern: 'darkTrellis',
          fgColor: { argb: 'DD4D39' },
        },
        font: {
          bold: true,
          name: 'Calibri',
          color: { argb: 'FFFFFF' },
        },
      }

      _.forEach(this.columnLetters, (letter) => {
        worksheet.getCell(`${letter}1`).style = headingStyle
      })

      var FileSaver = require('file-saver')
      await workbook.xlsx
        .writeBuffer()
        .then((buffer) =>
          FileSaver.saveAs(new Blob([buffer]), `${Date.now()}_demo.xlsx`)
        )
        .catch((err) => console.log('Error writing excel export', err))

      const endExport = Date.now()
      console.log('End export data', endExport)
      console.log('Total time: ', endExport - startExport)
    },
  },
}
</script>

<style scoped></style>
