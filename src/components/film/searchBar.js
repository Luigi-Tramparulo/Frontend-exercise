import React, { Component } from 'react';
import CardFilm from './cardfilm';

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }
  handleChange = (e) => {
    let inputDigit = e.target.value;
    this.setState({ input: inputDigit.toLowerCase() })
  }

  render() {

    const { elements, setNameFilm } = this.props;
    const { input } = this.state;

    return (
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleChange} />
        </form>
        <ul>
          {
            elements
              .filter( element => {
                const elementLow = element.toLowerCase();
                if (elementLow.startsWith(input) && input && input.length > 3) {
                  return true
                }
              })
              .map( (filtred,i) => (<li onClick={() => setNameFilm(filtred)} key={i}>{filtred}</li>))
          }
        </ul>
      </div>
    )
  }
}

export default Search
