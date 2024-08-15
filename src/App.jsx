import {useState} from "react";
import './App.css';

function App() {

  const [bgColor, setColor] = useState('White');
  const changeColor = (color) => {
    setColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, height: '25vh' }}>
      <h1 style={{ fontSize: '25px', textAlign: 'left' }}>Selected Color : {bgColor}</h1>
      <div>
        <button onClick={() => changeColor('blue')}className="button btn btn-primary" style={{ float: 'left' }}>Blue</button>
        <button onClick={() => changeColor('green')} className="button btn btn-success"style={{ float: 'left' }}>Green</button>
        <button onClick={() => changeColor('yellow')} className="button btn btn-warning" style={{ float: 'left' }}>Yellow</button>
        <button onClick={() => changeColor('red')} className="button btn btn-danger"style={{ float: 'left' }}>Red</button>
      </div>
    </div>
  );
}

export default App;

// Ameera Sobhy Aly 