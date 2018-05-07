import * as React from "react";
import {connect} from "react-redux";
import {ICard, IStore} from "../../Interfaces";
import Card from "../Card/Card";
import "./Cell.css";

const Cell = (o: { columnId: number, rowId: number, allCards: ICard[] }) => {
    const {allCards, columnId, rowId} = o;

    return (
        <div className={"cell"}>
            {allCards.filter((card) => card.column === columnId && card.row === rowId).reduce((cards: any, card) => {
                cards.push(<Card key={`card_${card.id}`} card={card}/>);
                return cards;
            }, [])}
        </div>
    );
};

export default connect((state: IStore) => {
    return {allCards: state.cards};
})(Cell)