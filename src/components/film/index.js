import React, { Component } from 'react';
import { Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


class FilmCards extends Component {
  constructor(props){
    super(props)

    this.state= {
      title: 'title'
    }
  }

  componentDidMount(){

    axios.get('http://www.omdbapi.com/?apikey=ac9b1a49&t=joker')
   .then(({data}) => {
     this.setState({title: data["Title"]})
   })
   .catch(function (error) {
     // handle error
     console.log(error);
   })
   .finally(function () {
     // always executed
   });
 }

  render(){


    return(
      <React.Fragment>

     <Card>{this.state.title}</Card>
     {this.props.children}
     </React.Fragment>
    )
  }
}
export default FilmCards
