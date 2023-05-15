import {Container, Row, Col} from 'react-bootstrap'
import {useRef, useEffect} from 'react'
import Parallax from 'simple-parallax-js'
import '../css/ApplyArea.css'

const ApplyArea = ({img}) => {

    const imgRef = useRef('')
       
    useEffect(() => {
        console.log(imgRef.current)
        new Parallax(imgRef.current,{
            delay: 1,
            overflow: false,
            orientation: 'right'
        })
    },[])


  return (
    <Container fluid={true}>
        <Row id='section-recruitment'>
            <Col md={6} id='div-left'>
                
            </Col>
            <Col md={6} className='div-right'>
                <div id='text-recruitment'>
                    <h4>Gosta de desafios?</h4>
                    <p>Temos várias posiçôes abertas, entre elas software engineer, UI-UX Designer, Project Manager, e mais.</p>
                    <p>Clique no botão a baixo e confira os benefícios e as posiçôes abertas.</p>
                    <p>Clique aqui e você terá a chance de trabalhar com as melhores tecnologias e os profissionais mais qualificados do mercado.</p>
                    <a href='#' className='white-btn' id='btn-learn-more'>Saiba mais</a>
                </div>
                <img src={img} alt='Imagem empresa' id='img-pattern' ref={imgRef}/>

            </Col>
        </Row>
    </Container>
  )
}

export default ApplyArea