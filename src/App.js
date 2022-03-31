import './App.css';
import PreNavbar from './components/PreNavbar.js';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router} from 'react-router-dom'
import Slider from './components/Slider.js'
import data from './data/data.json'
import Offers from './components/Offers.js'

const {banner}=data;

function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <Slider start={banner.start}/>
      <Offers/>
    </Router>
  );
}
export default App;
