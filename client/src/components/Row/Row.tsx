import * as React from "react";
import {connect} from "react-redux";
import contactPng from '../../contact.png';
import {IColumn, IRow, IStore} from "../../Interfaces";
import Cell from "../Cell/Cell";
import "./Row.css";

const Row = (o: { row: IRow, columns: IColumn[] }) => {
    const {row, columns} = o;
    return (
        <div className={"row"}>
            <div className={"cell"}><img src={contactPng}/>
                <div className={"who"}>{row.name}</div>
            </div>
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