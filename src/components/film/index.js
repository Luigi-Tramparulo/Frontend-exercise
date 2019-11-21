import React, { Component } from 'react';
import axios from 'axios';
import CardFilm from './cardfilm';

// Attraverso le props passo il parametro per la chiave dell'apikey

class FilmCards extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'title',
      source: 'source',
      year: 'year',
      runtime: 'runtime',
      plot: 'plot',
      link: 'link'
    }
  }

  // Aggiorno lo stato del titolo e del link esterno per la copertina destrutturalizzando l'oggetto data(risposta di axios al server)

  requiredFilm = (namefilm) => {
    return (

      axios.get(`http://www.omdbapi.com/?apikey=ac9b1a49&t=${namefilm}`)
        .then(({ data }) => {
          const { Title } = data
          this.setState(({
            title: Title,
            source: data["Poster"],
            year: data["Year"],
            runtime: data["Runtime"],
            plot: data["Plot"],
            link: data.imdbID
          }))
        }
        )
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        })
    )
  }
  componentDidMount() {
    this.requiredFilm(this.props.namefilm)
  }

  render() {

    const {namefilm} =this.props;

    // passo alla funzione importata 5 parametri con titolo e link esterno per la copertina

    return (
      <div className="col">
        <CardFilm {...this.state} routes={namefilm} />
      </div>
    );
  }
}


export default FilmCards
