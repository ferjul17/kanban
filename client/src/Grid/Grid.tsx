import * as React from "react";
import {connect} from "react-redux";
import {IColumn, IGrid, IRow, IStore} from "../Interfaces";
import Row from "../Row/Row";
import "./Grid.css";

const Grid = (o: { grid: IGrid, rows: IRow[], columns: IColumn[] }) => {
    const gridId = o.grid.id;
    const rows = o.rows.filter((row) => row.gridId === gridId);
    const columns = o.columns.filter((column) => column.gridId === gridId);

    return (
        <div className={"grid"}>
            <div className={"row"}>
                <div className={"cell"}/>
                {columns.reduce((cols: any[], col) => {
                    cols.push(
                        <div key={Math.random()} className={"cell"}>{col.name}</div>
                    );
                    return cols;
                }, [])}
            </div>
            {rows.map((row: any) => <Row key={`row_${row.id}`} row={row}/>)}
        </div>
    );
};

export default connect((state: IStore):any => {
        return {columns: state.columns, rows: state.rows}
    }
)
(Grid);