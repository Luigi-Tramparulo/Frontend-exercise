import React from 'react';
import style from './slider.module.scss';

const BoxImg = (props) =>{

const url = "https://live.staticflickr.com/"
const {iD, altNumb} = props
const content = "mountain"


  return (
    <div className={style.items}>
      <img src={`${url}${iD}`} alt={`${content}${altNumb}`}/>
    </div>
  )
}

export default BoxImg
