import { select } from 'd3-selection';
import { Dimensions, Scales, Axes } from './utilities';
import Rects from './Rects';
import { interpolateNumber } from 'd3-interpolate';

const colours = [`var(--superLightBlue)`, `var(--ground)`]

class ThePattern {
   constructor(domNodeCurrent){
    this.svg = select(domNodeCurrent).append('svg');
    this.svg.attr('width', '100%').attr('height', '100%');
    this.svg.style('background-color', colours[1])
  };

  init=(data, dims)=>{
    this.face =
      this.svg.append('circle')
        .attr('r', 120)
        .attr('cx', 150)
        .attr('cy', 170)
        .attr('fill', `hsla(240, 10%, 50%, 1`)

    this.leftEye =
      this.svg.append('circle')
        .attr('cx', 100)
        .attr('cy', 120)
        .attr('r', 20)
        .attr('fill', 'hsla(240, 100%, 12%, 1)')

    this.rightEye =
      this.svg.append('circle')
        .attr('cx', 200)
        .attr('cy', 120)
        .attr('r', 20)
        .attr('fill', 'hsla(240, 100%, 12%, 1)')

    //
    // this.whiteDrop =
    //   this.svg.append('circle')
    //     .attr('cx', 200)
    //     .attr('cy', 40)
    //     .attr('r', 90)
    //     .attr('fill', `hsla(0, 100%, 100%, 0.4)`)
    //
    // this.whiteSolid =
    //   this.svg.append('circle')
    //     .attr('cx', 100)
    //     .attr('cy', 40)
    //     .attr('r', 40)
    //     .attr('fill', `hsla(0, 100%, 100%, 0.8)`)
    //
    this.mouth =
      this.svg.append('path')
        .attr('fill', 'none')
        .attr('stroke', 'hsla(240, 100%, 12%, 1)')
        .attr('stroke-width', 4)
        .transition().duration(1000)
        // M x y - move cursor to x, y
        // s = smooth curve to
        // s x2 y2 x y - draw a smooth curve using control point x2, y2, to end point x, y
        // (it's a lower case s so use relative coords)
        .attrTween('d', ()=>{
          return (t)=>{
            return `M 50 200 s 100 ${(t * 100)} 200 0`
          };
        });

  };

  updateDims=(newDims)=>{


  };

  updateData=(data)=>{
  };

};

export default ThePattern;
