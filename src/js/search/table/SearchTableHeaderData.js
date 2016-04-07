import React from "react";

SearchTableHeaderData.propTypes = {
    data: React.PropTypes.string.isRequired,
    columnWidth: React.PropTypes.number.isRequired
};

export default function SearchTableHeaderData(props) {
    return (<th className={"col-xs-"+props.columnWidth}>{props.data}</th>);
}
