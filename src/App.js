import { useState } from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState(0);

    const handlerIncrement = () => {
        setValue(value + 1);
    };

    const handlerDecrement = () => {
        setValue(value - 1);
    };

    return (
        <div className="App">
            <h1>React testing</h1>
            <button onClick={handlerIncrement}>Increment</button>
            <button onClick={handlerDecrement}>Decrement</button>
            <input value={value}></input>
        </div>
    );
}

export default App;
