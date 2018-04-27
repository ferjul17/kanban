export interface ICard {
    column: number,
    row: number,
    id: number,
    description: string,
    title: string,
}

export interface IColumn {
    gridId: number,
    id: number,
    name: string
}

export interface IGrid {
    id: number,
    name: string
}

export interface IRow {
    gridId: number,
    id: number,
    name: string
}

export interface IStore {
    grids: IGrid[],
    rows: IRow[],
    columns: IColumn[],
    cards: ICard[],
}