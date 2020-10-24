import { select, selectAll } from 'd3-selection';

class Squares {
  constructor(svg, data, dims, scales){
    this.svg = svg;
    this.data = data;
    this.dims = dims;
    this.scales = scales;

    this.updateData(this.data)
  };

  updateData=(newData)=>{
    this.data = newData;

    this.primordialChaos =
      this.svg.selectAll('.mySquare').data(this.data);

    this.enter();
  };

  enter=()=>{
    this.primordialChaos
      .enter()
        .append('rect')
        .attr('class', 'mySquare')
        .attr('x', (d,i)=>i*50)
        .attr('y', (this.dims.height/2))
        .attr('width', 40)
        .attr('height', 40)
        .attr('fill', (d)=>this.scales.colourScale(d))
        .attr('opacity',0.5)

  };

  exit=()=>{

  };

  updateScales=(newScales)=>{
    this.scales = newScales;

  };

};

export default Squares;
