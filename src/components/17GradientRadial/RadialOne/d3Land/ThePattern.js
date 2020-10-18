import { select, selectAll } from 'd3-selection';
import { Dimensions, Scales } from './utilities'
import RadialGradient from './RadialGradient';

class ThePattern {
  constructor(domNodeCurrent){
    this.svg = select(domNodeCurrent).append('svg');
    this.svg.attr('width', '100%').attr('height', '100%');
  };

  init=(data, dims)=>{
    this.data = data;
    this.dims = new Dimensions(dims);
    this.scales = new Scales(this.data, this.dims);

    this.radialGradient = new RadialGradient(this.svg)
    this.updateData(this.data);
  };

  updateData=(data)=>{
  };

  updateDims=(newDims)=>{
  };

};

export default ThePattern;
