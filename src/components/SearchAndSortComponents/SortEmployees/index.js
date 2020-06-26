import React from "react"
import "./style.css"

function SortEmployees(props) {
    return (
        <div className="sort-div">
                <button type="button" className="btn btn-outline-primary" onClick={props.sortByPosition}>Sort By Position (A-Z)</button>
                <button type="button" className="btn btn-outline-primary" onClick={props.sortByDepartment}>Sort By Department (A-Z)</button>
        </div>
    );
}

export default SortEmployees