export interface Item {
    hasItem: boolean;
    clicked: boolean;
}

export interface GridProps {
    items: Item[];
    onCellClick: (index: number) => void;
}

export interface CellProps {
    item: Item;
    onClick: () => void;
}