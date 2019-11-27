import React from 'react';
import style from './slider.module.scss';

const Input = (props) => {
  const {maxWidth,onInput}=props;
  return (
    <div className={style.scroll}>
      <input type="range" min="0" max={maxWidth} onInput={onInput}/>
    </div>
  )
}

export default Input
