
class RadialGradient {
  constructor(svg){
    this.svg = svg;
    this.defs = this.svg.append('defs');
    this.createBackground();
    this.createRadiantCircle();
    this.createSpreadRadial();
  };

  createBackground=()=>{

    const myBackgroundGradient =
      this.defs.append('radialGradient')
        .attr('id', 'backgroundGradient')
        .attr('cx', -0.1)
        .attr('cy', 0.1)
        .attr('r', 1.4)

    myBackgroundGradient
      .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "hsla(0, 0%, 80%, 1)");

    myBackgroundGradient
      .append("stop")
        .attr("offset", "10%")
        .attr("stop-color", "hsla(0, 0%, 70%, 1)");

    myBackgroundGradient
      .append("stop")
        .attr("offset", "25%")
        .attr("stop-color", "hsla(0, 0%, 55%, 1)");

    myBackgroundGradient
      .append("stop")
        .attr("offset", "25%")
        .attr("stop-color", "hsla(0, 0%, 55%, 1)");

    myBackgroundGradient
      .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "hsla(0, 0%, 10%, 1)");

    this.rect = this.svg.append('rect');
    this.rect
      .attr('height', '100%')
      .attr('width', '100%')

    this.rect.style("fill", "url(#backgroundGradient)");

  };

  createRadiantCircle=()=>{

    const circleGradient =
      this.defs.append('radialGradient')
        .attr('id', 'myRadialGradient')

    circleGradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#FFF76B");
    circleGradient.append("stop")
        .attr("offset", "50%")
        .attr("stop-color", "#FFF845");
    circleGradient.append("stop")
        .attr("offset", "70%")
        .attr("stop-color", "#FFDA4E");
    circleGradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#FB8933");

    this.svg.append("circle")
      .attr("r", 140)
      .attr('cx', '50%')
      .attr('cy', '50%')
      .style("fill", "url(#myRadialGradient)")
  };

  createSpreadRadial=()=>{
    const myRadial4 =
      this.defs.append('radialGradient')
        .attr('id', "myRadial4" )
        .attr('fx', '20%')
        .attr('fy', '20%')
        .attr('spreadMethod', 'pad')

    myRadial4
      .append('stop')
        .attr('offset', '0%')
        .attr('stop-color', "#00ee00")
        .attr('stop-opacity', 1)

    myRadial4
      .append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#006600')
        .attr('stop-opacity', 1)

    this.svg.append('rect')
      .attr('width', 100)
      .attr('height', 100)
      .attr('x', 100)
      .attr('y', 100)
      .style('fill', 'url(#myRadial4)')
  };
};

export default RadialGradient;
