import { selectAll } from 'd3-selection';

class Flooder {
  constructor(svg, defs){
    this.svg = svg;
    this.defs = defs;

    this.myFilter = this.svg.append('filter')
      .attr('id', 'myFlood')

    this.myTurbulentNoise =
      this.myFilter
        .append('feFlood')
          .attr('flood-color', 'green')
          .attr('flood-opacity', 0.5)

    this.noisySelection =
      this.svg.selectAll('.floody')
        .attr('filter', 'url(#myFlood)')
        
  };

};

export default Flooder;
