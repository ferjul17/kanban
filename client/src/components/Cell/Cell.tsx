import * as React from "react";
import {connect} from "react-redux";
import {addCard} from "../../actions";
import {ICard, IPrimaryKey, IStore} from "../../Interfaces";
import Card from "../Card/Card";
import "./Cell.css";


const Cell = (o: { columnId: IPrimaryKey, rowId: IPrimaryKey, allCards: ICard[], addCard: any }) => {
    const {allCards, columnId, rowId} = o;

    return (
        <div className={"cell"}>
            {allCards.filter((card) => card.column === columnId && card.row === rowId).reduce((cards: any, card) => {
                cards.push(<Card key={`card_${card.id}`} card={card}/>);
                return cards;
            }, [])}
            <button onClick={o.addCard(columnId, rowId)}>Add Card</button>
        </div>
    );
};

export default connect((state: IStore) => {
    return {allCards: state.cards};
}, (dispatch) => {
    return {
        addCard: (column: IPrimaryKey, row: IPrimaryKey) => {
            return () => dispatch(addCard({column, row, id: Math.random(), title: "", description: ""}))
        }
    }
})(Cell)