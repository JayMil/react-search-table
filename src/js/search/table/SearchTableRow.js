import React from "react";

import _ from "lodash";
import SearchTableData from "./SearchTableData";

SearchTableRow.propTypes = {
    data: React.PropTypes.object.isRequired,
    keyValue: React.PropTypes.string.isRequired
};
//Display columns based on data provided
export default function SearchTableRow(props) {
    return (
        <tr className="row">
            {_.map(props.data, function(value, column_name) {
                return (<SearchTableData key={column_name+props.keyValue} data={value} />);
            })}
        </tr>
    );

}
