import React from 'react'
import './App.css';
import Button from './components/Button/Button';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
import {initialState as CurrentMemeInitialState} from './components/MemeForm/MemeForm';
import FlexGrowLayout from './components/FlexGrowLayout/FlexGrowLayout';
import {REST_ADR, REST_ENDPOINT} from './config/config'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={ 
      startTime:new Date(),
      currentMeme:CurrentMemeInitialState,
      images:[]};
      console.log(this.state);
  }

  componentDidMount(){
   fetch(`${REST_ADR}${REST_ENDPOINT.IMAGES}`)
   .then(f => f.json())
   .then(o  =>{
     this.setState({images:o})
     return o; // retourner pour l'étape d'après pour la synchronisation
   })
  }

  render(){
    return <div className="App">
      <FlexGrowLayout>
      <MemeViewer meme={{...this.state.currentMeme,
        image:this.state.images.find(elem =>elem.id === this.state.currentMeme.imageId)}} />
      <MemeForm images={this.state.images} onSubmit={(valeurDuMeme) => {

        console.log(valeurDuMeme);
        this.setState({currentMeme:valeurDuMeme});
      }} />
      </FlexGrowLayout>

      </div>
  }
}

export default App;
