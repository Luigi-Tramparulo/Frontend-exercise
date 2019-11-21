import React, { Component } from 'react';
import Films from '../components/film/sheduleFilm'

class PageFilms extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let { id } = this.props.match.params

    return (
      <div>
      <Films namefilm={id}/>
      </div>
    );
  }
}

export default PageFilms;
