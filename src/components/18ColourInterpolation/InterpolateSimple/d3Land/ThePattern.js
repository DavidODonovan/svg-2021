import { select, selectAll } from 'd3-selection';
import { Dimensions, Scales } from './utilities'
import Squares from './Squares';

class ThePattern {
  constructor(domNodeCurrent){
    this.svg = select(domNodeCurrent).append('svg');
    this.svg.attr('width', '100%').attr('height', '100%');
    this.svg.style('border', '1px solid gray');
  };

  init=(data, dims)=>{
    this.data = data;
    this.dims = new Dimensions(dims);
    this.scales = new Scales(this.data, this.dims);
    this.squares = new Squares(this.svg, this.data, this.dims, this.scales);

    this.updateData(this.data);
  };

  updateData=(data)=>{
  };

  updateDims=(newDims)=>{
  };

};

export default ThePattern;
