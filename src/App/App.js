import React from 'react'
import './App.css';
import Button from './components/Button/Button';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
import FlexGrowLayout from './components/FlexGrowLayout/FlexGrowLayout';
import {REST_ADR, REST_ENDPOINT} from './config/config'
import Thumbnail from './components/Thumbnail/Thumbnail';
import NavBar from './components/NavBar/NavBar';
import store,{initialState as storeInitialState} from './store/store';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={ 
      startTime:new Date(),
      currentMeme:storeInitialState.currentMeme,
      images:storeInitialState.images
      };
      console.log(this.state);
  }
  componentDidMount(){

    this.setState({
      currentMeme:store.getState().currentMeme,
      images:store.getState().images
    });

      store.subscribe(()=>{
        
        console.log("subscribe ! ",store.getState());

        this.setState({
          currentMeme:store.getState().currentMeme,
          images:store.getState().images
        })
    });
  }

  render(){
    return <div className="App">
      <NavBar/>
      {/* <Thumbnail images= {this.state.images}/> */}
      <FlexGrowLayout>
      <MemeViewer meme={{...this.state.currentMeme,
        image:this.state.images.find(elem =>elem.id === this.state.currentMeme.imageId)}} />
        {/* le MemeViewr on le garde comme ça pour garder la flexibilité puisque c'est un composant UI et 
        c'est pour ça on n'a pas utilisé le store -> le store plutot pour le memeForm */}
      <MemeForm />
      </FlexGrowLayout>

      </div>
  }
}

export default App;
