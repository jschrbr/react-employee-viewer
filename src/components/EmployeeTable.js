import React from "react";
import MaterialTable from "material-table";

import { employeeData, tableColumns } from "../utils/employeeData";
import tableIcons from "../utils/tableIcons";

import "../App.css";

function EmployeeTable() {
  return (
    <div className="table">
      <MaterialTable
        title="Employee table"
        columns={tableColumns}
        data={employeeData}
        icons={tableIcons}
        options={{
          filtering: true,
          sorting: true,
          exportButton: true,
        }}
      />
    </div>
  );
}

export default EmployeeTable;
