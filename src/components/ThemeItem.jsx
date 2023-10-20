import React from 'react'

const ThemeItem = ({color,img,changeColor}) => {
  return (
    <img  src={img} className='theme__img' onClick={() => changeColor(color)}/>
  )
}

export default ThemeItem