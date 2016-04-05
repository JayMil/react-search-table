import React from "react";

import SearchTable from "./table/SearchTable";
import SearchInput from "./input/SearchInput";

require("./search.css");


//Display rows of data based on data provided.
var Search = React.createClass({
    propTypes: {
        data:           React.PropTypes.array.isRequired,
        tableConfig:    React.PropTypes.object.isRequired
    },
    render() {
        return (
            <div className="container-fluid">
              <SearchInput />
              <SearchTable data={this.props.data} columns={this.props.tableConfig} />
            </div>
        );
    }
});

export default Search;
