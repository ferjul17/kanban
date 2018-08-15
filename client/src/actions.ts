import {ICard, IPrimaryKey} from "./Interfaces";

export enum Actions {
    ADD_CARD,
    DELETE_CARD,
}

export interface IAction {
    type: Actions,

    [key: string]: any
}

export const addCard = (card: ICard): IAction => ({
    card,
    type: Actions.ADD_CARD,
});

export const deleteCard = (cardId: IPrimaryKey): IAction => ({
    cardId,
    type: Actions.DELETE_CARD
});
