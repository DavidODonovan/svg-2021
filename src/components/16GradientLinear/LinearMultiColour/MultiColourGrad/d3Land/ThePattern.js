import { select, selectAll } from 'd3-selection';
import { Dimensions } from './utilities'
import MultiColour from './MultiColour'

class ThePattern {
  constructor(domNodeCurrent){
    this.svg = select(domNodeCurrent).append('svg');
    this.svg.attr('width', '100%').attr('height', '100%');
  };

  init=(data, dims)=>{
    this.data = data;
    this.dims = new Dimensions(dims);

    this.multiColour = new MultiColour(this.svg, this.data);
  };

  updateDims=()=>{

  };

  updateData=()=>{

  };

};

export default ThePattern;
