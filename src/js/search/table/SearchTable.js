import React from "react";

import SearchTableRow from "./SearchTableRow";
import SearchTableHeader from "./SearchTableHeader";

SearchTable.propTypes = {
    data: React.PropTypes.array.isRequired,
    columns: React.PropTypes.object.isRequired
};

//Display rows of data based on data provided.
export default function SearchTable(props) {

    return (
        <table className="table">
            <thead>
                <SearchTableHeader data={props.columns} />
            </thead>
            <tbody>
                {props.data.map(function(data){
                    return (<SearchTableRow key={data.id} keyValue={data.id} data={data} />);
                })}
            </tbody>
        </table>
    );

}
