import React from 'react'

//Displaying the keyboard according to the selected language
const Letter = ({leng, handleMassageClick}) => {
    const englishCapitalLetters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
    const hebrewLetters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "ק", "ר", "א", "ט", "ו", "ן", "ם", "פ", "ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", "ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ"]
    const characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "/", "'", "[", "]", "{", "}", "\"", "|", ";", ":", '"', ",", "<", ">", "?", ".", "~", "`"]

    switch (leng) {
        case 0:
            return (
                <div className="flex-container">
                    {englishCapitalLetters.map((letter) => (
                        <button key={letter} className='englishCapitalLetter' onClick={() => handleMassageClick(letter)}>{letter}</button>
                    ))}
                </div>
            )
            break;
        case 1:
            return (
                <div className="flex-container">
                    {hebrewLetters.map((letter) => (
                        <button key={letter} className='hebrewLetter' onClick={() => handleMassageClick(letter)}>{letter}</button>
                    ))}
                </div>
            )
            break;
        case 2:
            return (
                <div className='flex-container'>
                    {englishCapitalLetters.map((letter) => (
                        <button key={letter} className='englishLowerCaseLetter' onClick={() => handleMassageClick(letter.toLowerCase())}>{letter.toLowerCase()}</button>
                    ))}
                </div>
            )
            break;
        case 3:
            return (
                <div className='flex-container'>
                    {characters.map((letter) => (
                        <button key={letter} className='character' onClick={() => handleMassageClick(letter)}>{letter}</button>
                    ))}
                </div>
            )
            break;
        
    }
}

export default Letter