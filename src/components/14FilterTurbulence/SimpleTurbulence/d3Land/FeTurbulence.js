import { selectAll } from 'd3-selection';

class Gaussian {
  constructor(svg, defs){
    this.svg = svg;
    this.defs = defs;

    this.myFilter = this.svg.append('filter')
      .attr('id', 'myNoise')

    this.myTurbulentNoise =
      this.myFilter
        .append('feTurbulence')
          .attr('baseFrequency', 0.01)

    this.noisySelection =
      this.svg.selectAll('.noisy')
        .attr('filter', 'url(#myNoise)')
  };

};

export default Gaussian;
