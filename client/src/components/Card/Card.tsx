import * as React from "react";
import {connect} from "react-redux";
import {deleteCard} from "../../actions";
import {ICard, IPrimaryKey, IStore} from "../../Interfaces";
import "./Card.css"

const Card = (o: { card: ICard, cards: ICard[], deleteCard: any }) => {
    return (
        <div className={"card"}>
            <input type={"text"} defaultValue={"Title"} value={o.card.title}/>
            <br/>
            <textarea defaultValue={"Description"} value={o.card.description}/>
            <br/>
            <button onClick={o.deleteCard(o.card.id)}>Delete</button>
        </div>
    );
};

export default connect((state: IStore) => {
    return {cards: state.cards}; // hack: i don't know why i doesn't work if the card is stateless
}, (dispatch) => {
    return {
        deleteCard: (cardId: IPrimaryKey) => {
            return () => dispatch(deleteCard(cardId));
        }
    }
})(Card);