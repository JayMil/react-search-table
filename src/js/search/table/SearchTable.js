import React from "react";

import SearchTableRow from "./SearchTableRow";
import SearchTableHeader from "./SearchTableHeader";

//Display rows of data based on data provided.
export default function(props) {

    return (
        <table class="table">
            <thead>
                <SearchTableHeader data={props.columns} />
            </thead>
            <tbody>
                {props.data.map(function(data){
                    return <SearchTableRow key={data.id} keyValue={data.id} data={data} />
                })}
            </tbody>
        </table>
    );

}
