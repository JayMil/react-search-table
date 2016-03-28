import React from "react";

/**
 * Render a td element containing the contents of the data property
 * @param  {[react property object]} props React property object containing data to be rendered.
 * @return {[react element]}         The rendered td element
 */
export default function(props) {
    return (<td>{props.data}</td>);
}