class TestRectElement {
  constructor(svg){
    this.svg = svg;

    this.svg.append('rect')
      .attr('class', 'noisy')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('stroke-width', 1)
  };
};

export default TestRectElement;
