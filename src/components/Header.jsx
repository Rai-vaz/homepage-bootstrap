import { Container, Navbar, Nav } from 'react-bootstrap'
import '../css/Header.css'
import LogoMarca from '../img/hdcagency_logo.svg'

const Header = () => {
  return (
    <header>
      <Container>
        <Navbar bg='dark' variant='dark' fixed='top' expand='true'>
          <Navbar.Brand href='#'>
            <img src={LogoMarca} 
              id='logo' 
              alt='Logo do cabeçalho'
              className='d-inline-block align-top'              
              height={80}
            /> 
            Logo Agencia
          </Navbar.Brand>
          <Nav>
            <Nav.Link href='#home' id='home-menu'>Home</Nav.Link>
            <Nav.Link href='#about' id='about-menu'>Agencia</Nav.Link>
            <Nav.Link href='#service' id='service-menu'>Serviço</Nav.Link>
            <Nav.Link href='#team' id='team-menu'>Time</Nav.Link>
            <Nav.Link href='#contact' id='home-menu'>Contato</Nav.Link>              
          </Nav>
        </Navbar>
      </Container>
    </header>
  )
}

export default Header