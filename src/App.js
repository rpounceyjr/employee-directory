import React, { Component } from "react";
import './App.css';
// import EmployeeTable from './components/EmployeeTable/index.js';
import EmployeeCard from './components/EmployeeCard';
import employees from "./employees.json";
import Title from "./components/Title"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>

        <Title>Employee Directory</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}

      </div>
    );
  }
}

export default App;
