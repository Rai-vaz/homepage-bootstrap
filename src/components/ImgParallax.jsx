import { useRef, useEffect } from 'react'
import simpleParallax from 'simple-parallax-js';
import '../css/ImagParallax.css'


const ImgParallax = ({img, text}) => {

    const ImgRef = useRef(null)

    useEffect(() => {
        if (ImgRef.current) {
          new simpleParallax(ImgRef.current, {
            delay: 1.6,
            transition: 'cubic-bezier(0,0,0,1)'
          });
        }
    
        console.log(ImgRef)
      },[])

  return (
    <img ref={ImgRef} src={img} alt={text}/>
  )
}

export default ImgParallax