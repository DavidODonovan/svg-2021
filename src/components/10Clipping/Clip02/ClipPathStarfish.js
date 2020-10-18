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
    this.clipPathG =
      this.primordialChaos.enter()
        .append('g')

    this.thePath =
      this.clipPathG.append('clipPath')
        .attr('id', this.clipPathId)

    this.thePath
      .append('path')
        .attr('d', starfishPath)
        .attr('transform', 'translate(100, -50)')

  };

  exit=()=>{
  };

  updateScales=()=>{
  };
};

export default ClipPathRect;
