import { select, selectAll } from 'd3-selection';
import { Dimensions } from './utilities';
import FloodedRect from './FloodedRect';
import FeFlood from './FeFlood';

class ThePattern {
  constructor(domNodeCurrent){
    this.svg = select(domNodeCurrent).append('svg');
    this.svg.attr('width', '100%').attr('height', '100%');
    this.svg.style('background-color', '#fff');
    this.defs = this.svg.append('defs')
  };

  init=(data, dims)=>{
    this.data = data;
    this.dims = new Dimensions(dims);
    this.testRect = new FloodedRect(this.svg);
    this.turby = new FeFlood(this.svg, this.defs);

    this.updateData(this.data);
  };

  updateData=(data)=>{
  };

  updateDims=(newDims)=>{
  };

};

export default ThePattern;
