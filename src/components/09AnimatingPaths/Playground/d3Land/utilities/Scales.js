import { scaleLinear, scaleBand } from 'd3-scale';
import { min, max, extent, range } from 'd3-array';

class Scales {
  constructor(data, dims){
    this.setScales(data, dims);
  };

  setScales=(data, dims)=>{

    this.xScaleBand =
      scaleBand()
        .domain(range(5))
        .range([0, dims.innerWidth])
        .padding(0.2)

    console.log(this.xScaleBand(0))

    this.yScale =
      scaleLinear()
        .domain([0, 20])
        .range([dims.innerHeight+dims.margin.top, 0])

  };

};

export default Scales;
