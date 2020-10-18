
class Arrows {
  constructor(svg){
    this.svg = svg;
    this.updateData();
  }

  updateData=()=>{

    // top arrow
    this.svg.append('line')
      .attr('stroke', 'black')
      .attr('x1',"100" )
      .attr('x2',"300" )
      .attr('y1',"100" )
      .attr('y2',"100" )

    this.svg.append('line')
      .attr('stroke', 'black')
      .attr('x1',"100" )
      .attr('x2',"150" )
      .attr('y1',"100" )
      .attr('y2',"125" )

    this.svg.append('line')
      .attr('stroke', 'black')
      .attr('x1',"100" )
      .attr('x2',"150" )
      .attr('y1',"100" )
      .attr('y2',"75" )

    // bottom arrow
    this.svg.append('line')
      .attr('stroke', 'black')
      .attr('x1',"100" )
      .attr('x2',"300" )
      .attr('y1',"175" )
      .attr('y2',"175" )

    this.svg.append('line')
      .attr('stroke', 'black')
      .attr('x1',"300" )
      .attr('x2',"250" )
      .attr('y1',"175" )
      .attr('y2',"150" )

    this.svg.append('line')
      .attr('stroke', 'black')
      .attr('x1',"300" )
      .attr('x2',"250" )
      .attr('y1',"175" )
      .attr('y2',"200" )

  };
};

export default Arrows;
