import React from "react";
import "./style.css"

function EmployeeRow(props) {
    return (
        <tr className="employee-row">
            <td className="name-col employee-name-col">{props.name}</td>
            <td className="position-col employee-position-col">{props.position}</td>
            <td className="department-col employee-department-col">{props.department}</td>
        </tr>
    );
}

export default EmployeeRow;