import * as React from 'react';
import {connect} from "react-redux";
import './App.css';
import Grid from "./Grid/Grid";
import {IGrid, IStore} from "./Interfaces";

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
