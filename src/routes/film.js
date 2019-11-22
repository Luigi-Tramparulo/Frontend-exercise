import React from 'react';
import Films from '../components/film/sheduleFilm'

 const Film = props => {
  const {id} = props.match.params;
  return <Films namefilm={id}/>
}

export default Film;
