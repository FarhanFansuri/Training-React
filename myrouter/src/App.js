import './App.css';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import About from './About';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Link to={'/'}><button>Home</button></Link>
      <Link to={'/about'}><button>About</button></Link>
   
     
    </div>
  );
}

export default App;
