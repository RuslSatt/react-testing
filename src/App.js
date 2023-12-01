import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { AppRouter } from './router/AppRouter';

function App() {
    const [data, setData] = useState(null);
    const [value, setValue] = useState(0);

    const handlerIncrement = () => {
        setValue(value + 1);
    };

    const handlerDecrement = () => {
        setValue(value - 1);
    };

    useEffect(() => {
        setTimeout(() => {
            setData({});
        }, 0);
    }, []);

    return (
        <div className="App">
            <Header />
            <div className="Pages">
                <AppRouter />
            </div>
            <div>
                {data && <div>Has data in the page</div>}
                <h1>React testing</h1>
                <button data-testid="increment" onClick={handlerIncrement}>
                    Increment
                </button>
                <button data-testid="decrement" onClick={handlerDecrement}>
                    Decrement
                </button>
                <input data-testid="input" value={value}></input>
            </div>
        </div>
    );
}

export default App;
