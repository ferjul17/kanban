import {Action} from "redux";
import {IStore} from "./Interfaces";

const initialState: IStore = {
    cards: [
        {
            column: 2,
            description: "card description",
            id: 1,
            row: 1,
            title: "card title",
        },
        {
            column: 2,
            description: "card description",
            id: 2,
            row: 1,
            title: "card title",
        },
        {
            column: 2,
            description: "card description",
            id: 3,
            row: 1,
            title: "card title",
        },
        {
            column: 3,
            description: "card description",
            id: 4,
            row: 1,
            title: "card title",
        },
        {
            column: 1,
            description: "card description",
            id: 5,
            row: 2,
            title: "card title",
        },
        {
            column: 3,
            description: "card description",
            id: 6,
            row: 2,
            title: "card title",
        },
    ],
    columns: [
        {
            gridId: 1,
            id: 1,
            name: "TODO"
        },
        {
            gridId: 1,
            id: 2,
            name: "WIP"
        },
        {
            gridId: 1,
            id: 3,
            name: "Done"
        },
    ],
    grids: [
        {
            id: 1,
            name: "grid",
        },
    ],
    rows: [
        {
            gridId: 1,
            id: 1,
            name: "Julien"
        },
        {
            gridId: 1,
            id: 2,
            name: "Thomas"
        },
    ]
};

export default (state: IStore = initialState, action: Action<any>): {} => {
    return state;
}