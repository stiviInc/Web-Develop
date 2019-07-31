import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  render() {
    const { rows, columns } = this.props;
    return (
      <tbody>
        {rows.map(row => {
          return (
            <tr key={row.codigo}>
              {columns.map(column => {
                return (
                  <td key={this.createKey(row, column)}>
                    {this.renderingCell(row, column)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }

  renderingCell = (row, column) => {
    if (column.key) return column.content(row);
    return _.get(row, column.columnName);
  };

  createKey(row, column) {
    return row.codigo + (column.columnName || column.key);
  }
}

export default TableBody;
