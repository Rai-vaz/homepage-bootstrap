import {useRef} from 'react'
import {Button} from 'react-bootstrap'
import '../css/Button.css'

const ButtonNav = ({text, id, cls, f}) => {

  const BtnRef = useRef('')
  const allBtn = document.getElementsByClassName('btn-outline-primary')
  
  const handleClick = (ref, btns) => {
    for (let index = 0; index < btns.length; index++) {
      if (btns[index].id !== ref.current.id) {
        btns[index].classList.remove('active')
      }else{
         btns[index].classList.add('active')
      }
      
    }

    f(ref)

  }

  return (
    <Button size='lg' variant='outline-primary' onClick={() => handleClick(BtnRef, allBtn)} ref={BtnRef} id={id} className={cls}>{text}</Button>
  )
}

export default ButtonNav