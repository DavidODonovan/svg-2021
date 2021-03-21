import { scaleLinear } from 'd3-scale';
import { min, max, extent } from 'd3-array';
import { interpolateHcl, interpolateHsl  } from 'd3-interpolate';

class Scales {
  constructor(data, dims){
    this.setScales(data, dims);
  };

  setScales=(data, dims)=>{
    this.xScale =
      scaleLinear()
        .domain([0, 100])
        .range([0, dims.innerWidth])

    this.yScale =
      scaleLinear()
        .domain([0, 50])
        .range([dims.innerHeight, 0])

    this.colourScale =
      scaleLinear()
        .domain([0, 50, 100])
        .range(["#2c7bb6", "#ffff8c", "#d7191c"])
        .interpolate(interpolateHsl)

  };

};

export default Scales;
