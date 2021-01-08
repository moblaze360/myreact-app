import React, { Component } from 'react';
//import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'd88703de652f40c48c20740373b9166e'
 });

const ParticlesOptions = {
  particles: {
    number: {
      value: 60,
      density: {
          enable: true,
          value_area: 1500
      }
    }
  }
}


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      faceBoxes: []
    }
  }

  getFaceLocations = (data) => {
    const clarifaiFaces = data.outputs[0].data.regions;
    return clarifaiFaces;
  };

  getFaceBox = (box) => {
    //const box = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
   return{
    leftCol: box.left_col * width,
    topRow: box.top_row * height,
    rightCol: width - (box.right_col * width),
    bottomRow: height - (box.bottom_row * height)

    /*
    leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    */
   }
  }

  displayFaceBoxes = (faceBoxes) => {
    this.setState({faceBoxes: faceBoxes});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmitButton = () => {
    this.setState({imageUrl: this.state.input});
     // Predict the contents of an image by passing in a URL.
     app.models
     .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(response => this.displayFaceBoxes(this.getFaceLocations(response)))
      .catch(err => console.log(err));

      //  console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    
  }

  render() {
    
    return (
      <div className='App'>
        <Particles className='particles' 
                params={ParticlesOptions}
              />
        <Navigation />
         <Logo />
         <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onSubmitButton={this.onSubmitButton}
        />
       <FaceRecognition 
          faceBoxes={this.state.faceBoxes} 
          imageUrl={this.state.imageUrl}
          getFaceBox={this.getFaceBox}
        />
      </div>
    );
  }
}


export default App;
