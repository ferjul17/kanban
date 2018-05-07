import {ICard, IPrimaryKey} from "./Interfaces";

export const addCardActionType = "ADD_CARD";
export const deleteCardActionType = "DELETE_CARD";

export const addCard = (card: ICard) => ({
    card,
    type: addCardActionType,
});

export const deleteCard = (cardId: IPrimaryKey) => ({
    cardId,
    type: deleteCardActionType
});