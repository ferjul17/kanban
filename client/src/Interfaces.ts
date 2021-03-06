export type IPrimaryKey = number;

export enum ItemTypes {
    CARD = "card"
}


export interface ICard {
    column: IPrimaryKey,
    row: IPrimaryKey,
    id: IPrimaryKey,
    description: string,
    title: string,
}

export interface IColumn {
    gridId: IPrimaryKey,
    id: IPrimaryKey,
    name: string
}

export interface IGrid {
    id: IPrimaryKey,
    name: string
}

export interface IRow {
    gridId: IPrimaryKey,
    id: IPrimaryKey,
    name: string
}

export interface IStore {
    grids: IGrid[],
    rows: IRow[],
    columns: IColumn[],
    cards: ICard[],
}

export interface ICardProps {
    card: ICard;
    deleteCard: any;
    updateCard: any;
    connectDragSource?: any;
}

export interface ICardState {
    card: ICard;
}
