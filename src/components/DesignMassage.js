import React, { useState } from 'react'
import { FiUnderline } from "react-icons/fi";
import { FiItalic } from "react-icons/fi";
import { FaBold } from "react-icons/fa";
import { CgFormatText } from "react-icons/cg";
import { CgFormatColor } from "react-icons/cg";

const DesignMassage = ({ design, setDesign, visualTextEditor, setVisualTextEditor}) => {
    //Add an underline to the text
    const handleUnderLine = () => {
        setVisualTextEditor({
            ...visualTextEditor,
            memoryType:[...visualTextEditor.memoryType, 'textDecoration'],
            memory: [...visualTextEditor.memory, design.textDecoration]
        })
        if (design.textDecoration == 'underLine') {
            setDesign({
                ...design,
                textDecoration: 'none'
            })
        }
        else {
            setDesign({
                ...design,
                textDecoration: 'underLine'
            })
        }
    }

    //Change the text to italics
    const hanleItalic = () => {
        setVisualTextEditor({
            ...visualTextEditor,
            memoryType:[...visualTextEditor.memoryType, 'fontStyle'],
            memory: [...visualTextEditor.memory, design.fontStyle]
        })
        if (design.fontStyle=='italic')
        setDesign({
            ...design,
            fontStyle: 'normal'
        })
        else{
            setDesign({
                ...design,
                fontStyle: 'italic'
            }) 
        }
    }

    //Increase the font of the text
    const hanleEncFont = () => {
        if (design.fontSize < 48) {
            setVisualTextEditor({
                ...visualTextEditor,
                memoryType:[...visualTextEditor.memoryType, 'fontSize'],
                memory: [...visualTextEditor.memory, design.fontSize]
            })
            setDesign({
                ...design,
                fontSize: design.fontSize + 2
            })
        }
    }

    //Decrease the font of the text
    const handleDecFont = () => {
        if (design.fontSize > 17) {
            setVisualTextEditor({
                ...visualTextEditor,
                memoryType:[...visualTextEditor.memoryType, 'fontSize'],
                memory: [...visualTextEditor.memory, design.fontSize]
            })
            setDesign({
                ...design,
                fontSize: design.fontSize - 2
            })
        }
    }

    //Bold the text
    const handleBold = () => {
        setVisualTextEditor({
            ...visualTextEditor,
            memoryType:[...visualTextEditor.memoryType, 'fontWeight'],
            memory: [...visualTextEditor.memory, design.fontWeight]
        })
        if(design.fontWeight=='bold')
        setDesign({
            ...design,
            fontWeight: 'normal'
        })
        else{
            setDesign({
                ...design,
                fontWeight: 'bold'
            })
        }
    }

    //Displaying the font selection option
    const handleFont = () => {
        setDesign({
            ...design,
            selectFont: !design.selectFont
        })
    }

    //Show color selection option
    const handleColor = () => {
        setDesign({
            ...design,
            selectColor: !design.selectColor
        })
    }

    return (
        <div className='allDesignIcons'>
            <button className='design' onClick={handleUnderLine}><FiUnderline /></button>
            <button className='design' onClick={hanleItalic}><FiItalic /></button>
            <button className='design' onClick={hanleEncFont}>A+</button>
            <button className='design' onClick={handleDecFont}>A-</button>
            <button className='design' onClick={handleBold}><FaBold /></button>
            <button className='design' onClick={handleFont}><CgFormatText /></button>
            <button className='design' onClick={handleColor}><CgFormatColor /></button>
        </div>
    )
}

export default DesignMassage