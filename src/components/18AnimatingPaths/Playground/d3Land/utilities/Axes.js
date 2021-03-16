import { axisBottom, axisLeft } from 'd3-axis';

class Axes {
  constructor(parent, data, scales, dims){
    this.data = data;
    this.createAxes(parent, scales, dims);
  };

  createAxes=(parent, scales, dims)=>{
    this.scaleAxes(scales, dims);

    this.xAxisBottomG =
      parent.append('g')
        .attr('transform', `translate(0, ${dims.innerHeight})`)
        .call(this.xAxisBottom)

    this.yAxisLeftG =
      parent.append('g')
        .call(this.yAxisLeft)

    this.yAxisLeftG.selectAll('.domain')
      .attr('opacity', 0)

  };

  scaleAxes=(scales, dims)=>{

    this.xAxisBottom =
      axisBottom()
        .scale(scales.xScaleBand)
        .tickFormat((i)=>this.data[i].continent)


    this.yAxisLeft =
      axisLeft()
        .scale(scales.yScale)
        .tickSize(-dims.innerWidth)
        .ticks(4)

  };

  updateAxes=(scales, dims)=>{
    this.scaleAxes(scales, dims);
    this.xAxisBottomG
      .attr('transform', `translate(0, ${dims.innerHeight})`)
      .call(this.xAxisBottom)
    this.yAxisLeftG
      .call(this.yAxisLeft)

  };

};

export default Axes;
