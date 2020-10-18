import { selectAll } from 'd3-selection';

class Gaussian {
  constructor(svg, defs){
    this.svg = svg;

    this.myFilter = this.svg.append('filter')
      .attr('id', 'kuku')

    this.gaussian =
      this.myFilter
        .append('feGaussianBlur')
          .attr('stdDeviation', '0.7')

    this.svg.selectAll('.blurry')
      .attr('filter', 'url(#kuku)')

  };

};

export default Gaussian;
