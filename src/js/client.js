/*eslint no-console: ["error", {allow: ["warn", "error", "log"] }] */
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

import Search from "./search/Search";

const app = document.getElementById("app");

//get data
var people = require("./../data/people");
//Filter data or remove specific columns with lodash
var peopleData = _.map(people, function(person){
    delete person.email;
    delete person.ip_address;
    return person;
});

/*
 *  Column Order - the order in which the column displays
 *  Text - the column display text
 *  width -
 *  hide
 */
var columnConfiguration = {
    1: {
        "text": "Id",
        "width": 1,
        "optional": true
    },
    2: {
        "text": "Gender",
        "width": 1
    },
    3: {
        "text": "First Name",
        "width": 5
    },
    4: {
        "text": "Last Name",
        "width": 5
    }
};

//Setup filter data when input is changed
function filterData(input_text, data)
{
    console.log("filterData: ", input_text);
    var filteredData = _.filter(data, function(person){
        if(person.id.indexOf(input_text) >= 0)
        {
            return true;
        }

        if(person.first_name.indexOf(input_text) >= 0)
        {
            return true;
        }

        if(person.last_name.indexOf(input_text) >= 0)
        {
            return true;
        }

        if(person.gender.indexOf(input_text) >= 0)
        {
            return true;
        }
    });

    return filteredData;
}

function page()
{
    return (
        <div className="content-fluid">
          <h1>Search Demo</h1>
          <Search data={peopleData} tableConfig={columnConfiguration} filter={filterData} />
        </div>
        );
}

ReactDOM.render(page(), app);
