import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(column => {
            return (
              <th
                className="clickable"
                key={column.columnName || column.key}
                onClick={this.rasiginSorting(column.columnName)}
              >
                {column.label} {this.iconSorting(column)}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }

  rasiginSorting = columnName => {
    const sort = { ...this.props.sort };
    if (sort.columnName === columnName && sort.order === "asc") {
      sort.order = "desc";
    } else {
      sort.columnName = columnName;
      sort.order = "asc";
    }

    return () => this.props.onSorting(sort);
  };

  iconSorting(column) {
    const { sort } = this.props;
    if (column.columnName !== sort.columnName) return null;
    if (sort.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  }
}

export default TableHeader;
