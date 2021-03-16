import { scaleLinear } from 'd3-scale';
import { min, max, extent } from 'd3-array';

class RadialScales {
  constructor(data, dims){
    this.setScales(data, dims);
  };

  setScales=(data, dims)=>{
    const { width, height, innerWidth, innerHeight } = dims;
    this.radius = innerHeight/2;

    if(innerHeight!==innerWidth && innerWidth<innerHeight){
      this.radius=innerWidth/2;
    };
    this.centre = [innerWidth/2, innerHeight/2];
    this.radiusScale = null;

    this.angleScale =
      scaleLinear()
        .domain([-1, 13, 12])
        .range([0, 2*Math.PI])
  };

};

export default RadialScales;
