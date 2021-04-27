import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

const MemeForm = () => {
  const [formContent, setformContent] = useState({
    name:'tjs',
    count:0,
    color:'#000000'
  });

  return(
    <form className={styles.MemeForm} data-testid="MemeForm">
      <input type="text" placeholder = "nom de la formation" value={formContent.name} onChange={(evt) => {
        console.log(evt.target.value);
        setformContent({...formContent,name:evt.target.value})
      }} /> <br/>
      <input type="number"placeholder="nb de participants" value={Number.parseInt(formContent.count)} onChange={(evt) => {
        console.log(evt.target.value);
        setformContent({...formContent,count:evt.target.value})
      }} /> <br/>
      <input type="color" value={formContent.color} onChange={(evt) => {
        console.log(evt.target.value);
        setformContent({...formContent,color:evt.target.value})
      }} /> <br/>
      <input type="submit" value="Soumettre" />  <br/>
      <div style={{color:formContent.color}} > Voici le contenu actuelement saisie : {JSON.stringify(formContent)}
      </div>
    </form>
  );
}

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
