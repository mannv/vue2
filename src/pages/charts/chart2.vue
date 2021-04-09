<template>
  <div>
    <h1>Demo 3djs Chart 2</h1>
    <svg width="960" height="600"></svg>
  </div>
</template>

<script>
/* eslint-disable */
import * as d3 from 'd3'
import { scaleBand, scaleLinear, scaleOrdinal } from 'd3-scale'
export default {
  data() {
    return {
      yScale: 1,
    }
  },
  mounted() {
    this.yScale = d3.scaleLinear()
    console.log('this.yScale', this.yScale)

    let marge = { top: 60, bottom: 0, left: 60, right: 60 }
    let svg = d3.select('svg')
    let width = svg.attr('width')
    let height = svg.attr('height')
    let g = svg
      .append('g')
      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')')

    const yGridFunction = d3.axisBottom(this.yScale).tickSize(height)
    // .ticks(this.cfg.axis.yTicks, this.cfg.axis.yFormat)

    g.attr(
      'transform',
      'horizontal' ? 'translate(0,0)' : `translate(0,${height})`
    )
      .transition(this.transition)
      .call(yGridFunction)

    let dataset = [10, 20, 30, 23, 13, 40, 27, 35, 20, 22, 22, 222, 222]

    const xScaleValue = [
      'thang 01',
      'thang 02',
      'thang 03',
      'thang 04',
      'thang 05',
      'thang 06',
      'thang 06',
      'thang 07',
      'thang 08',
      'thang 09',
      'thang 10',
      'thang 11',
      'thang 12',
      'thang 13',
      'thang 14',
      'thang 15',
      'thang 16',
      'thang 17',
      'thang 18',
      'thang 19',
      'thang 20',
      'thang 20',
      'thang 22',
      'thang 23',
      'thang 24',
      'thang 25',
    ]

    // x , y 方向绘制坐标轴
    let xScale = d3
      .scaleBand()
      .domain(xScaleValue)
      // .domain(d3.range(dataset.length))
      .rangeRound([0, width - marge.left - marge.right])
    let xAxis = d3.axisBottom(xScale)

    let yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([height - marge.top - marge.bottom, 0])
    let yAxis = d3.axisLeft(yScale)

    g.append('g')
      .attr(
        'transform',
        'translate(' + 0 + ',' + (height - marge.top - marge.bottom) + ')'
      )
      .call(xAxis)

    // g.append('g').attr('transform', 'translate(0, 0)').call(yAxis)

    let gs = g.selectAll('.rect').data(dataset).enter().append('g')

    // 绘制矩形
    let rectPadding = 50
    gs.append('rect')
      .attr('x', function (d, i) {
        return xScale(i) + rectPadding / 2
      })
      .attr('y', function (d) {
        return yScale(d)
      })
      .attr('width', function () {
        return xScale.step() - rectPadding
      })
      .attr('height', function (d) {
        return height - marge.top - marge.bottom - yScale(d)
      })
      .attr('fill', '#1976d2')
      .on('mouseover', function () {
        d3.select(this).transition().duration(100).attr('fill', 'yellow')
      })
      .on('mouseout', function () {
        d3.select(this).transition().duration(100).attr('fill', '#1976d2')
      })
  },
}
</script>

<style scoped></style>
