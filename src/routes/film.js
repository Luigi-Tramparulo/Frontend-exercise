import React, {Component} from 'react';
import FilmCards from '../components/film';


class Film extends Component {

  render() {
    return (
      <React.Fragment>
      <FilmCards namefilm="joker"></FilmCards>
      <FilmCards namefilm="Titanic"></FilmCards>
      </React.Fragment>

    );
  }
}

export default Film;
