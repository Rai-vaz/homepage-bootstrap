import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Services from './components/Services';
import CircularProgress from './components/CircularProgress';
import { Container, Row, Col } from 'react-bootstrap';
import Img from './img/cidadeparallax.png'
import ImgParallax from './components/ImgParallax';
import CardTime from './components/CardTime';
import Profile1 from './img/profile1.jpg'
import Profile2 from './img/profile2.jpg'
import Profile3 from './img/profile3.jpg'
import Profile4 from './img/profile4.jpg'

function App() {

  return (
    <div className="App">
      <Header/>
      <Slider/>
      <About/>
      <Services/>
      <div className='data-area'>
        <ImgParallax img={Img} text='Imagem cidade parallax'/>
        <Container fluid={true} id='wrapper-circles'>
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

      <Container>
        <h3 className='main-title'>Nosso time</h3>
        <Row id='wrapper-cards'>
          <CardTime img={Profile1} title='João Silva' text='Engenheiro de software'/>
          <CardTime img={Profile2} title='Ana Julia' text='SEO Consultant'/>
          <CardTime img={Profile3} title='Paulo Baker' text='Project Manager'/>
          <CardTime img={Profile4} title='Karina Katarina' text='UX/UI Designer'/>
        </Row>

      </Container>
      <div className='ty'></div>
      
      
    </div>
    
  )
}

export default App
