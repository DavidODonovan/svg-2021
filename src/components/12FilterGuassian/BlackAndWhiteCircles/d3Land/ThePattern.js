import { select, selectAll } from 'd3-selection';
import { Dimensions } from './utilities';
import LinearGradient from './LinearGradient';
import GaussianFilter from './GaussianFilter';
import TestCircleElement from './TestCircleElement'

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
    this.chart = this.svg.append('g');
    this.chart.attr('transform', `translate(${this.dims.margin.left}, ${this.dims.margin.top})`);
    //background is linear grad
    this.linear = new LinearGradient(this.svg, this.defs);

    // middleground is test element (circle)
    this.circle = new TestCircleElement(this.svg);

    // foreground is filter
    this.gaussian = new GaussianFilter(this.svg, this.defs);

    this.updateData(this.data);
  };

  updateData=(data)=>{
  };

  updateDims=(newDims)=>{
  };

};

export default ThePattern;
