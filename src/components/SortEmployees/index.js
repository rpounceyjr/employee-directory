import React from "react"
import "./style.css"

function SortEmployees(props) {
    return (
        <div className="sort-div">
                <button type="button" className="btn btn-outline-secondary" onClick={props.sortByPosition}>Sort By Position</button>
                <button type="button" className="btn btn-outline-secondary" onClick={props.sortByDepartment}>Sort By Department</button>
        </div>
    );
}

export default SortEmployees