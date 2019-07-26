import React, { Component } from "react";
import Like from "./like";

class PostalList extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Codigo Postal</th>
            <th>Asentamiento</th>
            <th>Tipo Asentamiento</th>
            <th>Municipio</th>
            <th>Estado</th>
            <th>Ciudad</th>
            <th>Zona</th>
            <th>Clave Ciudad</th>
            <th />
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.listCodePostals.map(postalCode => {
            const { codigo, municipio, estado } = postalCode;
            const { asentamiento, tipoAsentamiento } = postalCode.asentamiento;
            const { ciudad, zona, claveCiudad } = postalCode.ciudad;
            return (
              <tr key={codigo}>
                <td>{codigo}</td>
                <td>{asentamiento}</td>
                <td>{tipoAsentamiento}</td>
                <td>{municipio}</td>
                <td>{estado}</td>
                <td>{ciudad}</td>
                <td>{zona}</td>
                <td>{claveCiudad}</td>
                <td>
                  <Like
                    postalCode={postalCode}
                    onClick={this.props.onLikeClick}
                  />
                </td>
                <td />
                <td>
                  <button
                    onClick={() => this.props.onDelete(postalCode)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default PostalList;
