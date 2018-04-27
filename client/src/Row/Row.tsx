import * as React from "react";
import {connect} from "react-redux";
import Cell from "../Cell/Cell";
import {IColumn, IRow, IStore} from "../Interfaces";
import "./Row.css";

const Row = (o: { row: IRow, columns: IColumn[] }) => {
    const {row, columns} = o;
    return (
        <div className={"row"}>
            <div className={"cell"}>{row.name}</div>
            {columns.filter((col) => col.gridId === row.gridId).reduce((cols: any, col) => {
                cols.push(
                    <Cell key={`cell_${row.id}_${col.id}`} rowId={row.id} columnId={col.id}/>
                );
                return cols;
            }, [])}
        </div>
    );
};

export default connect((state: IStore) => {
        return {columns: state.columns};
    }
)(Row);