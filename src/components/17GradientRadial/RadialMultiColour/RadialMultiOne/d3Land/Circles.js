import { selectAll } from 'd3-selection';

class Circles {
  constructor(svg, data, scales){
    this.svg = svg;
    this.scales = scales;
    this.updateData(data);
  };

  updateData=(data)=>{

    this.svg.append('circle')
      .attr('r', 105)
      .attr('cx', 100)
      .attr('cy', 110)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.3)

    this.svg.append('circle')
      .attr('r', 105)
      .attr('cx', 180)
      .attr('cy', 100)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.7)
      .attr('opacity', 0.3)

    this.svg.append('circle')
      .attr('r', 105)
      .attr('cx', 170)
      .attr('cy', 180)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.3)
      .attr('opacity', 0.3)

    this.svg.append('circle')
      .attr('r', 105)
      .attr('cx', 230)
      .attr('cy', 160)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.3)

    this.svg.append('circle')
      .attr('r', 105)
      .attr('cx', 120)
      .attr('cy', 180)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1)
      .attr('opacity', 1)

  };

  enter=()=>{
  };

  exit=()=>{
  };

  updateScales=(scales)=>{
  };
};

export default Circles;
