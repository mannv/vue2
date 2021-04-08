<template>
  <div>
    <h1>Demo 3djs Chart 1 22</h1>
    <canvas></canvas>
  </div>
</template>

<script>
import * as d3 from 'd3'
// import { axisLeft } from 'd3-axis'
export default {
  mounted() {
    // const svg = d3
    //   .create('svg')
    //   .attr('viewBox', [0, 0, 600, 600])
    //   .attr('fill', 'red')
    // d3.select(document.body).append(svg)
    // let p = d3
    //   .select('body')
    //   .selectAll('p')
    //   .data([40, 8, 15, 16, 23, 42])
    //   .text(function (d) {
    //     return d
    //   })
    // p.enter()
    //   .append('p')
    //   .text(function (d) {
    //     return d
    //   })

    // const axis = d3.axisLeft(1)
    // d3.select('canvas')
    //   .append('svg')
    //   .attr('width', 1440)
    //   .attr('height', 30)
    //   .append('g')
    //   .attr('transform', 'translate(0,30)')
    //   .call(axis)

    let canvas = d3
      .select('body')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500)
      .style('background', 'gray')

    canvas
      .append('circle')
      .attr('cx', 50)
      .attr('cy', 50)
      .attr('r', 50)
      .style('fill', 'green')

    canvas
      .append('ellipse')
      .attr('cx', 400)
      .attr('cy', 50)
      .attr('rx', 100)
      .attr('ry', 50)
      .style('fill', '#000')
  },
}
</script>

<style scoped></style>
