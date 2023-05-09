import { Card, Col } from "react-bootstrap"

const CardTime = ({img, title, text}) => {
  return (
    <Col md={3} sm={12}>
      <Card>
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