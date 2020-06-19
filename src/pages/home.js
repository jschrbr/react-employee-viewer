import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import EmployeeCard from "../components/EmplyeeCard";

import "../App.css";

export class home extends Component {
  static propTypes = {};

  render() {
    return (
      <Fragment>
        <Grid container>{/* {employeeMarkup} */}</Grid>
      </Fragment>
    );
  }
}

export default home;
