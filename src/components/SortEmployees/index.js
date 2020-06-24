import React from "react"

function SortEmployees(props) {
    return (
        <div>
            <button type="button" className="btn btn-outline-secondary" onClick={props.sortByPosition}>Sort by Position</button>
            <button type="button" className="btn btn-outline-secondary" onClick={props.sortByDepartment}>Sort by Department</button>
        </div>
    );
}

export default SortEmployees