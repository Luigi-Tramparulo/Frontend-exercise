import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';


class scheduleFilm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'title',
      source: 'source',
      year: 'year',
      runtime: 'runtime',
      plot: 'plot',
      link: 'link',
      director: 'director',
      writer: 'writer',
      actors: 'actors',
      loading: true
    }
  }
  requiredNameFilm = (namefilm) => {
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
            director: data["Director"],
            writer: data["Writer"],
            actors: data["Actors"],
            loading: false
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
    this.requiredNameFilm(this.props.namefilm)
  }

  render() {

    const { title, year, plot, source, loading, runtime, director, writer, actors } = this.state

    return (

      <div>

        {loading ? <div className="spinner-border" role="status"><span className="sr-only"></span></div> : null}

        <Jumbotron>
          <h1 className="display-2">{title}</h1>
          <img src={source} width="50%" alt={title} />
          <p className="nameBold">{`Year of release:${year} Duration:${runtime}`}</p>

          <StarRatingComponent
            name="Rating Film"
            editing={false}
            starColor="f3ce00"
            starCount={5}
            value={1}
          />
          <hr className="my-2" />
          <p>{plot}</p>
          <p className="nameBold">Director: <span className="name-blue-normal">{director}</span></p>
          <p className="nameBold">Writers: <span className="name-blue-normal">{writer}</span></p>
          <p className="nameBold">Stars: <span className="name-blue-normal">{actors}</span></p>
        </Jumbotron>
      </div>

    );
  }
}
export default scheduleFilm
