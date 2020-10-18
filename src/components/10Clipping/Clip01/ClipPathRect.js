
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
    this.clipPathG =
      this.primordialChaos.enter()
        .append('g')
    this.thePath =
      this.clipPathG
        .append('clipPath')
        .attr('id', this.clipPathId)

    this.thePath
      .append('rect')
        .attr('width', '100%')
        .attr('height', '50%')

    this.clipPathG
      .append('rect')
        .attr('width', '100%')
        .attr('height', '50%')
        .attr('fill', 'none')
        .attr('stroke', 'red')

  };

  exit=()=>{
  };

  updateScales=()=>{
  };
};

export default ClipPathRect;
