import React from "react"
import EmployeeRow from "../EmployeeRow"

function TableHeader({ employees }) {
    return(
        <thead>
            <tr>
                <td className="name-col">Employee Name</td>
                <td className="position-col">Position</td>
                <td className="department-col">Department</td>
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