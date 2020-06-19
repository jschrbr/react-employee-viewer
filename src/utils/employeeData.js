export const tableColumns = [
  { title: "Id", field: "id", type: "numeric" },
  { title: "Name", field: "first_name" },
  { title: "Surname", field: "last_name" },
  { title: "Role", field: "role" },
  {
    title: "Department",
    field: "department",
    lookup: { 1: "Accounting", 2: "Engineering" },
  },
];

export const employeeData = [
  {
    id: 0,
    first_name: "Em",
    last_name: "Ployee",
    role: "Officer",
    department: 1,
  },
  {
    id: 1,
    first_name: "Em",
    last_name: "Ployee",
    role: "Officer",
    department: 2,
  },
  {
    id: 2,
    first_name: "Em",
    last_name: "Ployee",
    role: "Officer",
    department: 2,
  },
  {
    id: 3,
    first_name: "Em",
    last_name: "Ployee",
    role: "Officer",
    department: 2,
  },
  {
    id: 4,
    first_name: "Em",
    last_name: "Ployee",
    role: "Officer",
    department: 2,
  },
  {
    id: 5,
    first_name: "Em",
    last_name: "Ployee",
    role: "Officer",
    department: 2,
  },
  {
    id: 6,
    first_name: "Em",
    last_name: "Ployee",
    role: "Officer",
    department: 2,
  },
];
