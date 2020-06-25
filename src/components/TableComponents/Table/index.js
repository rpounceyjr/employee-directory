import React from "react"

function Table(props) {
    return (
    <div>
        <table className="container">
        {props.children}
        </table>
    </div>
    )
}

export default Table