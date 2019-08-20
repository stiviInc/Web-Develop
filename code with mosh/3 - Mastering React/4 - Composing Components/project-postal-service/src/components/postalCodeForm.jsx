import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

import {
  savePostalCode,
  getListaEstadosDelPais,
  getZones,
  getPostalCode
} from "../services/postalCode";

class PostalCodeForm extends Form {
  state = {
    data: {
      codigo: "",
      asentamiento: "",
      tipoAsentamiento: "",
      municipio: "",
      estado: "",
      ciudad: "",
      zona: "",
      clave: ""
    },
    errors: {},
    estados: [],
    zonas: []
  };

  schema = {
    codigo: Joi.number()
      .min(0)
      .required()
      .label("Codigo"),
    asentamiento: Joi.string()
      .required()
      .label("Asentamiento"),
    tipoAsentamiento: Joi.string()
      .required()
      .label("Tipo Asentamiento"),
    municipio: Joi.string()
      .required()
      .label("Municipio"),
    estado: Joi.string()
      .required()
      .label("Estado"),
    ciudad: Joi.string()
      .required()
      .label("Ciudad"),
    zona: Joi.string()
      .required()
      .label("Zona"),
    clave: Joi.number()
      .min(0)
      .required()
      .label("Clave")
  };

  componentDidMount() {
    const estados = getListaEstadosDelPais();
    const zonas = getZones();
    this.setState({ estados, zonas });

    const codePostalCode = this.props.match.params.code;
    if (codePostalCode === "new") return;
    const postalCode = getPostalCode(codePostalCode);
    if (!postalCode) return this.props.history.replace("/not-found");
    //console.log(postalCode);
    const postalCodeMapped = this.mapData(postalCode);
    this.setState({ data: postalCodeMapped });
  }

  mapData = postalCode => {
    //console.log(postalCode.ciudad.zona);
    return {
      codigo: postalCode.codigo,
      asentamiento: postalCode.asentamiento.asentamiento,
      tipoAsentamiento: postalCode.asentamiento.tipoAsentamiento,
      municipio: postalCode.municipio,
      estado: postalCode.estado,
      ciudad: postalCode.ciudad.ciudad,
      zona: postalCode.ciudad.zona,
      clave: postalCode.ciudad.claveCiudad
    };
  };

  doSubmit() {
    savePostalCode(this.state.data);
    this.props.history.push("/postal-list");
    console.log("The Postal Code has been saved");
  }

  handleBack = () => {
    this.props.history.push("/postal-list");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Postal Code Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("codigo", "Codigo Postal")}
          {this.renderInput("asentamiento", "Asentamiento")}
          {this.renderInput("tipoAsentamiento", "Tipo Asentamiento")}
          {this.renderInput("municipio", "Municipio")}
          {this.renderSelect("estado", "Estado", this.state.estados)}
          {this.renderInput("ciudad", "Ciudad")}
          {this.renderSelect("zona", "Zona", this.state.zonas)}
          {this.renderInput("clave", "Clave Ciudad", "number")}
          {this.renderButton("Guardar")}
          <button
            className="btn btn-warning"
            style={{ marginLeft: 15 }}
            onClick={this.handleBack}
          >
            Back
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default PostalCodeForm;
