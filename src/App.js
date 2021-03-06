import React, { Component } from "react";
import './App.css';
import employees from "./employees.json";
import Title from "./components/Title";
import SearchByName from "./components/SearchAndSortComponents/SearchByName";
import SortEmployees from "./components/SearchAndSortComponents/SortEmployees";
import Table from "./components/TableComponents/Table"
import TableHeader from "./components/TableComponents/TableHeader"

class App extends Component {
  // Setting this.state.employees to the employees json array,
  // and setting search to empty string
  state = {
    employees,
    search: "",
    sortDirection: {
      departmentDirection: "asc",
      positionDirection: "asc"
    }
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

  // function attached to search button to filter employees by name
  filterEmployeesByName = name => {
    const selectedEmployee = this.state.employees.filter(employee => employee.name.toLowerCase().includes(name.toLowerCase()));
    this.setState({
      employees: selectedEmployee,
      search: ""
    });
  };

  // function attached to button to sort employees by position
  sortByPosition = () => {
    console.log("clicked");
    let sortedEmployees = [...this.state.employees].sort((a, b) => {
      if (a.position > b.position) {
        return 1;
      } else if (a.position < b.position) {
        return -1;
      } else {
        return 0
      }
    });


    this.setState({
      employees: sortedEmployees
    })
  }

  // function attached to button to sort employees by position
  sortByDepartment = () => {
    console.log("clicked");
    // cloning the employees state to a variable for sorting
    let sortedEmployees = [...this.state.employees].sort((a, b) => {
      if (a.department > b.department) {
        return 1;
      } else if (a.department < b.department) {
        return -1;
      } else {
        return 0
      }
    });

    this.setState({
      employees: sortedEmployees
    })
  }


  // Map over this.state.employees and render an EmployeeCard component for each employee object
  render() {
    console.log(this.state.employees)
    return (
      <div className="container">
        <Title>Employee Directory</Title>
        <SearchByName
          className="search"
          updateSearch={this.updateSearch}
          handleFormSubmit={this.handleFormSubmit}
          search={this.state.search}
        />
        <SortEmployees className="sort"
          sortByPosition={this.sortByPosition}
          sortByDepartment={this.sortByDepartment}
        />
        <hr></hr>
        <div className="table-container">
          <Table>
            <TableHeader
              employees={this.state.employees}
            />
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
