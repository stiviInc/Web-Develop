import React from "react";

const ListGroup = props => {
  const { items, selectedItem, onItemClick, idNameProp, valueNameProp } = props;

  return (
    <ul className="list-group">
      {items.map(item => {
        return (
          <li
            key={item[idNameProp]}
            onClick={() => onItemClick(item)}
            className={
              selectedItem === item
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[valueNameProp]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  idNameProp: "_id",
  valueNameProp: "name"
};

export default ListGroup;
