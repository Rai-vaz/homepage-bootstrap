import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Services from './components/Services';
import CircularProgress from './components/CircularProgress';
import { Container, Row, Col} from 'react-bootstrap';
import Img from './img/cidadeparallax.png'
import ImgParallax from './components/ImgParallax';
import CardTime from './components/CardTime';
import Profile1 from './img/profile1.jpg'
import Profile2 from './img/profile2.jpg'
import Profile3 from './img/profile3.jpg'
import Profile4 from './img/profile4.jpg'
import ApplyArea from './components/ApplyArea';
import ImgPattern from './img/pattern.png'
import ButtonNav from './components/ButtonNav'
import ImgProj1 from './img/proj1.jpg'
import ImgProj2 from './img/proj2.jpg'
import ImgProj3 from './img/proj3.jpg'
import ImgProj4 from './img/proj4.jpg'
import ImgProj5 from './img/proj5.jpg'
import ImgProj6 from './img/proj6.jpg'




function App() {

  const func = (params) => {
    console.log(params)
  }

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
      <div id='apply-area'>
        <ApplyArea img={ImgPattern}/>
      </div>

      <div id='portfolio-area'>
        <Container>
          <Row>
            <Col md={12}>
              <h3 className='main-title'>Conheça nossos projetos</h3>
            </Col>
            <Col md={12} id='menu'>
              <ButtonNav text={'Todos'} id="all" cls='active' f={func}/>
              <ButtonNav text={'Desenvolvimento'} id='dev'/>
              <ButtonNav text={'Design'} id='dsg'/>
              <ButtonNav text={'SEO'} id='seo'/>
            </Col>
            <Col md={4} className='project-box dev'>
              <img src={ImgProj1} alt='imagem projeto 1' className='img-fluid'/>
            </Col>
            <Col md={4} className='project-box dsg'>
              <img src={ImgProj2} alt='imagem projeto 2' className='img-fluid'/>
            </Col>
            <Col md={4} className='project-box seo'>
              <img src={ImgProj3} alt='imagem projeto 3' className='img-fluid'/>
            </Col>
            <Col md={4} className='project-box dev'>
              <img src={ImgProj4} alt='imagem projeto 4' className='img-fluid'/>
            </Col>
            <Col md={4} className='project-box dsg'>
              <img src={ImgProj5} alt='imagem projeto 5' className='img-fluid'/>
            </Col>
            <Col md={4} className='project-box seo'>
              <img src={ImgProj6} alt='imagem projeto 6' className='img-fluid'/>
            </Col>

          </Row>
        </Container>
      </div>

      <div className='ty'></div>
      
      
    </div>
    
  )
}

export default App
