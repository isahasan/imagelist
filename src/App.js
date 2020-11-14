import React from 'react';
import Search from './search'
import ImageList from './imagelist'
import axios from 'axios'

import './App.css';



class App extends React.Component {
  state = {
    imagedef:'New images',
    images: [],
    errors: ''
  }
  componentDidMount= async()=>{
    try {
      const resp= await axios.get(`https://pixabay.com/api/?key=18762754-d6c4887166bdf2a1320b7667a&q=${this.state.imagedef}&image_type=photo`)
      this.setState({images: resp.data.hits})
      console.log(resp.data.hits)
      
    } catch (error) {
      this.setState({error:error})
    }
  }

  onSearchSubmit= async (event)=>{
    console.log(event)
    try {
      const response= await axios.get(`https://pixabay.com/api/?key=18762754-d6c4887166bdf2a1320b7667a&q=${event}&image_type=photo`)
      this.setState({images: response.data.hits})
      console.log(response.data.hits)
      
    } catch (error) {
      this.setState({error:error})
    }
  }

  

  render(){
    return (
      <div className="App">
        <Search onSearchSubmit={this.onSearchSubmit}/>
        <ImageList Images={this.state.images}/>


      </div>
    );
  }
}

export default App;


