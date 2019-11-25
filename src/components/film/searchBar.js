import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }
  handleChange = (e) => {
    let inputDigit = e.target.value;
    this.setState({ input: inputDigit })
  }

  componentDidUpdate(oldProps) {
    if (oldProps.namefilm !== this.props.namefilm) {
      this.setState({ input: this.props.namefilm })
    }
  }


  render() {


    const { elements, setNameFilm, setClass, namefilm, resetFilm } = this.props;
    const { input } = this.state;

    return (
      <div>
        <form key={namefilm} className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2"
            placeholder="Search"
            aria-label="Search"
            value={input}
            onChange={this.handleChange} />
          <button type="button" className="btn btn-outline-primary" onClick={resetFilm}>Reset</button>
        </form>
        <ul>
          {
            elements
              .filter(element => {
                const elementLow = element.toLowerCase();
                if (elementLow.startsWith(input.toLowerCase()) && input && input.length > 3) {
                  return true
                }
                else{return false}
              })
              .map((filtred, i) => (<li className={setClass ? 'active' : 'not-active'} onClick={() => setNameFilm(filtred)} key={i}>{filtred}</li>))
          }
        </ul>
      </div>
    )
  }
}

export default Search
