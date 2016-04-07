import React from "react";

import SearchTable from "./table/SearchTable";
import SearchInput from "./input/SearchInput";

require("./search.css");


//Display rows of data based on data provided.
var Search = React.createClass({
    propTypes: {
        data:           React.PropTypes.array.isRequired,
        tableConfig:    React.PropTypes.object.isRequired,
        filter: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return {searchData: this.props.data};
    },
    updateData: function(filteredData) {
        this.setState({searchData: filteredData});
    },
    render() {
        return (
            <div className="container-fluid">
              <SearchInput data={this.props.data} filter={this.props.filter} updateData={this.updateData} />
              <SearchTable data={this.state.searchData} columns={this.props.tableConfig} />
            </div>
        );
    }
});

export default Search;
