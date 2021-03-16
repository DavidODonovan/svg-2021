import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';

class Rects {
  constructor(chart, data, scales, dims){
    this.chart = chart;
    this.data = data;
    this.scales = scales;
    this.dims = dims;
    this.updateData(this.data);
  };

  updateData=(data)=>{
    this.data = data;
    this.primordialChaos =
      this.chart.selectAll('.myBar').data(this.data)

    this.enter();
  };

  enter=()=>{
    const { xScaleBand, yScale } = this.scales;

    this.primordialChaos
      .enter()
        .append('rect')
        .attr('class', 'myBar')
        .attr("x", (d, i) => xScaleBand(i)+(xScaleBand.bandwidth()/2))
        .attr("y", d => yScale(d.count))
        .attr("height", d => yScale(0) - yScale(d.count))
        .attr("width", xScaleBand.bandwidth())
        .attr('fill', 'hsla(25, 100%, 50%, 1)')

    this.exit();
  };

  exit=()=>{
    this.primordialChaos.exit().remove();
  };

  updateScales=(scales)=>{
    this.scales = scales;
    const { xScaleBand, yScale } = this.scales;

    this.primordialChaos =
      this.chart.selectAll('.myBar')
        .attr("x", (d, i) => xScaleBand(i)+(xScaleBand.bandwidth()/2))
        .attr("y", d => yScale(d.count))
        .attr("height", d => yScale(0) - yScale(d.count))
        .attr("width", xScaleBand.bandwidth())

  };

};

export default Rects;
