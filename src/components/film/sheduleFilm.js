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

          <h1 className="text-center color-gold">{title}</h1>
          <div className="d-flex  flex-column justify-content-center">
            <div className="d-flex p-3 justify-content-center">
              <img src={source} width="40%" alt={title} />
            </div>
            <div className="pt-3 d-flex flex-column">
            <div className="d-flex p-1 justify-content-center">
              <p className="name-bold">{`Year of release:${year} Duration:${runtime}`}</p>
            </div>
              <div className="d-flex p-1 justify-content-center">
              <StarRatingComponent
                name={"Rating Film"}
                editing={false}
                starColor={"#f3ce00"}
                starCount={5}
                value={2}
              />
              </div>
            </div>
            </div>
          <hr className="my-2 pb-3" />
          <h3 className="pb-3">Plot</h3>
          <p className="pb-3">{plot}</p>
          <p className="name-bold color-grey">Director: <span className="name-normal color-blue">{director}</span></p>
          <p className="name-bold color-grey">Writers: <span className="name-normal color-blue">{writer}</span></p>
          <p className="name-bold color-grey">Stars: <span className="name-normal color-blue">{actors}</span></p>
        </Jumbotron>
      </div>

    );
  }
}
export default scheduleFilm
