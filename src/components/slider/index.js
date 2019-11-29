import React, { Component } from 'react';
import style from './slider.module.scss';
import Input from './input';
import BoxImg from './boxImg';

class Slider extends Component {
  constructor(props) {
    super(props)
    this._slider= React.createRef();
    this.state = {
      maxOffset: null
    }
  }

  changeOffset = (event) => {
    const { target: { value } } = event
    this._slider.current.scrollLeft = value;
  }
  componentDidMount() {
    const container = this._slider.current.clientWidth;
    const maxItems = this._slider.current.children.length;
    const maxLenght = maxItems * 356;
    const maxOffset = maxLenght - container
    this.setState({ maxOffset });
    console.log(container)
  }

  render() {

    const { maxOffset } = this.state
    const slides = [
      {
        src: "3651/3364033063_73b68b273e.jpg",
        href: "http://google.com",
        text: "Go to project",
        description: "Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Fusce id laoreet dui. Aliquam interdum orci id porta luctus."
      },
      {
        src: "5735/21226469065_4c2b003f21_b.jpg",
        href: "http://google.com",
        text: "Go to project",
        description: "Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Fusce id laoreet dui. Aliquam interdum orci id porta luctus."
      },
      {
        src: "737/30973260633_44640a9dcc_b.jpg",
        href: "http://google.com",
        text: "Go to project",
        description: "Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Fusce id laoreet dui. Aliquam interdum orci id porta luctus."
      },
      {
        src: "4556/24708106728_ce5296f1f9_b.jpg",
        href: "http://google.com",
        text: "Go to project",
        description: "Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Fusce id laoreet dui. Aliquam interdum orci id porta luctus."
      },
      {
        src: "4565/38559581986_b5103966fd_b.jpg",
        href: "http://google.com",
        text: "Go to project",
        description: "Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Fusce id laoreet dui. Aliquam interdum orci id porta luctus."
      },
    ]

    const getBoxImg = () => slides.map(({src,href,text,description},i)=><BoxImg description={description} key={i} src={src} href={href} text={text} altNumb={i} />)

    return (
      <div id="sliderContainer">
      <h2 className={style.title}>_Progetti Correlati</h2>
        <div className={style.slider} ref={this._slider}>{getBoxImg()}</div>
        <Input maxWidth={maxOffset} onInput={this.changeOffset} />
      </div>
    )
  }
}

export default Slider;
