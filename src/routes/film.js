import React, { Component } from 'react';
import FilmCards from '../components/film';

class Film extends Component {

  render() {

    return (
      <>
        <h2 className="text-center p-5">Scegli il tuo film preferito</h2>
        <div className="container">
          <div className="row">
            <FilmCards namefilm="joker"></FilmCards>
            <FilmCards namefilm="Titanic"></FilmCards>
          </div>
        </div>
      </>
    );
  }
}

export default Film;
