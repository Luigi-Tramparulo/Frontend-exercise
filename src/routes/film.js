import React, { Component } from 'react';
import FilmCards from '../components/film';

const films = ["joker", "titanic", "Star Wars", "Avengers", "Thor", "Rocky", "The Wolverine", "X-Men"];


class Film extends Component {

  getFilms = () => films.map((film, i) => <FilmCards key={i} namefilm={film} />)

  render() {

    return (
      <>
        <h2 className="text-center p-5">Scegli il tuo film preferito</h2>
        <div className="container">
          <div className="row">
            {this.getFilms()}
          </div>
        </div>
      </>
    );
  }
}

export default Film;
