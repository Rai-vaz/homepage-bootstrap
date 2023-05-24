import { Container, Row, Col, Button } from 'react-bootstrap'
import {FaPhoneSquareAlt, FaEnvelope, FaMapMarkerAlt, FaTelegramPlane} from 'react-icons/fa'
import {Form} from 'react-bootstrap'
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer>
      <Container fluid="md">
        <Row>
          <Col md={12}>
            <h3 className='main-title'>Entre em contato conosco</h3>
          </Col>
        </Row>

        <Row id='wrapper-contact'>
          <Col sm={4}>
            <div className='box-contact'>
              <FaPhoneSquareAlt/>
              <p><span>Ligue para:</span>(11) 999078562 </p>
              <p><span>Horários:</span> 8:00 - 19:00</p>
            </div>
          </Col>

          <Col sm={4}>
            <div className='box-contact'>
              <FaEnvelope/>
              <p><span>Envie um E-mail</span></p>
              <p><span>Para:</span>atendimento@gmail.com</p>
            </div>
          </Col>

          <Col sm={4}>
            <div className='box-contact'>
              <FaMapMarkerAlt/>
              <p><span>Venha tomar um café</span></p>
              <p><span>Rua</span>João Garcia 1245</p>
            </div>
          </Col>
        </Row>

        <Row id='wrapper-msg'>
          <Col md={6} sm={4}>
            <p>Ou nos deixe uma mensagem:</p>
          </Col>

          <Col md={6} sm={8}>
            <Form className='form'>
              <Form.Control type='email' placeholder='Digite seu e-amil'/>
              <Form.Control type='text' placeholder='Assunto'/>
              <Form.Control as='textarea' placeholder='Deixe sua mensagem' rows={3}/>
              <div className='control-button'><Button variant='outline-primary' type='submit'>Enviar<FaTelegramPlane/></Button></div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} id='wrapper-copy-right'>
        <p>Desenvolvido por<a href='3' target='_black'>Dev Teen &copy;</a>2023</p>
      </Container>
    </footer>

    
  )
}

export default Footer