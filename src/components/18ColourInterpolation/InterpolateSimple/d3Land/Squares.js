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

  };

  enter=()=>{

  };

  exit=()=>{

  };

  updateScales=(newScales)=>{
    this.scales = newScales;

  };

};

export default Squares;
