import React from "react";

SearchInput.propTypes = {
    data: React.PropTypes.array.isRequired,
    columns: React.PropTypes.object.isRequired
};
//Display rows of data based on data provided.
export default function SearchInput() {
    return (
        <div className="form-group">
            <label htmlFor="searchInput" className="sr-only">Search</label>
            <input type="text" id="searchInput" className="form-control search-input" placeholder="Search"/>
            <label htmlFor="searchInput" className="fa fa-search fa-lg search-icon"></label>
        </div>
    );

}
