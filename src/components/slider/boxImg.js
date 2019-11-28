import React from 'react';
import {Link} from 'react-router-dom';
import style from './slider.module.scss';

const BoxImg = (props) =>{

const {src, altNumb,href,text,description} = props
const content = "mountain"

  return (
    <div cont="cont" className={style.items}>
      <div>
      <img src={`https://live.staticflickr.com/${src}`} alt={`${content}${altNumb}`}/>
      <Link to={href}>{text}</Link>
      </div>
      <div>
      <p>{description}</p>
      </div>
    </div>
  )
}

export default BoxImg
