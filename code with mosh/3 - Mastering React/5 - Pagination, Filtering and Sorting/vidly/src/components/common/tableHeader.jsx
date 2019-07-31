import React, { Component } from "react";

/*
     - columns       ---> [{columnName,label},{columnName,label}]         ---> This array of object has to have 2 properties: label,columnNamE
        columns will be used to render each <th>    *Note: if it'll be a column that doesnt have a label or columnName values, just for assign the key in the <th>, instead of send those 2 properties, send a different call key:"name".... this is just for assign a value in the rendering of the <th> element, this commonly happen when in a column there are only buttons....

    - onSorting     ---> function
    onSorting will be used to call the reference of handleSorting() thats is defined in the parents component of the table....

    - sortColumn    ---> object     ---> This object its used for sort the columns and has 2 properties: columnName and order....
    sortColumn its an object that will be used to sort the columns

*/

class TableHeader extends Component {
  //Method for sort the columns
  raisingSorting = columnName => {
    const sortColumn = { ...this.props.sortColumn }; //Cloning the sortColumn object!

    if (sortColumn.columnName === columnName)
      //Checking if the columnName is the same
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    //if the actual order is asc, turns into desc... if is not asc, the actual order is desc, so, we need to make it asc
    else {
      sortColumn.columnName = columnName;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn); //Calling the reference of the handleSorting()....
  };

  sortingIcon = column => {
    const { sortColumn } = this.props;
    if (!sortColumn.columnName) return null;
    if (column.columnName !== sortColumn.columnName) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(column => {
            return (
              <th
                className="clickable"
                key={column.label || column.key}
                onClick={() => this.raisingSorting(column.columnName)}
              >
                {column.label} {this.sortingIcon(column)}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
