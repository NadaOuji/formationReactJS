import React from 'react';
import './Button.css'

const Button =(props) => {
   console.log(props); // ça me retourne label et l'objet lorsque je clique 
   // return <div onClick={props.lorsqueJeClickSurLeBoutton} > {props.label} </div> // Mauvaise pratique
   return <div style={{backgroundColor:props.CouleurDeFond, fontSize:props.taillePolice+'px'}} className="Button" onClick={(evt) => {props.lorsqueJeClickSurLeBoutton(true)}} > {props.label} </div> // Bonne pratique -> creation d'une arrow 
    // {{}} -> injecter du js {} et la deuxieme pour declarer un object {}
};

//'avantage de l'arrow function est de garder le contexte
// mais dans ce cas de figure c'est la même chose que function 
export default Button;
