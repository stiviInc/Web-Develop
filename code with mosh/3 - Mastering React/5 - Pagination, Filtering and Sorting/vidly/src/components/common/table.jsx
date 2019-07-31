import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

//Destructring the arguments
const Table = ({ rows, columns, sortColumn, onSort }) => {
  //const { rows, columns, sortColumn, onSort } = props;

  return (
    <table className="table">
      <TableHeader onSort={onSort} sortColumn={sortColumn} columns={columns} />
      {/* Remember, the rows object is the one who have all the info that it'll be displayed! */}
      <TableBody rows={rows} columns={columns} />
    </table>
  );
};

export default Table;
