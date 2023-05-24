import { Container, Navbar, Nav } from 'react-bootstrap'
import { useState } from 'react'
import '../css/Header.css'
import LogoMarca from '../img/hdcagency_logo.svg'

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [scroll, setScroll] = useState(0)
  
  const handleClick = () => {
    setShowMenu(!showMenu)
    
  }

  window.addEventListener('scroll', () => {
    setScroll(Math.trunc(window.scrollY))
  })
 

  return (
    <header>
      <Container>
        <Navbar bg='dark' variant='dark' fixed='top' expand='sm' className={scroll > 300 && 'bb'}>
          <Navbar.Brand href='#'>
            <img src={LogoMarca}
              id='logo'
              alt='Logo do cabeçalho'
              className='d-inline-block align-top'
              height={65}
            />
            <span>Teen dev</span>
          </Navbar.Brand>
          
          <Navbar.Toggle label='Toggle navigation' id='menu-icon' onClick={handleClick} className={showMenu && 'ativo'}/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href='#home' id='home-menu'>Home</Nav.Link>
              <Nav.Link href='#about' id='about-menu'>Agencia</Nav.Link>
              <Nav.Link href='#service' id='service-menu'>Serviço</Nav.Link>
              <Nav.Link href='#team' id='team-menu'>Time</Nav.Link>
              <Nav.Link href='#contact' id='home-menu'>Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

export default Header