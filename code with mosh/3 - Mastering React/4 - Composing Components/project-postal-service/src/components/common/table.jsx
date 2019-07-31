import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

//Destructuring argument
const Table = ({ rows, columns, sort, onSorting }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} onSorting={onSorting} sort={sort} />
      <TableBody rows={rows} columns={columns} />
    </table>
  );
};

export default Table;
