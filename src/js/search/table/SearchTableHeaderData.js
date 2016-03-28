import React from "react";

export default function(props) {
  return (<th class={"col-xs-"+props.columnWidth}>{props.data}</th>);
}