
class Mask {
  constructor(svg){
    this.svg = svg;
    this.createMask();
  };

  createMask=()=>{

    this.gradForMask =
      this.svg.append('linearGradient')
        .attr('id', 'gradForMask')

    this.gradForMask
      .attr('x1','0%')
      .attr('x2','100%')

    this.gradForMask
      .append("stop")
        .attr("offset", 0)
        .attr("stop-color", "white");

    this.gradForMask
      .append("stop")
        .attr("offset", 1)
        .attr("stop-color", "black");

    this.myMask =
      this.svg
        .append('mask')
          .attr('id', 'myMask')

    this.myMask
      .append('rect')
      .attr('width', '50%')
      .attr('height', '100%')
      .attr("fill", "url(#gradForMask)");

  };

};

export default Mask;
