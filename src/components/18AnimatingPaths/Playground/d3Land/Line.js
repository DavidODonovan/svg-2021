import { line } from 'd3-shape';

class Line {
  constructor(chart, data, scales){
    this.chart = chart;
    this.data = data;
    this.scales = scales;

    this.lineGen = line()
      .x((d, i)=>this.scales.xScale(i))
      .y((d)=>this.scales.yScale(d.count))

    this.updateData(this.data);
  };

  updateData=(newData)=>{
    this.data = newData;
    this.primordialChaos =
      this.chart.selectAll('.myLine').data([1]);

    this.enter();
  };

  enter=()=>{

    this.primordialChaos.enter()
      .append('path')
      .attr('class', 'myLine')
      .attr('d', this.lineGen(this.data))
      .attr('fill', 'none')
      .attr('stroke', 'red')

    this.exit();
  };

  exit=()=>{

  };

  updateScales=(newScales)=>{
    this.scales = newScales;

    this.primordialChaos =
      this.chart.selectAll('.myLine')
      .attr('d', this.lineGen(this.data))

  };

};

export default Line;
