import React from 'react';
import Cell from './Cell.tsx';

interface GridProps {
    items: { hasItem: boolean; clicked: boolean }[];
    onCellClick: (index: number) => void;
}

const Grid: React.FC<GridProps> = ({items, onCellClick}) => {
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px'}}>
            {items.map((item, index) => (
                <Cell
                    key={index}
                    item={item}
                    onClick={() => onCellClick(index)}
                />
            ))}
        </div>
    );
};

export default Grid;