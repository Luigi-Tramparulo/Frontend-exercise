import React,{Component}  from 'react';
import axios from 'axios';
import cardFilm from './cardfilm';

// Attraverso le props passo il parametro per la chiave dell'apikey

  class FilmCards extends Component {

    constructor(props){
      super(props)
      this.state={
        title:'title',
        source:'source'
      }
    }
// Aggiorno lo stato del titolo e del link esterno per la copertina destrutturalizzando l'oggetto data(risposta di axios al server)
      requiredFilm = (namefilm) =>{
      return(

      axios.get(`http://www.omdbapi.com/?apikey=ac9b1a49&t=${namefilm}`)
      .then(({data}) => {
        this.setState( () =>({
          title: data["Title"],
          source: data["Poster"]
        }))}
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
    componentDidMount(){
      this.requiredFilm(this.props.namefilm)
    }


    render() {

     const {title,source} =this.state;

     // passo alla funzione importata 2 parametri con titolo e link esterno per la copertina

      return (
       <div>
       {cardFilm(title,source)}
       </div>
      );
    }
  }


export default FilmCards
