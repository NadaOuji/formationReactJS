import {createStore} from 'redux';

const initialState={memes:[],images:[],currentMeme:{}}
const REDUCER_ACTIONS= Object.seal({
    ADD_IMAGE:'ADD_IMAGE',
    ADD_IMAGES:'ADD_IMAGES',
    ADD_MEME:'ADD_MEME',
    ADD_MEMES:'ADD_MEMES',
});
 
// le reducer retourne toujours un etat : par defaut c'est l'état par défaut

function reducer(state=initialState,action){
switch(action.type){

    case REDUCER_ACTIONS.ADD_MEME :return {...state,memes:[...state.memes,action.value]};
    case REDUCER_ACTIONS.ADD_MEMES :return {...state,memes:[...state.memes,...action.values]};
    case REDUCER_ACTIONS.ADD_IMAGE :return {...state,images:[...state.images,action.values]};
    case REDUCER_ACTIONS.ADD_IMAGES:return {...state,images:[...state.images,...action.values]};
    default: return state;
}
}

// let state = reducer(undefined,{type:REDUCER_ACTIONS.ADD_IMAGE,value:{src:'dss'}});
// console.log(state);
// state = reducer(state,{type:REDUCER_ACTIONS.ADD_IMAGE,value:{src:'dss'}});
// console.log(state);
// state = reducer(state,{type:REDUCER_ACTIONS.ADD_IMAGE,value:{src:'dss'}});
// console.log(state);
// le store gerre setetat pour avertir tout les gens des magazins c'est a nous de dire qu'il faut avertir mais redux ( le magasin, le gestionnaire de store)