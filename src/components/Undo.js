import React from 'react'
import { LiaUndoSolid } from "react-icons/lia";

//Saves previous actions for recovery
const Undo = ({ visualTextEditor, setVisualTextEditor, design, setDesign }) => {

    const handleUndo = () => {
        switch (visualTextEditor.memoryType.pop()) {
            case 'massage':
                setVisualTextEditor({
                    ...visualTextEditor,
                    massage: visualTextEditor.memory.pop()
                })
                break;
            case 'language':
                setVisualTextEditor({
                    ...visualTextEditor,
                    language: visualTextEditor.memory.pop()
                })
                break;
            case 'textDecoration':
                setDesign({
                    ...design,
                    textDecoration: visualTextEditor.memory.pop()
                })
                break;
            case 'fontStyle':
                setDesign({
                    ...design,
                    fontStyle: visualTextEditor.memory.pop()
                })
                break;
            case 'fontSize':
                setDesign({
                    ...design,
                    fontSize: visualTextEditor.memory.pop()
                })
                break;
            case 'fontWeight':
                setDesign({
                    ...design,
                    fontWeight: visualTextEditor.memory.pop()
                })
                break;
            case 'color':
                setDesign({
                    ...design,
                    color: visualTextEditor.memory.pop()
                })
                break;
            case 'fontFamily':
                setDesign({
                    ...design,
                    fontFamily: visualTextEditor.memory.pop()
                })
                break;

        }
    }
    return (
        < button className='undo' onClick={handleUndo} > <LiaUndoSolid className='icon' /></button >
    )
}

export default Undo