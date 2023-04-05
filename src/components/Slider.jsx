import {Carousel} from 'react-bootstrap'
import '../css/Slider.css'
import Banner1 from '../img/banner1.png'
import Banner2 from '../img/banner2.png'
import Banner3 from '../img/banner3.png'



const Slider = () => {
  return (
    <main className='container-slider'>
        <Carousel>
            <Carousel.Item>
                <img src={Banner1} alt='Banner 1'/>
                <Carousel.Caption>
                    <h2>Quer criar um e-commerce</h2>
                    <p>Conte conosco, temos mais de 30 lojas no portfólio</p>
                    <a href='#' className='main-btn'>Ver portfólio</a>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={Banner2} alt='Banner 2' className='d-block w-100'/>
                <Carousel.Caption>
                    <h2>Está querendo tirar o projeto do papel</h2>
                    <p>Nossa equipe de engenharia de software está preparada para lhe atender</p>
                    <a href='#' className='main-btn'>Entre em contato</a>
                </Carousel.Caption>
            </Carousel.Item>           

            <Carousel.Item>
                <img src={Banner3} alt='Banner 3' className='d-block w-100'/>
                <Carousel.Caption>
                    <h2>Está buscando manutenção no seu software?</h2>
                    <p>Nossa equipe conta com profissionais altamente qualificados</p>
                    <a href='#' className='main-btn'>Nossa equipe</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </main>
  )
}

export default Slider