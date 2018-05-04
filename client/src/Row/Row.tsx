import * as React from "react";
import {connect} from "react-redux";
import Cell from "../Cell/Cell";
import {IColumn, IRow, IStore} from "../Interfaces";
import "./Row.css";

const Row = (o: { row: IRow, columns: IColumn[] }) => {
    const {row, columns} = o;
    return (
        <div className={"row"}>
            <div className={"cell"}><img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAHXSURBVDjLldQ7axRRGAbgZ2Y22BiIYKOiJIIk660RY6WCKcWgmCYgooVFMJ2p/A/5BTYWVoIBjQjiFUMgERslQYxBIngJVkZSZWfnWOzZ2UtA8Bs4w5x53+/2fuckui2VoiC+C/+wVLZtL5O2fyYdv4LCYZcd14cNS2Z8kEjVtxMydQOm7ffac18E/Uac88stKyryzsAVXPTVhAy7nHHWbiSuWzMeEW3euWTNISSmFQqF4I4eHLDqSkSVaR20qgomBLlcria4Dfp9diT2LTLvm8QOvBHUBEEueI8eXDPbJKQ4Zk4qkWBRUBfi+lEaMa+cQtqQ6YJ5Rez4dwTiuq6IUr402iDAUYsIAno7NNpZ7i+oIqQK9PlW+m2XsmkBP/SiSCMoaNbztIQVeFa2M7SP2oZ9SNRxzx+ZIKiouRuJ7LXZqmHZcIxT8dN8OaVvrcgEKYZ9QtKo4bHTZUoslIU+RBLbPWK2GS3FjBvIDJqyIsTRWDZlSIZxT1pKp6hactMLudD15OZMWnKiRWj0YUxQyG1FnRtab8kVgqvtw9eknPdbUFdTi8NXUxdsGuuGNykDHnQlVTdrsHu0W5RCMGTUSXsk1r3zyHLnEe20/7wE2rUviJ67rpm/BXW0o5Vtv1MAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMDItMTVUMTA6MzQ6NTQtMDY6MDD6IAkQAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE1LTAyLTE1VDEwOjM0OjU0LTA2OjAwi32xrAAAAGN0RVh0c3ZnOmNvbW1lbnQAIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMi4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgGIza9wAAAABJRU5ErkJggg=="} /><div className={"who"}>{row.name}</div></div>
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