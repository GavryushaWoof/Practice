import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Slider from './components/slider/Slider';
import MainWrapper from './components/MainWrapper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      info: {}
    }
  }

  componentDidMount() {
    this.addImg()
    this.addInfo()
  }

  addImg = () => {
    if (this.state.images.length === 0) {
      axios.get('http://localhost:5000/persons')
        .then((response) => {
          this.setState({ images: response.data })
        }).catch((error) => {
          console.log(error);
        });
    }
  }

  addInfo = () => {
    if (this.state.info.length === 0) {
      axios.get('http://localhost:5000/info')
        .then((response) => {
          this.setState({ info: response.data })
        }).catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div className='App'>
        { this.state.images.length === 0 ? null : <Slider slides={this.state.images} />}
        <MainWrapper img={this.state.info.img} text={this.state.info.text} />
      </div>
    )
  };
}

export default App;
