import React from 'react'; //imp + enter shortcut
import './Button.css'
import PropTypes from 'prop-types'; // impt + enter shortcut

const Button =(props) => {
   console.log(props); // ça me retourne label et l'objet lorsque je clique 
   // return <div onClick={props.lorsqueJeClickSurLeBoutton} > {props.label} </div> // Mauvaise pratique
   return <div style={{
    ...props.style,   
    backgroundColor:props.CouleurDeFond,
    fontSize:props.taillePolice+'px'
}}
    className="Button" onClick={(evt) => {props.lorsqueJeClickSurLeBoutton(true)}} > {props.label} </div> // Bonne pratique -> creation d'une arrow 
    // {{}} -> injecter du js {} et la deuxieme pour declarer un object {}
};

//'avantage de l'arrow function est de garder le contexte
// mais dans ce cas de figure c'est la même chose que function

Button.propTypes={
    label: PropTypes.string.isRequired,
    CouleurDeFond: PropTypes.string,   // pts pour PropTypes.string
    taillePolice: PropTypes.number, // ptn pour PropTypes.number
    lorsqueJeClickSurLeBoutton: PropTypes.func.isRequired,
} 

Button.defaultProps = {
    taillePolice:32,
    CouleurDeFond:'green'
}

export default Button; // exporter la constante Button par défaut
