import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';

class Circles {
  constructor(chart, data, scales){
    this.chart = chart;
    this.data = data;
    this.scales = scales;
    this.updateData(this.data);
  };

  updateData=(data)=>{
    this.data = data;
    this.newData = this.data.hourly.data
    this.primordialChaos =
      this.chart.selectAll('.tempDatum').data(this.newData, (d)=>d.temperature);

    this.enter();
  };

  enter=()=>{
    this.primordialChaos
      .enter()
      .append('circle')
        .attr('class', 'tempDatum')
        .attr('r', 4)
        .attr('cx', (d, i)=>this.scales.xScale(i))
        .attr('cy', (d)=>this.scales.yScale(d.temperature))

    this.exit();
  };

  exit=()=>{
    this.primordialChaos.exit().remove();
  };

  updateScales=(scales)=>{
    this.scales = scales;

    this.primordialChaos =
      this.chart.selectAll('.tempDatum')
      .attr('cx', (d,i)=>this.scales.xScale(i))
      .attr('cy', (d)=>this.scales.yScale(d.temperature))

  };

};

export default Circles;
