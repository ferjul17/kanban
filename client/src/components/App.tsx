import * as React from 'react';
import {connect} from "react-redux";
import {IGrid, IStore} from "../Interfaces";
import './App.css';
import Grid from "./Grid/Grid";

const App = ({grids}: { grids: IGrid[] }) => {
    return (
        <div>
            {grids.map((grid) => <Grid key={`grid_${grid.id}`} grid={grid} columns={[]} rows={[]}/>)}
        </div>
    );
};

export default connect((state: IStore) => {
    return {grids: state.grids};
})(App);
