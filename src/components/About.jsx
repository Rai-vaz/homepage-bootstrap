import { Container, Row, Col } from "react-bootstrap"
import {FaCheckSquare} from 'react-icons/fa'
import img from '../img/agencia.jpg'
import '../css/About.css'

function About() {
  return (
    <Container fluid={true}>
        <Row>
            <Col>
                <h3 className="main-title">Sobre a agência</h3>
            </Col>
        </Row>
        <Row>
            <Col ms={6} className="photo-office">
                <img className="img-fluid" src={img} alt="Imagem da agencia"/>
            </Col>

            <Col ms={6} className="description">
                <h3 className="about-title">Uma agência que pensa no futuro</h3>
                <p>Nossos projetos são adaptados ao cliente e seu propósito</p>
                <p>Após a especificação do projeto os arquiteto de software definirão as melhores ferramentas</p>
                <p>E nossos designers trabalharão na sua interface/layout para impulsionar o seu negócio</p>
                <p>Veja outros diferenciais</p>
                <ul id="about-list">
                    <li><FaCheckSquare/>Utilização de Machine learning</li>
                    <li><FaCheckSquare/>Layout responsivo para todos os tamanho de tela</li>
                    <li><FaCheckSquare/>Integração com diversos sistemas do mercado</li>
                    <li><FaCheckSquare/>Sistemas de pagamento próprio</li>
                    <li><FaCheckSquare/>Desenvolvimento com metodologia ágil</li>
                </ul>
            </Col>
        </Row>
        
    </Container>
  )
}

export default About