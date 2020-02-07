import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// import table from "./components/add.js";
import add from "./components/edit";
// import edit from "./components/table.js";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
            <Link to="/" className="navbar-brand">Employee Tracker</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">View Employees</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/add" className="nav-link">Add an Employee</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          {/* <Route path="/" exact component={table} /> */}
          {/* <Route path="/edit/:id" component={edit} /> */}
          <Route path="/add" component={add} />
        </div>
      </Router>
    );
  }
}

export default App;