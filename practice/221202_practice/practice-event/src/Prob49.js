import { useState } from 'react';

const Prob49 = () => {
    const [color, setColor] = useState('black');
    const [text, setText] = useState('검정');
    
    const onClickRed = () => {
        setText('빨간')
        setColor('red')
    };
    
    const onClickBlue = () => {
        setText('파란')
        setColor('blue')
    };

    return (
        <div>
            <h1 style={{ color: color }}>{text}색 글씨</h1> 
            <button onClick={onClickRed}>빨간색</button>
            <button onClick={onClickBlue}>파란색</button>
        </div>
    )
}

export default Prob49;