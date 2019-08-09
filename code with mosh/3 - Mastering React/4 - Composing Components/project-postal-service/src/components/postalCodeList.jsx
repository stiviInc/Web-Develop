import React, { Component } from "react";
import TablePostalCodes from "./tablePostalCodes";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getListPostalCodes, getZones } from "../services/postalCode";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class PostalList extends Component {
  state = {
    listCodePostals: [],
    zones: [],
    itemsPerPage: 3,
    currentPage: 1,
    selectedZone: undefined, //The filtering will be made by the selectedZone
    sort: { columnName: "codigo", order: "asc" } //This object will be used to sort the table...
  };

  //Initialize the arrays listCodePostals and zones once the render method() is executed by first time
  componentDidMount() {
    const zones = [{ _id: 0, name: "All Genres" }, ...getZones()];
    this.setState({ listCodePostals: getListPostalCodes(), zones });
  }

  getPagedData() {
    const {
      listCodePostals: listCodePostalsOriginal, //listCodePostalsOriginal is a local array in the render() method....
      itemsPerPage,
      currentPage,
      selectedZone
    } = this.state; //Destructuring state object...

    const filteredCodePostals =
      selectedZone && selectedZone._id !== 0
        ? listCodePostalsOriginal.filter(postalCode => {
            return postalCode.ciudad.zona === selectedZone.name;
          })
        : listCodePostalsOriginal;

    const { columnName, order } = this.state.sort;

    const sortedCodePostals = _.orderBy(
      filteredCodePostals,
      [columnName],
      [order]
    );

    const listCodePostals = paginate(
      sortedCodePostals,
      currentPage,
      itemsPerPage
    );

    return { totalCounts: sortedCodePostals.length, listCodePostals };
  }

  render() {
    const { itemsPerPage, currentPage, selectedZone, zones, sort } = this.state; //Destructuring state object...

    const {
      handleDelete,
      handleLike,
      handlePageChange,
      handleSelectedZone,
      handleSorting
    } = this; //Destructuring the this object

    const { totalCounts, listCodePostals } = this.getPagedData();

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <ListGroup
              items={zones}
              selectedItem={selectedZone}
              onItemClick={handleSelectedZone}
            />
          </div>
          <div className="col-10">
            <h3>Total Addresses: {totalCounts}</h3>
            <TablePostalCodes
              listCodePostals={listCodePostals}
              onLike={handleLike}
              onDelete={handleDelete}
              onSorting={handleSorting}
              sort={sort}
            />
            <Pagination
              totItems={totalCounts}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }

  //handle methods()
  handleSorting = sortColumn => {
    this.setState({ sort: sortColumn });
  };

  handleSelectedZone = zone => {
    this.setState({ selectedZone: zone, currentPage: 1 });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleDelete = postalCode => {
    this.setState({
      listCodePostals: this.state.listCodePostals.filter(postCode => {
        return postCode.codigo !== postalCode.codigo;
      })
    });
  };

  handleLike = postalCode => {
    const listCodePostals = [...this.state.listCodePostals];
    const index = listCodePostals.indexOf(postalCode);
    listCodePostals[index].like = !listCodePostals[index].like;
    this.setState({ listCodePostals });
  };
}

export default PostalList;
