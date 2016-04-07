/*eslint no-console: ["error", {allow: ["warn", "error", "log"] }] */
import React from "react";

SearchInput.propTypes = {
    data: React.PropTypes.array.isRequired,
    filter: React.PropTypes.func.isRequired,
    updateData: React.PropTypes.func.isRequired
};
//Display rows of data based on data provided.
export default function SearchInput(props) {
    function onChange(e){
        console.log("onChange: ", e.target.value);
        const filteredData = props.filter(e.target.value, props.data);
        console.log("filteredData: ", filteredData);
        props.updateData(filteredData);
    }

    return (
        <div className="form-group">
            <label htmlFor="searchInput" className="sr-only">Search</label>
            <input type="text" id="searchInput" className="form-control search-input" placeholder="Search" onChange={onChange} />
            <label htmlFor="searchInput" className="fa fa-search fa-lg search-icon"></label>
        </div>
    );

}
