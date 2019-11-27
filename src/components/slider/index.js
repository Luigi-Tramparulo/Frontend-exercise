import React, { Component, Children } from 'react';
import style from './slider.module.scss';
import Input from './input';

class Slider extends Component {
  constructor(props){
    super(props)
    this.state={
      maxOffset: null
    }

  }
  changeOffset = (event) =>{
    const {target:{value}} =event
    this._slider.scrollLeft=value;

   }
  componentDidMount(){
    const container = document.getElementById(`${style.slider}`).clientWidth;
    console.log(container)
    const maxItems=document.querySelectorAll(`.${style.items}`).length;
    const maxLenght= maxItems * 500;
    const maxOffset= maxLenght - container
    this.setState({maxOffset});
    console.log(this._slider)
  }
  render() {
    const { maxOffset }=this.state


    return (
      <div id={style.wrapper}>
      <div id={style.slider} ref={div=>this._slider=div}>
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
          <img src="https://farm5.staticflickr.com/4565/38559581986_b5103966fd_b.jpg" alt="mountain5" />        </div>

      </div>
      <Input maxWidth={ maxOffset } onInput={this.changeOffset} />
      </div>

    )
  }
}

export default Slider;
