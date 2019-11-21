import React,{Component} from 'react';
import { Jumbotron} from 'reactstrap';


class PageFilm extends Component {

  constructor(props){
    super(props)
  }
  render(){

    return(

      <div>
      <Jumbotron>
        <h1 className="display-3">Title</h1>
        <img/>
        <p className="lead">runtime genre released</p>
        <hr className="my-2" />
        <p>plot</p>
        <p className="lead">
        </p>
      </Jumbotron>
    </div>

    );
  }
}
export default PageFilm
