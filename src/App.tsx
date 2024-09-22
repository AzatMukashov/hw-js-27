import './App.css';
import React, {useState} from 'react';
import Grid from './components/Grid.tsx';
import {createArray} from './components/uitls.ts';
import type {Item} from './types';

const App: React.FC = () => {
    const [items, setItems] = useState<Item[]>(createArray());
    const [attempts, setAttempts] = useState(0);
    const [itemFound, setItemFound] = useState(false);
    const handleReset = () => {
        setItems(createArray());
        setAttempts(0);
        setItemFound(false);
    };
    const handleClick = (index: number) => {
        if (itemFound || items[index].clicked) return;
        const newItems = items.map((item, i) => i === index ? {...item, clicked: true} : item);
        setItems(newItems);
        setAttempts(prevAttempts => prevAttempts + 1);
        if (items[index].hasItem) {
            setItemFound(true);
        }
    };
    return (
        <>
            <Grid items={items} onCellClick={handleClick}/>
            <p>Tries: {attempts}</p>
            <button onClick={handleReset} type="button">Reset</button>
        </>
    );
};

export default App;
