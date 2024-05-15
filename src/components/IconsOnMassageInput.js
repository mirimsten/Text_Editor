import React from 'react'
import { VscReactions } from "react-icons/vsc";
import { CgFormatColor } from "react-icons/cg";

const IconsOnMassageInput = ({visualTextEditor, setVisualTextEditor, design, setDesign}) => {

    //Display design options
    const handleDesign = () => {
        setVisualTextEditor({
          ...visualTextEditor,
          design: !visualTextEditor.design
        })
        if (visualTextEditor.design) {
          setDesign({
            ...design,
            selectColor: false,
            selectFont: false
          })
        }
      }

      //Displaying emojis to choose from
      const handleEmojiClick = () => {
        setVisualTextEditor({
          ...visualTextEditor,
          myEmojis: !visualTextEditor.myEmojis
        });
      };

    return (
        <div className='pIcons'>
            <button className='iconDesign' onClick={handleDesign}><CgFormatColor /></button>
            <button onClick={handleEmojiClick} className='emoji'><VscReactions /></button>
        </div>
    )
}

export default IconsOnMassageInput