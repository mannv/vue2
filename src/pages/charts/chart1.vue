<template>
  <div>
    <h1>Demo 3djs Chart 1 22</h1>
    <canvas></canvas>
    <button class="btn btn-default" @click="demoTransition">Transition</button>
    <button class="btn btn-primary" @click="enterData">enterData</button>
    <button class="btn btn-danger" @click="addBlock">add Block</button>
  </div>
</template>

<script>
/* eslint-disable */
import * as d3 from 'd3'
// import { axisLeft } from 'd3-axis'
export default {
  data() {
    return {
      chart: null,
      bar1: null,
    }
  },
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
    // this.chart = d3.select('canvas')
    //   .append('svg')
    //   .attr('width', 1440)
    //   .attr('height', 30)
    //   .append('g')
    //   .attr('transform', 'translate(0,30)')

    this.chart = d3
      .select('body')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500)
      .style('background', 'gray')

    this.chart
      .append('circle')
      .attr('cx', 50)
      .attr('cy', 50)
      .attr('r', 50)
      .style('fill', 'green')
    //

    this.chart
      .append('ellipse')
      .attr('cx', 400)
      .attr('cy', 50)
      .attr('rx', 100)
      .attr('ry', 50)
      .style('fill', '#000')
      .on('mouseover', function () {
        d3.select(this).transition().duration(500).style('fill', 'orange')
      })
      .on('mouseout', function () {
        d3.select(this).transition().duration(500).style('fill', '#000')
      })

    this.bar1 = this.chart
      .append('rect')
      .attr('fill', 'orange')
      .attr('x', 100)
      .attr('y', 20)
      .attr('height', 20)
      .attr('width', 10)

    // let data = [100, 200, 400]
    // let canvas = d3
    //   .selectAll('canvas')
    //   .data(data)
    //   .text((value, index) => {
    //     console.log('value: %s, index: %s', value, index)
    //     return value
    //   })
  },
  methods: {
    demoTransition() {
      console.log('d3.easeLinear', d3.easeLinear)
      this.bar1
        .transition()
        .ease(d3.easeLinear)
        .duration(500)
        .delay(2000)
        .attr('height', 400)
    },
    enterData() {
      const data = ['text1', 'text2', 'thang 4']
      console.log('data', data)
      d3.select('h1')
        .selectAll('span')
        .data(data)
        .enter()
        .append('span')
        .text(function (d) {
          return `text ${d}`
        })
        .style('color', function (d, i) {
          if (i % 2 === 0) {
            return 'red'
          }
          return 'blue'
        })
    },
    addBlock() {
      this.chart
        .append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 200)
        .attr('height', 200)
        .attr('fill', 'blue')
    },
  },
}
</script>

<style scoped></style>
