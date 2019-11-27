import React, { Component } from 'react';
import style from './slider.module.scss';
import Input from './input';
import BoxImg from './boxImg';

class Slider extends Component {
  constructor(props) {
    super(props)
    this._slider = React.createRef();
    this.state = {
      maxOffset: null
    }
  }

  changeOffset = (event) => {
    const { target: { value } } = event
    this._slider.current.scrollLeft = value;
  }
  componentDidMount() {
    const container = document.getElementById(`${style.slider}`).clientWidth;
    const maxItems = document.querySelectorAll(`.${style.items}`).length;
    const maxLenght = maxItems * 500;
    const maxOffset = maxLenght - container
    this.setState({ maxOffset });
  }

  render() {
    const { maxOffset } = this.state
    const endUrl =
      ["3651/3364033063_73b68b273e.jpg",
        "5735/21226469065_4c2b003f21_b.jpg",
        "737/30973260633_44640a9dcc_b.jpg",
        "4556/24708106728_ce5296f1f9_b.jpg",
        "4565/38559581986_b5103966fd_b.jpg"]

    const getBoxImg = () => endUrl.map((endUrl,i)=><BoxImg key={i} iD={endUrl} altNumb={i} />)

    return (
      <div>
      <h2 className={style.title}>_Progetti Correlati</h2>
        <div id={style.slider} ref={this._slider}>{getBoxImg()}</div>
        <Input maxWidth={maxOffset} onInput={this.changeOffset} />
      </div>

    )
  }
}

export default Slider;
