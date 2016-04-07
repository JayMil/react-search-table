import React from "react";

import _ from "lodash";
import SearchTableHeaderData from "./SearchTableHeaderData";

SearchTableHeader.propTypes = {
    data: React.PropTypes.object.isRequired
};

//Display columns based on data provided
export default function SearchTableHeader(props) {
    var amountOfColumns = _.size(props.data);
    var columns= [];
    for(var i = 1; i <= amountOfColumns; i++)
    {
        columns.push(<SearchTableHeaderData key={props.data[i].text} data={props.data[i].text} columnWidth={props.data[i].width} />);
    }
    return (
        <tr className="row">
            {columns}
        </tr>
    );
}
