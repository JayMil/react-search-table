import React from "react";

import _ from 'lodash';
import SearchTableData from './SearchTableData';

//Display columns based on data provided
export default function(props) {
    return (
        <tr class="row">
            {_.map(props.data, function(value, column_name) {
                return <SearchTableData key={column_name+props.keyValue} data={value} />
            })}
        </tr>
    );
    
}
