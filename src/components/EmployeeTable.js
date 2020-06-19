import React from "react";
import MaterialTable from "material-table";

import { employeeData, tableColumns } from "../utils/employeeData";
import tableIcons from "../utils/tableIcons";

import "../App.css";

function EmplyeeCard() {
  const [state, setState] = React.useState({
    columns: tableColumns,
    data: employeeData,
  });
  return (
    <div className="table">
      <MaterialTable
        title="Employee table"
        columns={state.columns}
        data={state.data}
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

export default EmplyeeCard;
