import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { range } from 'd3-array';

//TODO: add concentric circles here, using like a linear scale from 'radialScales' or something, also generate 'ticks' over in radialScales?
class RadialAxes {
  constructor(chart, radialScales ){
    this.chart = chart;
    this.radialScales = radialScales;
    this.radius = this.radialScales.radius;
    this.centre = this.radialScales.centre;

    this.ticks = range(0,360,10);
    this.allNodes =
      this.chart.selectAll('.myGroup').data(this.ticks);

    this.eachNode =
      this.allNodes.enter()
        .append('g')
         .attr('class', 'myGroup')
         .attr("transform", `translate(${this.centre[0]},${this.centre[1]})`)

    this.eachNode
       .append("line")
         .attr("x1", 0)
         .attr("x2", (d)=>this.radius * Math.cos(d*Math.PI/180))
         .attr("y2", (d)=>this.radius * Math.sin(d * Math.PI/180))
         .attr("y1", 0)
         .attr("stroke", "black")
         .attr('stroke-width', 0.2)

  };

};

export default RadialAxes;
