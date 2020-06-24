import React from "react"

function Table(props) {
    return (
    <div>
        <table>
        {props.children}
        </table>
    </div>
    )
}

export default Table