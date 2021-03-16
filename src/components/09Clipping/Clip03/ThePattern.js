import { select } from 'd3-selection';
import { Dimensions, RadialScales } from './utilities';
import Circle from './Circle';
import LineClipPath from './LineClipPath';

class ThePattern {
  constructor(domNodeCurrent){
    this.svg = select(domNodeCurrent).append('svg');
    this.svg.attr('width', '100%').attr('height', '100%');
    this.svg.style('background-color', '#444');
  };

  init=(data, dims)=>{
    this.data = data;
    this.dims = new Dimensions(dims);
    this.radialScales = new RadialScales(this.data, this.dims);
    this.clipPathId = "clipPath03";
    this.lineClipPath = new LineClipPath(this.svg, this.data, this.radialScales, this.clipPathId);
    this.circle = new Circle(this.svg, this.data, this.radialScales, this.clipPathId);
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
