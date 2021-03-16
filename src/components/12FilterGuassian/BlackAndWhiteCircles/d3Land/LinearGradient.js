class LinearGradient {
  constructor(svg, defs){
    this.svg = svg;
    this.defs = defs;

    this.createGradient();
  };

  createGradient=()=>{
    const linearGradient =
      this.defs.append('linearGradient')
        .attr('id', 'myLinearGradient')

    linearGradient
      .attr('x1','0%')
      .attr('y1','0%')
      .attr('x2','100%')
      .attr('y2','100%')

    linearGradient
      .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "hsla(0, 0%, 80%, 1)");

    linearGradient
      .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "hsla(0, 0%, 10%, 1)");

    this.rect = this.svg.append('rect');
    this.rect.attr('width', '100%');
    this.rect.attr('height', '100%');
    this.rect.style("fill", "url(#myLinearGradient)");
  };

};

export default LinearGradient;
