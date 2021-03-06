import React from 'react';
import PropTypes from 'prop-types';
import style from './range.module.scss';

const Range = props => {
  const { maxRange, onInput, value } = props;
  return (
    <div className={`${style.range} range`}>
      <input type="range" min="0" value={value} max={maxRange} onInput={onInput}/>
    </div>
  )
}

Range.propTypes = {
  maxWidth: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onInput: PropTypes.func.isRequired,
}

export default Range
