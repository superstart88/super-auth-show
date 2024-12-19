import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import "./SimpleTable.css";

interface ColumnDef {
  headerName: string;
  field: string;
  cellRenderer?: (data: Record<string, any>) => React.ReactNode;
}

interface DataItemDef {
  data: string;
  createdAt: string;
}

interface SimpleTableProps {
  columnDefs: ColumnDef[];
}

const SimpleTable: React.FC<SimpleTableProps> = ({ columnDefs }) => {
  const [data, setData] = useState<DataItemDef[]>([
    { data: "test", createdAt: "2024-10-24" },
  ]);

  useEffect(() => {
    axios.get<DataItemDef[]>("http://bujey.store:6168/auth").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {columnDefs.map((column, index) => (
            <th key={index} style={{ width: "50%" }}>
              {column.headerName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row: any, rowIndex) => (
          <tr key={rowIndex}>
            {columnDefs.map((column, colIndex) => (
              <td key={colIndex} data-title={column.headerName}>
                {column.field === "data"
                  ? row[column.field]
                  : moment(row[column.field]).format("YYYY-MM-DD hh:mm:ss")}

                {/* {decisionColumns.includes(column.field) ? (
                  <Label decision={row[column.field]} />
                ) : column.cellRenderer ? (
                  column.cellRenderer(row)
                ) : (
                  row[column.field]
                )} */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleTable;
