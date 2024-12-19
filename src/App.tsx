import React from "react";
import SimpleTable from "./components/SimpleTable";

const columnDefs = [
  { headerName: "Pass", field: "data" },
  { headerName: "DateTime", field: "createdAt" },
];

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Pass Table</h1>
      <SimpleTable columnDefs={columnDefs} />
    </div>
  );
};

export default App;
