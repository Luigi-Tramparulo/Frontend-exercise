import React,{Component} from 'react';

class Search extends Component{

  constructor(props){
    super(props)
    this.state = {
      input: ''
    }
  }
  handleChange = (e) =>{
    let inputDigit = e.target.value;
    this.setState({input:inputDigit.toLowerCase()})
  }



  render() {

  const {elements} = this.props;
  const {input} = this.state;

  return(
  <div>
      <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      onChange={this.handleChange} />
    </form>
    <ul>
      {elements.filter((element, i) => {
          const elementLow= element.toLowerCase();
          if(elementLow.startsWith(input) && input && input.length>3){
            return(<li key={i}>{element}</li>)
          }
      })}

    </ul>
  </div>
  )
  }
}




export default Search
