import React from 'react'
import { CgLoadbar } from "react-icons/cg";
import { FaBackspace } from "react-icons/fa";
import { GoTypography } from "react-icons/go";
import { ImSphere } from "react-icons/im";
import { TfiNa } from "react-icons/tfi";

const SelectButtons = ({visualTextEditor, setVisualTextEditor, design}) => {

  //Language switching
    const handleLanguage = () => {
        if (visualTextEditor.language === 0 || visualTextEditor.language === 2) {
          setVisualTextEditor({
            ...visualTextEditor,
            memoryType: [...visualTextEditor.memoryType,'language'],
            memory: [...visualTextEditor.memory, visualTextEditor.language],
            language: 1
          });
        }
        else {
          setVisualTextEditor({
            ...visualTextEditor,
            memoryType: [...visualTextEditor.memoryType,'language'],
            memory: [...visualTextEditor.memory, visualTextEditor.language],
            language: 0
          });
        }
      }

      //Changing uppercase letters to lowercase letters and vice versa
      const handleLowerCaseLetters = () => {
        if (visualTextEditor.language === 0) {
          setVisualTextEditor({
            ...visualTextEditor,
            memoryType: [...visualTextEditor.memoryType,'language'],
            memory: [...visualTextEditor.memory, visualTextEditor.language],
            language: 2
          });
        }
        else if (visualTextEditor.language === 2) {
          setVisualTextEditor({
            ...visualTextEditor,
            memoryType: [...visualTextEditor.memoryType,'language'],
            memory: [...visualTextEditor.memory, visualTextEditor.language],
            language: 0
          });
        }
      }

      //Character keys
      const handleCharecters = () => {
        setVisualTextEditor({
          ...visualTextEditor,
          memoryType: [...visualTextEditor.memoryType,'language'],
          memory: [...visualTextEditor.memory, visualTextEditor.language],
          language: 3
        });
      }

      //Add a space to the text
      const handleSpace = () => {
        setVisualTextEditor({
          ...visualTextEditor,
          memoryType: [...visualTextEditor.memoryType,'massage'],
          memory: [...visualTextEditor.memory, visualTextEditor.massage],
          massage: [...visualTextEditor.massage , {char: ' ', style: design}]
        });
      }

      //Deleting the text
      const handleClearMassage = () => {
        setVisualTextEditor({
          ...visualTextEditor,
          memoryType: [...visualTextEditor.memoryType,'massage'],
          memory: [...visualTextEditor.memory, visualTextEditor.massage],
          massage: []
        });
      }

      //Delete one character from the text
      const handleDeleteOneChar = () => {
        setVisualTextEditor({
          ...visualTextEditor,
          memoryType: [...visualTextEditor.memoryType,'massage'],
          memory: [...visualTextEditor.memory, visualTextEditor.massage],
          massage: visualTextEditor.massage.slice(0, -1)
        });
      }


    return (
        <>
            <button className='language' onClick={handleLanguage}><ImSphere className='icon' /></button>
            <button className='lowercase' onClick={handleLowerCaseLetters} ><GoTypography className='icon' /></button>
            <button className='charecterIcon' onClick={handleCharecters}>?!</button>
            <button className='space' onClick={handleSpace}><CgLoadbar className='iconSpace' /></button>
            <button className='clear' onClick={handleClearMassage}><TfiNa className='icon' /></button>
            <button className='deleteOneChar' onClick={handleDeleteOneChar}><FaBackspace className='icon' /></button>
        </>
    )
}

export default SelectButtons