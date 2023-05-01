import { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import simpleParallax from 'simple-parallax-js';
import './css/App.css'
import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Services from './components/Services';
import CircularProgress from './components/CircularProgress';
import { Container, Row, Col } from 'react-bootstrap';
import ImgParallax from './img/cidadeparallax.png'

function App() {
  const imgRef = useRef(null)

  const backGround = {
    backgroundImage : "url('./img/proj6.jpg')"
  }

  useEffect(() => {
    if (imgRef.current) {
      new simpleParallax(imgRef.current, {
        delay: 1.6,
        transition: 'cubic-bezier(0,0,0,1)'
      });
    }
  },[])

  return (
    <div className="App">
      <Header/>
      <Slider/>
      <About/>
      <Services/>
      <div className='data-area' style={{ 
      backgroundImage: `url(${ImgParallax})`,
      backgroundPosition: 'center center'
    }}>
        {/* <img src={ImgParallax}/> */}
        <Container fluid={true}>
            <Row>
              <Col md={3} sm={6} className='progress-box'>
                <CircularProgress value={450} label={'Clientes'}/>
              </Col>
              <Col md={3} sm={6} className='progress-box'>
                <CircularProgress value={200} label={'Funcionários'}/>
              </Col>
              <Col  md={3} sm={6} className='progress-box'>
                <CircularProgress value={150}  label={'Projetos Entregue'}/>
              </Col>
              <Col md={3} sm={6} className='progress-box'>
                <CircularProgress value={98} label={'Projetos em desenvolvimento'}/>
              </Col>
            </Row>
        </Container>
      </div>

      <div className='ty'>

      </div>
      
    </div>
    
  )
}

export default App
