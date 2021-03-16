import { select, selectAll } from 'd3-selection';
import { Dimensions, Scales } from './utilities'
import LinearGradient from './LinearGradient';
import Circles from './Circles';
import Arrows from './Arrows';

class ThePattern {
  constructor(domNodeCurrent){
    this.svg = select(domNodeCurrent).append('svg');
    this.svg.attr('width', '100%').attr('height', '100%');
  };

  init=(data, dims)=>{
    this.data = data;
    this.dims = new Dimensions(dims);
    this.scales = new Scales(this.data, this.dims);
    this.chart = this.svg.append('g');
    this.chart.attr('transform', `translate(${this.dims.margin.left}, ${this.dims.margin.top})`);

    this.colourRect = new LinearGradient(this.svg);
    this.arrows = new Arrows(this.svg);
    this.updateData(this.data);
  };

  updateData=(data)=>{
  };

  updateDims=(newDims)=>{
  };

};

export default ThePattern;
