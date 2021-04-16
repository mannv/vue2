<template>
  <div>
    <h1>Demo Chart Horizontal</h1>
    <div class="row">
      <div class="col-md-6">
        <div :id="chartId"></div>
      </div>
      <div class="col-md-6">
        maxLinkOfMonth: {{ maxLinkOfMonth }}
        <pre>{{ chartData }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import * as d3 from 'd3'

export default {
  props: {
    width: {
      type: Number,
      default: 800,
    },
    height: {
      type: Number,
      default: 400,
    },
    paddingChart: {
      type: Number,
      default: 10,
    },
    margin: {
      type: Object,
      default: () => {
        return { left: 130, top: 10, right: 10, bottom: 50 }
      },
    },
    colors: {
      type: Array,
      default: () => {
        return ['#1a76d2', '#d2302e', '#aed581']
      },
    },
    tickColor: {
      type: String,
      default: 'gray',
    },
  },
  computed: {
    chartId() {
      return _.uniqueId(`chart_horizontal_`)
    },
    chartData() {
      let data = []
      const totalMonth = 10
      for (let i = 1; i <= totalMonth; i++) {
        let monthData = { name: `2021/${_.toString(i).padStart(2, '0')}` }
        let links = []

        // const totalLink = _.random(1, 10)
        let totalLink = 2
        if (i === 2) {
          totalLink = 10
        }
        for (let i2 = 0; i2 < totalLink; i2++) {
          links.push({
            url: `/~index${i2}.html`,
            data: {
              pv: _.random(0, 100),
              pc: _.random(0, 100),
              mobile: _.random(0, 100),
            },
          })
        }
        monthData.links = links
        data.push(monthData)
      }
      return data
    },
    maxLinkOfMonth() {
      let total = 0
      _.forEach(this.chartData, (item) => {
        {
          if (item.links.length > total) {
            total = item.links.length
          }
        }
      })
      return total
    },
    maxData() {
      let max = 0
      _.forEach(this.chartData, (item) => {
        {
          _.forEach(item.links, (l) => {
            const m = _.max(_.values(l.data))
            if (m > max) {
              max = m
            }
          })
        }
      })
      return max
    },
  },
  data() {
    return {
      g: null,
      yBandWidth: {},
      innerWidth: 0,
    }
  },
  mounted() {
    this.innerWidth = this.width - this.margin.left - this.margin.right
    const innerHeight = this.height - this.margin.top - this.margin.bottom
    const fullHeightChart = this.calculatorFullChartHeight(innerHeight)
    console.log('fullHeightChart', fullHeightChart)

    const svg = d3
      .select(`#${this.chartId}`)
      .append('svg')
      .attr('width', this.width)
      .attr('height', fullHeightChart)
      .style('background-color', '#d7f3e3')

    this.g = svg
      .append('g')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)

    //add group per month
    let paddingTop = 0
    _.forEach(this.chartData, (item, index) => {
      {
        const chartHeight = this.calculatorChartHeight(item)
        console.log('chartHeight', chartHeight)
        const groupG = this.g
          .append('g')
          .attr('transform', `translate(0, ${paddingTop})`)
        paddingTop += chartHeight + this.paddingChart

        groupG
          .append('rect')
          .attr('w', 0)
          .attr('y', 0)
          .attr('width', this.innerWidth)
          .attr('height', chartHeight)
          .attr('fill', 'white')

        this.renderChartInfo(
          groupG,
          item,
          chartHeight,
          index === this.chartData.length - 1
        )
      }
    })
  },

  methods: {
    addChartLeftLabel(g, chartData, chartHeight) {
      const labels = _.split(chartData.name, '/')

      g.append('text')
        .attr('class', 'y axis-label')
        .attr('x', -this.margin.left + 10)
        .attr('y', chartHeight / 2 - 10)
        .attr('font-size', '1rem')
        .attr('text-anchor', 'start')
        .attr('font-weight', 'bold')
        .text(labels[0])
      g.append('text')
        .attr('class', 'y axis-label')
        .attr('x', -this.margin.left + 10)
        .attr('y', chartHeight / 2 + 10)
        .attr('font-size', '1rem')
        .attr('text-anchor', 'start')
        .attr('font-weight', 'bold')
        .text(`/${labels[1]}`)
    },

    renderChartInfo(g, chartData, chartHeight, showTickLabel = false) {
      this.addChartLeftLabel(g, chartData, chartHeight)

      //max value --- x
      const maxValue = this.maxData
      console.log('maxValue', maxValue)

      const x = d3
        .scaleLinear()
        .domain([0, maxValue])
        .range([0, this.innerWidth])
      const xAxisCall = d3.axisBottom(x).tickSizeOuter(0).tickSize(-chartHeight)

      const axisBottom = g
        .append('g')
        .attr('class', 'buttom-axis')
        .attr('transform', `translate(0, ${chartHeight})`)
        .call(xAxisCall)

      axisBottom.selectAll('path').remove()
      axisBottom.selectAll('line').attr('stroke', '#efefef')

      if (!showTickLabel) {
        axisBottom.selectAll('text').remove()
      } else {
        axisBottom
          .selectAll('text')
          .attr('y', 10)
          .attr('x', 0)
          .attr('text-anchor', 'middle')
          .attr('color', this.tickColor)
      }

      //render y axis
      const yLabels = _.map(chartData.links, 'url')
      console.log('yLabels', yLabels)
      const y = d3
        .scaleBand()
        .domain(yLabels)
        .range([0, chartHeight])
        .paddingInner(0.1)
        .paddingOuter(0.1)
      const yAxisCall = d3.axisLeft(y).tickSizeInner(0).tickSizeOuter(0)
      const yAxis = g.append('g').attr('class', 'left-axis').call(yAxisCall)

      yAxis.selectAll('path').remove()
      yAxis.selectAll('text').attr('fill', this.tickColor)

      //render sub col data

      // const testRect = g.selectAll('.part2').data(yLabels)
      // testRect
      //   .enter()
      //   .append('rect')
      //   .attr('x', 0)
      //   .attr('y', (d, i) => y(yLabels[i]))
      //   .attr('width', 100)
      //   .attr('height', y.bandwidth())
      //   .attr('fill', 'red')

      const subCol = _.keys(_.head(chartData.links).data)
      const colors = d3.scaleOrdinal().domain(subCol).range(this.colors)
      const colScale = d3.scaleBand().domain(subCol).range([0, y.bandwidth()])

      const subGroup = g.selectAll('.part').data(chartData.links)
      subGroup
        .enter()
        .append('g')
        .attr('class', 'g-sub')
        .attr('transform', (d, i) => {
          return `translate(0, ${y(yLabels[i])})`
        })
        .selectAll('rect')
        .data((d) => {
          return _.values(d.data)
        })
        .join('rect')
        .attr('x', 0)
        .attr('y', (d, i) => colScale(subCol[i]))
        .attr('width', (d) => {
          console.log('d-v', d)
          return x(d)
        })
        // .attr('y', HEIGHT)
        .attr('height', colScale.bandwidth())
        .attr('fill', (d, i) => {
          return colors(subCol[i])
        })
      // .transition(t)
      // .attr('y', (d) => y(d))
      // .attr('height', (d) => HEIGHT - y(d))
    },

    getYBandWidth(innerHeight) {
      const fakeYaxisLabel = []
      for (let i = 1; i <= this.maxLinkOfMonth; i++) {
        fakeYaxisLabel.push(`label ${i}`)
      }
      console.log('fakeYaxisLabel', fakeYaxisLabel)

      const y = d3
        .scaleBand()
        .domain(fakeYaxisLabel)
        .range([innerHeight, 0])
        .paddingInner(0.1)
        .paddingOuter(0)

      // const yAxisCall = d3.axisLeft(y).tickSizeInner(0).tickSizeOuter(0)

      // this.g.append('g').attr('class', 'left-axis').call(yAxisCall)

      let bandwidth = 30 //y.bandwidth()

      console.log('bandWidth', bandwidth, y.paddingInner())
      this.yBandWidth = {
        bandwidth: bandwidth,
        padding: y.paddingInner() * bandwidth,
      }

      // const rects = this.g.selectAll('rect').data(fakeYaxisLabel)
      // rects
      //   .enter()
      //   .append('rect')
      //   .attr('x', 0)
      //   .attr('width', 200)
      //   .attr('y', (d, i) => y(d))
      //   .attr('height', y.bandwidth())
      //   .attr('fill', 'red')
    },

    calculatorFullChartHeight(innerHeight) {
      this.getYBandWidth(innerHeight)
      console.log('yBandWidth', this.yBandWidth)

      let height =
        (this.chartData.length - 1) * this.paddingChart +
        this.margin.top +
        this.margin.bottom
      _.forEach(this.chartData, (item) => {
        {
          height +=
            item.links.length * this.yBandWidth.bandwidth +
            this.yBandWidth.padding * (item.links.length - 1)
        }
      })
      return height
    },

    calculatorChartHeight(item) {
      let height =
        item.links.length * this.yBandWidth.bandwidth +
        this.yBandWidth.padding * (item.links.length - 1)
      return height
    },
  },
}
</script>

<style scoped></style>
