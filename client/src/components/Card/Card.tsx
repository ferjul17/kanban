import * as React from "react";
import {connect} from "react-redux";
import {ICard, IStore} from "../../Interfaces";
import "./Card.css"

const Card = (o: { card: ICard, cards: ICard[] }) => {
    return (
        <div className={"card"}>
            <input type={"text"} defaultValue={"Title"}/>
            <br/>
            <textarea defaultValue={"Description"}/>
            <br/>
            <button>Deleete</button>
        </div>
    );
};

export default connect((state: IStore) => {
    return {cards: state.cards}; // hack: i don't know why i doesn't work if the card is stateless
})(Card);