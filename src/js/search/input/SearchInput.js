import React from "react";


//Display rows of data based on data provided.
export default function(props) {

    return (
        <div class="form-group">
            <label for="searchInput" class="sr-only">Search</label>
            <input type="text" id="searchInput" class="form-control search-input" placeholder="Search"/>
            <label for="searchInput" class="fa fa-search fa-lg search-icon"></label>
        </div>
    );

}
