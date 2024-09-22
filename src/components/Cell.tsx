import React from 'react';

interface CellProps {
    item: { hasItem: boolean; clicked: boolean };
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({item, onClick}) => {
    return (
        <div
            onClick={onClick}
            style={{
                width: '50px',
                height: '50px',
                backgroundColor: item.clicked ? 'black' : 'lightgray',
                border: item.clicked && item.hasItem ? '2px solid red' : '1px solid black'
            }}
        >
            {item.clicked && item.hasItem ? '0' : ''}
        </div>
    );
};

export default Cell;