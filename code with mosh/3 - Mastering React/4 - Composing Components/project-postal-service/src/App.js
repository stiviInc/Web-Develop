import React, { Component } from "react";
import PostalList from "./components/postalCodeList";
import NavBar from "./components/navbar";
import { getListPostalCodes } from "./services/postalCode";

class App extends Component {
  state = {
    listCodePostals: getListPostalCodes()
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

  render() {
    return (
      <main className="container">
        <NavBar
          value={
            this.state.listCodePostals.filter(
              postalCode =>
                postalCode.asentamiento.tipoAsentamiento === "Colonia"
            ).length
          }
        >
          <span>Total de Colonias: </span>
        </NavBar>

        <NavBar
          value={
            this.state.listCodePostals.filter(
              postalCode =>
                postalCode.asentamiento.tipoAsentamiento === "Fraccionamiento"
            ).length
          }
        >
          <span>Total de Fraccionamientos: </span>
        </NavBar>

        <NavBar
          value={
            this.state.listCodePostals.filter(
              postalCode => postalCode.ciudad.zona === "Rural"
            ).length
          }
        >
          <span>Total de Zonas Rurales: </span>
        </NavBar>

        <NavBar
          value={
            this.state.listCodePostals.filter(
              postalCode => postalCode.ciudad.zona === "Urbano"
            ).length
          }
        >
          <span>Total de Zonas Urbanas: </span>
        </NavBar>

        <NavBar
          value={
            this.state.listCodePostals.filter(
              postalCode => postalCode.like === true
            ).length
          }
        >
          <span>Total de Likes: </span>
        </NavBar>

        <PostalList
          onDelete={this.handleDelete}
          listCodePostals={this.state.listCodePostals}
          onLikeClick={this.handleLike}
        />
      </main>
    );
  }
}

export default App;
