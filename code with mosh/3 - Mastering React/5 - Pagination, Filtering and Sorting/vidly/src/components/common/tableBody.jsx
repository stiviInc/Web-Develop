import React, { Component } from "react";
import _ from "lodash";

//rows      ---> The array of objects where all the info is stored, [In this array there arent ussers component]
//columns   ---> The array that was used to create the TableHeader

class TableBody extends Component {
  cellRendering = (row, column) => {
    if (column.content) return column.content(row);
    return _.get(row, column.columnName);
  };

  createKey(row, column) {
    return row._id + (column.columnName || column.key);
  }

  render() {
    const { rows, columns } = this.props;
    return (
      <tbody>
        {rows.map(row => {
          return (
            <tr key={row._id}>
              {columns.map(column => {
                return (
                  <td key={this.createKey(row, column)}>
                    {this.cellRendering(row, column)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
