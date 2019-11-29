import React from 'react';
import {Link} from 'react-router-dom';
import style from './slide.module.scss';

const Slide = props => {
const {src, altNumb, href, text, description} = props
const content = "mountain"
  return (
    <div className={style.slide}>
      <div className={style.boxImg}>
        <img src={`https://live.staticflickr.com/${src}`} alt={`${content}${altNumb}`}/>
        <Link to={href}>{text}</Link>
      </div>
      <p className={style.desc}>{description}</p>
    </div>
  )
}

export default Slide
