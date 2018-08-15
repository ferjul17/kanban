import * as React from 'react';
import {connect} from "react-redux";
import {IGrid, IStore} from "../Interfaces";
import './App.css';
import Grid from "./Grid/Grid";
import {DragDropContext} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const App = ({grids}: { grids: IGrid[] }) => {
    return (
        <div>
            {grids.map((grid) => <Grid key={`grid_${grid.id}`} grid={grid} columns={[]} rows={[]}/>)}
        </div>
    );
};

export default connect((state: IStore) => {
    return {grids: state.grids};
})(DragDropContext(HTML5Backend)(App));
