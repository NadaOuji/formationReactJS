import {createStore} from 'redux';

const initialState={memes:[],images:[],currentMeme:{}}
const REDUCER_ACTIONS= Object.seal({
    ADD_IMAGE:'ADD_IMAGE',
    ADD_IMAGES:'ADD_IMAGES',
    ADD_MEME:'ADD_MEME',
    ADD_MEMES:'ADD_MEMES',
});

function reducer(state=initialState,action){
switch(action.type){

    case REDUCER_ACTIONS.ADD_MEME :return {...state,memes:[...state.memes,action.value]};
    case REDUCER_ACTIONS.ADD_MEMES :return {...state,memes:[...state.memes,...action.values]};
    case REDUCER_ACTIONS.ADD_IMAGE :return {...state,images:[...state.images,action.values]};
    case REDUCER_ACTIONS.ADD_IMAGES:return {...state,images:[...state.images,...action.values]};
    default: return state;
}
}

// reducer : liste de taches a mettre en place
//store c'est notre magasin
const store=createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch({type:REDUCER_ACTIONS.ADD_IMAGE,value:{src:'sdzedzedz'}});
store.dispatch({type:REDUCER_ACTIONS.ADD_IMAGE,value:{src:'azert'}});
store.dispatch({type:REDUCER_ACTIONS.ADD_IMAGE,value:{src:'tyuiuiu'}});
store.dispatch({type:REDUCER_ACTIONS.ADD_IMAGE,value:{src:'uoioi'}});
store.dispatch({type:REDUCER_ACTIONS.ADD_IMAGE,value:{src:'sdfdgg'}});

export default store;
