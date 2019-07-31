import React from "react";

const ListGroup = props => {
  const {
    items,
    selectedItem,
    keyNameProperty,
    valueNameProperty,
    onItemSelect
  } = props;

  return (
    <ul className="list-group">
      {/*
      <li onClick={() => props.onItemSelect("All")} className="list-group-item">
        All Genres
      </li>
      */}
      {items.map(item => {
        return (
          <li
            key={item[keyNameProperty]}
            onClick={() => onItemSelect(item)}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[valueNameProperty]}
          </li>
        );
      })}
    </ul>
  );
};

//We are assuming the prop's name of the arrays will be call as this....
ListGroup.defaultProps = {
  keyNameProperty: "_id",
  valueNameProperty: "name"
};

export default ListGroup;
