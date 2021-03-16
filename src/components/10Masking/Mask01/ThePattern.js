import { select } from 'd3-selection';
import { Dimensions, RadialScales } from './utilities';
import Circle from './Circle';
import Mask from './Mask';

class ThePattern {
  constructor(domNodeCurrent){
    this.svg = select(domNodeCurrent).append('svg');
    this.svg.attr('width', '100%').attr('height', '100%');
  };

  init=(data, dims)=>{
    this.svg.append('rect')
      .attr('width','100%')
      .attr('height', '50%')
      .attr('fill', 'blue')
    this.data = data;
    this.dims = new Dimensions(dims);
    this.radialScales = new RadialScales(this.data, this.dims);
    this.mask = new Mask(this.svg);
    this.circle = new Circle(this.svg, this.data, this.radialScales);
  };

  updateDims=(newDims)=>{
    this.dims.setDims(newDims);
    this.radialScales.setScales(this.data, this.dims);
    this.circle.updateScales(this.radialScales);
  };

  updateData=()=>{
  };

};

export default ThePattern;
