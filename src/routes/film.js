import React, { Component } from 'react';
import Search from '../components/film/searchBar';
import FilmCards from '../components/film';


const films = ["joker", "titanic", "Star Wars", "Avengers", "Thor", "Rocky", "The Wolverine", "X-Men"];


class Film extends Component {

  constructor(props) {
    super(props)
    // this.setNameFilm = this.setNameFilm.bind(this)
    this.state={
      namefilm: null
    }
  }

  setNameFilm = (film) => {
    this.setState({
      namefilm: film
    })
  }


  // getFilms = () => films.map((film, i) => <FilmCards key={i} namefilm={film} />)

  render() {

    return (
      <>
        <h2 className="text-center p-5">Scegli il tuo film preferito</h2>
        <div className="container">
          <Search elements={films} setNameFilm={this.setNameFilm} />
          <div className="row">

          </div>
        </div>
      </>
    );
  }
}

export default Film;
