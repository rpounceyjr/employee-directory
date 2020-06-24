import React, { Component } from "react";
import './App.css';
// import EmployeeTable from './components/EmployeeTable';
import EmployeeCard from './components/EmployeeCard';
import employees from "./employees.json";
import Title from "./components/Title";
import SearchByName from "./components/SearchByName";
import SortEmployees from "./components/SortEmployees";
import Wrapper from "./components/Wrapper"

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
    search: ""
  };

  updateSearch = str => {
    // Updating the input's state
    this.setState({
      search: str,
      employees
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.filterEmployeesByName(this.state.search);

  }

  // function attached to button to filter employees by name
  filterEmployeesByName = name => {
    const selectedEmployee = this.state.employees.filter(employee => employee.name.toLowerCase().includes(name.toLowerCase()));
    this.setState({
      employees: selectedEmployee,
      search: ""
    });
  };

  // function to sort employees by position
  sortByPosition = () => {
  
    console.log("clicked");
    let sortedEmployees = this.state.employees.sort((a,b) => (a.position > b.position) ? 1 : -1)

    this.setState({
      employees: sortedEmployees
      })
  }


  // Map over this.state.employees and render an EmployeeCard component for each employee object
  render() {
    console.log(this.state.employees)
    return (
      <div>
        <Title>Employee Directory</Title>
        <SearchByName
          className="search"
          updateSearch={this.updateSearch}
          handleFormSubmit={this.handleFormSubmit}
          search={this.state.search}
        />
        <SortEmployees className="sort"
          sortByPosition={this.sortByPosition}
        />
        <Wrapper>
          {this.state.employees.map(employee => (
            <EmployeeCard
              id={employee.id}
              name={employee.name}
              image={employee.image}
              position={employee.position}
              department={employee.department}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
