import './App.css'
import {useState} from "react";
import * as React from "react";

const createArray = () => {
    const array = [];
    for (let i = 0; i < 36; i++) {
        array.push({hasItem: false, clicked: false});
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    array[randomIndex].hasItem = true;
    return array;
}
const App: React.FC = () => {
    const [items, setItems] = useState(createArray());
    const [attemts, setAttemts] = useState(0);
    const [itemFound, setItemFound] = useState(false);
    const handleReset = () => {
        setItems(createArray());
        setAttemts(0);
        setItemFound(false);
    };
    const handleClick = (index: number) => {
        if (itemFound || items[index].clicked) return;
        const newItems = items.map((item, i) => i === index ? {...item, clicked: true} : item);
        setItems(newItems);
        setAttemts(prevAttempts => prevAttempts + 1);
        if (items[index].hasItem) {
            setItemFound(true);
        }
    };
    return (
        <>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px'}}>
                {items.map((item, index) => (
                    <div key={index}
                         onClick={() => handleClick(index)}
                         style={{
                             width: '50px',
                             height: '50px',
                             backgroundColor: item.clicked ? 'black' : 'lightgray',
                             border: item.clicked && item.hasItem ? '2px solid red' : '1px solid black'
                         }}
                    >
                        {item.clicked && item.hasItem ? '0' : ''}
                    </div>
                ))}
            </div>
            <p>Tries: {attemts}</p>
            <button onClick={handleReset} type="button">Reset</button>
        </>
    );
};

export default App
