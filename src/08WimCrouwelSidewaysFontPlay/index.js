import React from 'react'
import s from './grid11.module.css';
import { Link } from 'react-router-dom';
import {ReactComponent as Eagle} from './eagle.svg';

const Grid10 = ()=>{
  return (
    <div>
      <Link to="/">Back</Link>

      <div className="box">
        <div className={s.fonty}>
          <div><p>a</p></div>
          <div><p>p</p></div>
          <div><p>r</p></div>
          <div><p>i</p></div>
          <div><p>l</p></div>
        </div>
      </div>


     <div className="box">
       <div className={s.oneDay}>
         <div className={s.der}>one</div>
         <div className={s.film}>Day</div>
       </div>
     </div>

       <div className={s.cheeseOnToast}>
         <div>cheese</div>
         <div>onToast</div>
       </div>

      <div className="box">
        <div className={s.svgPlay}>
          <div></div>
          <div>
           <Eagle/>
          </div>
          <div></div>
        </div>
      </div>

  </div>
  )
}

export default Grid10
