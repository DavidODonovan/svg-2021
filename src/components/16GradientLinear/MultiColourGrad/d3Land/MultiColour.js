import { select, selectAll } from 'd3-selection';

class MultiColour {
  constructor(svg, data){
    this.svg = svg;
    this.data = data;
    this.linearGradient =
      this.svg.append('linearGradient')
        .attr('id', 'linearGradient')

    this.defineLinearGradient(this.data);

  };

  defineLinearGradient=(data)=>{
    const frac = Math.floor(100/data.length);

    this.mappedData = data.map((d,i)=>{
      return { offset: `${i*frac}%`, color: `hsla(${d}, 100%, 50%, 1)`};
  });

  this.stops =
    this.linearGradient
      .selectAll('stop')
      .data(this.mappedData)

  this.stops.enter()
    .append('stop')
      .attr('offset', (d)=>d.offset)
      .attr('stop-color', (d)=>d.color)


  console.log(this.stops)

  this.targetRect =
    this.svg.append('rect')
      .attr('width', '100%')
      .attr('height', '100%')
      .style("fill", "url(#linearGradient)");

  };

};

export default MultiColour;
