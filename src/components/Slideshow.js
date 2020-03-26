import React from 'react'
import { Slide } from 'react-slideshow-image'

const slideImages = [
  'https://i.ibb.co/s372k5T/slideshow1.png',
  'https://i.ibb.co/1zmbbjq/slideshow2.png',
  'https://i.ibb.co/jVth02C/slideshow3.png',
  'https://i.ibb.co/JcF8rft/slideshow4.png'
]

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  // onChange: (oldIndex, newIndex) => {
  //   console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  // }
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow