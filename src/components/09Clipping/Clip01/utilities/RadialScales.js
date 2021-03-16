import { scaleLinear } from 'd3-scale';
import { min, max, extent } from 'd3-array';

class RadialScale {
  constructor(data, dims){
    this.setScales(data, dims);
  };

  setScales=(data, dims)=>{
    const { width, height, innerWidth, innerHeight } = dims;
    this.radius = innerHeight/2;

    if(innerHeight!==innerWidth && innerWidth<innerHeight){
      this.radius=innerWidth/2;
    };

    this.centre = [width/2, height/2];

    this.radiusScale = null;

  };

};

export default RadialScale;
