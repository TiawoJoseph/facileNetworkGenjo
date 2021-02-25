import logo from './logo.svg';
import './App.css';
//import style from 'styled-components';
//import logo from '../src/logo.svg';

import Cards from './cards';

function App() {
  return (
    <div className="App">
     <img src={logo}/> 
     
     <h1>Welcome!! </h1>

     <Cards />
    </div>
  );


  
}

export default App;
