import { useRef, useEffect } from 'react'
import simpleParallax from 'simple-parallax-js';
import '../css/ImagParallax.css'


const ImgParallax = ({img, text, cls}) => {

    const ImgRef = useRef(null)

    useEffect(() => {
      if (ImgRef.current) {
        new simpleParallax(ImgRef.current, {
          delay: 1.6,
          transition: 'cubic-bezier(0,0,0,1)'
        });
      }
    },[])

  return (
    <img ref={ImgRef} src={img} alt={text} className={cls}/>
  )
}

export default ImgParallax