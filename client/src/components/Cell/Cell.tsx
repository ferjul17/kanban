import * as React from "react";
import {connect} from "react-redux";
import {DropTarget, DropTargetCollector, DropTargetSpec} from "react-dnd";

import {addCard, updateCard} from "../../actions";
import Card from "../Card/Card";
import {ICard, IPrimaryKey, IStore, ItemTypes} from "../../Interfaces";

import "./Cell.css";

const cellTarget: DropTargetSpec<any> = {
    drop(props, monitor) {
        if (monitor) {
            props.updateCard({...monitor.getItem() as ICard, column: props.columnId, row: props.rowId})
        }
    }
};

const collect: DropTargetCollector = (dndConnect, monitor) => {
    return {
        connectDropTarget: dndConnect.dropTarget(),
        isOver: monitor.isOver()
    };
}


const Cell = (o: { columnId: IPrimaryKey, rowId: IPrimaryKey, allCards: ICard[], addCard: any, connectDropTarget: any }) => {
    const {allCards, columnId, rowId, connectDropTarget} = o;

    return connectDropTarget(
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
        },
        updateCard: (card: ICard) => dispatch(updateCard(card)),
    }
})(DropTarget(ItemTypes.CARD, cellTarget, collect)(Cell))