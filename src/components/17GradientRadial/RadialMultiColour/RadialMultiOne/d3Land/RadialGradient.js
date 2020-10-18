
class RadialGradient {
  constructor(svg){
    this.svg = svg;
    this.defs = this.svg.append('defs');
    this.createBackground();
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
        .attr("stop-color", "hsla(240, 100%, 80%, 1)");

    myBackgroundGradient
      .append("stop")
        .attr("offset", "40%")
        .attr("stop-color", "hsla(0, 100%, 70%, 1)");


    myBackgroundGradient
      .append("stop")
        .attr("offset", "65%")
        .attr("stop-color", "hsla(140, 100%, 55%, 1)");

    myBackgroundGradient
      .append("stop")
        .attr("offset", "85%")
        .attr("stop-color", "hsla(175, 100%, 55%, 1)");

    myBackgroundGradient
      .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "hsla(240, 100%, 50%, 1)");

    this.rect = this.svg.append('rect');
    this.rect
      .attr('height', '100%')
      .attr('width', '100%')

    this.rect.style("fill", "url(#backgroundGradient)");

  };

};

export default RadialGradient;
