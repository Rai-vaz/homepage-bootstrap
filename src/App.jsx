import 'bootstrap/dist/css/bootstrap.min.css'
import simpleParallax from 'simple-parallax-js';
import './css/App.css'
import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Services from './components/Services';
import Dados from './components/Dados'
import CircularProgress from './components/CircularProgress';
import { Container, Row, Col } from 'react-bootstrap';

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
      <About/>
      <Services/>
        <div className='data-area'>
          <Container fluid={true}>
              <Row>
                <Col md={3} sm={6} className='progress-box'>
                  <CircularProgress value={450} lable={'Clientes'}/>
                </Col>
                <Col md={3} sm={6} className='progress-box'>
                  <CircularProgress value={200}/>
                </Col>
                <Col  md={3} sm={6} className='progress-box'>
                  <CircularProgress value={150}/>
                </Col>
                <Col md={3} sm={6} className='progress-box'>
                  <CircularProgress value={120}/>
                </Col>
              </Row>
          </Container>
        </div>
      <div id='x'></div>
      
    </div>
    
  )
}

export default App
