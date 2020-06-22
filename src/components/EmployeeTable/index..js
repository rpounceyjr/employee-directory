import React from "react";
import "./style.css";

function EmployeeTable(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default EmployeeTable;
