import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';

class Circle {
  constructor(chart, data, radialScales, clipPathId){
    this.chart = chart;
    this.data = data;
    this.radialScales = radialScales;
    this.clipPathId = clipPathId;
    this.updateData(this.data)
  };

  updateData=(newData)=>{
    this.data = newData;
    this.primordialChaos =
      this.chart.selectAll('.myCircle').data(this.data);

    this.enter()
  };

  enter=()=>{
    // this.primordialChaos.enter()
    //   .append('circle')
    //     .attr('class', 'myCircle')
    //     .attr('r', this.radialScales.radius)
    //     .attr('cx', this.radialScales.centre[0])
    //     .attr('cy', this.radialScales.centre[1])
    //     .attr('clip-path', `url(#${this.clipPathId})`)
    //
    this.exit();
  };

  exit=()=>{

  };

  updateScales=(newScales)=>{
    this.radialScales = newScales;
    // this.primordialChaos =
    //   this.chart.selectAll('.myCircle')
    //     .attr('fill', 'red')
    //     .attr('r', this.radialScales.radius)
    //     .attr('cx', this.radialScales.centre[0])
    //     .attr('cy', this.radialScales.centre[1])
  };

};

export default Circle
