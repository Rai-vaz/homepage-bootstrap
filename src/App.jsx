import 'bootstrap/dist/css/bootstrap.min.css'
import simpleParallax from 'simple-parallax-js';
import './css/App.css'
import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  const image = document.getElementsByClassName('thumbnail');
  new simpleParallax(image, {
    delay: 0.6,
    transition: 'cubic-bezier(0,0,0,1)'
  });

  return (
    <div className="App">
      <Header/>
      <Slider/>
    </div>
    
  )
}

export default App
