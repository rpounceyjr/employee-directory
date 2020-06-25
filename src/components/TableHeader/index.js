import React from "react"
import EmployeeRow from "../EmployeeRow"
import "./style.css";

function TableHeader({ employees }) {
    return(
        <thead>
            <tr>
                <td className="name-col header">Employee Name</td>
                <td className="position-col header">Position</td>
                <td className="department-col header">Department</td>
            </tr>
            {employees.map(employee => (
                <EmployeeRow
                  key={employee.id}
                  name={employee.name}
                  position={employee.position}
                  department={employee.department}
                />
              ))}
        </thead>
    )
}

export default TableHeader