import * as React from "react";
import {connect} from "react-redux";
import * as Actions from "../../actions";
import {ICard, IPrimaryKey} from "../../Interfaces";
import "./Card.css"
import {Subject, Subscription} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {ChangeEvent} from "react";

interface ICardProps {
    card: ICard;
    deleteCard: any;
    updateCard: any;
}

interface ICardState {
    card: ICard;
}

const DEBOUNCE_DELAY = 300/*ms*/;

class Card extends React.Component<ICardProps, ICardState> {

    private readonly onTitleChanged$: Subject<string>;
    private readonly onDescriptionChanged$: Subject<string>;
    private readonly subscriptions: Subscription[] = [];

    public constructor(props: ICardProps) {
        super(props);
        this.state = {
            card: props.card
        };
        this.onTitleChanged$ = new Subject();
        this.onTitleChanged = this.onTitleChanged.bind(this);
        this.onDescriptionChanged$ = new Subject();
        this.onDescriptionChanged = this.onDescriptionChanged.bind(this);
    }

    public componentDidMount(): void {
        this.subscriptions.push(
            this.onTitleChanged$.pipe(debounceTime(DEBOUNCE_DELAY)).subscribe(() => this.props.updateCard(this.state.card)),
            this.onDescriptionChanged$.pipe(debounceTime(DEBOUNCE_DELAY)).subscribe(() => this.props.updateCard(this.state.card)),
        );
    }

    public componentWillUnmount(): void {
        let sub;
        while (sub = this.subscriptions.pop()) {
            sub.unsubscribe();
        }
    }

    public render(): React.ReactNode {

        const {deleteCard} = this.props;
        const {card} = this.state;
        return (
            <div className={"card"}>
                <input type={"text"} value={this.state.card.title} onChange={this.onTitleChanged}/>
                <br/>
                <textarea value={card.description} onChange={this.onDescriptionChanged}/>
                <br/>
                <button onClick={deleteCard(card.id)}>Delete</button>
            </div>
        );

    }

    private onTitleChanged(e: ChangeEvent<HTMLInputElement>) {
        this.setState({card: {...this.state.card, title: e.target.value}});
        this.onTitleChanged$.next()
    }

    private onDescriptionChanged(e: ChangeEvent<HTMLTextAreaElement>) {
        this.setState({card: {...this.state.card, description: e.target.value}});
        this.onDescriptionChanged$.next()
    }
}

export default connect(undefined, (dispatch) => {
    return {
        deleteCard: (cardId: IPrimaryKey) => {
            return () => dispatch(Actions.deleteCard(cardId));
        },
        updateCard: (card: ICard) => {
            dispatch(Actions.updateCard(card))

        }
    }
})(Card);