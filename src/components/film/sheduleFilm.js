import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import axios from 'axios';


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
            link: data.imdbID,
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

    const { title, year, plot, source, loading } = this.state

    return (

      <div>

        {loading ? <div className="spinner-border" role="status"><span className="sr-only"></span></div> : null}

        <Jumbotron>
          <h1 className="display-3">{title}</h1>
          <img src={source} width="50%" alt={title} />
          <p className="lead">{year}</p>
          <hr className="my-2" />
          <p>{plot}</p>
          <p className="lead">
          </p>
        </Jumbotron>
      </div>

    );
  }
}
export default scheduleFilm
