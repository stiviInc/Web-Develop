import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";

class TablePostalCodes extends Component {
  columns = [
    { columnName: "codigo", label: "Codigo" },
    { columnName: "asentamiento.asentamiento", label: "Asentamiento" },
    { columnName: "asentamiento.tipoAsentamiento", label: "Tipo Asentamiento" },
    { columnName: "municipio", label: "Municipio" },
    { columnName: "estado", label: "Estado" },
    { columnName: "ciudad.ciudad", label: "Ciudad" },
    { columnName: "ciudad.zona", label: "Zona" },
    { columnName: "ciudad.claveCiudad", label: "Clave Ciudad" },
    {
      key: "liked",
      content: postalCode => (
        <Like
          postalCode={postalCode}
          onClick={() => this.props.onLike(postalCode)}
        />
      )
    },
    {
      key: "deleted",
      content: postalCode => (
        <button
          onClick={() => this.props.onDelete(postalCode)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { listCodePostals, onSorting, sort } = this.props; //Destructruing props
    return (
      <Table
        rows={listCodePostals}
        columns={this.columns}
        sort={sort}
        onSorting={onSorting}
      />
    );
  }
}

export default TablePostalCodes;
