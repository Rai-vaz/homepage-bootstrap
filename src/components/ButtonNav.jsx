import {useRef} from 'react'
import {Button} from 'react-bootstrap'
import '../css/Button.css'

const ButtonNav = ({text, id, cls, func}) => {

  const BtnRef = useRef('')
  const allBtn = document.getElementsByClassName('ativo btn')
  
  const handleClick = (ref, btn) => {

    btn[0].classList.remove('ativo')
    ref.current.classList.add('ativo')
    
    func(ref)

  }

  return (
    <Button size='lg' variant='primary' onClick={() => handleClick(BtnRef, allBtn)} ref={BtnRef} id={id} className={cls}>{text}</Button>
  )
}

export default ButtonNav