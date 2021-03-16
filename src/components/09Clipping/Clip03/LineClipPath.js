import starfishPath from './starfishPath';

class ClipPathRect {
  constructor(chart, data, scalesRadial, clipPathId){
    this.chart = chart;
    this.data = data;
    this.scalesRadial = scalesRadial;
    this.clipPathId = clipPathId;
    this.updateData(this.data);
  };

  updateData=(newData)=>{
    this.primordialChaos =
      this.chart.selectAll('.scalingRect').data(newData);
    this.enter();
  };

  enter=()=>{

    this.clipPathGroup =
      this.primordialChaos.enter()
        .append('g')

    this.thePath =
      this.clipPathGroup.append('clipPath')
        .attr('id', this.clipPathId)

    this.thePath
      .append('rect')
        .attr('width', 100)
        .attr('height', 100)
        .attr('transform', 'translate(200, 50)')

    this.thePath.append('line')
      .attr('stroke-width', 10)
      .attr('stroke', 'black')
      .attr('x1',"100" )
      .attr('x2',"300" )
      .attr('y1',"100" )
      .attr('y2',"100" )

      this.chart.append('circle')
        .attr('r', 300)
        .attr('clip-path', `url(#${this.clipPathId})`)


  };

  exit=()=>{
  };

  updateScales=()=>{
  };
};

export default ClipPathRect;
