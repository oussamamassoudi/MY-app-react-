
import './App.css';
import Navbar from './components/Navbar';
import Productcard1 from './components/Productcard1';
import Productcard2 from './components/Productcard2';
import Productcard3 from './components/Productcard3';
import Productcard4 from './components/Productcard4';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='card-container'>
        <Productcard1/>
        <Productcard2/>
        <Productcard3/>
        <Productcard4/>
      </div>
    </div>
  );
}

export default App;
