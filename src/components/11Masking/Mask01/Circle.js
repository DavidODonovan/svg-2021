import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';

class Circles {
  constructor(chart, data, radialScales){
    this.chart = chart;
    this.data = data;
    this.radialScales = radialScales;
    this.updateData(this.data)
  };

  updateData=(newData)=>{
    this.data = newData;
    this.primordialChaos =
      this.chart.selectAll('.myCircle').data(this.data);

    this.enter()
  };

  enter=()=>{

    this.primordialChaos.enter()
      .append('circle')
        .attr('class', 'myCircle')
        .attr('r', this.radialScales.radius)
        .attr('cx', this.radialScales.centre[0])
        .attr('cy', this.radialScales.centre[1])
        .attr('stroke-width', (d,i)=>'0.5vmin')
        .attr('mask', 'url(#myMask)')

    this.exit();
  };

  exit=()=>{

  };

  updateScales=(newScales)=>{
    this.radialScales = newScales;
    this.primordialChaos =
      this.chart.selectAll('.myCircle')
        .attr('fill', 'red')
      .transition().duration(250)
        .attr('r', this.radialScales.radius)
        .attr('cx', this.radialScales.centre[0])
        .attr('cy', this.radialScales.centre[1])
  };

};

export default Circles
