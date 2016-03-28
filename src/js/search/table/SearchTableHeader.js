import React from "react";

import _ from 'lodash';
import SearchTableHeaderData from './SearchTableHeaderData';

//Display columns based on data provided
export default function(props) {
  var amountOfColumns = _.size(props.data);
  var columns= [];
  for(var i = 1; i <= amountOfColumns; i++)
  {
    columns.push(<SearchTableHeaderData key={props.data[i].text} data={props.data[i].text} columnWidth={props.data[i].width} />);
  }
  return (
    <tr class="row">
      {columns}
    </tr>
  );
};

