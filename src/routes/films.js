import React, { Component } from 'react';
import Search from '../components/film/searchBar';
import FilmCards from '../components/film';


const films = ["joker", "titanic", "Star Wars", "Avengers", "Thor", "Rocky", "The Wolverine", "X-Men"];


class Films extends Component {

  constructor(props) {
    super(props)
    // this.setNameFilm = this.setNameFilm.bind(this)
    this.state = {
      namefilm: '',
      visible: true,
    }
  }

  resetFilm = () => {
    this.setState({ namefilm: '', visible: true })
  }

  setNameFilm = (film) => {
    this.setState({
      namefilm: film,
      visible: false,
    })
  }


  // getFilms = () => films.map((film, i) => <FilmCards key={i} namefilm={film} />)

  render() {

    const { namefilm, visible} = this.state;

    return (
      <>
        <h2 className="text-center p-5">Scegli il tuo film preferito</h2>
        <div className="container">
          <div className="row justify-content-center">
            <Search
              resetFilm={this.resetFilm}
              namefilm={namefilm}
              setClass={visible}
              elements={films}
              setNameFilm={this.setNameFilm} />
          </div>
          <div className="row">
            {
              namefilm ? <FilmCards namefilm={namefilm} /> : null
            }
          </div>
        </div>
      </>
    );
  }
}

export default Films;
