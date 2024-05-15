import React from 'react'
import { IoEllipseSharp } from "react-icons/io5";

const Color = ({visualTextEditor, setVisualTextEditor, design, setDesign}) => {
    const turquoise = 'rgb(50, 192, 202)'
    const colors = ["white", "yellow", turquoise, "red", "black"];

    //Change the color of the text
    const handleColor = (color) => {
      setVisualTextEditor({
        ...visualTextEditor,
        memoryType:[...visualTextEditor.memoryType, 'color'],
        memory: [...visualTextEditor.memory, design.color]
    })
      setDesign({
        ...design,
        color: color
      })
    }

  return (
    <div className='allColors'>
            {colors.map((color, index) => (
                <button key={index} className='color' onClick={() => handleColor(color)}>
                    <IoEllipseSharp style={{color: color}}/>
                </button>
            ))}
        </div>
  )
}

export default Color