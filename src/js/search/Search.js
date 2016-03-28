import React from "react";

import _ from 'lodash';
import SearchTable from "./table/SearchTable";
import SearchInput from "./input/SearchInput";

require("./search.css");


//Display rows of data based on data provided.
export default class Search extends React.Component {
    render() {
        return (
            <div class="container-fluid">
              <SearchInput />
              <SearchTable data={this.props.data} columns={this.props.tableConfig} />
            </div>
        );
    }
}