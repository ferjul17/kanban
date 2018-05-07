export type IPrimaryKey = number;

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