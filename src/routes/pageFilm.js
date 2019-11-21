import React, { Component } from 'react';
import PageFilm from '../components/film/pageFilm';
//import {useParams} from "react-router-dom";


class PageFilms extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let { id } = this.props.match.params

    return (
      <>
      {
        id
      }
      <PageFilm/>
      </>
    );
  }
}

export default PageFilms;
