import React from "react";
import "./Cell.scss"

const Cell = (props) => {
    //console.log(addClasses())
    //console.log(props);
    return <td className={props.className}></td>
}

export default Cell;