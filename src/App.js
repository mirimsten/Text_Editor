import './App.css';
import Letter from './components/Letter';
import EmojiPage from './components/EmojiPage';
import DesignMassage from './components/DesignMassage';
import Font from './components/Font';
import Color from './components/Color';
import Undo from './components/Undo';
import IconsOnMassageInput from './components/IconsOnMassageInput';
import SelectButtons from './components/SelectButtons';
import { useState } from 'react';


function App() {

  //useState that saves and updates the style of text
  const [design, setDesign] = useState({
    textDecoration: 'none',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: 'normal',
    fontFamily: 'Arial',
    color: 'rgb(50, 192, 202)',
    selectFont: false,
    selectColor: false
  })

  //useState that saves and updates the screen
  const [visualTextEditor, setVisualTextEditor] = useState({
    memoryType: [],
    memory: [],
    massage: [],
    language: 0,
    myEmojis: false,
    space: false,
    delete: false,
    clear: false,
    design: false
  });

  //The function receives a character, updates the object and saves the operation
  const handleMassageClick = (character) => {
    setVisualTextEditor({
      ...visualTextEditor,
      memoryType: [...visualTextEditor.memoryType, 'massage'],
      memory: [...visualTextEditor.memory, visualTextEditor.massage],
      massage: [...visualTextEditor.massage, { char: character, style: design }],
      myEmojis: false
    });
  }

  //The function displays each character in the text according to the style
  const setMassageOnScreen = () => {
    return visualTextEditor.massage.map((item, index) => (
      <span
        key={index}
        style={item.style}
      >
        {item.char}
      </span>
    ));
  };

  //The text editor elements that the function returns:
  return (
    <div className='App'>

      <p className='massage'>
        {setMassageOnScreen()}
        <IconsOnMassageInput visualTextEditor={visualTextEditor} setVisualTextEditor={setVisualTextEditor} design={design} setDesign={setDesign} />
        <div className='pDesign'>
          {visualTextEditor.design && <DesignMassage design={design} setDesign={setDesign} visualTextEditor={visualTextEditor} setVisualTextEditor={setVisualTextEditor} />}
          {design.selectColor && <Color visualTextEditor={visualTextEditor} setVisualTextEditor={setVisualTextEditor} design={design} setDesign={setDesign} />}
        </div>
      </p>

      <Letter leng={visualTextEditor.language} className='letters' handleMassageClick={handleMassageClick} />
      {visualTextEditor.myEmojis && <EmojiPage handleMassageClick={handleMassageClick} />}
      {design.selectFont && <Font visualTextEditor={visualTextEditor} setVisualTextEditor={setVisualTextEditor} design={design} setDesign={setDesign} />}
      <div className='allSelectButtons'>
        <SelectButtons visualTextEditor={visualTextEditor} setVisualTextEditor={setVisualTextEditor} design={design} />
        <Undo visualTextEditor={visualTextEditor} setVisualTextEditor={setVisualTextEditor} design={design} setDesign={setDesign} />
      </div>
    </div>
  );
}


export default App;