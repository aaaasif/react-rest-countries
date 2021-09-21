import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  )
}

function Countries() {
  const [countries, setCountries] = useState ([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .than(res =>)
  })
   return (
     <div>
       <h2>Practice to do make a rest countries api using by react</h2>
     </div>
   )
}

export default App;
