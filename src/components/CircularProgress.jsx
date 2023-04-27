{/*imports biblioteca Progressbar */}
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'


import VisibilitySensor from 'react-visibility-sensor';
import {useRef, useState} from 'react'


{/*imports css do componente*/}
import '../css/CircularProgressbar.css'

import {Row, Col} from 'react-bootstrap'

const CircularProgress = ({value, lable}) => {
  const initialValue = 1
  const container_circle_progress_ref = useRef('')
  const [loadCircularProgress, setLoadCircularProgress] = useState(null)
  
  const handleChange = (isVisible) => {
    setLoadCircularProgress(isVisible)
  }

  return (
    <VisibilitySensor onChange={handleChange} partialVisibility ref={container_circle_progress_ref}>
      <div className='circular-progress-wrapper'>
        <CircularProgressbar
          minValue={0}
          maxValue={value}
          value={loadCircularProgress ? value : initialValue}
          text={value}
          styles={buildStyles({
            pathTransitionDuration: 1,
            strokeLinecap: 'round',
            pathColor: 'rgb(62, 152, 199)'
          })}
        />
        <p className='label'>{lable}</p>
      </div>
    </VisibilitySensor>
  );
  
}

export default CircularProgress