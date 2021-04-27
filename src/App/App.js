import './App.css';
import Button from './components/Button/Button';

//const uneVar='Bonjour Paris';

function App() {
  return (
    <div className="App">
     <Button label="Ok" lorsqueJeClickSurLeBoutton={(evt) => {
       console.log("j\'ai ete clicke onc fais qqch stp !!");
       alert('Button clicked!!!!'); // jamais utiliser alert ça bloque tout
       console.log('L\'alert est fermée ');
     }} 
     style={{ textDecoration: 'underline', fontStyle: 'italic'}} />
     <Button label="Cancel"  CouleurDeFond={'tomato'} taillePolice={24} lorsqueJeClickSurLeBoutton={(evt) => {}} />
     <Button label="Don't know" CouleurDeFond="skyblue" lorsqueJeClickSurLeBoutton={(evt) => {}} />
    </div>
  );
}

export default App;
