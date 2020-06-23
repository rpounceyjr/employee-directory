import React, { Component } from "react";
import './App.css';
// import EmployeeTable from './components/EmployeeTable/index.js';
import EmployeeCard from './components/EmployeeCard';
import employees from "./employees.json";
import Title from "./components/Title";
import SearchByName from "./components/SearchByName";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
    search: ""
  };

  // update search state to be value of event.target
  updateSearch = str => {

    // Updating the input's state
    this.setState({
      search: str
    });
  }

  // function attached to button to filter employees by name
  // filterEmployeesByName = name => {
  //   const selectedEmployee = this.state.employees.filter(employee => employee.name === name);
  //   this.setState({
  //     employees: selectedEmployee
  //   });
  // };

  // Map over this.state.employees and render an EmployeeCard component for each employee object
  render() {
    return (
      <div>
        <Title>Employee Directory</Title>
        <SearchByName
          updateSearch={this.updateSearch}
          search={this.state.search}
        />
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            name={employee.name}
            image={employee.image}
            position={employee.position}
            department={employee.department}
          />
        ))}
      </div>
    );
  }
}

export default App;
