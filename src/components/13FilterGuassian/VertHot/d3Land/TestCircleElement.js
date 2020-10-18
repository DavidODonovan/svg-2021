
class TestCircleElement {
  constructor(svg){
    this.svg = svg;

    this.svg.append('circle')
      .attr('class', 'blurry')
      .attr('cx', 250)
      .attr('cy', 250)
      .attr('r', 100)
      .attr('fill', 'none')
      .attr('stroke', 'hsla(0, 0%, 100%, 1)')
      .attr('stroke-width', 0.1)

    this.svg.append('circle')
      .attr('class', 'sharpy')
      .attr('cx', 150)
      .attr('cy', 150)
      .attr('r', 100)
      .attr('fill', 'none')
      .attr('stroke', 'hsla(0,0%, 100%, 0.5)')
      .attr('stroke-width', 1)

    // access filter from external class
    this.svg.append('circle')
      .attr('class', 'blacky')
      .attr('r', 100)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('filter', 'url(#kuku)')
  };

};

export default TestCircleElement;
