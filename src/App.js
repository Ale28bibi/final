import Navbar from './Navbar'; 
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Programari from './Programari';

function App () {
  return (
    
    <div className='App'>
       <Navbar />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/login' element ={<Login />} />
        <Route path='/programari' element ={<Programari />} />
      </Routes>
    </div>
    )
  }



export default App;
