import React from 'react';
import {Link} from 'react-router-dom';
import style from './slider.module.scss';

const BoxImg = (props) =>{

const {src, altNumb,href,text,description} = props
const content = "mountain"

  return (
    <div className={style.items}>
      <div className={style.boxImg}>
      <img src={`https://live.staticflickr.com/${src}`} alt={`${content}${altNumb}`}/>
      <Link to={href}>{text}</Link>
      </div>
      <p className={style.desc}>{description}</p>
    </div>
  )
}

export default BoxImg
