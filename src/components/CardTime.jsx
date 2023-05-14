import { Card, Col } from "react-bootstrap"
import { useState} from "react"
import '../css/CardTime.css'

const CardTime = ({img, title, text}) => {
  
  const [animate, setAnimate] = useState('animationOn')
  
  const anime = () => {
    setAnimate('animationOff')
    
  }

  const stopAnime = () => {
    setAnimate('animationOn')
    
  }

  return (
    <Col md={3} sm={12}>
      <Card onMouseEnter={anime} onMouseLeave={stopAnime} className={animate}>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardTime