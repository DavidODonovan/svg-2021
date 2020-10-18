import { selectAll } from 'd3-selection';

class Gaussian {
  constructor(svg){
    this.svg = svg;

    this.svg
      .append('filter')
        .attr('id', 'horiz')
      .append('feGaussianBlur')
        .attr('stdDeviation', '4, 0.7')

    this.svg.selectAll('.blacky')
      .attr('filter', 'url(#horiz)')

    this.svg.selectAll('.blurry')
      .attr('filter', 'url(#horiz)')
  };

};

export default Gaussian;
