import React from 'react';
import s from './grid22.module.css';
import feather from './feather.svg'
import { Link } from 'react-router-dom';

const Grid22 = ()=>{
  return (
    <div>
      <Link to='/'>back</Link>
      <hr/>
      <div className={s.container}>
       <figure>
         <img className={s.fixed} src={feather}/>
         <figcaption>Fixed at 300px wide</figcaption>
       </figure>
       <figure>
         <img className={s.fluid} src={feather}/>
         <figcaption>Fluid at 100% wide</figcaption>
       </figure>
       <figure>
         <img className={s.fitted} src={feather}/>
         <figcaption>Fitted into 100% wide, 400px tall</figcaption>
       </figure>
     </div>
   </div>
  )
}

export default Grid22
