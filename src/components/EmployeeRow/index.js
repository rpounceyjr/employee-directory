import React from "react";

function EmployeeRow(props) {
    return (
        <tr>
            <td className="name-col">{props.name}</td>
            <td className="position-col">{props.position}</td>
            <td className="department-col">{props.department}</td>
        </tr>
        // <div className="card">
        //   <div className="img-container">
        //     <img alt={props.name} src={props.image} />
        //   </div>
        //   <div className="content">
        //     <ul>
        //       <li>
        //         <strong>Name:</strong> 
        //       </li>
        //       <li>
        //         <strong>Position:</strong> 
        //       </li>
        //       <li>
        //         <strong>Department:</strong> {props.department}
        //       </li>
        //     </ul>
        //   </div>
        // </div>
    );
}

export default EmployeeRow;