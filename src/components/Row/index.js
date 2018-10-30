import React from "react";
import "./Row.scss";

const Row = ({x, y, children}) => {
    return <tr>{children}</tr>
}

export default Row;