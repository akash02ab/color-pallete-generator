import { useState } from 'react';
import './style.css'

function ColorBox() {
    let [style, setColor] = useState("color: #000000");

    const generateColor = () => {
        let randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        setColor({color: randomColor});
    }
    
    const bgColor = {
        backgroundColor: style.color
    };

    return (
        <div className="container">
            <h1>Color Palette Generator</h1>
            <button className="btn" onClick={generateColor}>Generate</button>
            <div className="boxes">
                <div className="box one" style={bgColor}></div>
                <div className="box two" style={bgColor}></div>
                <div className="box three" style={bgColor}></div>
                <div className="box four" style={bgColor}></div>
                <div className="box five" style={bgColor}></div>
                <div className="box six" style={bgColor}></div>
            </div>
        </div>
    );
}

export default ColorBox;