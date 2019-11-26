import React, { Component } from 'react';
import style from './slider.module.scss'

class Slider extends Component {
  componentDidMount() {
    debugger
    window.$(`#${style.slider}`)
      .niceScroll({
        cursorcolor: "black",
        cursorfixedheight: "10",
        cursorwidth: "10px",
        cursorborderradius: "10px",
      });
  }

  render() {
    return (
      <div id={style.slider}>
        <div className={style.items}>
          <img src="https://live.staticflickr.com/3651/3364033063_73b68b273e.jpg" alt="mountain" />
        </div>
        <div className={style.items}>
          <img src="https://farm6.staticflickr.com/5735/21226469065_4c2b003f21_b.jpg" alt="mountain2" />
        </div>
        <div className={style.items}>
          <img src="https://farm1.staticflickr.com/737/30973260633_44640a9dcc_b.jpg" alt="mountain3" />
        </div>
        <div className={style.items}>
          <img src="https://farm5.staticflickr.com/4556/24708106728_ce5296f1f9_b.jpg" alt="mountain4" />
        </div>
        <div className={style.items}>
          <img src="https://farm5.staticflickr.com/4565/38559581986_b5103966fd_b.jpg" alt="mountain5" />
        </div>
      </div>
    )
  }
}

export default Slider;
