import React, { Component } from "react";
import PostalList from "./components/postalCodeList";
//import NavBar from "./components/common/navbar";

class App extends Component {
  render() {
    return (
      <main className="container">
        {/* 
        <NavBar
          value={
            listCodePostalsOriginal.filter(
              postalCode =>
                postalCode.asentamiento.tipoAsentamiento === "Colonia"
            ).length
          }
        >
          <span>Total de Colonias: </span>
        </NavBar>

        <NavBar
          value={
            listCodePostalsOriginal.filter(
              postalCode =>
                postalCode.asentamiento.tipoAsentamiento === "Fraccionamiento"
            ).length
          }
        >
          <span>Total de Fraccionamientos: </span>
        </NavBar>

        <NavBar
          value={
            listCodePostalsOriginal.filter(
              postalCode => postalCode.ciudad.zona === "Rural"
            ).length
          }
        >
          <span>Total de Zonas Rurales: </span>
        </NavBar>

        <NavBar
          value={
            listCodePostalsOriginal.filter(
              postalCode => postalCode.ciudad.zona === "Urbano"
            ).length
          }
        >
          <span>Total de Zonas Urbanas: </span>
        </NavBar>

        <NavBar
          value={
            listCodePostalsOriginal.filter(
              postalCode => postalCode.like === true
            ).length
          }
        >
          <span>Total de Likes: </span>
        </NavBar>
          */}
        <PostalList />
      </main>
    );
  }
}

export default App;
