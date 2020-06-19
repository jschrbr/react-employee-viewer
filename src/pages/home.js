import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import EmployeeTable from "../components/EmployeeTable";

import "../App.css";

export class home extends Component {
  render() {
    return (
      <Container>
        <EmployeeTable />
      </Container>
    );
  }
}

export default home;
