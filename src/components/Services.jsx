import '../css/Services.css'
import {Container, Row, Col} from 'react-bootstrap'
import {FaMobileAlt, FaShoppingCart, FaPaintBrush, FaGoogle, FaHandsHelping, FaServer} from 'react-icons/fa'

const Services = () => {
  return (
    <Container id='service-area'>
        <Row>
            <Col xs={12}>
                <h3 className='main-title'>Nossas especialidades</h3>
            </Col>
            <Col md={4} sm={6} className='service-box'>
                <FaMobileAlt/>
                <h4>Aplicativos Nativos</h4>
                <p>Utilizamos o real poder dos dispositivos móveis para construir aplicativos nativos</p>
            </Col>      
            <Col md={4} sm={6} className='service-box'>
                <FaShoppingCart/>
                <h4>E-commerce</h4>
                <p>Temos plataforma própria de e-commerce que se adapta a qualquer regra de negócio (B2C E B2B).</p>
            </Col>   
            <Col md={4} sm={6} className='service-box'>
                <FaPaintBrush/>
                <h4>Design Criativo</h4>
                <p>Nossos designers são especializados em UI/UX e também possuem vasta experiência no mercado de software.</p>
            </Col>   
            <Col md={4} sm={6} className='service-box'>
                <FaGoogle/>
                <h4>Experts em SEO</h4>
                <p>Com os nossos serviços seu site será melhor posicionado no google e venderá mais.</p>
            </Col>   
            <Col md={4} sm={6} className='service-box'>
                <FaHandsHelping/>
                <h4>Suporte 24/7</h4>
                <p>Você sempre terá alguém da equipe disponível para suporte, em diferente plataformas. (Chat, E-mail, Skype) </p>
            </Col>   
            <Col md={4} sm={6} className='service-box'>
                <FaServer/>
                <h4>Experiência em Servidores</h4>
                <p>Garantimos uptime e também rápido tempo de resposta do seu site para seus clientes.</p>                
            </Col>      
                 
        </Row>
    </Container>
  )
}

export default Services