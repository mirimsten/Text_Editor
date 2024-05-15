import React from 'react'

//Changing the font to the selected font
const Font = ({visualTextEditor, setVisualTextEditor, design, setDesign}) => {
    const fonts = ["Arial", "Georgia", "Lucida Handwriting", "Brush Script MT", "Papyrus","Times New Roman","Garamond","Verdana","Courier New","Lucida Console"]
  
    const handleFontClick = (font) => {
      setVisualTextEditor({
        ...visualTextEditor,
        memoryType:[...visualTextEditor.memoryType, 'fontFamily'],
        memory: [...visualTextEditor.memory, design.fontFamily]
    })
      setDesign({
        ...design,
        fontFamily: font
      })
    }
  
    return (
    <div className='allFonts'>
            {fonts.map((font, index) => (
                <button key={index} className='font' onClick={() => handleFontClick(font)} style={{fontFamily: font}}>
                    {font}
                </button>
            ))}
        </div>
  )
}

export default Font