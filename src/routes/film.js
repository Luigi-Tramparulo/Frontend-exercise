import React from 'react';
import Films from '../components/film/sheduleFilm'

 const Film = (props) => {

  let {id} = props.match.params;

  return (
    <div>
    <Films namefilm={id}/>
    </div>
  );
}


export default Film;
