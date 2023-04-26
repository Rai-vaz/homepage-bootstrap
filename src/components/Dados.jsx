import '../css/Dados.css'
import {Container, Col, Row} from "react-bootstrap"


const Dados = () => {


  return (
    <Container>
      <Row>
          <Col md={3} className='circle-box'>
              <div id='circleA'></div>
              <p>Projetos entregue</p>
          </Col>
          <Col md={3} className='circle-box'>
              <div id='circleC'></div>
              <p>Clientes felizes</p>
          </Col>
          <Col md={3} className='circle-box'>
              <div id='circleD'></div>
              <p>Colaboradores</p>
          </Col>
          <Col md={3} className='circle-box'>
              <div id='circleE'></div>
              <p>Cafezinhos</p>
          </Col>
      </Row>
    </Container>
  )
}

export default Dados